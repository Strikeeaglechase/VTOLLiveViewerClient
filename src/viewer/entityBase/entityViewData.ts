import { Player, Team } from "../../../../VTOLLiveViewerCommon/dist/shared.js";
import { Vector } from "../../../../VTOLLiveViewerCommon/dist/vector.js";
import { Entity, EntityReference } from "./entity.js";

class EntityViewData implements EntityReference {
	public position: Vector = new Vector();
	public velocity: Vector = new Vector();
	public rotation: Vector = new Vector();
	public acceleration: Vector = new Vector();
	public id: number;
	public unitId: number;
	public type: string;
	public ownerId: string;
	public team: Team = Team.Unknown;
	public hasFoundValidOwner = false;
	public owner = Player.empty;
	public displayName: string;
	public isActive: boolean;
	public showInSidebar: boolean;

	public showInBra: boolean;

	public gForce = 0;
	public maxGForce = 0;
	public isCurrentFocus = false;

	public lockedOnto = -1;

	private className = "";

	public updateInfo(entity: Entity) {
		this.position.set(entity.position);
		this.velocity.set(entity.velocity);
		this.rotation.set(entity.rotation);
		this.acceleration.set(entity.acceleration);
		this.id = entity.id;
		this.unitId = entity.unitId;
		this.type = entity.type;
		this.ownerId = entity.ownerId;
		this.team = entity.team;
		this.hasFoundValidOwner = entity.hasFoundValidOwner;
		this.owner = entity.owner;
		this.displayName = entity.displayName;
		this.gForce = entity.gForce;
		this.maxGForce = entity.maxGForce;
		this.isCurrentFocus = entity.isFocus;
		this.showInBra = entity.showInBra;
		this.isActive = entity.isActive;
		this.showInSidebar = entity.showInSidebar;

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		this.lockedOnto = entity.view.isPlayer && entity.lockLine && entity.lockLine.lockedEntity ? entity.lockLine.lockedEntity.id : -1;

		this.className = entity.__name;
	}

	public is(other: EntityReference) {
		return this.id == other.id;
	}

	public get isMissile() {
		return this.className == "MissileEntity";
	}
	public get isPlayer() {
		return this.className == "PlayerVehicle";
	}
	public get isGroundAI() {
		return this.className == "AIGroundUnit";
	}
	public get isAirAI() {
		return this.className == "AIAirVehicle";
	}
	public get isAI() {
		return this.isGroundAI || this.isAirAI;
	}
}

export { EntityViewData };
