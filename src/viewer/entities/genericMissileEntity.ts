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

	// public static spawnFor: string[] = ["Weapons/Missiles/AGM-145", "Weapons/Missiles/AGM-161", "Weapons/Missiles/AGM-89", "Weapons/Missiles/AIM-120", "Weapons/Missiles/AIM-120D", "Weapons/Missiles/AIM-9+", "Weapons/Missiles/AIM-9", "Weapons/Missiles/AIM-92", "Weapons/Missiles/AIRS-T", "Weapons/Missiles/APKWS", "Weapons/Missiles/ASF-MRM", "Weapons/Missiles/ASF-SRM", "Weapons/Missiles/CAGM-6", "Weapons/Missiles/CBU-97", "Weapons/Missiles/GBU-12", "Weapons/Missiles/GBU-38", "Weapons/Missiles/GBU-39", "Weapons/Missiles/GBU-39ER", "Weapons/Missiles/GBU-53", "Weapons/Missiles/GMA-14", "Weapons/Missiles/GMA-6", "Weapons/Missiles/HARM", "Weapons/Missiles/Hellfire", "Weapons/Missiles/MARM", "Weapons/Missiles/Maverick", "Weapons/Missiles/MissileTrail", "Weapons/Missiles/MK82", "Weapons/Missiles/MK82HighDrag", "Weapons/Missiles/MK83", "Weapons/Missiles/SB-1", "Weapons/Missiles/SideARM", "Weapons/Missiles/SubMissile", "Weapons/Missiles/TestASM", "Weapons/Missiles/WaspMissile", "Weapons/Missiles/SAMs/APCIRSAM", "Weapons/Missiles/SAMs/BSM-66", "Weapons/Missiles/SAMs/BSM-66LR", "Weapons/Missiles/SAMs/ECarrierIRMissile", "Weapons/Missiles/SAMs/ESSM", "Weapons/Missiles/SAMs/ESuperMissile", "Weapons/Missiles/SAMs/FLKM-100", "Weapons/Missiles/SAMs/HVAvengerSAM", "Weapons/Missiles/SAMs/MAD-4 Missile", "Weapons/Missiles/SAMs/MANPADMissile", "Weapons/Missiles/SAMs/PAC-3", "Weapons/Missiles/SAMs/PAC-3Weak", "Weapons/Missiles/SAMs/RIM-67B", "Weapons/Missiles/SAMs/SaawMissile", "Weapons/Missiles/SAMs/VLSAntiShipMissile", "Weapons/Missiles/AIM-7", "Weapons/Missiles/AIM-9E"];
	public static spawnFor = new RegExp(/weapons\/missiles\/.*/i);

	constructor(app: Application) {
		super(app);
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

		this.trail.color = new THREE.Color(255, 255, 255);
		this.trail.reset();
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