import * as THREE from "three";

import { EnableRPCs, RPC } from "../../../../VTOLLiveViewerCommon/dist/src/rpc.js";
import { Vector3 } from "../../../../VTOLLiveViewerCommon/dist/src/shared.js";
import { Vector } from "../../../../VTOLLiveViewerCommon/src/vector.js";
import { addCommas, Application, msToKnots, mToFt } from "../app";
import { Entity } from "../entityBase/entity";

const len = 3;
const wid = 0.8;
const hei = 0.6;

@EnableRPCs("instance")
class MissileEntity extends Entity {
	public fired = false;
	public dims = { len, wid, hei };

	public static spawnFor = new RegExp(/weapons\/missiles\/.*/i);

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
		const base = new THREE.Shape([
			new THREE.Vector2(0, 0),
			new THREE.Vector2(-wid, -len),
			new THREE.Vector2(wid, -len)
		]);
		const top = new THREE.Shape([
			new THREE.Vector2(0, 0),
			new THREE.Vector2(len, hei),
			new THREE.Vector2(len, 0)
		]);

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

		const baseText = `${this.displayName} [${this.owner.pilotName}]`;
		if (this.textOverlay.isHovered) {
			const speed = addCommas(Math.floor(msToKnots(this.velocity.length())));
			this.textOverlay.edit(`${baseText}\n${Math.floor(mToFt(this.position.y))}ft\n${speed}kn`);
		} else {
			this.textOverlay.edit(baseText + "\n");
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
	public async SyncShit(syncedPos: Vector3, syncedRot: Vector3, syncedVel: Vector3, syncedAccel: Vector3): Promise<void> {
		// Call some bitches - Dinner Plate
		this.updateMotion(syncedPos, syncedVel, syncedAccel, syncedRot);
	}

	@RPC("in")
	public Detonate(): void {
		this.fired = false;
		this.hasTrail = false;
		this.remove();
	}
}

export { MissileEntity }; 