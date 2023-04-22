import { EnableRPCs, RPC } from "../../../../VTOLLiveViewerCommon/dist/src/rpc.js";
import { Team, Vector3 } from "../../../../VTOLLiveViewerCommon/dist/src/shared.js";
import { Application } from "../app";
import { Entity } from "../entityBase/entity";

@EnableRPCs("instance")
class AIAirVehicle extends Entity {
	public static spawnFor: string[] = ["Units/Allied/ABomberAI", "Units/Enemy/AIUCAV", "Units/Enemy/ASF-30", "Units/Enemy/ASF-33", "Units/Enemy/ASF-58", "Units/Allied/AV-42CAI", "Units/Allied/E-4", "Units/Enemy/AEW-50", "Units/Enemy/EBomberAI", "Units/Allied/F-45A AI", "Units/Allied/FA-26A", "Units/Allied/FA-26B AI", "Units/Enemy/GAV-25", "Units/Allied/KC-49", "Units/Allied/MQ-31", "Units/Enemy/T-55 AI-E", "Units/Allied/T-55 AI"];

	constructor(app: Application) {
		super(app, { hasTrail: true, showInBra: false, showInSidebar: false, useInstancedMesh: true });
	}

	// Protect AI team, don't want to inherit from host
	protected setTeam(team: Team) {
		if (this.team != Team.Unknown && this.team != team) return;

		super.setTeam(team);
	}

	public update(dt: number): void {
		super.update(dt);
	}

	protected onFirstPos(): void {
		super.onFirstPos();
		this.setActive(`AI aircraft got first position`);
	}

	@RPC("in")
	UpdateData(pos: Vector3, vel: Vector3, accel: Vector3, rot: Vector3) {
		this.updateMotion(pos, vel, accel, rot);
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

export { AIAirVehicle };