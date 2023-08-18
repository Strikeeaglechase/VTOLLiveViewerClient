import {
	decompressRpcPackets
} from "../../../../VTOLLiveViewerCommon/dist/src/compression/vtcompression.js";
import { EventEmitter } from "../../../../VTOLLiveViewerCommon/dist/src/eventEmitter.js";
import { RPCController, RPCPacket } from "../../../../VTOLLiveViewerCommon/dist/src/rpc.js";
import { VTGRHeader } from "../../../../VTOLLiveViewerCommon/dist/src/shared.js";
import { Application } from "../app";
import { PlayerVehicle } from "../entities/playerVehicle";
import { replaceRPCHandlers } from "./rpcReverseHandlers";

const REPLAY_SPEEDS = [-8, -4, -2, -1, -0.5, 0, 0.5, 1, 2, 4, 8, 16, 32];
const HEADER_LENGTH = "REPLAY".length;
class ReplayController extends EventEmitter<"replay_bytes"> {
	public replayPackets: RPCPacket[] = [];
	private groupedReplayPackets: RPCPacket[][] = [];
	public isReplay = false;
	public replayStartTime = 0;
	private replayDataReceived = 0;
	public replayCurrentTime = 0;
	private prevReplayTime = 0;
	private firstRealReplayDataTime = 0;
	private replaySpeed = 7;
	public isInReplaySetup = false;
	private onTimeFlipHandlers: ((newDir: number) => void)[] = [];
	private previousReplayTimeDirection = 1;
	private packetPid = 0;

	private receiveBytesBuffer: number[] = [];
	private currentChunkIndex = 0;
	private header: VTGRHeader;

	public get computedReplaySpeed(): number {
		return REPLAY_SPEEDS[this.replaySpeed];
	}

	constructor(public app: Application) { super(); }

	public runReplay(expectedDt: number): number {
		if (expectedDt > 1000) {
			console.warn(`Expected dt excessive ${expectedDt}`);
			expectedDt = 1000 / 60;
		}
		// console.log(expectedDt, this.computedReplaySpeed, this.replayCurrentTime);
		this.replayCurrentTime += expectedDt * this.computedReplaySpeed;
		const curSec = Math.floor(this.replayCurrentTime / 1000);
		const prevSec = Math.floor(this.prevReplayTime / 1000);
		const currentPacketGroup = this.groupedReplayPackets[curSec] ?? [];
		const prevPacketGroup = this.groupedReplayPackets[prevSec] ?? [];

		let packets: RPCPacket[];
		if (curSec != prevSec) packets = [...currentPacketGroup, ...prevPacketGroup];
		else packets = currentPacketGroup;
		// if (this.computedReplaySpeed != 0) console.log(`${this.replayCurrentTime} - ${curSec}/${prevSec} - ${inTimeframePackets.length}/${packets.length}`);

		const inTimeframePackets = packets.filter(packet => this.packetIsInTimeframe(packet));
		this.runReplayOnPackets(inTimeframePackets);

		this.prevReplayTime = this.replayCurrentTime;
		return expectedDt * this.computedReplaySpeed;
	}

	private runReplayOnPackets(packets: RPCPacket[]) {
		const resultPackets: RPCPacket[] = [];
		packets.forEach(packet => {
			if (this.computedReplaySpeed < 0) {
				const handler = replaceRPCHandlers.find(h => h.className == packet.className && h.method == packet.method);
				// if (packet.method == "NetDestroy") console.log(`Net destroy packet handled`);
				if (handler) {
					const res = handler.handler(this, packet);
					if (!res) return;
					if (typeof res == "object") resultPackets.push(res);
					else resultPackets.push(packet);
				} else {
					resultPackets.push(packet);
				}
			} else {
				resultPackets.push(packet);
			}
		});

		resultPackets.forEach(packet => {
			// console.log(`(${packet.id}) ${packet.className}.${packet.method}`);
			// const hit = this.packetHits[packet.pid as number];
			// hit.hits++;
			// hit.hitTimes.push([this.prevReplayTime, this.replayCurrentTime]);
			const untouchedTime = this.replayCurrentTime;
			this.replayCurrentTime = (packet.timestamp ?? (this.replayCurrentTime + this.replayStartTime)) - this.replayStartTime;
			RPCController.handlePacket(packet);
			this.replayCurrentTime = untouchedTime;
		});
	}

	private packetIsInTimeframe(packet: RPCPacket) {
		const fromRecordingStart = (packet.timestamp ?? Date.now()) - this.replayStartTime;

		if (this.computedReplaySpeed > 0) {
			return fromRecordingStart <= this.replayCurrentTime && fromRecordingStart > this.prevReplayTime;
		} else if (this.computedReplaySpeed < 0) {
			return fromRecordingStart >= this.replayCurrentTime && fromRecordingStart < this.prevReplayTime;
		}

		return false;
	}

	public handleReplayBytes(bytes: Uint8Array) {
		this.receiveBytesBuffer.push(...bytes.slice(HEADER_LENGTH)); // Append new bytes
		if (!this.header) {
			console.error(`Received replay data chunk before header`);
			return;
		}

		const currentChunk = this.header.chunks[this.currentChunkIndex];
		if (this.receiveBytesBuffer.length >= currentChunk.length) {
			const chunkBytes = this.receiveBytesBuffer.splice(0, currentChunk.length);
			console.log(`Handling chunk ${this.currentChunkIndex} with ${chunkBytes.length} bytes ${this.receiveBytesBuffer.length} left in buffer`);
			this.currentChunkIndex++;
			this.handleReplayChunk(chunkBytes);
		}

		this.emit("replay_bytes", bytes);
	}

	// Empty remaining data in receive buffer
	private finishReceivingData() {
		while (this.receiveBytesBuffer.length > 0) {
			const currentChunk = this.header.chunks[this.currentChunkIndex];
			const chunkBytes = this.receiveBytesBuffer.splice(0, currentChunk.length);
			console.log(`Handling chunk ${this.currentChunkIndex} with ${chunkBytes.length} bytes ${this.receiveBytesBuffer.length} left in buffer`);
			this.currentChunkIndex++;
			this.handleReplayChunk(chunkBytes);
		}
	}

	private handleReplayChunk(bytes: number[]) {
		const rpcs = decompressRpcPackets(bytes);
		if (this.replayPackets.length == 0) this.replayStartTime = rpcs[0].timestamp ?? Date.now();
		this.replayPackets.push(...rpcs);
		console.log(`Got replay chunk ${this.replayDataReceived} with ${rpcs.length} packets (${bytes.length} bytes)`);

		if (rpcs[0].timestamp == undefined) {
			console.error(`Replay packet chunk ${this.replayDataReceived} packet 0 has no timestamp`);
			// Interpolate timestamps
			const msPerChunk = 30 * 1000;
			const tsStep = msPerChunk / rpcs.length;
			rpcs.forEach((rpc, idx) => {
				rpc.timestamp = this.replayDataReceived * msPerChunk + tsStep * idx;
			});
		}

		// const sec = Math.floor(((rpcs[0].timestamp ?? Date.now()) - this.replayStartTime) / 1000);


		rpcs.forEach(rpc => {
			const sec = Math.floor(((rpc.timestamp ?? Date.now()) - this.replayStartTime) / 1000);
			if (!this.groupedReplayPackets[sec]) this.groupedReplayPackets[sec] = [];
			this.groupedReplayPackets[sec].push(rpc);

			// We want to start the replay back when the first player spawns
			if (this.firstRealReplayDataTime == 0 && this.isPlayerVehicleSpawn(rpc)) {
				this.firstRealReplayDataTime = (rpc.timestamp ?? Date.now()) - this.replayStartTime;
				console.log(`Setting first real replay data time to ${this.firstRealReplayDataTime} (${sec})`);
			}

			rpc.pid = this.packetPid++;
			// this.packetHits[rpc.pid] = { hits: 0, time: (rpc.timestamp ?? Date.now()) - this.replayStartTime, hitTimes: [] };
		});

	}

	private isPlayerVehicleSpawn(rpc: RPCPacket) {
		if (rpc.className != "MessageHandler" || rpc.method != "NetInstantiate") return false;
		const [id, ownerId, path, pos, rot, active] = rpc.args;
		return PlayerVehicle.spawnFor.includes(path);
	}

	public requestReplay(replayId: string, onProgress?: (progress: number) => void) {
		this.app.client.on("replay_header", (header: VTGRHeader) => this.header = header);
		this.app.client.replayGame(replayId);
		return new Promise<void>(res => {
			this.replayDataReceived = 0;

			this.on("replay_bytes", (chunk: Uint8Array) => {
				this.replayDataReceived += chunk.length - HEADER_LENGTH;
				if (this.replayDataReceived == this.app.client.expectedReplaySize) {
					this.finishReceivingData();
					res();
				}
				if (onProgress) onProgress(this.replayDataReceived / this.app.client.expectedReplaySize);
			});
		});
	}

	public beginReplay() {
		console.log(`Beginning replay with ${this.replayPackets.length} packets`);
		this.isInReplaySetup = true;
		if (this.replayPackets[0].timestamp == undefined) {
			console.error(`Replay packet 0 has no timestamp`);
			return;
		}

		this.replayStartTime = this.replayPackets[0].timestamp;
		this.replayCurrentTime = 0;

		let initPackets: RPCPacket[] = [];
		if (this.firstRealReplayDataTime != 0) {
			initPackets = this.replayPackets.filter(p => ((p.timestamp ?? Date.now()) - this.replayStartTime) < this.firstRealReplayDataTime);
		} else if (this.groupedReplayPackets[0]) {
			initPackets = this.groupedReplayPackets[0];
		}
		console.log(`Handling ${initPackets.length} init packets`);
		// console.log(JSON.stringify(initPackets));
		this.runReplayOnPackets(initPackets);
	}

	public skipToStart() {
		if (this.replayCurrentTime < this.firstRealReplayDataTime) {
			this.replayCurrentTime = this.firstRealReplayDataTime;
			console.log(`Skipping to first real replay data time: ${this.firstRealReplayDataTime}`);
		}

		console.log(`-- Replay fully loaded --`);
		this.isInReplaySetup = false;
	}

	public handleArrowKey(key: string) {
		const prevReplay = REPLAY_SPEEDS[this.replaySpeed];
		if (key == "ArrowLeft") this.replaySpeed = Math.max(this.replaySpeed - 1, 0);
		if (key == "ArrowRight") this.replaySpeed = Math.min(this.replaySpeed + 1, REPLAY_SPEEDS.length - 1);

		if (prevReplay != this.computedReplaySpeed) {
			console.log(`New replay speed: ${this.computedReplaySpeed}x`);
		}

		if (this.computedReplaySpeed != 0) {
			if (this.app.timeDirection != this.previousReplayTimeDirection) {
				this.onTimeFlipHandlers.forEach(handler => handler(this.app.timeDirection));
				this.previousReplayTimeDirection = this.app.timeDirection;
			}
		}
	}

	public onTimeFlip(handler: (newDir: number) => void): void {
		this.onTimeFlipHandlers.push(handler);
	}
}

export { ReplayController };