import Archiver from "archiver";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import { RawPlayerInfo, Team, Vector3, VTGRDataChunk, VTGRHeader } from "vtol-live-viewer-shared";
import { compressRpcPackets } from "vtol-live-viewer-shared/dist/compression/compress.js";
import { RPCPacket } from "vtol-live-viewer-shared/dist/rpc.js";
import { DebugLine, DebugSphere, MessageHandler, MissileEntity, PlayerVehicle, VTOLLobby } from "vtol-live-viewer-shared/dist/rpcApi.js";
import { Vector } from "vtol-live-viewer-shared/dist/vector.js";

import { readBinaryRecording } from "./binaryRecording.js";
import { EntityEvent, EventType } from "./events.js";
import { Logger } from "./logger.js";

export interface KinematicData {
	position: Vector3;
	velocity: Vector3;
	rotation: Vector3;
	pyr: Vector3;
	throttle: number;
	fuel: number;
	entityId: number;
}

export interface RecordedFrame {
	motion: KinematicData[];
	events: EntityEvent[];
	logs: string[];
	time: number;
}

const lobbyName = `AIPSim`;
const missionId = `aip-sim`;
const missionName = `AIPSim Mission`;

class Converter {
	private rpcs: RPCPacket[] = [];
	private time: number = 0;

	private messageHandler: MessageHandler;
	private lobby: VTOLLobby;
	private entities: Record<number, PlayerVehicle | MissileEntity | DebugLine | DebugSphere> = {};
	private previousFuelValues: Record<number, number> = {};

	public constructor(private logger: Logger) {}

	private loadFrames(inputFile: string) {
		try {
			const content = fs.readFileSync(inputFile, "utf-8").split("\n");
			const data: RecordedFrame[] = content.filter(l => l != "").map(line => JSON.parse(line));
			return data;
		} catch (error) {
			console.log(`JSON parse failed, trying binary format`);
			const content = fs.readFileSync(inputFile, "binary");
			return readBinaryRecording(content);
		}
	}

	public convert(inputFile: string, mapPath: string) {
		const data = this.loadFrames(inputFile);
		this.logger.log(`Loaded ${data.length} frames from ${inputFile}`);

		const lobbyId = (Math.random() * 1e9).toFixed(0);
		this.lobby = new VTOLLobby(lobbyId, this.onRpc.bind(this));
		this.messageHandler = new MessageHandler(lobbyId, this.onRpc.bind(this));

		// Load names of entities

		const playerInfos: RawPlayerInfo[] = [];
		const initEvents = data.flatMap(frame => frame.events.filter(e => e.type == EventType.EntityInit));
		initEvents.forEach(init => {
			const playerInfo: RawPlayerInfo = {
				steamId: init.entityId.toString(),
				entityId: init.entityId,
				pilotName: init.name,
				slot: -1,
				unitId: -1,
				team: init.team
			};

			playerInfos.push(playerInfo);
		});

		this.logger.log(`Generated ${playerInfos.length} player infos`);

		this.lobby.UpdateMissionInfo(lobbyName, missionId, ``, ``, ``, false);
		this.lobby.UpdateLobbyInfo(lobbyName, missionName, 0, 0, false, false, playerInfos, `host`);

		data.forEach(frame => this.handleFrame(frame));

		const vtgr = this.buildVtgrFile(lobbyId, mapPath);
		return vtgr;
	}

	private handleEvent(event: EntityEvent) {
		switch (event.type) {
			case EventType.EntityInit: {
				const isAircraft = event.path.startsWith("Vehicles/");
				const ctor = isAircraft ? PlayerVehicle : MissileEntity;
				const entity = new ctor(event.entityId, this.onRpc.bind(this));

				this.logger.log(`Instantiating entity ${event.entityId} of type ${ctor.name} at path ${event.path}`);

				this.messageHandler.NetInstantiate(event.entityId, event.entityId.toString(), event.path, new Vector(), new Vector(), true);
				this.entities[event.entityId] = entity;
				break;
			}
			case EventType.EntityDelete: {
				this.messageHandler.NetDestroy(event.entityId);
				delete this.entities[event.entityId];
				this.logger.log(`Destroyed entity ${event.entityId}`);
			}
			case EventType.Flare:
			case EventType.Chaff: {
				const entity = this.entities[event.entityId];
				if (!entity) {
					this.logger.log(`Entity ${event.entityId} not found for chaff event`);
					return;
				}

				(entity as PlayerVehicle).FireCMS();
				break;
			}
			case EventType.DebugLine:
				const line = this.getOrSpawnDebugLine(event.id);
				if (event.start) line.SetStart(event.start);
				if (event.end) line.SetEnd(event.end);
				if (event.color) line.SetColor(this.colorToInt(event.color));
				break;
			case EventType.DebugSphere:
				const sphere = this.getOrSpawnDebugSphere(event.id);
				if (event.pos) sphere.SetPosition(event.pos);
				if (event.size) sphere.SetScale(event.size);
				if (event.color) sphere.SetColor(this.colorToInt(event.color));
				break;
			case EventType.RemoveDebugShape:
				const entityToRemove = this.entities[event.id];
				if (!entityToRemove) {
					this.logger.log(`Entity ${event.id} not found for debug shape removal`);
					return;
				}
				(entityToRemove as DebugLine | DebugSphere).Hide();
				break;

			default:
				this.logger.log(`Unhandled event type: ${EventType[event.type]} (${event.type})`);
		}
	}

	private colorToInt(color: { r: number; g: number; b: number }): number {
		return (Math.floor(color.r * 255) << 16) | (Math.floor(color.g * 255) << 8) | Math.floor(color.b * 255);
	}

	private getOrSpawnDebugLine(id: number): DebugLine {
		let entity = this.entities[id] as DebugLine;
		if (!entity) {
			entity = new DebugLine(id, this.onRpc.bind(this));
			this.messageHandler.CreateDebugLine(id);
			this.entities[id] = entity;
		}

		return entity;
	}

	private getOrSpawnDebugSphere(id: number): DebugSphere {
		let entity = this.entities[id] as DebugSphere;
		if (!entity) {
			entity = new DebugSphere(id, this.onRpc.bind(this));
			this.messageHandler.CreateDebugSphere(id);
			this.entities[id] = entity;
		}

		return entity;
	}

	private handleFrame(frame: RecordedFrame) {
		this.time = frame.time;

		frame.events.forEach(event => this.handleEvent(event));

		frame.motion.forEach(motion => {
			const entity = this.entities[motion.entityId];
			if (!entity) {
				this.logger.log(`Entity ${motion.entityId} not found for aircraft update`);
				return;
			}

			switch (entity.constructor) {
				case PlayerVehicle:
					(entity as PlayerVehicle).UpdateData(motion.position, motion.velocity, new Vector(), motion.rotation, motion.throttle, false, motion.pyr);
					const shouldRecordFuel = !this.previousFuelValues[entity.id] || Math.floor(motion.fuel * 100) != this.previousFuelValues[entity.id];
					if (shouldRecordFuel) {
						(entity as PlayerVehicle).SetFuel(0, motion.fuel);
						this.previousFuelValues[entity.id] = Math.floor(motion.fuel * 100);
					}
					break;
				case MissileEntity:
					(entity as MissileEntity).SyncShit(motion.position, motion.rotation, motion.velocity, new Vector());
					break;
				default:
					throw new Error(`Unknown entity type: ${entity.constructor.name}`);
			}
		});
	}

	private buildVtgrFile(lobbyId: string, mapPath: string) {
		const chunkedRpcs: RPCPacket[][] = [];
		let current30SecondWindow: RPCPacket[] = [];
		let windowStartTime = 0;
		this.rpcs.forEach(rpc => {
			const deltaT = rpc.timestamp - windowStartTime;
			if (deltaT > 30 * 1000) {
				if (current30SecondWindow.length > 0) {
					chunkedRpcs.push(current30SecondWindow);
					current30SecondWindow = [];
				}

				windowStartTime = rpc.timestamp;
			}

			current30SecondWindow.push(rpc);
		});

		if (current30SecondWindow.length > 0) chunkedRpcs.push(current30SecondWindow);

		this.logger.log(`Chunked RPCs into ${chunkedRpcs.length} windows`);

		const compressedData = chunkedRpcs.map(chunk => compressRpcPackets(chunk, true));

		let curLen = 0;
		const chunkLengths: VTGRDataChunk[] = compressedData.map(data => {
			const chunk = {
				start: curLen,
				length: data.length
			};

			curLen += data.length;

			return chunk;
		});

		const buffer = Buffer.allocUnsafe(curLen);
		let offset = 0;
		compressedData.forEach(data => {
			Buffer.from(data).copy(buffer, offset);
			offset += data.length;
		});

		const recordingId = uuidv4();
		const header: VTGRHeader = {
			id: recordingId,
			includesMission: true,
			isConvertedVtr: true,
			chunks: chunkLengths,
			info: {
				lobbyId: lobbyId,
				lobbyName: lobbyName,
				missionName: missionName,
				missionId: missionId,
				hostName: "host",
				hostId: "0",
				missionInfo: {
					name: missionName,
					id: missionId,
					campaignId: "",
					workshopId: "",
					mapId: "",
					isBuiltin: false,

					spawns: [],
					allUnitSpawns: [],
					waypoints: [],
					bullseye: {
						[Team.A]: -1,
						[Team.B]: -1,
						[Team.Unknown]: -1
					},
					alliedUnitGroupIds: {},
					enemyUnitGroupIds: {}
				},
				campaignId: "",
				workshopId: "",
				map: "",
				recordingId: recordingId,
				duration: this.time,
				startTime: 0
			}
		};

		const archive = Archiver("zip");
		archive.append(JSON.stringify(header), { name: "header.json" });
		for (let i = 0; i < 4; i++) {
			const mapImagePath = `${mapPath}/height${i}.png`;
			const heightmap = fs.readFileSync(mapImagePath, "binary");
			archive.append(Buffer.from(heightmap, "binary"), { name: `map_${i}.png` });
		}
		archive.append(buffer, { name: "data.bin" });

		archive.finalize();

		return archive;
	}

	private onRpc<T = unknown>(className: string, method: string, id: string | number, args: any[], classObj: T) {
		// this.logger.log(`(${id}) ${className}.${method}(${args.join(", ")})`);
		this.rpcs.push({
			className: className,
			method: method,
			args: args,
			id: id.toString(),
			timestamp: this.time
		});
	}
}

export { Converter };
