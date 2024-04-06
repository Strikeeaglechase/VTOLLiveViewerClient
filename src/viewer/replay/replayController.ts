import { decompressRpcPacketsGen } from "../../../../VTOLLiveViewerCommon/dist/src/compression/vtcompression.js";
import { EventEmitter } from "../../../../VTOLLiveViewerCommon/dist/src/eventEmitter.js";
import { RPCController, RPCPacket } from "../../../../VTOLLiveViewerCommon/dist/src/rpc.js";
import { VTGRHeader } from "../../../../VTOLLiveViewerCommon/dist/src/shared.js";
import { STORAGE_URL } from "../../config";
import { EventBus } from "../../eventBus";
import { Application } from "../app";
import { PlayerVehicle } from "../entities/playerVehicle";
import { replaceRPCHandlers } from "./rpcReverseHandlers";

const REPLAY_SPEEDS = [-64, -32, -16, -8, -4, -2, -1, -0.5, 0, 0.5, 1, 2, 4, 8, 16, 32, 64];
const HEADER_LENGTH = 0; // "REPLAY".length;
type RPCPacketT = RPCPacket & { timestamp: number };

const ALLOW_RUN_WHILE_LOADING = true;

class ReplayController extends EventEmitter<"replay_bytes"> {
	public replayPackets: RPCPacketT[] = [];
	private groupedReplayPackets: RPCPacketT[][] = [];
	public isReplay = false;
	public replayStartTime = 0;
	private replayDataReceived = 0;
	public replayCurrentTime = 0;
	private prevReplayTime = -1;
	private firstRealReplayDataTime = 0;
	private registeredFirstRealReplayDataTime = false;
	private replaySpeed = REPLAY_SPEEDS.indexOf(1);
	private isReadyToRun = false;
	private onTimeFlipHandlers: ((newDir: number) => void)[] = [];
	private previousReplayTimeDirection = 1;
	private packetPid = 0;

	private receiveBytesBuffer: number[] = [];
	private currentChunkIndex = 0;
	private lastLoadedTimestamp = 0;
	public header: VTGRHeader;

	private loadingResolver: () => void;
	private hasStartedLoadSkip = false;
	private replayChunkQueue: number[][] = [];
	private replayChunkQueueStarted = false;
	private totalChunksFullyProcessed = 0;

	private hasReceivedAllBytes = false;
	private hasLoadedEntireReplay = false;
	private lastPacketTimestamp = -1;

	public get computedReplaySpeed(): number {
		return REPLAY_SPEEDS[this.replaySpeed];
	}

	constructor(public app: Application) {
		super();
	}

	public runReplay(expectedDt: number): number {
		if (!this.isReadyToRun) return expectedDt;

		if (expectedDt > 1000) {
			console.warn(`Expected dt excessive ${expectedDt}`);
			expectedDt = 1000 / 60;
		}
		this.replayCurrentTime += expectedDt * this.computedReplaySpeed;

		const seconds = Math.abs(Math.floor(this.replayCurrentTime / 1000) - Math.floor(this.prevReplayTime / 1000));
		const startInSeconds = Math.max(0, Math.floor(this.prevReplayTime / 1000));
		const packets: RPCPacketT[] = [];
		for (let i = 0; i < seconds + 1; i++) {
			const timeslot = this.groupedReplayPackets[startInSeconds + i * Math.sign(this.computedReplaySpeed)];
			if (timeslot) {
				for (let j = 0; j < timeslot.length; j++) packets.push(timeslot[j]);
			}
		}

		if (this.replayCurrentTime > this.lastPacketTimestamp) {
			if (!this.hasLoadedEntireReplay) {
				console.warn(`Replay is still buffering, current time: ${this.replayCurrentTime} last packet time: ${this.lastPacketTimestamp}`);
				this.replaySpeed = REPLAY_SPEEDS.indexOf(0);
				EventBus.$emit("error-message", `Buffering. Wait a moment then increase the replay speed`);
				this.replayCurrentTime = this.lastPacketTimestamp;
				return 0;
			} else if (this.computedReplaySpeed > 0) {
				console.log(`Replay has ended`);
				this.replaySpeed = REPLAY_SPEEDS.indexOf(0);
				EventBus.$emit("error-message", `End of replay file`);
			}
		}

		if (this.replayCurrentTime < 0) {
			this.replaySpeed = REPLAY_SPEEDS.indexOf(0);
			this.replayCurrentTime = 0;
		}

		const inTimeframePackets = packets.filter(packet => this.packetIsInTimeframe(packet));
		// if (this.computedReplaySpeed > 0)
		// console.log(`Between ${this.prevReplayTime} and ${this.replayCurrentTime} there are ${inTimeframePackets.length} packets`);

		this.runReplayOnPackets(inTimeframePackets);

		this.prevReplayTime = this.replayCurrentTime;
		return expectedDt * this.computedReplaySpeed;
	}

	private runReplayOnPackets(packets: RPCPacketT[]) {
		const resultPackets: RPCPacketT[] = [];
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
			this.replayCurrentTime = packet.timestamp;
			// console.log(`Running packet ${packet.pid}`);
			RPCController.handlePacket(packet);
			this.replayCurrentTime = untouchedTime;
		});
	}

	private packetIsInTimeframe(packet: RPCPacketT) {
		if (this.computedReplaySpeed > 0) {
			return packet.timestamp <= this.replayCurrentTime && packet.timestamp > this.prevReplayTime;
		} else if (this.computedReplaySpeed < 0) {
			return packet.timestamp >= this.replayCurrentTime && packet.timestamp < this.prevReplayTime;
		}

		return false;
	}

	public handleReplayBytes(bytes: Uint8Array) {
		// this.receiveBytesBuffer.push(...bytes.slice(HEADER_LENGTH));
		for (let i = HEADER_LENGTH; i < bytes.length; i++) {
			this.receiveBytesBuffer.push(bytes[i]);
		}

		if (!this.header) {
			console.error(`Received replay data chunk before header`);
			return;
		}

		let currentChunk = this.header.chunks[this.currentChunkIndex];
		while (currentChunk && this.receiveBytesBuffer.length >= currentChunk.length) {
			const chunkBytes = this.receiveBytesBuffer.splice(0, currentChunk.length);
			console.log(`Received chunk ${this.currentChunkIndex} with ${chunkBytes.length} bytes ${this.receiveBytesBuffer.length} left in buffer`);
			this.currentChunkIndex++;
			currentChunk = this.header.chunks[this.currentChunkIndex];

			this.replayChunkQueue.push(chunkBytes);
			if (!this.replayChunkQueueStarted) this.handleReplayChunk();

			if (this.totalChunksFullyProcessed > 4 && ALLOW_RUN_WHILE_LOADING && !this.hasStartedLoadSkip) {
				this.loadingResolver();
				this.hasStartedLoadSkip = true;
			}
		}

		this.emit("replay_bytes", bytes);
	}

	// Empty remaining data in receive buffer
	private finishReceivingData() {
		while (this.receiveBytesBuffer.length > 0) {
			const currentChunk = this.header.chunks[this.currentChunkIndex];
			const chunkBytes = this.receiveBytesBuffer.splice(0, currentChunk.length);
			console.log(`Received final chunk ${this.currentChunkIndex} with ${chunkBytes.length} bytes ${this.receiveBytesBuffer.length} left in buffer`);
			this.currentChunkIndex++;
			this.replayChunkQueue.push(chunkBytes);
		}

		this.hasReceivedAllBytes = true;
		console.log(`Replay bytes fully received!`);
	}

	private async handleReplayChunk() {
		this.replayChunkQueueStarted = true;
		const bytes = this.replayChunkQueue.shift();
		if (!bytes) {
			setTimeout(() => this.handleReplayChunk(), 1000 / 60);
			return;
		}
		console.log(`Processing queued chunk with ${bytes.length} bytes, ${this.replayChunkQueue.length} chunks left.`);
		// console.log(bytes.join(","));
		let timeLastSleep = performance.now();
		const timeBudget = 10; // 10ms before must yield
		const rpcGen = decompressRpcPacketsGen(bytes);

		let count = 0;
		for (const _rpc of rpcGen) {
			const rpc = _rpc as RPCPacketT;
			count++;
			if (performance.now() - timeLastSleep > timeBudget) {
				await new Promise(res => setTimeout(res, timeBudget));
				timeLastSleep = performance.now();
			}

			if (this.replayPackets.length == 0) {
				this.replayStartTime = rpc.timestamp;
				console.log(`Setting replay start time to ${this.replayStartTime}`);
			}

			this.replayPackets.push(rpc);

			const relativeTimestamp = rpc.timestamp - this.replayStartTime;
			if (relativeTimestamp < 0) console.log(`Negative timestamp: ${relativeTimestamp} on packet: ${JSON.stringify(rpc)}`);

			const delta = rpc.timestamp - this.lastLoadedTimestamp;

			if (delta > 30 * 1000 && this.lastLoadedTimestamp > 0) {
				console.error(`There was an extremely high delta of ${delta}ms between packets`);
			}
			this.lastLoadedTimestamp = rpc.timestamp;

			rpc.timestamp = relativeTimestamp; // Map all timestamps to start at 0
			this.lastPacketTimestamp = rpc.timestamp;

			const sec = Math.floor(relativeTimestamp / 1000);
			if (!this.groupedReplayPackets[sec]) this.groupedReplayPackets[sec] = [];
			this.groupedReplayPackets[sec].push(rpc);

			// We want to start the replay back when the first player spawns
			if (!this.registeredFirstRealReplayDataTime && this.isPlayerVehicleSpawn(rpc)) {
				this.firstRealReplayDataTime = rpc.timestamp;
				this.registeredFirstRealReplayDataTime = true;
				console.log(`Setting first real replay data time to ${this.firstRealReplayDataTime} (${sec})`);
			}

			rpc.pid = this.packetPid++;
		}

		// rpcs.forEach(rpc => this.replayPackets.push(rpc));
		console.log(
			`Processed replay chunk with ${count} packets (${bytes.length} bytes). Chunks: ${(
				(this.totalChunksFullyProcessed / this.header.chunks.length) *
				100
			).toFixed(1)}% Bytes: ${((this.replayDataReceived / this.app.client.expectedReplaySize) * 100).toFixed(1)}%`
		);
		this.totalChunksFullyProcessed++;

		if (this.hasReceivedAllBytes && this.replayChunkQueue.length == 0) {
			this.hasLoadedEntireReplay = true;
			console.log(`Loaded entire replay`);
			EventBus.$emit("success-message", `Loaded entire replay`);
		}

		setTimeout(() => this.handleReplayChunk(), 1000 / 60);
	}

	private isPlayerVehicleSpawn(rpc: RPCPacket) {
		if (rpc.className != "MessageHandler" || rpc.method != "NetInstantiate") return false;
		const [id, ownerId, path, pos, rot, active] = rpc.args;
		return PlayerVehicle.spawnFor.includes(path);
	}

	public requestReplay(replayId: string, onProgress?: (progress: number) => void) {
		this.app.client.on("replay_header", (header: VTGRHeader) => this.handleHeader(header));
		this.app.client.replayGame(replayId);

		return new Promise<void>(res => {
			this.replayDataReceived = 0;
			this.loadingResolver = res;

			this.on("replay_bytes", (chunk: Uint8Array) => {
				this.replayDataReceived += chunk.length - HEADER_LENGTH;
				if (this.replayDataReceived == this.app.client.expectedReplaySize) {
					this.finishReceivingData();
					res();
				}
				if (onProgress) onProgress(this.replayDataReceived / this.app.client.expectedReplaySize);
			});

			this.beginDownloadFromStore(replayId);
		});
	}

	private async beginDownloadFromStore(replayId: string) {
		const fPath = encodeURIComponent(`recordings/${replayId}.vtgr`);
		const fName = `data.bin`;
		const downloadRequestUrl = `${STORAGE_URL}/read_unzip/?key=${fPath}&file=${fName}`;
		console.log(`Requesting replay from ${downloadRequestUrl}`);

		const request = await fetch(downloadRequestUrl);
		const reader = request.body?.getReader();
		if (!reader) {
			console.error(`Unable to get reader for replay request`);
			console.error(`Request status: ${request.status}`);
			return;
		}

		// eslint-disable-next-line no-constant-condition
		while (true) {
			const result = await reader.read();
			if (result.done) break;
			this.handleReplayBytes(result.value);
		}
	}

	private handleHeader(header: VTGRHeader) {
		this.header = header;
		console.log(`Got replay header with ${header.chunks.length} chunks`);
		console.log(header);
		const spawns = header.info?.missionInfo?.allUnitSpawns;
		if (spawns) {
			this.app.meshLoader.prepareIMeshCounts(spawns);
		}

		if (header.info?.missionInfo?.waypoints) {
			this.app.loadMarkers(header.info.missionInfo);
		}
	}

	public beginReplay() {
		console.log(`Beginning replay with ${this.replayPackets.length} packets`);
		if (this.replayPackets[0].timestamp == undefined) {
			console.error(`Replay packet 0 has no timestamp`);
			return;
		}

		// this.replayStartTime = this.replayPackets[0].timestamp;
		this.replayCurrentTime = 0;

		// let initPackets: RPCPacketT[] = [];
		if (this.registeredFirstRealReplayDataTime && this.firstRealReplayDataTime != 0) {
			// initPackets = this.replayPackets.filter(p => p.timestamp < this.firstRealReplayDataTime);
			// console.log(`Handling ${initPackets.length} init packets`);
			// console.log(JSON.stringify(initPackets));
			// this.runReplayOnPackets(initPackets);
			this.replayCurrentTime = this.firstRealReplayDataTime;
			console.log(`Skipping to first real replay data time: ${this.firstRealReplayDataTime}`);
		} else {
			console.log(`No init packets to handle`);
		}

		console.log(`-- Replay fully loaded --`);
		this.isReadyToRun = true;
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

export { ReplayController, RPCPacketT };
