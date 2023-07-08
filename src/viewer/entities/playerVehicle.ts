import * as THREE from "three";

import { EnableRPCs, RPC } from "../../../../VTOLLiveViewerCommon/dist/src/rpc.js";
import { Vector3 } from "../../../../VTOLLiveViewerCommon/dist/src/shared";
import { Vector } from "../../../../VTOLLiveViewerCommon/dist/src/vector";
import { addCommas, Application, deg, ftToMi, msToKnots, mToFt, rad } from "../app";
import { DesignatorLine } from "../entityBase/designatorLine";
import { Entity, MAX_OBJECT_SIZE } from "../entityBase/entity";

function mark(size: number, color: number) {
	const markerGeom = new THREE.SphereGeometry(size, 8, 8);
	const markerMat = new THREE.MeshBasicMaterial({ color: color, wireframe: true, side: THREE.DoubleSide });
	const markerMesh = new THREE.Mesh(markerGeom, markerMat);
	markerMesh.name = "marker";

	return markerMesh;
}

@EnableRPCs("instance", ["F45A", "FA26B", "AV42", "AH94", "T55"])
class PlayerVehicle extends Entity {
	private tgp: DesignatorLine;
	public lockLine: DesignatorLine;
	private throttle: number;
	public isLandingLso = false;

	private playerHeadLine: THREE.Line;
	private playerHeadLineGeom: THREE.BufferGeometry; // calculateScale

	// private velocityMarker: THREE.Mesh;
	// private headingMarker: THREE.Mesh;

	public set scale(scale: number) {
		if (this.isLandingLso) {
			scale = this.app.sceneManager.calculateScale(this.app.lsoManager.landingDist);
		}

		const maxSetScale = MAX_OBJECT_SIZE / this.baseScaleSize;

		this._scale = Math.min(maxSetScale, Math.max(scale * this.scaleDamper, 1) * this.iMeshLoadScale);
		this.onScaleUpdate();
	}

	public static spawnFor: string[] = ["Vehicles/SEVTF", "Vehicles/FA-26B", "Vehicles/AH-94", "Vehicles/VTOL4", "Vehicles/T-55"];

	constructor(app: Application) {
		super(app, { hasTrail: true, showInSidebar: true, showInBra: true });
		this.tgp = new DesignatorLine(this, app, "#00ff00");
		this.throttle = 1;
	}

	public async spawn(id: number, ownerId: string, path: string, position: Vector, rotation: Vector, isActive: boolean): Promise<void> {
		super.spawn(id, ownerId, path, position, rotation, isActive);
		await this.setActive(`Player vehicle spawned`);
		this.showInSidebar = true;
		this.textOverlay.combineId = null;

		this.tgp.init();
		this.lockLine = new DesignatorLine(this, this.app, "#d66f15");
		this.lockLine.init();

		const headMat = new THREE.LineBasicMaterial({ color: "#1a15b0" });
		this.playerHeadLineGeom = new THREE.BufferGeometry().setFromPoints([
			new THREE.Vector3(0, 0, 0),
			new THREE.Vector3(0, 0, 1000)
		]);

		this.playerHeadLine = new THREE.Line(this.playerHeadLineGeom, headMat);
		this.playerHeadLine.frustumCulled = false;
		this.meshProxyObject.add(this.playerHeadLine);

		// this.velocityMarker = mark(1, 0x00ff00);
		// this.headingMarker = mark(1, 0x0000ff);
		// this.app.sceneManager.add(this.velocityMarker, this.headingMarker);
	}

	protected override onScaleUpdate(): void {
		super.onScaleUpdate();
		// Keep head the same size by scaling with the inverse of the scale
		if (this.playerHeadLine) this.playerHeadLine.scale.set(1 / this.scale, 1 / this.scale, 1 / this.scale);
	}

	public update(dt: number): void {
		super.update(dt);

		if (this.tgp) this.tgp.update();
		if (this.lockLine) this.lockLine.update();

		// Sometimes player's don't get a team until after the spawn, lets check for that
		if (this.hasFoundValidOwner && this.team != this.owner.team) {
			console.warn(`Entity ${this.debugName} has team ${this.team} but owner ${this.owner.pilotName} has team ${this.owner.team}`);
			this.setTeam(this.owner.team);
		}

		if (this.textOverlay) {
			if (!this.isLandingLso) {
				const speed = addCommas(Math.floor(msToKnots(this.velocity.length())));
				this.textOverlay.edit(`${this.owner.pilotName} [${this.displayName}]\n${Math.floor(mToFt(this.position.y))}ft\n${speed}kn`);
			} else {
				// const aoaRaw = deg(this.position.angleTo(this.velocity));
				const aoaRaw = this.getAoa();
				const aoa = isNaN(aoaRaw) ? 0 : aoaRaw.toFixed(1);

				const distRaw = mToFt(this.app.lsoManager.landingDist);
				const distRawNm = ftToMi(distRaw);
				let resultDist = "";
				if (distRawNm < 1) {
					// resultDist = `${Math.floor(distRaw)}ft`;
					resultDist = `${distRawNm.toFixed(2)}nm`;
				} else {
					resultDist = `${distRawNm.toFixed(1)}nm`;
				}

				this.textOverlay.edit(`${this.owner.pilotName} [${this.displayName}]\n${Math.floor(mToFt(this.position.y))}ft\nR ${resultDist}\n∝ ${aoa}`);
			}
		}
	}

	private getAoa() {
		const dist = 100;
		// const velMarkerPos = this.position.add(this.velocity.clone().unit().multiply(dist));

		const positionRef = new THREE.Object3D();
		positionRef.position.set(this.position.x, this.position.y, this.position.z);

		const rotationRef = new THREE.Object3D();
		rotationRef.rotation.set(this.rotation.x, this.rotation.y, this.rotation.z);
		positionRef.add(rotationRef);

		const offsetRef = new THREE.Object3D();
		offsetRef.position.set(0, 0, dist);
		rotationRef.add(offsetRef);

		const headingMarkerPos = new THREE.Vector3();
		offsetRef.getWorldPosition(headingMarkerPos);

		// this.velocityMarker.position.set(velMarkerPos.x, velMarkerPos.y, velMarkerPos.z);
		// this.headingMarker.position.copy(headingMarkerPos);

		const velAspect = this.velocity.clone().unit();
		const headingAspect = headingMarkerPos.clone().sub(new THREE.Vector3(this.position.x, this.position.y, this.position.z)).normalize();
		const aoaOffset = this.type == "Vehicles/FA-26B" ? 0.806 : 0; // 26b has weird aoa offset
		const aoa = deg(velAspect.angleTo(Vector.from(headingAspect))) + aoaOffset;

		return aoa;
	}

	public async remove(reason: string): Promise<void> {
		await super.remove(reason);
		if (this.tgp) this.tgp.remove();
		if (this.lockLine) this.lockLine.remove();
		const ownedEntities = this.app.getEntitiesByOwnerId(this.ownerId);
		ownedEntities.forEach(e => e.canShowAsEquip = false);
	}

	public getLockingMe() {
		return this.app.entities.filter(e => {
			if (!(e instanceof PlayerVehicle)) return false;
			return e.lockLine?.isLockedTo(this);
		});
	}

	@RPC("in")
	UpdateData(pos: Vector3, vel: Vector3, accel: Vector3, rot: Vector3, throttle: number) {
		this.throttle = throttle;
		this.updateMotion(pos, vel, accel, rot);
	}

	@RPC("in")
	UpdateTGP(direction: Vector3, lockedWorldPoint: Vector3, lockedActor: number) {
		if (lockedWorldPoint && lockedWorldPoint.x != 0) this.tgp.lockPoint(new Vector(-lockedWorldPoint.x, lockedWorldPoint.y, lockedWorldPoint.z));
		if (lockedActor != -1) this.tgp.lockUnit(lockedActor);
	}

	@RPC("in")
	UpdatePilotHead(direction: Vector3) {
		this.playerHeadLine?.rotation.set(rad(direction.x), -rad(direction.y), rad(direction.z));
	}

	@RPC("in")
	FireCMS() {
		this.app.flareManager.fireCm(this);
	}

	@RPC("in")
	SetLock(actorId: number, isLocked: boolean) {
		if (!this.lockLine) return;
		console.log(`${this} SetLock ${actorId} ${isLocked}`);
		const actor = this.app.getEntityByUnitId(actorId);
		if (!actor) return console.error(`Unable to find ActorId ${actorId} for SetLock ${isLocked}`);

		if (isLocked) {
			this.lockLine.lockEntity(actor);
		} else {
			this.lockLine.hide();
		}
	}

	@RPC("in")
	Damage() {
		this.triggerDamage();
	}

	@RPC("in")
	Die() {
		this.triggerDeath();
	}

	@RPC("in")
	SetFuel(tank: number, fuel: number) {
		if (tank == 0 && this.equipManager) this.equipManager.fuel = fuel;
	}
}

export { PlayerVehicle };