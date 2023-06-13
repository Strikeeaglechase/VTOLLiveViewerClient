/* eslint-disable @typescript-eslint/no-empty-function */

import Stats from "stats.js";
import * as THREE from "three";

import {
	decompressRpcPackets
} from "../../../VTOLLiveViewerCommon/dist/src/compression/vtcompression";
import { getCookie } from "../../../VTOLLiveViewerCommon/dist/src/cookieHelper";
import {
	EnableRPCs, RPC, RPCController, RPCPacket
} from "../../../VTOLLiveViewerCommon/dist/src/rpc.js";
import {
	AssignID, Client, PacketType, Team, Vector3, VTOLLobby
} from "../../../VTOLLiveViewerCommon/dist/src/shared.js";
import { IVector3, Vector } from "../../../VTOLLiveViewerCommon/dist/src/vector";
import { IS_ALPHA, IS_DEV, WS_URL } from "../config";
import { EventBus } from "../eventBus";
import { AIAirVehicle } from "./entities/aiAirVehicle";
import { AIGroundUnit } from "./entities/aiGroundUnit";
import { MissileEntity } from "./entities/genericMissileEntity";
import { GunEntity } from "./entities/gunEntity";
import { HardpointEntity } from "./entities/hardpointEntity";
import { PlayerVehicle } from "./entities/playerVehicle";
import { Entity } from "./entityBase/entity";
import { BulletManager } from "./managers/bulletManager";
import { FlareManager } from "./managers/flareManager";
import { SceneManager } from "./managers/sceneManager";
import { MapLoader } from "./map/mapLoader";
import { MeshLoader } from "./meshLoader/meshLoader";
import { kills } from "./testData";

const REPLAY_SPEEDS = [-8, -4, -2, -1, -0.5, 0, 0.5, 1, 2, 4, 8, 16, 32];

const rad = (deg: number): number => deg * Math.PI / 180;
const deg = (rad: number): number => rad * 180 / Math.PI;

const ftToMi = (ft: number): number => ft / 6076.12;
const miToFt = (mi: number): number => mi * 6076.12;

const mToFt = (m: number): number => m * 3.28084;
const ftToM = (ft: number): number => ft / 3.28084;

const msToKnots = (ms: number): number => ms * 1.94384;
const knotsToMs = (knots: number): number => knots / 1.94384;
const lerp = (a: number, b: number, t: number): number => a + (b - a) * t;

const vec = (vector: IVector3) => `${vector.x.toFixed(2)}, ${vector.y.toFixed(2)}, ${vector.z.toFixed(2)}`;

function addCommas(num: number) {
	const str = num.toString().split(".");
	str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return str.join(".");
}

const debug_ws_usage = false;

// MessageHandler is a class within HC, this wrapper handles its RPCs
@EnableRPCs("instance")
class MessageHandler {
	constructor(public id: string, private app: Application) { }

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
		console.log(`Got despawn for ${entity}`);
		entity.remove(`NetDestroy command`);
	}

	@RPC("in")
	SetEntityUnitID(entityId: number, unitId: number) {
		const entity = this.app.entities.find(e => e.id == entityId);
		if (entity) entity.setUnitId(unitId);
	}
}

enum ApplicationRunningState {
	welcome = "welcome",
	lobbySelect = "lobby_select",
	replaySelect = "replay_select",
	running = "running",
	lobbyEnd = "lobby_end",
}

interface ReplaceRPCHandler {
	className: string;
	method: string;
	handler: (app: Application, rpc: RPCPacket) => boolean | RPCPacket;
}

interface LogMessage {
	message: string;
	timestamp: number;
	id: number;
}
let lmId = 0;

// Handles "undoing" RPCs when the replay is running in reverse
// Can return false to prevent the RPC from executing, or can return a different RPC to execute
const replaceRPCHandlers: ReplaceRPCHandler[] = [
	{
		className: "MessageHandler",
		method: "NetInstantiate",
		handler: (app: Application, rpc: RPCPacket) => {
			const [id, ownerId, path, pos, rot, active] = rpc.args;
			console.log(`Reversing NetInstantiate for ${id}`);
			app.messageHandler.NetDestroy(id);
			return false;
		}
	},
	{
		className: "MessageHandler",
		method: "NetDestroy",
		handler: (app: Application, rpc: RPCPacket) => {
			const [id] = rpc.args;
			console.log(`Reversing NetDestroy for ${id}`);
			const spawnPacket = app.replayPackets.find(p => p.className == "MessageHandler" && p.method == "NetInstantiate" && p.args[0] == id);
			if (!spawnPacket) console.error(`Attempting to undo net destroy for ${id} but no spawn packet found`);
			else return spawnPacket;
			return false;
		}
	},
	{
		className: "MissileEntity",
		method: "Detonate",
		handler: (app: Application, rpc: RPCPacket) => {
			console.log(`Reversing Detonate for missile ${rpc.id}`);
			const spawnPacket = app.replayPackets.find(p => p.className == "MessageHandler" && p.method == "NetInstantiate" && p.args[0] == rpc.id);
			if (!spawnPacket) console.error(`Attempting to undo detonate for ${rpc.id} but no spawn packet found`);
			else return spawnPacket;
			return false;
		}
	},
	{
		className: "PlayerVehicle",
		method: "SetLock",
		handler: (app: Application, rpc: RPCPacket) => {
			console.log(`Reversing SetLock for ${rpc.id} -> ${rpc.args[0]} (was ${rpc.args[1]})`);
			const rpcCopy = JSON.parse(JSON.stringify(rpc));
			rpcCopy.args[1] = !rpcCopy.args[1];
			return rpcCopy;
		}
	},
	{
		className: "VTOLLobby",
		method: "LogMessage",
		handler: (app: Application, rpc: RPCPacket) => {
			let removeIndex = -1;
			for (let i = app.logMessages.length - 1; i >= 0; i--) {
				if (app.logMessages[i].message == rpc.args[0]) {
					removeIndex = i;
					break;
				}
			}

			if (removeIndex == -1) {
				console.warn(`Attempting to undo log message ${rpc.args[0]} but no message found`);
			} else {
				app.logMessages.splice(removeIndex, 1);
			}
		}
	}
];

// Master application class, singleton
@EnableRPCs("singleInstance")
class Application {
	private container: HTMLDivElement;
	public messageHandler: MessageHandler;
	public client: Client;
	public sceneManager = new SceneManager(this);
	private mapLoader = new MapLoader(this.sceneManager);
	public meshLoader: MeshLoader = new MeshLoader();
	public bulletManager: BulletManager;
	public flareManager: FlareManager;

	// TODO: Move replay to its own class
	public replayPackets: RPCPacket[] = [];
	private groupedReplayPackets: RPCPacket[][] = [];
	private onReplayChunk: (() => void) | null = null;
	public isReplay = false;
	public replayStartTime = 0;
	private currentReplayChunkReceive = 0;
	private replayCurrentTime = 0;
	private prevReplayTime = 0;
	private firstRealReplayDataTime = 0;
	private replaySpeed = 7;
	private isInReplaySetup = false;
	private onTimeFlipHandlers: ((newDir: number) => void)[] = [];
	private previousReplayTimeDirection = 1;
	// private packetHits: Record<number, { hits: number, time: number; hitTimes: number[][]; }> = {};
	public get computedReplaySpeed(): number {
		return REPLAY_SPEEDS[this.replaySpeed];
	}
	public get timeDirection(): number {
		if (!this.isReplay) return 1;
		return this.computedReplaySpeed >= 0 ? 1 : -1;
	}
	public get time(): number {
		if (this.isReplay) return this.replayCurrentTime;
		return Date.now();
	}
	public static get time() {
		return this.instance.time;
	}

	public entities: Entity[] = [];
	private entitiesByOwner: Record<string, Entity[]> = {};
	private entitiesToDelete: Entity[] = [];
	public logMessages: LogMessage[] = [];

	private stats = new Stats();
	public currentFocus: Entity | null = null;
	public gameList: VTOLLobby[] = [];
	public game: VTOLLobby;
	public socket: WebSocket;
	private timeouts: { func: () => void; startAt: number; time: number; }[] = [];

	private isUiHidden = false;
	public isTextOverlayHidden = false;

	private prevFrameTime = Date.now();
	// Any entity that can be spawned must be added to this list
	private spawnables = [PlayerVehicle, AIAirVehicle, MissileEntity, GunEntity, AIGroundUnit, HardpointEntity];

	public static instance: Application;
	public static state: ApplicationRunningState = ApplicationRunningState.welcome;
	public state: ApplicationRunningState = ApplicationRunningState.welcome;

	private static onClientIdEvents: (() => void)[] = [];
	private static hasGotClientId = false;
	public static onClientId(cb: () => void) {
		if (this.hasGotClientId) cb();
		else this.onClientIdEvents.push(cb);
	}

	constructor() {
		Application.instance = this;
		this.container = document.getElementById("main-container") as HTMLDivElement;
		this.handleResize();
		this.addWindowEventHandlers();

		setInterval(() => this.alwaysRun(), 1000 / 60);
	}

	public static setState(state: ApplicationRunningState) {
		if (state == ApplicationRunningState.lobbySelect && location.pathname == "/replay") {
			state = ApplicationRunningState.replaySelect;
			console.log(`Switching to replay select state rather than regular lobby select`);
		}

		Application.state = state;
		Application.instance.state = state;
		EventBus.$emit("state", state);
		console.log(`New application state: ${state}`);
	}

	public async init(): Promise<void> {
		this.socket = new WebSocket(WS_URL);
		await new Promise<void>(res => {
			this.socket.onopen = () => {
				console.log(`Websocket connected!`);
				res();
			};
			this.socket.onclose = () => console.log(`Websocket disconnected`);
			this.socket.onerror = (e) => console.log(`Websocket error: `, e);
			this.socket.onmessage = (message: MessageEvent) => this.handleWSMessage(message);

		});

		RPCController.init((packet) => {
			const pckt = {
				...packet,
				type: PacketType.rpcPacket
			};
			this.socket.send(JSON.stringify(pckt));
		});

		if (window.location.pathname.startsWith("/lobbies")) {
			Application.setState(ApplicationRunningState.lobbySelect);
		} else if (window.location.pathname.startsWith("/replay")) {
			Application.setState(ApplicationRunningState.replaySelect);
		}


		// EventBus.$emit("state", this.state);

		// console.log(`Calling Application.onLoad for ${Application.onLoad.length} events`);
		// Application.onLoadEvents.forEach(f => f(this));
		// Application.onLoadEvents = [];
		// Application.hasLoaded = true;

		// Some testing utilities
		// Testing heightmap

		// this.loadTestHSData();
		// this.offlineTestSetup();
		// this.quickTestSetup();

		// EventBus.$emit("app", this);

	}

	public async start() {
		console.log(`Application is starting!`);
		await this.sceneManager.init(this.container);
		this.bulletManager = new BulletManager(this.sceneManager);
		this.flareManager = new FlareManager(this.sceneManager);

		this.stats.showPanel(0);
		document.body.appendChild(this.stats.dom);
		this.stats.dom.classList.add("ui");

		Application.setState(ApplicationRunningState.running);

		this.run();
	}

	// Small/often changed test method
	private quickTestSetup() {
		const mat = new THREE.MeshPhongMaterial({ color: "#990000" });
		const geo = new THREE.BoxGeometry(10, 10, 10);
		const mesh = new THREE.Mesh(geo, mat);

		const euler = new THREE.Euler(rad(-42), rad(26), rad(80)); // YXZ ? What does unity use?

		// const quat = new THREE.Quaternion().setFromEuler(new THREE.Euler(euler.x, -euler.y, -euler.z));
		// quat.y *= -1;
		// quat.z *= -1;

		// console.log(`Euler: (${euler.x.toFixed(3)}, ${euler.y.toFixed(3)}, ${euler.z.toFixed(3)})  Quat: (${quat.x.toFixed(3)}, ${quat.y.toFixed(3)}, ${quat.z.toFixed(3)} ${quat.w.toFixed(3)})`);

		mesh.name = "Test";
		// mesh.setRotationFromQuaternion(quat);
		mesh.position.set(5, 0, 10);
		this.sceneManager.add(mesh);

		const cam = this.sceneManager.cameraController.fakeCamera;
		setTimeout(async () => {
			cam.position.set(-2, 57, -90);
		}, 250);

		setInterval(() => {
			euler.x += 0.01;
			euler.y += 0.01;
			const quat = new THREE.Quaternion().setFromEuler(new THREE.Euler(euler.x, euler.y, euler.z, "YXZ"));
			const q = new THREE.Quaternion(quat.x, quat.y, quat.z, quat.w);

			console.log(`Euler: (${deg(euler.x).toFixed(3)}, ${deg(euler.y).toFixed(3)}, ${deg(euler.z).toFixed(3)})  Quat: (${q.x.toFixed(3)}, ${q.y.toFixed(3)}, ${q.z.toFixed(3)} ${q.w.toFixed(3)})`);

			mesh.setRotationFromQuaternion(q);
		});
	}

	// Sets up a testing scene with a variety of entities
	private async offlineTestSetup() {
		await this.start();
		this.game = new VTOLLobby("0");
		this.game.players.push({
			entityId: 1,
			pilotName: "Chase",
			slot: 0,
			steamId: "0",
			team: Team.A,
			unitId: 0
		});
		this.messageHandler = new MessageHandler(this.game.id, this);

		let id = 1;
		const aircraft = new PlayerVehicle(this);
		await aircraft.spawn(id++, "0", "Vehicles/FA-26B", new Vector(0, 0, 0), new Vector(0, 0, 0), true);
		aircraft.UpdateData(new Vector(0, 0, 0), new Vector(0, 0, 0), new Vector(0, 0, 0), new Vector(0, 0, 0), 0);

		const aircraft2 = new PlayerVehicle(this);
		await aircraft2.spawn(id++, "0", "Vehicles/SEVTF", new Vector(20, 0, 0), new Vector(0, 0, 0), true);

		const aircraft3 = new PlayerVehicle(this);
		await aircraft3.spawn(id++, "0", "Vehicles/VTOL4", new Vector(-20, 0, 10000), new Vector(0, 0, 0), true);

		const aircraft4 = new AIAirVehicle(this);
		aircraft4.spawn(id++, "0", "Units/Allied/KC-49", new Vector(-40, 0, 0), new Vector(0, 0, 0), true);
		aircraft4.UpdateData(new Vector(0, 0, 0), new Vector(0, 0, 10), new Vector(0, 0, 0), new Vector(0, 0, 0));
		// await aircraft4.spawn(id++, "0", "Vehicles/F117", new Vector(0, 0, 0), new Vector(0, 0, 0));
		this.entities.push(aircraft, aircraft2, aircraft3, aircraft4);

		const missile = new MissileEntity(this);
		missile.spawn(id++, "0", "Weapons/Missiles/AGM-145", new Vector(-20, 0, 0), new Vector(0, 0, 0));
		await missile.SyncShit(new Vector(-20, 0, 0), new Vector(0, 0, 0), new Vector(0, 0, 50), new Vector(0, 0, 0));
		this.entities.push(missile);

		const patriot = new AIGroundUnit(this);
		patriot.spawn(id++, "0", "Units/Allied/AlliedBackstopSAM", new Vector(40, 0, 0), new Vector(0, 0, 0), true);
		this.entities.push(patriot);

		for (let i = 0; i < 1; i++) {
			const ai = new AIGroundUnit(this);
			ai.spawn(id++, "0", "Units/Enemy/EnemySoldier", new Vector(Math.cos(rad(i) * 4) * 100 * (1 + i / 100), 0, Math.sin(rad(i) * 4) * 100 * (1 + i / 100)), new Vector(0, 0, 0), true);
			this.entities.push(ai);
		}

		const carrier = new AIGroundUnit(this);
		await carrier.spawn(id++, "0", "Units/Allied/AlliedCarrier", new Vector(-200, 0, 0), new Vector(0, 0, 0), true);
		this.entities.push(carrier);


		const cam = this.sceneManager.cameraController.fakeCamera;
		setTimeout(async () => {
			cam.position.set(-2, 57, -90);
			aircraft.focus();
			console.log(`Test post-load setup!`);
			this.messageHandler.NetInstantiate(id++, "0", "HPEquips/AFighter/fa26_gun", new Vector(0, 0, 0), new Vector(0, 0, 0), true);

			missile.setUnitId(100);
			let r = 0;
			setInterval(() => {
				aircraft.UpdateData(new Vector(0, 0, 0), new Vector(0, 0, 0), new Vector(0, 0, 0), new Vector(r--, 0, 0), 0);
			}, 0);

			aircraft.SetLock(100, true);
			// aircraft4.UpdateData(new Vector(0, 0, 0), new Vector(0, 0, 10), new Vector(0, 0, 0), new Vector(0, 0, 0));
		}, 250);
	}

	private async loadTestHSData() {
		await this.start();

		await this.mapLoader.loadHeightmapFromMission({
			campaignId: "mp_pvpscenarios",
			id: "airshowFreeflight",
			isBuiltin: true,
			mapId: "hMap2",
			name: "BVR",
			workshopId: "built-in"
		});

		this.game = new VTOLLobby("0");
		this.game.players.push({
			entityId: 1,
			pilotName: "Chase",
			slot: 0,
			steamId: "0",
			team: Team.A,
			unitId: 0
		});
		this.messageHandler = new MessageHandler(this.game.id, this);

		const victimAIMesh = new THREE.InstancedMesh(
			new THREE.SphereGeometry(200),
			new THREE.MeshBasicMaterial({ color: "#0000FF" }),
			kills.length
		);
		const victimBIMesh = new THREE.InstancedMesh(
			new THREE.SphereGeometry(200),
			new THREE.MeshBasicMaterial({ color: "#0000FF" }),
			kills.length
		);

		const killIMesh = new THREE.InstancedMesh(
			new THREE.SphereGeometry(200),
			new THREE.MeshBasicMaterial({ color: "#FF0000" }),
			kills.length
		);


		console.log(kills.length);

		kills.forEach((kill, idx) => {
			if (!kill.killerPosition || !kill.victimPosition) return;
			if (kill.killerPosition.x == 0 && kill.killerPosition.y == 0 && kill.killerPosition.z == 0) return;
			if (kill.victimPosition.x == 0 && kill.victimPosition.y == 0 && kill.victimPosition.z == 0) return;

			const victimPos = new THREE.Vector3(-kill.victimPosition.x, kill.victimPosition.y, kill.victimPosition.z);
			const victimMatrix = new THREE.Matrix4().setPosition(victimPos);
			if (kill.victimTeam == 0) victimAIMesh.setMatrixAt(idx, victimMatrix);
			if (kill.victimTeam == 1) victimBIMesh.setMatrixAt(idx, victimMatrix);

			const killerPos = new THREE.Vector3(-kill.killerPosition.x, kill.killerPosition.y, kill.killerPosition.z);
			const killerMatrix = new THREE.Matrix4().setPosition(killerPos);
			killIMesh.setMatrixAt(idx, killerMatrix);

			// // Create a line between the two;
			// const lineGeo = new THREE.BufferGeometry().setFromPoints([victimPos, killerPos]);
			// const lineMat = new THREE.LineBasicMaterial({ color: "#FFFFFF", opacity: 0.25, transparent: true });
			// const line = new THREE.Line(lineGeo, lineMat);
			// line.name = "Line";
			// this.sceneManager.add(line);
		});

		victimAIMesh.name = "Victims";
		victimBIMesh.name = "Victims";
		killIMesh.name = "Killers";

		this.sceneManager.add(victimAIMesh);
		this.sceneManager.add(victimBIMesh);
		this.sceneManager.add(killIMesh);
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

	private runReplay(expectedDt: number): number {
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

	private run(): void {
		this.stats.begin();

		const d = Date.now();
		let dt = d - this.prevFrameTime;
		if (this.isReplay && !this.isInReplaySetup) {
			dt = this.runReplay(dt);
		}
		this.prevFrameTime = d;

		this.entities.forEach(entity => {
			try {
				if (entity.isActive) entity.update(dt);
				else entity.runInactiveUpdate(dt);
			} catch (e) {
				console.error(`Exception in entity update for ${entity}`);
				throw e;
			}
		});

		this.entitiesToDelete.forEach(entity => {
			console.log(`Finalizing entity delete ${entity}`);
			const idx = this.entities.indexOf(entity);
			if (idx == -1) {
				console.error(`Entity to delete not found in entities list!`);
				return;
			}
			this.entities.splice(idx, 1);

			const ownerIdx = this.entitiesByOwner[entity.ownerId]?.indexOf(entity);
			if (ownerIdx == -1 || ownerIdx == undefined) {
				console.error(`Entity to delete not found in entitiesByOwner list!`);
				return;
			}
			this.entitiesByOwner[entity.ownerId].splice(ownerIdx, 1);
		});
		this.entitiesToDelete = [];

		this.bulletManager.update(dt);
		this.flareManager.update(dt);
		this.runTimeouts();

		this.sceneManager.run();
		this.sceneManager.postFrame();


		// Track websocket usage
		if (debug_ws_usage && this.tick++ % 60 == 0) {
			const dBytes = this.bytes - this.lBytes;
			const dMessages = this.messages - this.lMessages;
			console.log(`Messages: ${this.messages} Bytes: ${(this.bytes / 1000).toFixed(0)}kb. Delta Messages: ${dMessages} Delta Bytes: ${(dBytes / 1000).toFixed(0)}kb. RPCs per packet: ${(this.rpcs / this.messages).toFixed(2)}`);
			this.lBytes = this.bytes;
			this.lMessages = this.messages;
		}

		this.stats.end();
		requestAnimationFrame(() => this.run());
	}

	private alwaysRun(): void {
		let didRemove = false;
		this.gameList = this.gameList.filter(g => {
			if (!g.isOpen) didRemove = false;
			return g.isOpen;
		});

		if (didRemove) {
			EventBus.$emit("lobbies", this.gameList);
		}
	}

	@RPC("in")
	public CreateLobby(id: string) {
		if (this.gameList.find(g => g.id == id)) {
			console.log(`Game ${id} already exists!`);
			return;
		}
		this.gameList.push(new VTOLLobby(id));
		EventBus.$emit("lobbies", this.gameList);

		if (IS_DEV && !this.game) {
			setTimeout(() => {
				if (!this.game) { // Make sure we didn't get a game in the meantime
					const validGame = this.gameList.find(g => g.isConnected);
					if (validGame) {
						console.log(`Dev connecting to game ${validGame.name} (${validGame.id})`);
						this.subscribe(validGame);
					}
				}
			}, 250);
		}
	}

	@RPC("out")
	public requestJoinLobby(id: string) { }

	@RPC("out")
	public requestJoinPrivateLobby(id: string, password: string) { }

	@RPC("out")
	public genNewAlphaKey(key: string, adminPassword: string) { }

	@RPC("in")
	public SyncLobbies(ids: string[]) {
		const closedGames = this.gameList.filter(g => !ids.includes(g.id));
		closedGames.forEach(game => {
			console.warn(`Game ${game.id} (${game.name}) closed, but we didn't get a notification!`);
			game.isOpen = false;
		});
	}

	private addEntity(entity: Entity): void {
		if (this.entities.includes(entity)) {
			console.error(`Entity ${entity} already exists in entities list!`);
			console.log(entity);
		}

		if (this.entities.some(e => e.id == entity.id)) {
			console.error(`Duplicate entity id ${entity.id}!`);
			console.log(entity);
		}

		this.entities.push(entity);

		if (!this.entitiesByOwner[entity.ownerId]) this.entitiesByOwner[entity.ownerId] = [];
		this.entitiesByOwner[entity.ownerId].push(entity);
		EventBus.$emit("entities", this.entities);
	}

	public setFocusTo(entity: Entity): void {
		console.log(`Setting focus to ${entity}`);
		EventBus.$emit("focused-entity", entity);
		if (this.currentFocus && this.currentFocus != entity) {
			// Remove parenting from whatever we are currently focused on
			const camPos = this.sceneManager.camera.getWorldPosition(new THREE.Vector3());
			this.currentFocus.object.remove(this.sceneManager.camera);
			this.sceneManager.cameraController.set(camPos);
		}

		this.currentFocus = entity;

		// This bullshit is to parent the camera to the entity
		this.sceneManager.cameraController.lerpCamTo(
			entity.position.x,
			entity.position.y,
			entity.position.z,
			() => {
				const camPos = this.sceneManager.camera.getWorldPosition(new THREE.Vector3());
				camPos.subVectors(camPos, new THREE.Vector3(
					entity.position.x,
					entity.position.y,
					entity.position.z,
				));
				this.sceneManager.cameraController.set(camPos);
				this.sceneManager.cameraController.orbit.target.set(0, 0, 0);
				entity.object.add(this.sceneManager.camera);
			});
	}

	public handleEntitySpawn(id: number, ownerId: string, path: string, position: Vector, rotation: Vector, isActive: boolean) {
		// Resolve the class that handles this type of entity 
		let EntityClass = null;
		for (let i = 0; i < this.spawnables.length; i++) {
			const eClass = this.spawnables[i];
			if (Array.isArray(eClass.spawnFor)) {
				const match = eClass.spawnFor.map(c => c.toLowerCase()).includes(path.trim().toLowerCase());
				if (match) {
					EntityClass = eClass;
					break;
				}
			}
		}

		if (EntityClass == null) {
			for (let i = 0; i < this.spawnables.length; i++) {
				const eClass = this.spawnables[i];
				if (!Array.isArray(eClass.spawnFor)) {
					const v = eClass.spawnFor.test(path.trim());
					if (v) {
						EntityClass = eClass;
						break;
					}
				}
			}
		}

		if (!EntityClass) {
			// We don't care about HPEquips and Rearm points so don't log errors for that
			if (!path.includes("Rearm")) console.error(`Unable to locate entity handler for ${path}`);
			return;
		}

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		// console.log(EntityClass.constructor.toString().match(/function (\w*)/)[1]);
		// console.log(`Entity net.prototype instantiate ${path} [${id}] owner: ${ownerId}. Entity: ${EntityClass}`);
		const entity = new EntityClass(this);
		entity.spawn(id, ownerId, path, position, rotation, isActive);
		console.log(`Entity ${entity} spawned as ${entity.__name}. Spawn as active: ${isActive}`);
		this.addEntity(entity);
	}

	// Sets the game we wish to view
	public async subscribe(gameRef: VTOLLobby | string) {
		if (Application.state != ApplicationRunningState.running) this.start();

		let game: VTOLLobby | string | undefined = gameRef;
		if (typeof game == "string") game = this.gameList.find(g => g.id == game);
		if (!game) throw new Error(`Cannot find game by ID: ${gameRef}`);

		this.entities.forEach(entity => entity.remove(`New subscription`));
		this.entities = [];
		if (this.messageHandler) RPCController.deregister(this.messageHandler);

		console.log(`Setting focused game to ${game.name} (${game.id})`);
		this.client.subscribe(game.id);
		this.game = game;
		this.messageHandler = new MessageHandler(game.id, this);
		this.game.onLobbyRestart = async () => {
			console.log(`Lobby restarting, waiting for new connection...`);
			const conRes = await this.game.waitForConnectionResult();
			location.reload();
		};
		this.game.onLogMessage = (msg: string) => {
			console.log(`[GAME] ${msg}`);
			this.addLogMessage(msg);
		};

		this.mapLoader.loadHeightmapFromMission(await this.game.waitForMissionInfo());
	}

	public requestReplay(replayId: string, onProgress?: (progress: number) => void) {
		this.client.replayGame(replayId);
		return new Promise<void>(res => {
			this.currentReplayChunkReceive = 0;
			this.onReplayChunk = () => {
				this.currentReplayChunkReceive++;
				if (this.currentReplayChunkReceive == this.client.expectedReplayChunks) {
					res();
					this.onReplayChunk = null;
				}
				if (onProgress) onProgress(this.currentReplayChunkReceive / this.client.expectedReplayChunks);
			};
		});
	}

	public async beginReplay(lobbyId: string) {
		console.log(`Beginning replay with ${this.replayPackets.length} packets`);
		this.isReplay = true;
		this.isInReplaySetup = true;
		if (this.replayPackets[0].timestamp == undefined) {
			console.error(`Replay packet 0 has no timestamp`);
			return;
		}
		this.replayStartTime = this.replayPackets[0].timestamp;
		this.replayCurrentTime = 0;
		this.messageHandler = new MessageHandler(lobbyId, this);
		let game = this.gameList.find(g => g.id == lobbyId);
		if (!game) {
			// TODO: Research this more, seems like sometimes we have an existing game entry? Inconsistent behavior bad
			console.warn(`Unable to find game with ID ${lobbyId}`);
			game = new VTOLLobby(lobbyId);
		}
		this.game = game;

		await this.start();

		let initPackets: RPCPacket[] = [];
		if (this.firstRealReplayDataTime != 0) {
			initPackets = this.replayPackets.filter(p => ((p.timestamp ?? Date.now()) - this.replayStartTime) < this.firstRealReplayDataTime);
		} else if (this.groupedReplayPackets[0]) {
			initPackets = this.groupedReplayPackets[0];
		}
		console.log(`Handling ${initPackets.length} init packets`);
		this.runReplayOnPackets(initPackets);
		// this.groupedReplayPackets[0] = []; So much debugging to find this line of code that was causing issues
		// Remove all initPackets so they don't get handled again
		// initPackets.forEach(p => {
		// 	const index = this.replayPackets.indexOf(p);
		// 	if (index > -1) this.replayPackets.splice(index, 1);
		// 	const timestampSeconds = Math.floor(p.timestamp ?? 0 / 1000);
		// 	const groupedPackets = this.groupedReplayPackets[timestampSeconds];
		// 	if (groupedPackets) {
		// 		const index = groupedPackets.indexOf(p);
		// 		if (index > -1) groupedPackets.splice(index, 1);
		// 	}
		// });

		console.log(`Waiting for mission info`);
		this.mapLoader.loadHeightmapFromMission(await this.game.waitForMissionInfo());
		console.log(`Got mission info!`);
		if (this.replayCurrentTime < this.firstRealReplayDataTime) {
			this.replayCurrentTime = this.firstRealReplayDataTime;
			console.log(`Skipping to first real replay data time: ${this.firstRealReplayDataTime}`);
		}

		console.log(`-- Replay fully loaded --`);
		this.isInReplaySetup = false;
	}

	private raycastEntitiesFromMouse(screenX: number, screenY: number, validEntities: Entity[]) {
		const raycaster = new THREE.Raycaster();
		const x = (screenX / window.innerWidth) * 2 - 1;
		const y = -(screenY / window.innerHeight) * 2 + 1;

		const mouse = new THREE.Vector2(x, y);
		raycaster.setFromCamera(mouse, this.sceneManager.camera);

		const entities = validEntities.map(entity => entity.getInteractionMesh()).filter(m => !!m);
		const intersections = raycaster.intersectObjects(entities);
		return intersections;
	}

	private handleMouseClick(e: MouseEvent) {
		if (Application.state != ApplicationRunningState.running) return;

		const validEntities = this.entities.filter(entity => entity.isActive);
		const intersections = this.raycastEntitiesFromMouse(e.clientX, e.clientY, validEntities);
		if (intersections.length > 0) {
			const entity = validEntities.find(e => e.isInteractionMesh(intersections[0].object, intersections[0].instanceId));
			if (entity) {
				entity.focus();
				return;
			}
		}

		this.sceneManager.overlayElements.forEach(elm => {
			if (elm.onDblClick && elm.isInBounds(e.clientX, e.clientY)) {
				elm.onDblClick(e);
			}
		});
	}

	// Websocket debug
	private messages = 0;
	private rpcs = 0;
	private bytes = 0;
	private lMessages = 0;
	private lBytes = 0;
	private tick = 0;
	private packetPid = 0;

	public packets: RPCPacket[] = [];

	private async handleWSMessage(message: MessageEvent) {
		this.messages++;

		if (typeof message.data == "string") {
			this.bytes += message.data.length;
			const packet = JSON.parse(message.data) as AssignID | RPCPacket;

			if ("type" in packet && packet.type == PacketType.assignId) {
				this.client = new Client(packet.id);

				// If we have an alpha key, lets send it now that we have our ID
				const alphaKey = getCookie("alpha_key");
				if (IS_ALPHA) {
					if (alphaKey) {
						console.log(`Sending alpha key`);
						this.client.setAlphaKey(alphaKey);
					} else if (Application.state == ApplicationRunningState.lobbySelect
						&& IS_ALPHA
						&& !getCookie("alpha_key")) {
						const key = prompt("Enter alpha key:");
						if (!key) {
							return;
						}
						Application.instance.client.setAlphaKey(key);
					}
				}

				console.log(`Received client ID: ${this.client.id}`);
				console.log(`Calling Application.onClientId with ${Application.onClientIdEvents.length} callbacks`);
				Application.onClientIdEvents.forEach(cb => cb());
				Application.onClientIdEvents = [];
				Application.hasGotClientId = true;
			} else {
				RPCController.handlePacket(packet as RPCPacket);
				this.rpcs++;
			}
		} else {
			const data = message.data as Blob;
			const bytes = new Uint8Array(await data.arrayBuffer());
			this.bytes += bytes.length;

			const headerBytes = bytes.slice(0, "REPLAY".length);
			const header = String.fromCharCode(...headerBytes);
			if (header == "REPLAY") {
				this.handleReplayChunk(bytes);
			} else {
				RPCController.handlePacket(bytes);
				const rpcs = decompressRpcPackets([...bytes]);
				this.rpcs += rpcs.length;
			}
		}
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

	public getEntityByUnitId(unitId: number) {
		return this.entities.find(e => e.unitId == unitId);
	}

	public getEntityById(id: number) {
		return this.entities.find(e => e.id == id);
	}

	public getEntityByPlayerName(name: string) {
		return this.entities.find(e => e.hasFoundValidOwner && e.owner.entityId == e.id && e.owner.pilotName == name);
	}

	public getEntitiesByOwnerId(id: string) {
		return this.entitiesByOwner[id] ?? [];
	}

	public finalDeleteEntity(entity: Entity) {
		this.entitiesToDelete.push(entity);
	}

	private handleResize(): void {
		this.sceneManager.handleResize();
	}

	private toggleUI() {
		this.isUiHidden = !this.isUiHidden;
		const elms = document.getElementsByClassName("ui");

		for (const e of elms) {
			const elm = e as HTMLDivElement;
			if (this.isUiHidden) {
				if (elm.style.display != "none") {
					elm.setAttribute("prev-display", elm.style.display);
					elm.style.display = "none";
				}
			} else {
				if (elm.style.display == "none") {
					elm.style.display = elm.getAttribute("prev-display") || "block";
				}
			}
		}
	}

	private toggleTextOverlay() {
		this.isTextOverlayHidden = !this.isTextOverlayHidden;
	}

	private handleKeyDown(e: KeyboardEvent) {
		if (Application.state != ApplicationRunningState.running) return;

		if (e.key == "f") this.toggleUI();
		if (e.key == "o") this.toggleTextOverlay();

		const prevReplay = REPLAY_SPEEDS[this.replaySpeed];
		if (e.key == "ArrowLeft") this.replaySpeed = Math.max(this.replaySpeed - 1, 0);
		if (e.key == "ArrowRight") this.replaySpeed = Math.min(this.replaySpeed + 1, REPLAY_SPEEDS.length - 1);

		if (prevReplay != this.computedReplaySpeed) {
			console.log(`New replay speed: ${this.computedReplaySpeed}x`);
		}
		// console.log(`Replay speed: ${REPLAY_SPEEDS[this.replaySpeed]}`);

		// if (prevReplay < 0 && this.computedReplaySpeed > 0) {
		// 	this.onTimeFlipHandlers.forEach(handler => handler(1));
		// }
		// 
		// if (prevReplay > 0 && this.computedReplaySpeed < 0) {
		// 	this.onTimeFlipHandlers.forEach(handler => handler(-1));
		// }
		if (this.computedReplaySpeed != 0) {
			if (this.timeDirection != this.previousReplayTimeDirection) {
				this.onTimeFlipHandlers.forEach(handler => handler(this.timeDirection));
				this.previousReplayTimeDirection = this.timeDirection;
			}
		}
	}

	private addLogMessage(message: string) {
		this.logMessages.push({ message, timestamp: this.time, id: lmId++ });
		EventBus.$emit("log-messages", this.logMessages);
	}

	private addWindowEventHandlers(): void {
		window.addEventListener("resize", () => this.handleResize());
		window.addEventListener("dblclick", (e) => this.handleMouseClick(e));
		window.addEventListener("keydown", (e) => this.handleKeyDown(e));
		// window.addEventListener("keyup", (e) => this.handleKeyUp(e));
	}

	public onTimeFlip(handler: (newDir: number) => void): void {
		this.onTimeFlipHandlers.push(handler);
	}

	private runTimeouts() {
		const now = Application.time;
		const timeouts = this.timeouts.filter(t => t.time + t.startAt <= now);
		timeouts.forEach(t => t.func());
		this.timeouts = this.timeouts.filter(t => t.time + t.startAt > now || now < t.startAt);
	}

	public setTimeout(handler: () => void, ms: number): void {
		this.timeouts.push({ func: handler, time: ms, startAt: Application.time });
	}
}

export { Application, ApplicationRunningState, LogMessage, deg, rad, mToFt, ftToMi, miToFt, ftToM, msToKnots, knotsToMs, lerp, vec, addCommas };