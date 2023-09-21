/* eslint-disable @typescript-eslint/no-empty-function */

// Connection failed recieved on client but no err message

import Stats from "stats.js";
import * as THREE from "three";

import { decompressRpcPackets } from "../../../VTOLLiveViewerCommon/dist/src/compression/vtcompression";
import { EventEmitter } from "../../../VTOLLiveViewerCommon/dist/src/eventEmitter.js";
import { EnableRPCs, RPC, RPCController, RPCPacket } from "../../../VTOLLiveViewerCommon/dist/src/rpc.js";
import { AssignID, MissionInfo, PacketType, Team, Vector3, VTOLLobby } from "../../../VTOLLiveViewerCommon/dist/src/shared.js";
import { IVector3, Vector } from "../../../VTOLLiveViewerCommon/dist/src/vector";
import { API_URL, IS_DEV, WS_URL } from "../config";
import { EventBus } from "../eventBus";
import { Client } from "./client/client";
import { getLoggedInUser, isLoggedIn, readUserKey } from "./client/cookies";
import { AIAirVehicle } from "./entities/aiAirVehicle";
import { AIGroundUnit } from "./entities/aiGroundUnit";
import { MissileEntity } from "./entities/genericMissileEntity";
import { GunEntity } from "./entities/gunEntity";
import { HardpointEntity } from "./entities/hardpointEntity";
import { PlayerVehicle } from "./entities/playerVehicle";
import { Entity } from "./entityBase/entity";
import { BulletManager } from "./managers/bulletManager";
import { FlareManager } from "./managers/flareManager";
import { LSOManager } from "./managers/lsoManager";
import { SceneManager } from "./managers/sceneManager";
import { MapLoader } from "./map/mapLoader";
import { MeshLoader } from "./meshLoader/meshLoader";
import { ReplayController } from "./replay/replayController";
import { Marker, MarkerType } from "./sprite/marker";
import { mark } from "./threeUtils";

const rad = (deg: number): number => (deg * Math.PI) / 180;
const deg = (rad: number): number => (rad * 180) / Math.PI;

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
	admin = "admin",
	running = "running",
	lobbyEnd = "lobby_end"
}

const stateChangeMap = {
	"/lobbies": ApplicationRunningState.lobbySelect,
	"/replay": ApplicationRunningState.replaySelect,
	"/admin": ApplicationRunningState.admin
};

interface LogMessage {
	message: string;
	timestamp: number;
	id: number;
}
let logMessageId = 0;

// Master application class, singleton
@EnableRPCs("singleInstance")
class Application extends EventEmitter<"running_state" | "replay_mode" | "client_id" | "unit_scale"> {
	private container: HTMLDivElement;
	public messageHandler: MessageHandler;
	public client: Client;
	public sceneManager = new SceneManager(this);
	private mapLoader = new MapLoader(this.sceneManager);
	public replayController: ReplayController = new ReplayController(this);
	public meshLoader: MeshLoader = new MeshLoader();
	public bulletManager: BulletManager;
	public flareManager: FlareManager;
	public lsoManager: LSOManager;

	public isReplay = false;
	public get timeDirection(): number {
		if (!this.isReplay) return 1;
		return this.replayController.computedReplaySpeed >= 0 ? 1 : -1;
	}
	public get time(): number {
		if (this.isReplay) return this.replayController.replayCurrentTime;
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
	private timeouts: { func: () => void; startAt: number; time: number }[] = [];

	private isUiHidden = false;
	public isTextOverlayHidden = false;
	private _isLsoMode = false;
	public get isLsoMode() {
		return this._isLsoMode;
	}
	public set isLsoMode(val: boolean) {
		this._isLsoMode = val;
		EventBus.$emit("lso-mode", val);
	}

	private prevFrameTime = Date.now();
	// Any entity that can be spawned must be added to this list
	private spawnables = [PlayerVehicle, AIAirVehicle, MissileEntity, GunEntity, AIGroundUnit, HardpointEntity];

	public static get instance() {
		if (this._instance) return this._instance;
		this._instance = new Application();
		this._instance.init();
		return this._instance;
	}
	private static _instance: Application;

	public static state: ApplicationRunningState = ApplicationRunningState.welcome;
	public state: ApplicationRunningState = ApplicationRunningState.welcome;

	constructor() {
		console.log(`Application constructor called`);
		super();
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
		console.log(`Application init called`);
		this.socket = new WebSocket(WS_URL);
		await new Promise<void>(res => {
			this.socket.onopen = () => {
				console.log(`Websocket connected!`);
				res();
			};
			this.socket.onclose = () => console.log(`Websocket disconnected`);
			this.socket.onerror = e => console.log(`Websocket error: `, e);
			this.socket.onmessage = (message: MessageEvent) => this.handleWSMessage(message);
		});

		RPCController.init(packet => {
			const pckt = {
				...packet,
				type: PacketType.rpcPacket
			};
			this.socket.send(JSON.stringify(pckt));
		});

		// }
		const pathnames = Object.keys(stateChangeMap) as (keyof typeof stateChangeMap)[];
		pathnames.forEach(pathname => {
			if (window.location.pathname.startsWith(pathname)) {
				Application.setState(stateChangeMap[pathname]);
			}
		});

		// const user = getLoggedInUser();
		// if (user) {
		// 	const daysTillExpire = (((user.exp ?? 0) * 1000) - Date.now()) / 1000 / 60 / 60 / 24;
		// 	if (daysTillExpire < 7) {
		// 		window.location.assign(REFRESH_URL);
		// 	}
		// }

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
		this.lsoManager = new LSOManager(this);
		this.lsoManager.init();

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

			console.log(
				`Euler: (${deg(euler.x).toFixed(3)}, ${deg(euler.y).toFixed(3)}, ${deg(euler.z).toFixed(3)})  Quat: (${q.x.toFixed(3)}, ${q.y.toFixed(
					3
				)}, ${q.z.toFixed(3)} ${q.w.toFixed(3)})`
			);

			mesh.setRotationFromQuaternion(q);
		});
	}

	// Sets up a testing scene with a const iety of entities
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

		// const aircraft4 = new AIAirVehicle(this);
		// aircraft4.spawn(id++, "0", "Units/Allied/KC-49", new Vector(-40, 0, 0), new Vector(0, 0, 0), true);
		// aircraft4.UpdateData(new Vector(0, 0, 0), new Vector(0, 0, 10), new Vector(0, 0, 0), new Vector(0, 0, 0));
		// await aircraft4.spawn(id++, "0", "Vehicles/F117", new Vector(0, 0, 0), new Vector(0, 0, 0));
		this.entities.push(aircraft, aircraft2, aircraft3); //aircraft4

		const missile = new MissileEntity(this);
		missile.spawn(id++, "0", "Weapons/Missiles/AGM-145", new Vector(-20, 0, 0), new Vector(0, 0, 0));
		await missile.SyncShit(new Vector(-20, 0, 0), new Vector(0, 0, 0), new Vector(0, 0, 50), new Vector(0, 0, 0));
		this.entities.push(missile);

		const patriot = new AIGroundUnit(this);
		patriot.spawn(id++, "0", "Units/Allied/AlliedBackstopSAM", new Vector(40, 0, 0), new Vector(0, 0, 0), true);
		this.entities.push(patriot);

		for (let i = 0; i < 1; i++) {
			const ai = new AIGroundUnit(this);
			ai.spawn(
				id++,
				"0",
				"Units/Enemy/EnemySoldier",
				new Vector(Math.cos(rad(i) * 4) * 100 * (1 + i / 100), 0, Math.sin(rad(i) * 4) * 100 * (1 + i / 100)),
				new Vector(0, 0, 0),
				true
			);
			this.entities.push(ai);
		}

		const carrier = new AIGroundUnit(this);
		await carrier.spawn(id++, "0", "Units/Allied/AlliedCarrier", new Vector(-200, 0, 0), new Vector(0, -45, 0), true);
		this.entities.push(carrier);

		const landingAircraft = new PlayerVehicle(this);
		await landingAircraft.spawn(id++, "0", "Vehicles/FA-26B", new Vector(0, 0, 0), new Vector(0, 0, 0), true);
		landingAircraft.UpdateData(new Vector(-338, 45, -124), new Vector(0, 0, 0), new Vector(0, 0, 0), new Vector(0, -10, 0), 0);
		this.entities.push(landingAircraft);

		const waypointMarker = new Marker(MarkerType.Waypoint, "Waypoint", new Vector(0, 50, 0), this);
		const gpsMarker = new Marker(MarkerType.GPSPoint, "GPS", new Vector(-10, 50, 0), this);
		const bullsMarker = new Marker(MarkerType.Bullseye, "Bullseye", new Vector(10, 50, 0), this);

		const cam = this.sceneManager.cameraController.fakeCamera;
		setTimeout(async () => {
			// cam.position.set(-2, 57, -90);
			// carrier.focus();

			aircraft2.focus();
			// aircraft2.UpdateData(new Vector(20, 0, 0), new Vector(0, 0, 1000), new Vector(0, 0, 0), new Vector(0, 0, 0), 0);
			console.log(`Test post-load setup!`);
			this.messageHandler.NetInstantiate(id++, "0", "HPEquips/AFighter/fa26_gun", new Vector(0, 0, 0), new Vector(0, 0, 0), true);

			missile.setUnitId(100);
			let r = 0;
			setInterval(() => {
				aircraft.UpdateData(new Vector(0, 0, 0), new Vector(0, 0, 0), new Vector(0, 0, 0), new Vector(r--, 0, 0), 0);
				// landingAircraft.UpdateData(new Vector(-180 - r / 5, 70, -1000), new Vector(0, 0, 0), new Vector(0, 0, 0), new Vector(0, -10, 0), 0);
				carrier.UpdateData(new Vector(-200, 0, 0), new Vector(0, 0, 0), new Vector(0, 0, 0), new Vector(0, r-- / 10, 0));
				// this.testRotate(carrier.position, carrier.rotation);
			}, 0);

			aircraft.SetLock(100, true);
			// aircraft4.UpdateData(new Vector(0, 0, 0), new Vector(0, 0, 10), new Vector(0, 0, 0), new Vector(0, 0, 0));
			this.lsoManager.enableLSO(carrier);
			this.lsoManager.trackAircraft(landingAircraft);
		}, 250);
	}

	testPt = mark(5, 0xff0000);
	added = false;
	testPtParent = new THREE.Object3D();
	private testRotate(pos: Vector, rot: Vector) {
		if (!this.added) {
			this.testPtParent.add(this.testPt);
			this.sceneManager.scene.add(this.testPtParent);
			this.added = true;
		}

		this.testPtParent.position.copy(pos.to(THREE.Vector3));

		const cosa = Math.cos(rot.x);
		const sina = Math.sin(rot.x);

		const cosb = Math.cos(rot.y);
		const sinb = Math.sin(rot.y);

		const cosc = Math.cos(rot.z);
		const sinc = Math.sin(rot.z);

		const Axx = cosa * cosb;
		const Axy = cosa * sinb * sinc - sina * cosc;
		const Axz = cosa * sinb * cosc + sina * sinc;

		const Ayx = sina * cosb;
		const Ayy = sina * sinb * sinc + cosa * cosc;
		const Ayz = sina * sinb * cosc - cosa * sinc;

		const Azx = -sinb;
		const Azy = cosb * sinc;
		const Azz = cosb * cosc;

		const x = 50;
		const y = 50;
		const z = 0;

		this.testPt.position.set(Axx * x + Axy * y + Axz * z, Ayx * x + Ayy * y + Ayz * z, Azx * x + Azy * y + Azz * z);
	}

	// private async loadTestHSData() {
	// 	await this.start();

	// 	await this.mapLoader.loadHeightmapFromMission({
	// 		campaignId: "mp_pvpscenarios",
	// 		id: "airshowFreeflight",
	// 		isBuiltin: true,
	// 		mapId: "hMap2",
	// 		name: "BVR",
	// 		workshopId: "built-in"
	// 	});

	// 	this.game = new VTOLLobby("0");
	// 	this.game.players.push({
	// 		entityId: 1,
	// 		pilotName: "Chase",
	// 		slot: 0,
	// 		steamId: "0",
	// 		team: Team.A,
	// 		unitId: 0
	// 	});
	// 	this.messageHandler = new MessageHandler(this.game.id, this);

	// 	const victimAIMesh = new THREE.InstancedMesh(
	// 		new THREE.SphereGeometry(200),
	// 		new THREE.MeshBasicMaterial({ color: "#0000FF" }),
	// 		kills.length
	// 	);
	// 	const victimBIMesh = new THREE.InstancedMesh(
	// 		new THREE.SphereGeometry(200),
	// 		new THREE.MeshBasicMaterial({ color: "#0000FF" }),
	// 		kills.length
	// 	);

	// 	const killIMesh = new THREE.InstancedMesh(
	// 		new THREE.SphereGeometry(200),
	// 		new THREE.MeshBasicMaterial({ color: "#FF0000" }),
	// 		kills.length
	// 	);

	// 	console.log(kills.length);

	// 	kills.forEach((kill, idx) => {
	// 		if (!kill.killerPosition || !kill.victimPosition) return;
	// 		if (kill.killerPosition.x == 0 && kill.killerPosition.y == 0 && kill.killerPosition.z == 0) return;
	// 		if (kill.victimPosition.x == 0 && kill.victimPosition.y == 0 && kill.victimPosition.z == 0) return;

	// 		const victimPos = new THREE.Vector3(-kill.victimPosition.x, kill.victimPosition.y, kill.victimPosition.z);
	// 		const victimMatrix = new THREE.Matrix4().setPosition(victimPos);
	// 		if (kill.victimTeam == 0) victimAIMesh.setMatrixAt(idx, victimMatrix);
	// 		if (kill.victimTeam == 1) victimBIMesh.setMatrixAt(idx, victimMatrix);

	// 		const killerPos = new THREE.Vector3(-kill.killerPosition.x, kill.killerPosition.y, kill.killerPosition.z);
	// 		const killerMatrix = new THREE.Matrix4().setPosition(killerPos);
	// 		killIMesh.setMatrixAt(idx, killerMatrix);

	// 		// // Create a line between the two;
	// 		// const lineGeo = new THREE.BufferGeometry().setFromPoints([victimPos, killerPos]);
	// 		// const lineMat = new THREE.LineBasicMaterial({ color: "#FFFFFF", opacity: 0.25, transparent: true });
	// 		// const line = new THREE.Line(lineGeo, lineMat);
	// 		// line.name = "Line";
	// 		// this.sceneManager.add(line);
	// 	});

	// 	victimAIMesh.name = "Victims";
	// 	victimBIMesh.name = "Victims";
	// 	killIMesh.name = "Killers";

	// 	this.sceneManager.add(victimAIMesh);
	// 	this.sceneManager.add(victimBIMesh);
	// 	this.sceneManager.add(killIMesh);
	// }

	private run(): void {
		this.stats.begin();

		const d = Date.now();
		let dt = d - this.prevFrameTime;
		if (this.isReplay) {
			dt = this.replayController.runReplay(dt);
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
		this.lsoManager.update(dt);
		this.runTimeouts();

		this.sceneManager.run();
		this.sceneManager.postFrame();

		// Track websocket usage
		if (debug_ws_usage && this.tick++ % 60 == 0) {
			const dBytes = this.bytes - this.lBytes;
			const dMessages = this.messages - this.lMessages;
			console.log(
				`Messages: ${this.messages} Bytes: ${(this.bytes / 1000).toFixed(0)}kb. Delta Messages: ${dMessages} Delta Bytes: ${(dBytes / 1000).toFixed(
					0
				)}kb. RPCs per packet: ${(this.rpcs / this.messages).toFixed(2)}`
			);
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
				if (!this.game) {
					// Make sure we didn't get a game in the meantime
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
	public requestJoinLobby(id: string) {}

	@RPC("out")
	public requestJoinPrivateLobby(id: string, password: string) {}

	@RPC("out")
	public genNewAlphaKey(key: string, adminPassword: string) {}

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

	public setFocusImmediately(entity: Entity): void {
		if (this.isLsoMode) {
			this.isLsoMode = false;
			this.lsoManager.disableLSO();
		}

		console.log(`Setting focus to ${entity}`);
		EventBus.$emit("focused-entity", entity);
		if (this.currentFocus && this.currentFocus != entity) {
			// Remove parenting from whatever we are currently focused on
			const camPos = this.sceneManager.camera.getWorldPosition(new THREE.Vector3());
			this.currentFocus.object.remove(this.sceneManager.camera);
			this.sceneManager.cameraController.set(camPos);
		}

		this.currentFocus = entity;

		const camPos = this.sceneManager.camera.getWorldPosition(new THREE.Vector3());
		camPos.subVectors(camPos, new THREE.Vector3(entity.position.x, entity.position.y, entity.position.z));
		this.sceneManager.cameraController.set(camPos);
		this.sceneManager.cameraController.orbit.target.set(0, 0, 0);
		entity.object.add(this.sceneManager.camera);
	}

	public setFocusTo(entity: Entity): void {
		if (this.isLsoMode) {
			this.isLsoMode = false;
			this.lsoManager.disableLSO();
		}

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
		this.sceneManager.cameraController.lerpCamTo(entity.position.x, entity.position.y, entity.position.z, () => {
			const camPos = this.sceneManager.camera.getWorldPosition(new THREE.Vector3());
			camPos.subVectors(camPos, new THREE.Vector3(entity.position.x, entity.position.y, entity.position.z));
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

		this.game.on("lobby_restart", async () => {
			console.log(`Lobby restarting, waiting for new connection...`);
			const conRes = await this.game.waitForConnectionResult();
			location.reload();
		});

		this.game.on("log_message", (msg: string) => {
			this.addLogMessage(msg);
		});
		const rpcMissionInfo = await this.game.waitForMissionInfo();
		const campaignId = rpcMissionInfo.isBuiltin ? rpcMissionInfo.campaignId : rpcMissionInfo.workshopId;
		const fullMissionInfo = await this.getMissionInfoFromAPI(campaignId, rpcMissionInfo.id);
		this.meshLoader.prepareIMeshCounts(fullMissionInfo.allUnitSpawns);
		this.mapLoader.loadHeightmapFromMission(rpcMissionInfo);
		this.loadMarkers(fullMissionInfo);
	}

	public async loadMarkers(missionInfo: MissionInfo) {
		missionInfo?.waypoints.forEach(wp => {
			let wpType = MarkerType.Waypoint;
			if (wp.id == missionInfo.bullseye[Team.A] || wp.id == missionInfo.bullseye[Team.B]) {
				wpType = MarkerType.Bullseye;
			}

			const marker = new Marker(wpType, wp.name, new Vector(-wp.position.x, wp.position.y, wp.position.z), this);
			marker.init();
		});
	}

	private async getMissionInfoFromAPI(workshopId: string, missionId: string) {
		const req = await fetch(`${API_URL}/workshop/mission?workshopId=${encodeURIComponent(workshopId)}&missionId=${encodeURIComponent(missionId)}`);
		const missionInfo = (await req.json()) as MissionInfo;
		return missionInfo;
	}

	public async beginReplay(lobbyId: string) {
		let game = this.gameList.find(g => g.id == lobbyId);
		if (!game) {
			// TODO: Research this more, seems like sometimes we have an existing game entry? Inconsistent behavior bad
			console.warn(`Unable to find game with ID ${lobbyId}`);
			game = new VTOLLobby(lobbyId);
		}
		this.game = game;
		this.isReplay = true;
		this.emit("replay_mode", true);
		this.messageHandler = new MessageHandler(lobbyId, this);
		await this.start();

		this.replayController.beginReplay();

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

	public packets: RPCPacket[] = [];

	private async handleWSMessage(message: MessageEvent) {
		this.messages++;

		if (typeof message.data == "string") {
			this.bytes += message.data.length;
			const packet = JSON.parse(message.data) as AssignID | RPCPacket;

			if ("type" in packet && packet.type == PacketType.assignId) {
				this.client = new Client(packet.id);

				// If we have an alpha key, lets send it now that we have our ID
				// const alphaKey = getCookie("alpha_key");
				// if (IS_ALPHA) {
				// 	if (alphaKey) {
				// 		console.log(`Sending alpha key`);
				// 		this.client.setAlphaKey(alphaKey);
				// 	} else if (Application.state == ApplicationRunningState.lobbySelect
				// 		&& IS_ALPHA
				// 		&& !getCookie("alpha_key")) {
				// 		const key = prompt("Enter alpha key:");
				// 		if (!key) {
				// 			return;
				// 		}
				// 		Application.instance.client.setAlphaKey(key);
				// 	}
				// }

				if (isLoggedIn()) {
					this.client.setUser(readUserKey() as string);
					const user = getLoggedInUser();
					console.log(`Sending user key. Current scopes: ${user?.scopes.join(", ")}`);
				}

				console.log(`Received client ID: ${this.client.id}`);
				this.emit("client_id", this.client.id);
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
				this.replayController.handleReplayBytes(bytes);
			} else {
				RPCController.handlePacket(bytes);
				const rpcs = decompressRpcPackets([...bytes]);
				this.rpcs += rpcs.length;
			}
		}
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

		if (e.key == "ArrowLeft" || e.key == "ArrowRight") {
			this.replayController.handleArrowKey(e.key);
		}
	}

	private addLogMessage(message: string) {
		console.log(`[GAME] ${message}`);
		this.logMessages.push({ message, timestamp: this.time, id: logMessageId++ });
		EventBus.$emit("log-messages", this.logMessages);
	}

	private addWindowEventHandlers(): void {
		window.addEventListener("resize", () => this.handleResize());
		window.addEventListener("dblclick", e => this.handleMouseClick(e));
		window.addEventListener("keydown", e => this.handleKeyDown(e));
		// window.addEventListener("keyup", (e) => this.handleKeyUp(e));
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
