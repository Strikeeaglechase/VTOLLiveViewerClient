import * as THREE from "three";

import { EnableRPCs, RPC } from "../../../../VTOLLiveViewerCommon/dist/src/rpc.js";
import { Vector3 } from "../../../../VTOLLiveViewerCommon/dist/src/shared.js";
import { Vector } from "../../../../VTOLLiveViewerCommon/dist/src/vector.js";
import { addCommas, Application, msToKnots, mToFt } from "../app";
import { Entity } from "../entityBase/entity";
import { Settings } from "../settings";

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

	constructor(app: Application) {
		super(app, { useHostTeam: false });
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

	// TODO: Rename this RPC
	@RPC("in")
	public SyncShit(syncedPos: Vector3, syncedRot: Vector3, syncedVel: Vector3, syncedAccel: Vector3) {
		// Call some bitches - Dinner Plate
		this.updateMotion(syncedPos, syncedVel, syncedAccel, syncedRot);
	}

	@RPC("in")
	public Detonate(): void {
		this.fired = false;
		this.hasTrail = false;
		this.remove(`Missile detonated`);
	}
}

export { MissileEntity };
