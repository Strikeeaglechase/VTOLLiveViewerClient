import { EnableRPCs, RPC } from "../../../../VTOLLiveViewerCommon/dist/src/rpc.js";
import { Vector3 } from "../../../../VTOLLiveViewerCommon/dist/src/shared.js";
import { Vector } from "../../../../VTOLLiveViewerCommon/dist/src/vector.js";
import { Application } from "../app";
import { Entity } from "../entityBase/entity";

// Guns are technically their own entity
// TODO: Guns currently don't despawn when the host aircraft is destroyed
@EnableRPCs("instance")
class GunEntity extends Entity {
	public static spawnFor: string[] = ["HPEquips/F45A/f45_gun", "HPEquips/AFighter/fa26_gun", "HPEquips/VTOL/m230", "HPEquips/VTOL/gau-8", "HPEquips/AH-94/ah94_gun"];

	constructor(app: Application) {
		super(app);
		this.isActive = true;
	}

	@RPC("in")
	public FireBullet(position: Vector3, velocity: Vector3): void {
		// console.log("Firing bullet.");
		const translatedPos = new Vector(-position.x, position.y, position.z);
		const translatedVel = new Vector(-velocity.x, velocity.y, velocity.z);
		this.app.bulletManager.fireBullet(translatedPos, translatedVel);
	}

	// No super call as the gun entity is just a wrapper
	public update(dt: number): void {
		if (!this.hasFoundValidOwner) this.tryFindOwner();
	}
}

export { GunEntity };