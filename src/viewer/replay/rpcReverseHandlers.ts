import { RPCController } from "../../../../VTOLLiveViewerCommon/dist/rpc.js";
import { RadarJammerSync } from "../entityBase/jammer.js";
import { ReplayController, RPCPacketT } from "./replayController";

interface ReplaceRPCHandler {
	className: string;
	method: string;
	handler: (app: ReplayController, rpc: RPCPacketT) => boolean | RPCPacketT;
}

// Handles "undoing" RPCs when the replay is running in reverse
// Can return false to prevent the RPC from executing, or can return a different RPC to execute
const replaceRPCHandlers: ReplaceRPCHandler[] = [];
replaceRPCHandlers.push({
	className: "MessageHandler",
	method: "NetInstantiate",
	handler: (controller: ReplayController, rpc: RPCPacketT) => {
		const [id, ownerId, path, pos, rot, active] = rpc.args;
		console.log(`Reversing NetInstantiate for ${id}`);
		controller.app.messageHandler.NetDestroy(id);
		return false;
	}
});

replaceRPCHandlers.push({
	className: "MessageHandler",
	method: "NetDestroy",
	handler: (app: ReplayController, rpc: RPCPacketT) => {
		const [id] = rpc.args;
		console.log(`Reversing NetDestroy for ${id}`);
		// const spawnPacket = app.replayPackets.find(p => p.className == "MessageHandler" && p.method == "NetInstantiate" && p.args[0] == id);
		const spawnPacket = app.netInstantiatePackets[id];
		if (!spawnPacket) console.error(`Attempting to undo net destroy for ${id} but no spawn packet found`);
		else return spawnPacket;
		return false;
	}
});

replaceRPCHandlers.push({
	className: "MissileEntity",
	method: "Detonate",
	handler: (app: ReplayController, rpc: RPCPacketT) => {
		console.log(`Reversing Detonate for missile ${rpc.id}`);
		// const spawnPacket = app.replayPackets.find(p => p.className == "MessageHandler" && p.method == "NetInstantiate" && p.args[0] == rpc.id);
		const spawnPacket = app.netInstantiatePackets[rpc.id];
		if (!spawnPacket) console.error(`Attempting to undo detonate for ${rpc.id} but no spawn packet found`);
		else return spawnPacket;
		return false;
	}
});

replaceRPCHandlers.push({
	className: "PlayerVehicle",
	method: "SetLock",
	handler: (controller: ReplayController, rpc: RPCPacketT) => {
		// console.log(`Reversing SetLock for ${rpc.id} -> ${rpc.args[0]} (was ${rpc.args[1]})`);
		const rpcCopy = JSON.parse(JSON.stringify(rpc));
		rpcCopy.args[1] = !rpcCopy.args[1];
		return rpcCopy;
	}
});

replaceRPCHandlers.push({
	className: "VTOLLobby",
	method: "LogMessage",
	handler: (controller: ReplayController, rpc: RPCPacketT) => {
		let removeIndex = -1;
		for (let i = controller.app.logMessages.length - 1; i >= 0; i--) {
			if (controller.app.logMessages[i].message == rpc.args[0]) {
				removeIndex = i;
				break;
			}
		}

		if (removeIndex == -1) {
			console.warn(`Attempting to undo log message ${rpc.args[0]} but no message found`);
		} else {
			controller.app.logMessages.splice(removeIndex, 1);
		}

		return false;
	}
});

replaceRPCHandlers.push({
	className: "PlayerVehicle",
	method: "Die",
	handler: (controller: ReplayController, rpc: RPCPacketT) => {
		console.log(`Reversing Die for PlayerVehicle ${rpc.id}`);
		if (!rpc.id) {
			console.warn(`Die RPC has no id`);
			return false;
		}
		const entity = controller.app.getEntityById(parseInt(rpc.id));
		if (!entity) {
			console.warn(`Die RPC has no entity`);
			return false;
		}

		entity.reverseDeath();

		return false;
	}
});

replaceRPCHandlers.push({
	className: "AIGroundUnit",
	method: "Die",
	handler: (controller: ReplayController, rpc: RPCPacketT) => {
		console.log(`Reversing Die for AIGroundUnit ${rpc.id}`);

		const entity = controller.app.getEntityById(parseInt(rpc.id));
		if (!entity) {
			// Entity has fully died, find instantiate packet and reverse it
			const spawnPacket = controller.netInstantiatePackets[rpc.id];
			if (!spawnPacket) {
				console.error(`Die RPC has no entity or spawn packet`);
				return false;
			}

			return spawnPacket;
		}

		// Entity "killed" but not deleted yet, just cancel deletion
		entity.reverseDeath();
		return false;
	}
});

replaceRPCHandlers.push({
	className: "AIAirVehicle",
	method: "Die",
	handler: (controller: ReplayController, rpc: RPCPacketT) => {
		console.log(`Reversing Die for AIAirVehicle ${rpc.id}`);

		const entity = controller.app.getEntityById(parseInt(rpc.id));
		if (!entity) {
			// Entity has fully died, find instantiate packet and reverse it
			const spawnPacket = controller.netInstantiatePackets[rpc.id];
			if (!spawnPacket) {
				console.error(`Die RPC has no entity or spawn packet`);
				return false;
			}

			return spawnPacket;
		}

		// Entity "killed" but not deleted yet, just cancel deletion
		entity.reverseDeath();
		return false;
	}
});

replaceRPCHandlers.push({
	className: "RadarJammerSync",
	method: "BeginJam",
	handler: (controller: ReplayController, rpc: RPCPacketT) => {
		console.log(`Reversing BeginJam for ${rpc.args[0]}`);
		const newRpc: RPCPacketT = {
			className: rpc.className,
			method: "EndJam",
			id: rpc.id,
			args: [rpc.args[0]],
			timestamp: rpc.timestamp
		};

		return newRpc;
	}
});

replaceRPCHandlers.push({
	className: "RadarJammerSync",
	method: "EndJam",
	handler: (controller: ReplayController, rpc: RPCPacketT) => {
		const newRpc: RPCPacketT = {
			className: rpc.className,
			method: "BeginJam",
			id: rpc.id,
			args: [rpc.args[0], { x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: 0 }],
			timestamp: rpc.timestamp
		};

		return newRpc;
	}
});

replaceRPCHandlers.push({
	className: "RadarJammerSync",
	method: "TMode",
	handler: (controller: ReplayController, rpc: RPCPacketT) => {
		const jammer = RPCController.getRpcHandler("RadarJammerSync", rpc.id as string);
		if (!jammer) {
			console.warn(`No jammer found for reverse tMode RPC ${rpc.id}`);
			return false;
		}

		jammer.popMode(rpc.args[0]);
		return false;
	}
});

replaceRPCHandlers.push({
	className: "RadarJammerSync",
	method: "TDecoyModel",
	handler: (controller: ReplayController, rpc: RPCPacketT) => {
		const jammer: RadarJammerSync = RPCController.getRpcHandler("RadarJammerSync", rpc.id as string);
		if (!jammer) {
			console.warn(`No jammer found for reverse TDecoyModel RPC ${rpc.id}`);
			return false;
		}

		jammer.popModel(rpc.args[0]);
		return false;
	}
});

export { replaceRPCHandlers };
