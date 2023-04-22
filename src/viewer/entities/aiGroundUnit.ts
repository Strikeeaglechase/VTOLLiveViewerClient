

import { EnableRPCs, RPC } from "../../../../VTOLLiveViewerCommon/dist/src/rpc.js";
import { Team, Vector3 } from "../../../../VTOLLiveViewerCommon/dist/src/shared.js";
import { Vector } from "../../../../VTOLLiveViewerCommon/dist/src/vector.js";
import { Application } from "../app";
import { Entity } from "../entityBase/entity";

@EnableRPCs("instance")
class AIGroundUnit extends Entity {
	public static spawnFor: string[] = ["Units/Allied/AlliedAAShip", "Units/Allied/AlliedBackstopSAM", "Units/Allied/AlliedCarrier", "Units/Allied/alliedCylinderTent", "Units/Allied/AlliedEWRadar", "Units/Allied/alliedMBT1", "Units/Allied/AlliedSoldier", "Units/Allied/AlliedSoldierMANPAD", "Units/Enemy/EnemySoldierMANPAD", "Units/Allied/ARocketTruck", "Units/Enemy/Artillery", "Units/Allied/BSTOPRadar", "Units/Enemy/bunker1", "Units/Allied/bunker2", "Units/Enemy/cylinderTent", "Units/Enemy/DroneCarrier", "Units/Enemy/DroneGunBoat", "Units/Enemy/DroneGunBoatRocket", "Units/Enemy/DroneMissileCruiser", "Units/Enemy/EnemyCarrier", "Units/Enemy/enemyMBT1", "Units/Enemy/EnemySoldier", "Units/Enemy/ERocketTruck", "Units/Allied/EscortCruiser", "Units/Enemy/ESuperMissileCruiser", "Units/Enemy/IRAPC", "Units/Enemy/MAD-4Launcher", "Units/Enemy/MAD-4Radar", "Units/Enemy/MineBoat", "Units/Allied/PatRadarTrailer", "Units/Allied/PatriotLauncher", "Units/Allied/PhallanxTruck", "Units/Enemy/SAAW", "Units/Enemy/SamBattery1", "Units/Enemy/SamFCR", "Units/Enemy/SamFCR2", "Units/Allied/SLAIM120Truck", "Units/Allied/SRADTruck", "Units/Enemy/staticAAA-20x2", "Units/Allied/staticCIWS", "Units/Allied/WatchmanTruck"];

	constructor(app: Application) {
		super(app, {
			hasBaseLine: false,
			hasOverlay: true,
			useInstancedMesh: true,
			showInBra: false,
			useHostTeam: false
		});

		this.equipManager = null;
	}

	// Protect AI team, don't want to inherit from host
	protected setTeam(team: Team) {
		if (this.team != Team.Unknown && this.team != team) return;

		super.setTeam(team);
	}

	public async spawn(id: number, ownerId: string, path: string, position: Vector, rotation: Vector, isActive: boolean): Promise<void> {
		super.spawn(id, ownerId, path, position, rotation, isActive);
		this.hasOverlay = !(path == "Units/Allied/AlliedSoldier" || path == "Units/Enemy/EnemySoldier");
		if (isActive) await this.setActive(`AI spawned as active`);
	}

	public async setActive(reason: string): Promise<void> {
		await super.setActive(reason);
		// Make ground units generally bigger
		// This is sorta scuffed, scale system needs looking at
		if (this.scaleDamper == 1) this.scaleDamper = 5;
	}

	public update(dt: number): void {
		super.update(dt);
	}

	@RPC("in")
	UpdateData(pos: Vector3, vel: Vector3, accel: Vector3, rot: Vector3) {
		this.updateMotion(pos, vel, accel, rot);
	}

	@RPC("in")
	FireBullet(position: Vector3, velocity: Vector3) {
		const translatedPos = new Vector(-position.x, position.y, position.z);
		const translatedVel = new Vector(-velocity.x, velocity.y, velocity.z);
		this.app.bulletManager.fireBullet(translatedPos, translatedVel);
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
	Spawn() {
		this.setActive(`AI got spawn RPC`);
	}
}

export { AIGroundUnit };