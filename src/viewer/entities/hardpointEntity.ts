import { EnableRPCs } from "../../../../VTOLLiveViewerCommon/dist/rpc.js";
import { Application } from "../app";
import { Entity } from "../entityBase/entity";

@EnableRPCs("instance")
class HardpointEntity extends Entity {
	public static spawnForRegex = new RegExp(/HPEquips\/.+\/.+/i);
	get debugName() {
		return `HardpointEntity (${this.id ?? ""})`;
	}

	constructor(app: Application) {
		super(app);
		this.isActive = true;
	}

	// No super call as the hardpoint entity is just a wrapper
	public update(dt: number): void {
		if (!this.hasFoundValidOwner) this.tryFindOwner();
	}
}

export { HardpointEntity };
