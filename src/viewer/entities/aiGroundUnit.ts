

import { EnableRPCs, RPC } from "../../../../VTOLLiveViewerCommon/dist/src/rpc.js";
import { Team, Vector3 } from "../../../../VTOLLiveViewerCommon/dist/src/shared.js";
import { Vector } from "../../../../VTOLLiveViewerCommon/dist/src/vector.js";
import { Application } from "../app";
import { Entity } from "../entityBase/entity";

@EnableRPCs("instance")
class AIGroundUnit extends Entity {
	public static spawnFor: string[] = ["Units/Allied/AlliedAAShip", "Units/Allied/AlliedCarrier", "Units/Allied/AlliedCylinderTent", "Units/Allied/AlliedEWRadar", "Units/Allied/AlliedMBT1", "Units/Allied/AlliedSoldier", "Units/Allied/AlliedSoldierMANPAD", "Units/Allied/ARocketTruck", "Units/Enemy/Bunker1", "Units/Allied/Bunker2", "Units/Enemy/CylinderTent", "Units/Enemy/EnemyMBT1", "Units/Enemy/EnemySoldier", "Units/Enemy/ERocketTruck", "Units/Allied/EscortCruiser", "Units/Enemy/IRAPC", "Units/Enemy/MAD-4Launcher", "Units/Enemy/MAD-4Radar", "Units/Allied/PatRadarTrailer", "Units/Allied/PatriotLauncher", "Units/Allied/PhallanxTruck", "Units/Enemy/SAAW", "Units/Enemy/SamBattery1", "Units/Enemy/SamFCR", "Units/Enemy/SamFCR2", "Units/Allied/SLAIM120Truck", "Units/Allied/SRADTruck", "Units/Enemy/StaticAAA-20x2", "Units/Allied/StaticCIWS", "Units/Allied/WatchmanTruck", "Units/Enemy/EnemyCarrier", "Units/Enemy/DroneMissileCruiser", "Units/Allied/AlliedBackstopSAM"];

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