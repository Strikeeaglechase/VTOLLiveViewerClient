import { EnableRPCs, RPC } from "../../../VTOLLiveViewerCommon/dist/rpc.js";
import { Vector3 } from "../../../VTOLLiveViewerCommon/dist/shared.js";
import { Vector } from "../../../VTOLLiveViewerCommon/dist/vector.js";
import { Application } from "./app.js";
import { RadarJammerSync } from "./entityBase/jammer.js";

// MessageHandler is a class within HC, this wrapper handles its RPCs
@EnableRPCs("instance")
class MessageHandler {
	constructor(public id: string, private app: Application) {}

	@RPC("in")
	NetInstantiate(id: number, ownerId: string, path: string, pos: Vector3, rot: Vector3, active: boolean) {
		this.app.handleEntitySpawn(id, ownerId, path, new Vector().set(pos), new Vector().set(rot), active);
	}

	@RPC("in")
	NetDestroy(id: number) {
		const entity = this.app.getEntityById(id);
		if (!entity) {
			console.warn(`Got despawn for unknown entity ${id}`);
			return;
		}
		console.log(`Got despawn for ${entity}. Existed for ${Date.now() - entity.createdAt}`);
		entity.remove(`NetDestroy command`);
	}

	@RPC("in")
	SetEntityUnitID(entityId: number, unitId: number) {
		// const entity = this.app.entities.find(e => e.id == entityId);
		// if (entity) entity.setUnitId(unitId);
		const entity = this.app.getEntityById(entityId);
		if (entity) entity.setUnitId(unitId);
	}

	@RPC("in")
	CreateJammer(entityId: number, jammerId: string) {
		const entity = this.app.getEntityById(entityId);
		if (!entity) {
			console.error(`Got CreateJammer for unknown entity ${entityId}. JammerId: ${jammerId}`);
			return;
		}

		console.log(`CreateJammer for ${entity} with id ${jammerId}`);
		const jammer = new RadarJammerSync(entity, jammerId);
		entity.jammers.push(jammer);
	}

	@RPC("in")
	DatalinkActorPos(
		entityId: number,
		actorId: number,
		team: number,
		identityIndex: number,
		sensorSource: number,
		pos: Vector3,
		vel: Vector3,
		rwrPrecision: number,
		falseId: number
	) {
		return;
		var ent = this.app.getEntityById(entityId);
		if (ent) {
			if (ent.team == team) {
				console.log(`DL report for ${ent} was sent by own-team`);
				return;
			}
			ent.handleDatalinkPos(identityIndex, sensorSource, pos, vel, rwrPrecision, falseId);
		}
		// console.log({
		// 	ent,
		// 	entityId,
		// 	actorId,
		// 	team,
		// 	identityIndex,
		// 	sensorSource,
		// 	pos: new Vector().set(pos),
		// 	vel: new Vector().set(vel),
		// 	rwrPrecision,
		// 	falseId
		// });
	}

	@RPC("in")
	SyncTOD() {}
}

export { MessageHandler };
