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
		const spawnPacket = app.replayPackets.find(p => p.className == "MessageHandler" && p.method == "NetInstantiate" && p.args[0] == id);
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
		const spawnPacket = app.replayPackets.find(p => p.className == "MessageHandler" && p.method == "NetInstantiate" && p.args[0] == rpc.id);
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
		console.log(`Reversing Die for ${rpc.id}`);
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

export { replaceRPCHandlers };
