import {
	decompressRpcPackets
} from "../../../../VTOLLiveViewerCommon/dist/src/compression/vtcompression.js";
import { RPCController, RPCPacket } from "../../../../VTOLLiveViewerCommon/dist/src/rpc.js";
import { Application } from "../app";
import { PlayerVehicle } from "../entities/playerVehicle";
import { replaceRPCHandlers } from "./rpcReverseHandlers";

const REPLAY_SPEEDS = [-8, -4, -2, -1, -0.5, 0, 0.5, 1, 2, 4, 8, 16, 32];
class ReplayController {
	// TODO: Move replay to its own class
	public replayPackets: RPCPacket[] = [];
	private groupedReplayPackets: RPCPacket[][] = [];
	private onReplayChunk: (() => void) | null = null;
	public isReplay = false;
	public replayStartTime = 0;
	private currentReplayChunkReceive = 0;
	public replayCurrentTime = 0;
	private prevReplayTime = 0;
	private firstRealReplayDataTime = 0;
	private replaySpeed = 7;
	public isInReplaySetup = false;
	private onTimeFlipHandlers: ((newDir: number) => void)[] = [];
	private previousReplayTimeDirection = 1;
	private packetPid = 0;

	public get computedReplaySpeed(): number {
		return REPLAY_SPEEDS[this.replaySpeed];
	}

	constructor(public app: Application) { }

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

	public handleReplayChunk(bytes: Uint8Array) {
		const rpcs = decompressRpcPackets([...bytes.slice("REPLAY".length)]);
		if (this.replayPackets.length == 0) this.replayStartTime = rpcs[0].timestamp ?? Date.now();
		this.replayPackets.push(...rpcs);
		console.log(`Got replay chunk ${this.currentReplayChunkReceive} with ${rpcs.length} packets (${bytes.length} bytes)`);

		if (rpcs[0].timestamp == undefined) {
			console.error(`Replay packet chunk ${this.currentReplayChunkReceive} packet 0 has no timestamp`);
			// Interpolate timestamps
			const msPerChunk = 30 * 1000;
			const tsStep = msPerChunk / rpcs.length;
			rpcs.forEach((rpc, idx) => {
				rpc.timestamp = this.currentReplayChunkReceive * msPerChunk + tsStep * idx;
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

		if (this.onReplayChunk) this.onReplayChunk();
		else console.warn(`Received replay chunk without onReplayChunk callback`);
	}

	private isPlayerVehicleSpawn(rpc: RPCPacket) {
		if (rpc.className != "MessageHandler" || rpc.method != "NetInstantiate") return false;
		const [id, ownerId, path, pos, rot, active] = rpc.args;
		return PlayerVehicle.spawnFor.includes(path);
	}

	public requestReplay(replayId: string, onProgress?: (progress: number) => void) {
		this.app.client.replayGame(replayId);
		return new Promise<void>(res => {
			this.currentReplayChunkReceive = 0;
			this.onReplayChunk = () => {
				this.currentReplayChunkReceive++;
				if (this.currentReplayChunkReceive == this.app.client.expectedReplayChunks) {
					res();
					this.onReplayChunk = null;
				}
				if (onProgress) onProgress(this.currentReplayChunkReceive / this.app.client.expectedReplayChunks);
			};
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