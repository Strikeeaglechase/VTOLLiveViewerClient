import * as THREE from "three";

import { EnableRPCs, RPC } from "../../../../VTOLLiveViewerCommon/dist/src/rpc.js";
import { Vector3 } from "../../../../VTOLLiveViewerCommon/dist/src/shared";
import { Vector } from "../../../../VTOLLiveViewerCommon/src/vector";
import { addCommas, Application, msToKnots, mToFt, rad } from "../app";
import { DesignatorLine } from "../entityBase/designatorLine";
import { Entity } from "../entityBase/entity";

@EnableRPCs("instance", ["F45A", "FA26B", "AV42", "AH94"])
class PlayerVehicle extends Entity {
	private tgp: DesignatorLine;
	public lockLine: DesignatorLine;
	private throttle: number;

	private playerHeadLine: THREE.Line;
	private playerHeadLineGeom: THREE.BufferGeometry;

	public static spawnFor: string[] = ["Vehicles/SEVTF", "Vehicles/FA-26B", "Vehicles/AH-94", "Vehicles/VTOL4"];

	constructor(app: Application) {
		super(app, { hasTrail: true, showInSidebar: true, showInBra: true });
		this.tgp = new DesignatorLine(this, app, "#00ff00");
		this.throttle = 1;
	}

	public async spawn(id: number, ownerId: string, path: string, position: Vector, rotation: Vector, isActive: boolean): Promise<void> {
		super.spawn(id, ownerId, path, position, rotation, isActive);
		await this.setActive();
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
			const speed = addCommas(Math.floor(msToKnots(this.velocity.length())));
			this.textOverlay.edit(`${this.owner.pilotName} [${this.displayName}]\n${Math.floor(mToFt(this.position.y))}ft\n${speed}kn`);
		}
	}

	public async remove(): Promise<void> {
		await super.remove();
		if (this.tgp) this.tgp.remove();
		if (this.lockLine) this.lockLine.remove();
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
}

export { PlayerVehicle };