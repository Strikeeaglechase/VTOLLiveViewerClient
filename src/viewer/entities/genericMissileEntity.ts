import * as THREE from "three";
import { IVector3 } from "vtol-live-viewer-shared/dist/vector.js";

import { EnableRPCs, RPC } from "../../../../VTOLLiveViewerCommon/dist/rpc.js";
import { Vector3 } from "../../../../VTOLLiveViewerCommon/dist/shared.js";
import { Vector } from "../../../../VTOLLiveViewerCommon/dist/vector.js";
import { addCommas, Application, msToKnots, mToFt } from "../app";
import { Entity } from "../entityBase/entity";
import { Settings } from "../settings";
import { AIAirVehicle } from "./aiAirVehicle.js";

const len = 3;
const wid = 0.8;
const hei = 0.6;

@EnableRPCs("instance", ["MissileEntity", "MALD", "Missile"])
class MissileEntity extends Entity {
	public fired = false;
	public dims = { len, wid, hei };

	public static spawnForRegex = new RegExp(/weapons\/missiles\/.*/i);
	public static spawnFor = [
		"NuclearOption/AAM1",
		"NuclearOption/AAM2",
		"NuclearOption/AGM1",
		"NuclearOption/AGM_heavy",
		"NuclearOption/ARM1",
		"NuclearOption/bomb500",
		"NuclearOption/bomb_250_1",
		"NuclearOption/bomb_demolition",
		"NuclearOption/bomb_glide1",
		"NuclearOption/bomb_penetrator1",
		"NuclearOption/CruiseMissile1",
		"NuclearOption/CruiseMissile20kt",
		"NuclearOption/Missile_G2G",
		"NuclearOption/nuclearBomb1",
		"NuclearOption/Rocket1",
		"NuclearOption/SAM_IR1",
		"NuclearOption/SAM_Radar1",
		"NuclearOption/SAM_Radar2"
	];

	private travelDistance = 0;
	private lastPos: Vector = new Vector(0, 0, 0);
	private kinematicData: { time: number; position: IVector3; g: number; airspeed: number }[] = [];
	private targetHistory: { time: number; position: IVector3; velocity: IVector3; g: number; airspeed: number }[] = [];
	private savedKinematicTimes: Set<number> = new Set();

	private closestDist = 0;
	private doneClosestDist = false;

	constructor(app: Application) {
		super(app, { useHostTeam: false });

		// Delete our equip manager, missiles don't have equips
		this.equipManager = null;
	}

	protected async setInactive(reason: string) {
		super.setInactive(reason);
		this.fired = false;
	}

	public spawn(id: number, ownerId: string, path: string, position: Vector, rotation: Vector): void {
		this.position.set(-position.x, position.y, position.z);
		this.rotation.set(rotation.multiply(Math.PI / 180));
		this.id = id;
		this.type = path;
		this.ownerId = ownerId;
		this.displayName = Entity.identifierToDisplayName(this.type);

		// if (path.includes("Allied")) this.team = Team.A;
		// if (path.includes("Enemy")) this.team = Team.B;

		this.tryFindOwner();
	}

	// TODO reuse mesh/geometry/material for missiles, no reason to recreate every time
	protected createDefaultMesh(): THREE.Group {
		const base = new THREE.Shape([new THREE.Vector2(0, 0), new THREE.Vector2(-wid, -len), new THREE.Vector2(wid, -len)]);
		const top = new THREE.Shape([new THREE.Vector2(0, 0), new THREE.Vector2(len, hei), new THREE.Vector2(len, 0)]);

		const group = new THREE.Group();
		const mat = new THREE.MeshStandardMaterial({ color: "#ff0000", side: THREE.DoubleSide });
		group.add(new THREE.Mesh(new THREE.ShapeGeometry(base), mat));
		group.add(new THREE.Mesh(new THREE.ShapeGeometry(top), mat));
		group.children[0].rotateX(Math.PI / 2);
		group.children[1].rotateY(Math.PI / 2);

		console.log(`Created default mesh for missile`);

		return group;
	}

	public update(dt: number): void {
		super.update(dt);
		if (!this.isActive) return;

		const labelOption = Settings.get("Missile Labels");
		if (labelOption == "Off") this.textOverlay.hide();
		else this.textOverlay.show();

		if (this.textOverlay.isHovered) {
			const speed = addCommas(Math.floor(msToKnots(this.velocity.length())));
			this.textOverlay.edit(`${this.displayName} [${this.owner.pilotName}]\n${Math.floor(mToFt(this.position.y))}ft\n${speed}kn`);
		} else {
			let text = `${this.displayName}`;
			if (labelOption == "All") text += ` [${this.owner.pilotName}]`;
			this.textOverlay.edit(text + "\n");
		}

		// if (this.doneClosestDist || this.app.timeDirection < 0) return;
		// this.app.entities.forEach(e => {
		// 	if (!(e instanceof PlayerVehicle || e instanceof AIAirVehicle)) {
		// 		return;
		// 	}

		// 	if (e.team == this.team) return;

		// 	const dist = e.position.distanceTo(this.position);
		// 	if (dist < 1000) {
		// 		if (this.closestDist == 0 || dist < this.closestDist) {
		// 			this.closestDist = dist;
		// 		} else {
		// 			this.doneClosestDist = true;
		// 			console.log(`Missile ${this.displayName} closest distance to target: ${Math.floor(this.closestDist)}m`);
		// 		}
		// 		console.log({ dist, cd: this.closestDist });
		// 	}
		// });
	}

	protected async onFirstPos(): Promise<void> {
		super.onFirstPos();
		if (!this.isActive) await this.setActive(`Missile received first position`);
		this.fired = true;
		this.hasTrail = true;
		this.meshProxyObject.visible = true;
		this.textOverlay.combineId = null;
		this.textOverlay.show();

		this.trail.color = new THREE.Color(255, 255, 255);
		this.trail.reset();

		if (this.hasFoundValidOwner && this.owner.entityId > 0) {
			const ownerEntity = this.app.getEntityById(this.owner.entityId);
			if (ownerEntity && ownerEntity.equipManager) {
				ownerEntity.equipManager.update(0, true);
			}
		}
	}

	public getKinematicData() {
		return { missile: this.kinematicData, target: this.targetHistory };
	}

	// TODO: Rename this RPC
	@RPC("in")
	public SyncShit(syncedPos: Vector3, syncedRot: Vector3, syncedVel: Vector3, syncedAccel: Vector3) {
		// Call some bitches - Dinner Plate
		this.updateMotion(syncedPos, syncedVel, syncedAccel, syncedRot);

		if (!this.savedKinematicTimes.has(this.app.time) && Application.timeDirection > 0) {
			const moveDist = this.lastPos.distanceTo(this.position);
			this.travelDistance += moveDist;
			this.lastPos.set(this.position);

			const dataPoint = {
				time: this.app.time,
				position: { x: this.position.x, y: this.position.y, z: this.position.z },
				g: this.gForce,
				airspeed: this.velocity.length()
			};
			this.kinematicData.push(dataPoint);

			const possibleTarget = this.app.entities.find(e => e instanceof AIAirVehicle && e.team != this.team);
			if (possibleTarget) {
				const targetDataPoint = {
					time: this.app.time,
					position: { x: possibleTarget.position.x, y: possibleTarget.position.y, z: possibleTarget.position.z },
					velocity: { x: possibleTarget.velocity.x, y: possibleTarget.velocity.y, z: possibleTarget.velocity.z },
					g: possibleTarget.gForce,
					airspeed: possibleTarget.velocity.length()
				};

				this.targetHistory.push(targetDataPoint);
			} else {
				console.log(`Missile ${this.displayName} could not find target for kinematic data`);
			}

			this.savedKinematicTimes.add(this.app.time);
		}

		if (this.type.includes("NuclearOption")) {
			// Face forward based off velocity
			const vel = this.velocity.clone().unit();
			const r = new THREE.Euler().setFromQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), vel.to(THREE.Vector3)));

			this.rotation.set(r);
		}
	}

	@RPC("in")
	public Detonate(): void {
		this.fired = false;
		this.hasTrail = false;
		this.remove(`Missile detonated`);
	}
}

export { MissileEntity };
