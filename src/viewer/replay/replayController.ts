import { decompressRpcPacketsGen } from "../../../../VTOLLiveViewerCommon/dist/compression/vtcompression.js";
import { EventEmitter } from "../../../../VTOLLiveViewerCommon/dist/eventEmitter.js";
import { RPCController, RPCPacket } from "../../../../VTOLLiveViewerCommon/dist/rpc.js";
import { VTGRHeader } from "../../../../VTOLLiveViewerCommon/dist/shared.js";
import { IS_DEV, STORAGE_URL } from "../../config";
import { Application } from "../app";
import { PlayerVehicle } from "../entities/playerVehicle";
import { replaceRPCHandlers } from "./rpcReverseHandlers";

const REPLAY_SPEEDS = [-1024, -512, -256, -128, -64, -32, -16, -8, -4, -2, -1, -0.5, 0, 0.5, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
const HEADER_LENGTH = 0; // "REPLAY".length;
type RPCPacketT = RPCPacket & { timestamp: number };

const ALLOW_RUN_WHILE_LOADING = true;
const VALIDATE_NO_REPEAT = IS_DEV;

class ReplayController extends EventEmitter<"replay_bytes" | "replay_chunk"> {
	private replayPackets: RPCPacketT[] = [];
	private groupedReplayPackets: RPCPacketT[][] = [];
	public netInstantiatePackets: Record<string, RPCPacketT> = {};
	public netDestroyPackets: Record<string, RPCPacketT> = {};

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

	private executedRpcs: Set<number> = new Set();
	public currentlyExecutingRpc: RPCPacketT | null = null; // For debug
	public customStartTime = 0;

	public get computedReplaySpeed(): number {
		return REPLAY_SPEEDS[this.replaySpeed];
	}

	public get maxReplaySpeed(): number {
		return REPLAY_SPEEDS[REPLAY_SPEEDS.length - 1];
	}

	constructor(public app: Application) {
		super();
	}

	public isFastForwarding(): boolean {
		return this.customStartTime !== 0;
	}

	public runReplay(expectedDt: number): number {
		if (!this.isReadyToRun) return expectedDt;

		if (expectedDt > 1000) {
			console.warn(`Expected dt excessive ${expectedDt}`);
			expectedDt = 1000 / 60;
		}
		const oldReplayCurrentTime = this.replayCurrentTime;
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
				// Do not emit the buffering message if we are fast forwarding through a replay
				if (!this.isFastForwarding()) {
					this.app.emit("error_message", `Buffering. Wait a moment then increase the replay speed`);
				}
				this.replayCurrentTime = oldReplayCurrentTime;
				return 0;
			} else if (this.computedReplaySpeed > 0) {
				console.log(`Replay has ended`);
				this.replaySpeed = REPLAY_SPEEDS.indexOf(0);
				this.app.emit("error_message", `End of replay file`);
			}
		}

		if (this.replayCurrentTime < 0) {
			this.replaySpeed = REPLAY_SPEEDS.indexOf(0);
			this.replayCurrentTime = 0;
		}

		const inTimeframePackets = packets.filter(packet => this.packetIsInTimeframe(packet));
		// if (this.computedReplaySpeed > 0)
		// console.log(`Between ${this.prevReplayTime} and ${this.replayCurrentTime} there are ${inTimeframePackets.length} packets`);

		// const start = Date.now();
		this.runReplayOnPackets(inTimeframePackets);
		// const end = Date.now();
		// if (end - start > 100) {
		// this.app.emit("error_message", `Replay took ${end - start}ms to run`);
		// console.log(`Long replay exec time, took ${end - start}ms for ${inTimeframePackets.length} packets`);
		// this.replaySpeed = REPLAY_SPEEDS.indexOf(0);
		// }

		this.prevReplayTime = this.replayCurrentTime;
		// If we have a custom start time set, then speed up replay until we meet that time
		if (this.isFastForwarding()) {
			if (this.replayCurrentTime < this.customStartTime) {
				// If we are before the custom start time - set replay speed to max
				this.replaySpeed = REPLAY_SPEEDS.length - 1;
				console.log("Speeding up to replay start time at speed: " + this.replaySpeed);
			} else {
				// If we are after custom replay time - stop replay and reset custom start time
				this.customStartTime = 0;
				this.replaySpeed = REPLAY_SPEEDS.indexOf(1);
				let urlParams = new URLSearchParams(window.location.search);
				if (urlParams.has("id")) {
					const focusTarget = parseInt(urlParams.get("id"));
					const entity = this.app.entities.find(e => e.id===focusTarget);
					if (entity) {
						entity.focus();
					}
				}
				console.log("Replay start time reached, setting speed to " + this.replaySpeed);
			}
		}
		// If the replay is faster than 8x, disable all interpolation
		if (this.computedReplaySpeed > 8) {
			return 0;
		}
		return expectedDt * this.computedReplaySpeed;
	}

	private runReplayOnPackets(packets: RPCPacketT[]) {
		const resultPackets: RPCPacketT[] = [];
		packets.forEach(packet => {
			if (this.computedReplaySpeed < 0) {
				if (VALIDATE_NO_REPEAT) this.executedRpcs.delete(packet.pid as number);

				const handler = replaceRPCHandlers.find(h => {
					let classNameMatch = h.className == null || h.className == packet.className;
					let methodMatch = h.method == null || h.method == packet.method;

					return classNameMatch && methodMatch;
				});
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
				if (VALIDATE_NO_REPEAT) {
					if (this.executedRpcs.has(packet.pid as number)) {
						console.error(`PACKET EXECUTED TWICE!! (${packet.pid}) ${packet.className}.${packet.method}`);
					}
					this.executedRpcs.add(packet.pid as number);
				}
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
			this.currentlyExecutingRpc = packet;
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
		const rpcGen = decompressRpcPacketsGen(Buffer.from(bytes));

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

			if (rpc.className == "MessageHandler" && rpc.method == "NetInstantiate") this.netInstantiatePackets[rpc.args[0]] = rpc;
			if (rpc.className == "MessageHandler" && rpc.method == "NetDestroy") this.netDestroyPackets[rpc.args[0]] = rpc;

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
		this.emit("replay_chunk");

		if (this.hasReceivedAllBytes && this.replayChunkQueue.length == 0) {
			this.hasLoadedEntireReplay = true;
			console.log(`Loaded entire replay`);
			this.app.emit("success_message", `Loaded entire replay`);
		}

		setTimeout(() => this.handleReplayChunk(), 1000 / 60);
	}

	private isPlayerVehicleSpawn(rpc: RPCPacket) {
		if (rpc.className != "MessageHandler" || rpc.method != "NetInstantiate") return false;
		const [id, ownerId, path, pos, rot, active] = rpc.args;
		return PlayerVehicle.spawnFor.includes(path);
	}

	public requestReplay(replayId: string, onProgress?: (progress: number) => void) {
		this.app.client.unsubscribeFromLiveLobbyList();
		this.app.gameList.forEach(g => RPCController.deregister(g));
		this.app.gameList = [];
		console.log(`Unsubscribed from live lobbies`);

		this.app.client.on("replay_header", (header: VTGRHeader) => this.handleHeader(header));
		this.app.client.replayGame(replayId);

		return new Promise<void>(res => {
			this.replayDataReceived = 0;
			this.loadingResolver = res;

			this.on("replay_bytes", (chunk: Uint8Array) => {
				this.replayDataReceived += chunk.length - HEADER_LENGTH;
				if (this.replayDataReceived == this.app.client.expectedReplaySize) {
					this.finishReceivingData();
				}
				if (onProgress) onProgress(this.replayDataReceived / this.app.client.expectedReplaySize);
			});

			this.on("replay_chunk", () => {
				if (this.replayDataReceived == this.app.client.expectedReplaySize && this.totalChunksFullyProcessed >= this.header.chunks.length * 0.05) {
					res();
				}
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
			// console.log(`New replay speed: ${this.computedReplaySpeed}x`);
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
