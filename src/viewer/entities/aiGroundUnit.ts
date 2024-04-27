import * as THREE from "three";

import { EnableRPCs, RPC } from "../../../../VTOLLiveViewerCommon/dist/src/rpc.js";
import { Team, Vector3 } from "../../../../VTOLLiveViewerCommon/dist/src/shared.js";
import { Vector } from "../../../../VTOLLiveViewerCommon/dist/src/vector.js";
import { Application } from "../app";
import { Entity, MAX_OBJECT_SIZE, teamColors } from "../entityBase/entity";
import { Settings } from "../settings";
import { radarLaunchRanges } from "./radarLaunchRanges";

@EnableRPCs("instance")
class AIGroundUnit extends Entity {
	public static spawnFor: string[] = [
		"Units/Allied/AlliedAAShip",
		"Units/Allied/AlliedBackstopSAM",
		"Units/Allied/AlliedCarrier",
		"Units/Allied/alliedCylinderTent",
		"Units/Allied/AlliedEWRadar",
		"Units/Allied/alliedMBT1",
		"Units/Allied/AlliedSoldier",
		"Units/Allied/AlliedSoldierMANPAD",
		"Units/Enemy/EnemySoldierMANPAD",
		"Units/Allied/ARocketTruck",
		"Units/Enemy/Artillery",
		"Units/Allied/BSTOPRadar",
		"Units/Enemy/bunker1",
		"Units/Allied/bunker2",
		"Units/Enemy/cylinderTent",
		"Units/Enemy/DroneCarrier",
		"Units/Enemy/DroneGunBoat",
		"Units/Enemy/DroneGunBoatRocket",
		"Units/Enemy/DroneMissileCruiser",
		"Units/Enemy/EnemyCarrier",
		"Units/Enemy/enemyMBT1",
		"Units/Enemy/EnemySoldier",
		"Units/Enemy/ERocketTruck",
		"Units/Allied/EscortCruiser",
		"Units/Enemy/ESuperMissileCruiser",
		"Units/Enemy/IRAPC",
		"Units/Enemy/MAD-4Launcher",
		"Units/Enemy/MAD-4Radar",
		"Units/Enemy/MineBoat",
		"Units/Allied/PatRadarTrailer",
		"Units/Allied/PatriotLauncher",
		"Units/Allied/PhallanxTruck",
		"Units/Enemy/SAAW",
		"Units/Enemy/SamBattery1",
		"Units/Enemy/SamFCR",
		"Units/Enemy/SamFCR2",
		"Units/Allied/SLAIM120Truck",
		"Units/Allied/SRADTruck",
		"Units/Enemy/staticAAA-20x2",
		"Units/Allied/staticCIWS",
		"Units/Allied/WatchmanTruck",

		"NuclearOption/AFV8_APC",
		"NuclearOption/AFV8_IFV",
		"NuclearOption/AFV8_SAM",
		"NuclearOption/HLT-FT",
		"NuclearOption/HLT-L",
		"NuclearOption/HLT-M",
		"NuclearOption/HLT-R",
		"NuclearOption/HLT-T",
		"NuclearOption/LCV45",
		"NuclearOption/Linebreaker_APC",
		"NuclearOption/Linebreaker_IFV",
		"NuclearOption/Linebreaker_SAM",
		"NuclearOption/MBT",
		"NuclearOption/SPAAG1",
		"NuclearOption/SPAAG2",
		"NuclearOption/RadarSAM1"
	];

	public isLsoTarget = false;
	private threatRingGeom: THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>;

	public set scale(scale: number) {
		const maxSetScale = MAX_OBJECT_SIZE / this.baseScaleSize;

		if (this.isLsoTarget) {
			this._scale = Math.min(maxSetScale, 1 * this.iMeshLoadScale);
			this.onScaleUpdate();
		} else {
			this._scale = Math.min(maxSetScale, Math.max(scale * this.scaleDamper, 1) * this.iMeshLoadScale);
			this.onScaleUpdate();
		}
	}

	constructor(app: Application) {
		super(app, {
			hasBaseLine: false,
			hasOverlay: true,
			useInstancedMesh: true,
			showInBra: false,
			useHostTeam: false,
			onlyShowTypeOnOverlay: Settings.get("AI Labels") == "Type Only",
			removeAfterDeath: true
		});

		this.equipManager = null;
	}

	// Protect AI team, don't want to inherit from host
	protected setTeam(team: Team) {
		if (this.team != Team.Unknown && this.team != team) return;

		super.setTeam(team);

		if (this.threatRingGeom) {
			const teamColor = teamColors[this.team];
			this.threatRingGeom.material.color = new THREE.Color(teamColor.r, teamColor.g, teamColor.b);
		}
	}

	public async spawn(id: number, ownerId: string, path: string, position: Vector, rotation: Vector, isActive: boolean): Promise<void> {
		super.spawn(id, ownerId, path, position, rotation, isActive);
		this.hasOverlay = !(path == "Units/Allied/AlliedSoldier" || path == "Units/Enemy/EnemySoldier");
		if (isActive) await this.setActive(`AI spawned as active`);
	}

	private addSamThreatRing() {
		const radarLaunchRangesObj = radarLaunchRanges.find(rlr => rlr.path == this.type);
		if (!radarLaunchRangesObj) return;
		console.log(`Loading ${radarLaunchRangesObj.radarLaunchRanges.length} SAM threat rings for ${this}`);

		const teamColor = teamColors[this.team];
		const sphereMat = new THREE.MeshBasicMaterial({
			color: new THREE.Color(teamColor.r, teamColor.g, teamColor.b),
			wireframe: false,
			transparent: true,
			opacity: 0.2,
			side: THREE.DoubleSide
		});

		// let lastRange = 0;
		// const reqDiffToAdd = 1000;
		const range = Math.max(...radarLaunchRangesObj.radarLaunchRanges);
		// radarLaunchRangesObj.radarLaunchRanges.forEach(range => {
		// if (lastRange > 0 && Math.abs(lastRange - range) < reqDiffToAdd) return;
		// lastRange = range;

		let parts = 8;
		if (range > 10000) parts = 16;
		if (range > 20000) parts = 32;
		const geom = new THREE.SphereGeometry(range, parts, parts);
		const mesh = new THREE.Mesh(geom, sphereMat);
		mesh.name = "SAMThreatRing";

		this.object.add(mesh);
		this.threatRingGeom = mesh;
		// });
	}

	public async setActive(reason: string): Promise<void> {
		await super.setActive(reason);
		// this.addSamThreatRing();
		// Make ground units generally bigger
		// This is sorta scuffed, scale system needs looking at
		// if (this.scaleDamper == 1) this.scaleDamper = 5;

		if (Settings.get("AI Labels") == "Off") {
			this.textOverlay?.hide();
		}

		Settings.instance.on("AI Labels", (labelSetting: string) => {
			if (labelSetting == "Off") {
				this.textOverlay?.hide();
			} else {
				this.textOverlay?.show();
				this.onlyShowTypeOnOverlay = labelSetting == "Type Only";
				this.textOverlayHasHadFirstUpdate = false;
			}
		});
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
