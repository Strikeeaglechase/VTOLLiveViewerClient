import * as THREE from "three";

import { RPCController } from "../../../../VTOLLiveViewerCommon/dist/rpc.js";
import { Player, Team, Vector3 } from "../../../../VTOLLiveViewerCommon/dist/shared.js";
import { Vector } from "../../../../VTOLLiveViewerCommon/dist/vector.js";
import { addCommas, Application, msToKnots, mToFt, rad } from "../app";
import { SceneManager } from "../managers/sceneManager";
import InstancedGroupMesh from "../meshLoader/instancedGroupMesh";
import { RadarCrossSection } from "../radarSim/radarCrossSection.js";
import { unitRCSs } from "../radarSim/rcsDefs.js";
import { TextOverlay } from "../textOverlayHandler";
import { EntityViewData } from "./entityViewData";
import { EquipManager } from "./equipManager";
import { RadarJammerSync } from "./jammer";
import { SimpleUnitTrail } from "./simpleUnitTrail";

const len = 7;
const wid = 4;
const hei = 3;

const damageFadeTime = 1000; // How long the damage fade box should stick around

export const teamColors: { r: number; g: number; b: number }[] = [];
const alphaChars = "abcdefghijklmnopqrstuvwxyz".split("");

teamColors[Team.A] = { r: 0, g: 100, b: 255 };
teamColors[Team.B] = { r: 255, g: 0, b: 0 };
teamColors[Team.Unknown] = { r: 255, g: 0, b: 0 };

const enable_debug_box = false;
const enable_debug_sphere = false;

export const MAX_OBJECT_SIZE = 1000; // Max scale-size an object can get in meters

type EntityConfig = Partial<{
	hasTrail: boolean;
	showInSidebar: boolean;
	showInBra: boolean;
	hasBaseLine: boolean;
	hasOverlay: boolean;
	useInstancedMesh: boolean;
	useHostTeam: boolean;
	onlyShowTypeOnOverlay: boolean;
	removeAfterDeath: boolean;
}>;

// Used for storing replay data, the entity class may be removed but this data should be kept
class PersistentEntityData {
	setActiveAt = 0;
	setInactiveAt = 0;
	setDeadAt = 0;
}

// Threejs objects, to prevent constant creation
const quat = new THREE.Quaternion();
const vec = new THREE.Vector3();
const euler = new THREE.Euler();

interface EntityReference {
	id: number;

	is(other: EntityReference): boolean;
}

class EntityReferenceOf implements EntityReference {
	public id: number;

	constructor(entity: Entity | number) {
		this.id = typeof entity == "number" ? entity : entity.id;
	}

	is(other: EntityReference) {
		return this.id == other.id;
	}
}

let nextEuid = 0;

class Entity implements EntityReference {
	static persistentData: Record<number, PersistentEntityData> = {};
	private get persistentData(): PersistentEntityData {
		if (!Entity.persistentData[this.id]) Entity.persistentData[this.id] = new PersistentEntityData();
		return Entity.persistentData[this.id];
	}

	public position: Vector = new Vector();
	public velocity: Vector = new Vector();
	public rotation: Vector = new Vector();
	public acceleration: Vector = new Vector();
	public id: number;
	public unitId: number;
	public type: string;
	public ownerId: string;
	public team: Team = Team.Unknown;
	public hasFoundValidOwner = false;
	public owner = Player.empty;
	public displayName: string;
	public jammers: RadarJammerSync[] = [];
	public view: EntityViewData = new EntityViewData();
	public heading: number = 0;

	private euid = nextEuid++;

	public is(other: EntityReference): boolean {
		return this.id == other.id;
	}
	public get ref(): EntityReference {
		return new EntityReferenceOf(this);
	}

	public gForce = 0;
	public maxGForce = 0;

	// Dims is likely unused/needs to be removed
	public dims = { len, wid, hei };
	public application: Application;
	public scene: SceneManager;
	public object: THREE.Object3D;
	public mesh: THREE.Mesh | THREE.Group;
	public meshProxyObject: THREE.Object3D;
	protected sasGeom: THREE.Group;

	private damage: {
		mesh: THREE.Mesh;
		geom: THREE.BoxGeometry;
		mat: THREE.MeshBasicMaterial;
		active: boolean;
		lastDamageAt: number;
	};

	private previousPosition: Vector = new Vector();
	private previousVelocity: Vector = new Vector();
	private previousScale = 0;

	public iMesh: InstancedGroupMesh;
	public iMeshId: number;
	protected iMeshOffsetObject: THREE.Object3D;

	private engineOffsets: Vector[] | null;

	protected _scale = 1;
	public set scale(scale: number) {
		const maxSetScale = MAX_OBJECT_SIZE / this.baseScaleSize;

		this._scale = Math.min(maxSetScale, Math.max(scale * this.scaleDamper, 1) * this.iMeshLoadScale);
		this.onScaleUpdate();
	}
	public get scale() {
		return this._scale;
	}
	protected scaleDamper = 1;
	protected iMeshLoadScale = 1;
	protected baseScaleSize: number;

	public get isFocus() {
		return this.app.currentFocus == this;
	}

	public get focusedOnParent() {
		if (!this.app.currentFocus) return false;
		if (!this.hasFoundValidOwner) return false;
		return this.app.currentFocus.id == this.owner.entityId;
	}

	get debugName() {
		return `${this.id} (${this.euid}) ${this.type} ${this.unitId ? "[" + this.unitId + "]" : ""}`;
	}

	// private setActiveAt: number;
	// private setInactiveAt: number;
	// private spawnAt: number;

	private _isActive = false;
	public set isActive(v: boolean) {
		this._isActive = v;
		console.log(`${this} is now ${v ? "active" : "inactive"}`);
	}
	public get isActive() {
		return this._isActive;
	}
	public get isActivating() {
		return !!this.activatingPromise;
	}
	private activatingPromise: Promise<void> | null = null;

	public hasDied = false;
	private deathTimerCancel: () => void;

	private baseLineGeom: THREE.BufferGeometry;
	private baseLine: THREE.Line;
	protected hasGotFirstPos = false;

	protected hasTrail = false;
	public showInSidebar = false;
	public showInBra = false;
	protected hasBaseLine = false;
	protected hasOverlay = true;
	protected onlyShowTypeOnOverlay = false;
	protected useInstancedMesh = false;
	protected useHostTeam = true;
	protected removeAfterDeath = false;

	private isCreatingMesh = false;
	public canShowAsEquip = true;

	protected trail: SimpleUnitTrail = new SimpleUnitTrail(this);
	public equipManager: EquipManager | null = new EquipManager(this);
	public rcs: RadarCrossSection = new RadarCrossSection(this, null);

	public static spawnFor: string[] | RegExp = [];

	protected boundingBox: THREE.Box3;
	protected debugBoxHelper: THREE.BoxHelper;

	protected textOverlay: TextOverlay;
	protected textOverlayHasHadFirstUpdate = false;

	public __name: string;

	constructor(public app: Application, config: EntityConfig = {}) {
		this.application = app;
		this.scene = app.sceneManager;

		this.hasTrail = config.hasTrail ?? this.hasTrail;
		this.showInSidebar = config.showInSidebar ?? this.showInSidebar;
		this.showInBra = config.showInBra ?? this.showInBra;
		this.hasBaseLine = config.hasBaseLine ?? this.hasBaseLine;
		this.hasOverlay = config.hasOverlay ?? this.hasOverlay;
		this.useInstancedMesh = config.useInstancedMesh ?? this.useInstancedMesh;
		this.useHostTeam = config.useHostTeam ?? this.useHostTeam;
		this.onlyShowTypeOnOverlay = config.onlyShowTypeOnOverlay ?? this.onlyShowTypeOnOverlay;
		this.removeAfterDeath = config.removeAfterDeath ?? this.removeAfterDeath;

		this.object = new THREE.Object3D();
		this.meshProxyObject = new THREE.Object3D();
		this.meshProxyObject.name = `${this} MeshProxyObject`;
		console.log(`Creating mesh proxy object for ${app.currentlySpawningId} on spawn, prox obj id: ${this.meshProxyObject.id}`);

		if (enable_debug_sphere) {
			this.meshProxyObject.add(new THREE.Mesh(new THREE.SphereGeometry(1, 16, 16), new THREE.MeshBasicMaterial({ color: "#FF0000" })));
		}

		this.object.add(this.meshProxyObject);

		// This is useful for debugging due to how the RPC decorator effects classname
		if (!this.__name) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			this.__name = this.__proto__.constructor.name;
		}
	}

	private setupDamageMesh() {
		const damageMat = new THREE.MeshBasicMaterial({
			// This could be pure white, subject to change
			color: new THREE.Color("#d1d1d1"),
			transparent: true,
			opacity: 0.5
		});
		const damageGeom = new THREE.BoxGeometry(10, 10, 10);
		this.damage = {
			mesh: new THREE.Mesh(damageGeom, damageMat),
			geom: damageGeom,
			mat: damageMat,
			active: false,
			lastDamageAt: 0
		};

		this.damage.mesh.name = `${this} Damage`;
		this.damage.mesh.visible = false;
		this.scene.add(this.damage.mesh);
	}

	private destroyDamageMesh() {
		this.scene.remove(this.damage.mesh);
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		this.damage = null;
		console.log(`Removed damage mesh for entity ${this}`);
	}

	protected async setInactive(reason: string) {
		console.log(`Setting ${this} inactive because ${reason}, time direction: ${this.app.timeDirection} inactive at: ${this.persistentData.setInactiveAt}`);
		if (!this.isActive) {
			console.warn(`${this} is already inactive`);
			return;
		}

		if (!this.persistentData.setInactiveAt && this.app.timeDirection == 1) this.persistentData.setInactiveAt = Application.time;

		// This causes a memory leak! We need to free the components, this may be important for replay.
		this.scene.remove(this.object);

		this.object = new THREE.Object3D();
		this.meshProxyObject = new THREE.Object3D();
		this.meshProxyObject.name = "Mesh Proxy Object";
		this.object.add(this.meshProxyObject);
		console.log(`Creating mesh proxy object for ${this.id} on setInactive, mesh prox obj id: ${this.meshProxyObject.id}`);

		// Often there will be a motion update this frame as well, so defer updating this value until next
		this.hasGotFirstPos = false;
		this.hasDied = false;
		this.isActive = false;

		if (this.textOverlay) {
			this.app.sceneManager.removeOverlay(this.textOverlay, this.textOverlay.cssObj);
			this.textOverlayHasHadFirstUpdate = false;
		}

		if (this.hasTrail) this.trail.remove();

		if (this.damage) this.destroyDamageMesh();
	}

	protected async setActive(reason: string) {
		console.log(`Setting ${this} active because ${reason}.`); // RPC Pid: ${this.app?.replayController.currentlyExecutingRpc?.pid}
		if (this.isActive) {
			console.warn(`Entity ${this} is already active`);
			return;
		}

		if (this.isActivating) {
			console.warn(`Entity ${this} is already activating`);
			return;
		}

		if (this.id == undefined) {
			console.warn(`Entity ${this} has no id when setActive was called`);
		}

		if (!this.persistentData.setActiveAt) this.persistentData.setActiveAt = Application.time; // If this is a replay, knowing when we were set active is important for undoing it

		// Some things might want to wait for active to become true, so create a promise they can wait for
		let res: () => void;
		this.activatingPromise = new Promise<void>(resolve => (res = resolve));

		if (!this.useInstancedMesh) await this.createMesh();
		else await this.createInstancedMesh();

		this.maybeCreateTextOverlay();

		if (this.mesh) this.mesh.name = `${this} Mesh`;
		this.object.name = `${this} Object`;
		// this.scene.add(this.object);
		// if (this.hasTrail) this.trail.init();
		this.isActive = true;

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		res();
		this.activatingPromise = null;
	}

	protected createDefaultMesh(): THREE.Group {
		console.warn(`Entity ${this} is using default mesh`);
		const base = new THREE.Shape([new THREE.Vector2(0, 0), new THREE.Vector2(-wid, -len), new THREE.Vector2(wid, -len)]);
		const top = new THREE.Shape([new THREE.Vector2(0, 0), new THREE.Vector2(len, hei), new THREE.Vector2(len, 0)]);

		const group = new THREE.Group();
		const mat = new THREE.MeshStandardMaterial({ color: "#00ff00", side: THREE.DoubleSide });
		group.add(new THREE.Mesh(new THREE.ShapeGeometry(base), mat));
		group.add(new THREE.Mesh(new THREE.ShapeGeometry(top), mat));
		group.children[0].rotateX(Math.PI / 2);
		group.children[1].rotateY(Math.PI / 2);

		if (this.hasBaseLine) this.createBaseLine();

		return group;
	}

	protected addObjectMeshToScene() {
		this.object.name = "Entity Mesh";
		this.scene.add(this.object);
	}

	protected async createInstancedMesh(): Promise<void> {
		const obj = await this.app.meshLoader.loadInstancedMesh(this.type);
		if (obj == null) {
			console.log(`Failed to load instanced mesh for ${this}, using non-instanced`);
			this.useInstancedMesh = false;
			return this.createMesh();
		}

		this.iMesh = obj.mesh;
		this.iMeshId = obj.id;

		// TODO: This code needs refactoring, why so many methods to get scales and what not? Should just return config object.
		// If there are mesh offsets, load them
		const iMeshOffsets = this.app.meshLoader.getOffsets(this.type);
		this.iMeshOffsetObject = new THREE.Object3D();
		if (iMeshOffsets.pos) this.iMeshOffsetObject.position.set(iMeshOffsets.pos.x, iMeshOffsets.pos.y, iMeshOffsets.pos.z);
		if (iMeshOffsets.rot) this.iMeshOffsetObject.rotation.set(iMeshOffsets.rot.x, iMeshOffsets.rot.y, iMeshOffsets.rot.z);

		this.meshProxyObject.add(this.iMeshOffsetObject);

		this.scaleDamper = this.app.meshLoader.getScaleDamper(this.type);
		this.iMeshLoadScale = this.app.meshLoader.getScale(this.type);
		this.engineOffsets = this.app.meshLoader.getEngineOffsets(this.type);

		this.boundingBox = this.app.meshLoader.getBoundingBox(this.type);
		this.baseScaleSize = this.boundingBox.min.distanceTo(this.boundingBox.max);

		// this.addObjectMeshToScene();
	}

	protected async createMesh(): Promise<void> {
		this.useInstancedMesh = false;
		if (this.isCreatingMesh) return;
		this.isCreatingMesh = true;

		let obj = await this.app.meshLoader.load(this.type);
		if (!obj) obj = this.createDefaultMesh();
		this.scaleDamper = this.app.meshLoader.getScaleDamper(this.type);
		this.boundingBox = new THREE.Box3();
		if (enable_debug_box) {
			// console.log(obj);
			this.debugBoxHelper = new THREE.BoxHelper(obj.children[0], 0x00ffff);
			this.debugBoxHelper.name = `Debug Box Helper`;
			this.scene.add(this.debugBoxHelper);
		}

		this.boundingBox.setFromObject(obj.children[0]);
		this.baseScaleSize = this.boundingBox.min.distanceTo(this.boundingBox.max);

		this.mesh = obj;
		this.meshProxyObject.add(this.mesh);

		this.addObjectMeshToScene();

		this.isCreatingMesh = false;
	}

	private maybeCreateTextOverlay() {
		if (!this.hasOverlay) return;
		const parent = this.useInstancedMesh ? this.object : this.mesh.children[0];

		this.textOverlay = new TextOverlay(parent, this.type).edit(this.id.toString()).offset(0, 10, 0).show();
		this.textOverlay.onDblClick = () => {
			this.focus();
		};
	}

	// Returns the object that should be used for raycasting
	public getInteractionMesh() {
		if (!this.isActive) {
			console.error(`GetInteractionMesh called on inactive entity ${this}`);
		}

		if (!this.useInstancedMesh) return this.mesh?.children[0];
		return this.iMesh;
	}

	// Checks if collidedMesh is a child of the object mesh
	public isInteractionMesh(collidedMesh: THREE.Object3D, instanceId: number | undefined, localMesh?: THREE.Object3D | InstancedGroupMesh): boolean {
		if (!localMesh) localMesh = this.getInteractionMesh();
		if (!localMesh) return false;

		if (localMesh.uuid == collidedMesh.uuid && this.iMeshId == instanceId) return true;
		if (!collidedMesh.parent) return false;
		return this.isInteractionMesh(collidedMesh.parent, instanceId, localMesh);
	}

	protected createBaseLine() {
		// Create the base line
		this.baseLineGeom = new THREE.BufferGeometry();
		const lineMat = new THREE.LineBasicMaterial({ color: "#AAAAAA" });
		this.baseLine = new THREE.Line(this.baseLineGeom, lineMat);
		this.baseLine.frustumCulled = false;
		this.baseLine.name = "Entity Base Lines";
		this.scene.add(this.baseLine);
	}

	public spawn(id: number, ownerId: string, path: string, position: Vector, rotation: Vector, isActive: boolean): void {
		this.position.set(-position.x, position.y, position.z);
		this.rotation.set(rotation.multiply(Math.PI / 180));
		this.id = id;
		this.type = path;
		this.ownerId = ownerId;
		this.displayName = Entity.identifierToDisplayName(this.type);

		// A sort of shitty way to tell if AI is allied or enemy, but it works
		if (path.includes("Allied")) this.setTeam(Team.A);
		if (path.includes("Enemy")) this.setTeam(Team.B);

		const unitDef = unitRCSs.find(u => u.path == this.type);
		if (unitDef) this.rcs = new RadarCrossSection(this, unitDef);

		this.tryFindOwner();
	}

	public setUnitId(uid: number) {
		this.unitId = uid;
		console.log(`Entity ${this} got unit ID ${this.unitId}`);
	}

	protected tryFindOwner(): void {
		if (this.hasFoundValidOwner) return;
		const owner = this.app.game?.players.find(p => p.steamId == this.ownerId);
		if (owner) {
			this.owner = owner;
			this.hasFoundValidOwner = true;
			if (this.useHostTeam) this.setTeam(owner.team);
		}
	}

	public focus() {
		this.app.setFocusTo(this);
	}

	protected onFirstPos() {
		console.log(`Entity ${this} first pos`);
		this.hasGotFirstPos = true;
		this.trail.reset();
	}

	protected onScaleUpdate() {
		this.meshProxyObject.scale.setScalar(this._scale);
		if (this.isFocus) {
			// TODO: This is not where we should be updating the flare scale, scene should directly update a global app scale
			this.app.flareManager.updateScale(this._scale);
		}
	}

	protected updateMotion(pos: Vector3, vel: Vector3, accel: Vector3, rot: Vector3) {
		// Make sure that if were were previously set active, we don't call this until we should have been set active
		if (!this.hasGotFirstPos) {
			const activeAt = this.persistentData.setActiveAt;
			const inactiveAt = this.persistentData.setInactiveAt;
			if (activeAt) {
				if (Application.time > activeAt && (!inactiveAt || Application.time < inactiveAt)) {
					this.onFirstPos();
				}
			} else {
				this.onFirstPos();
			}
		}
		// If an entity uses onFirstPos to set active it will drop this update packet - this could be an issue
		// if (!this.isActive) {
		// 	// console.warn(`Entity ${this} got motion update while inactive`);
		// 	return;
		// }

		this.heading = rot.y;

		// Handles the weird unity->threejs rotation
		quat.setFromEuler(new THREE.Euler(rad(rot.x), -rad(rot.y), -rad(rot.z), "YXZ"));
		euler.setFromQuaternion(quat);

		// x axis is flipped in threejs
		this.position.set(-pos.x, pos.y, pos.z);
		this.rotation.set(euler.x, euler.y, euler.z);
		this.velocity.set(-vel.x, vel.y, vel.z);
		this.acceleration.set(-accel.x, accel.y, accel.z);

		if (this.hasTrail) this.trail.checkExtend();
	}

	protected setTeam(team: Team) {
		if (this.team != Team.Unknown && this.team != team) {
			console.warn(`Entity ${this} already has team ${this.team}, overwriting with ${team}`);
		}
		console.log(`Entity ${this} set team to ${Team[team]}`);
		this.team = team;
		this.trail.updateColor(teamColors[this.team]);
	}

	public update(dt: number): void {
		if (!this.isActive) {
			console.warn(`Entity ${this} is not active but update was called! Call runInactiveUpdate instead`);
			return;
		}
		if (!this.hasFoundValidOwner) this.tryFindOwner();
		// Interpolate position using velocity
		this.velocity = this.velocity.add(this.acceleration.multiply(dt / 1000));
		this.position = this.position.add(this.velocity.multiply(dt / 1000));

		this.gForce = this.acceleration.length() / 9.8 + 1;
		this.maxGForce = Math.max(this.maxGForce, this.gForce);

		if (this.owner && this.useHostTeam) this.team = this.owner.team;

		// Object gets position, meshProxyObject gets rotation and scale, things that want to parent to pos but not rot can use `object`
		this.object.position.set(this.position.x, this.position.y, this.position.z);
		this.meshProxyObject.rotation.set(this.rotation.x, this.rotation.y, this.rotation.z);
		this.object.updateMatrixWorld();

		if (this.useInstancedMesh) {
			if (!this.position.equals(this.previousPosition) || this._scale != this.previousScale) {
				this.object.updateMatrixWorld();

				this.iMeshOffsetObject.updateMatrixWorld();

				if (!this.iMesh) {
					// console.log(`Entity ${this} has no instanced mesh. Active: ${this.isActive}`);
					// this.createMesh();
				} else {
					this.iMesh.setMatrixAt(this.iMeshId, this.iMeshOffsetObject.matrixWorld);
					this.iMesh.setNeedsUpdate(true);
				}
			}
		}

		this.baseLineGeom?.setFromPoints([
			new THREE.Vector3(this.position.x, this.position.y, this.position.z),
			new THREE.Vector3(this.position.x, 0, this.position.z)
		]);

		if (this.hasTrail) this.trail.run();
		if (this.debugBoxHelper) {
			if (!this.useInstancedMesh) this.boundingBox.setFromObject(this.mesh.children[0]);
			else this.boundingBox.setFromObject(this.iMesh);

			this.debugBoxHelper.update();
		}
		if (this.damage && this.damage.active) this.updateDamage();

		if (this.equipManager) this.equipManager.update(dt);

		if (this.textOverlay) {
			if (!this.previousPosition.equals(this.position) || !this.previousVelocity.equals(this.previousVelocity) || !this.textOverlayHasHadFirstUpdate) {
				const speed = addCommas(Math.floor(msToKnots(this.velocity.length())));
				const spdText = this.velocity.length() > 25 ? `\n${speed}kn` : "";
				const alt = this.position.y != -17 ? `${Math.floor(mToFt(this.position.y))}ft` : "";
				if (this.textOverlay.subOverlays.length == 0) {
					if (this.onlyShowTypeOnOverlay) this.textOverlay.edit(`${this.displayName}`);
					else this.textOverlay.edit(`${this.displayName}\n${alt}${spdText}`);
				} else {
					this.textOverlay.edit(`${this.textOverlay.subOverlays.length + 1}x ${this.displayName}\n${alt}`);
				}

				this.textOverlayHasHadFirstUpdate = true;
			}
		}

		this.jammers.forEach(j => j.update());

		this.previousPosition.set(this.position);
		this.previousVelocity.set(this.velocity);
		this.previousScale = this._scale;

		this.view.updateInfo(this);

		// Time has been set to before when we were active, deactivate
		if (Application.time < this.persistentData.setActiveAt) {
			this.setInactive(`Time is before the activation time (${this.persistentData.setActiveAt})`);
		}

		if (!this.hasDied && this.persistentData.setDeadAt && Application.time > this.persistentData.setDeadAt) {
			this.triggerDeath();
		}
	}

	public runInactiveUpdate(dt: number): void {
		if (this.isActive) {
			console.warn(`Entity ${this} is active but runInactiveUpdate was called! Call update instead`);
			return;
		}

		if (!this.hasFoundValidOwner) this.tryFindOwner();

		const activeAt = this.persistentData.setActiveAt;
		const inactiveAt = this.persistentData.setInactiveAt;

		if (
			this.app.isReplay && // This check shouldn't be needed but seems to fix odd bug
			!this.isActivating && // Activation can take a bit, make sure we aren't mid activation
			activeAt && // We have an activation time
			Application.time > activeAt && // Time is after activation time
			(!inactiveAt || Application.time < inactiveAt) // Either we don't have an inactive time or time is before inactive time
		) {
			this.setActive(
				`Is currently inactive, but past the activeAt time (${activeAt}) and before the inactiveAt time (${inactiveAt}). Time: ${Application.time}`
			);
		}
	}

	protected triggerDamage() {
		if (!this.isActive) return;
		if (!this.damage) this.setupDamageMesh();
		this.damage.active = true;
		this.damage.lastDamageAt = Application.time;
		this.damage.mesh.position.set(this.position.x, this.position.y, this.position.z);
		this.damage.mesh.scale.set(this._scale, this._scale, this._scale);
	}

	protected triggerDeath() {
		this.hasDied = true;
		console.log(`Entity ${this} has died`);
		this.triggerDamage();
		if (this.textOverlay) {
			this.textOverlay.color = "#FF0000";
		}

		if (this.removeAfterDeath) {
			this.deathTimerCancel = this.app.setTimeout(() => {
				// this.setInactive(`Entity died`);
				this.remove(`Death triggered`);
			}, damageFadeTime * 3);
		}

		this.persistentData.setDeadAt = Application.time;
	}

	public reverseDeath() {
		this.hasDied = false;
		if (this.textOverlay) {
			this.textOverlay.color = "#FFFFFF";
		}
		if (this.deathTimerCancel) this.deathTimerCancel();
	}

	protected updateDamage() {
		if (!this.damage) return;

		if (Application.time - this.damage.lastDamageAt > damageFadeTime) {
			this.damage.active = false;
			this.damage.mesh.visible = false;
		} else {
			this.damage.mesh.visible = true;
			this.damage.mat.opacity = 1 - (Application.time - this.damage.lastDamageAt) / damageFadeTime;
		}

		if (Application.time < this.damage.lastDamageAt) {
			this.damage.mesh.visible = false;
		}
	}

	public async remove(reason: string): Promise<void> {
		console.log(`Removing entity ${this} because ${reason}`);
		// If entity was removed while it was being activated, we need to wait for activation to complete
		// This is often caused due to resync causing spawn -> death, this should be changed to a better solution
		if (this.activatingPromise) {
			console.log(`Waiting for entity ${this} to finish activating before removing`);
			await this.activatingPromise;
			console.log(`Entity ${this} finished activating, can now remove`);
		}

		if (!this.persistentData.setInactiveAt && this.app.timeDirection == 1) this.persistentData.setInactiveAt = Application.time;
		RPCController.deregister(this);
		this.jammers.forEach(j => j.remove());
		this.app.finalDeleteEntity(this); // Queue a request to remove entity from list
		if (!this.isActive) return;

		this.trail.remove();
		this.scene.remove(this.baseLine);
		if (this.damage) this.destroyDamageMesh();

		if (this.useInstancedMesh && this.iMesh) {
			// const obj = new THREE.Object3D();
			// obj.position.set(0, 0, 0);
			// obj.scale.set(0, 0, 0);
			// obj.updateMatrixWorld();
			// this.iMesh.setMatrixAt(this.iMeshId, obj.matrixWorld);
			this.object.position.set(0, 0, 0);
			this.object.scale.set(0, 0, 0);
			this.object.updateMatrixWorld();
			this.iMeshOffsetObject.updateMatrixWorld();

			this.iMesh.setMatrixAt(this.iMeshId, this.iMeshOffsetObject.matrixWorld);
			this.iMesh.setNeedsUpdate(true);
		}

		this.scene.remove(this.object);
		this.isActive = false;
	}

	public async setSasMesh(type: string) {
		const model = await this.app.meshLoader.load(type);
		if (!model) {
			console.error(`Failed to load SAS mesh for ${this}`);
			return;
		}

		if (this.sasGeom == model) {
			this.sasGeom.visible = true;
			return;
		}

		if (this.sasGeom) {
			this.meshProxyObject.remove(this.sasGeom); // Memory leak?
		}

		console.log(`Setting SAS mesh for ${this} to ${type}`);

		const mat = new THREE.MeshBasicMaterial({ color: "#0000FF", wireframe: true });
		model.traverse(obj => {
			if (obj instanceof THREE.Mesh) {
				obj.material = mat;
			}
		});
		model.scale.set(2, 2, 2);

		this.meshProxyObject.add(model);
		this.sasGeom = model;
	}

	public showSasMesh() {
		if (this.sasGeom) this.sasGeom.visible = true;
	}

	public hideSasMesh() {
		if (this.sasGeom) this.sasGeom.visible = false;
	}

	static identifierToDisplayName(identifier: string): string {
		const map: Record<string, string> = {
			"Vehicles/SEVTF": "F-45A",
			"Vehicles/FA-26B": "F/A-26B",
			"Vehicles/AH-94": "AH-94",
			"Vehicles/VTOL4": "AV-42C",
			"Vehicles/T-55": "T-55",
			"Vehicles/EF-24": "EF-24",
			"Weapons/Missiles/Maverick": "AGM-65",
			"Weapons/Missiles/AIM-92": "AIM-92", // From the AH-94
			"Weapons/Missiles/APKWS": "PGM-27",
			"Weapons/Missiles/HARM": "AGM-88",
			"Weapons/Missiles/Hellfire": "AGM-114",
			"Weapons/Missiles/MARM": "AGM-188",
			"Weapons/Missiles/MK82": "MK-82",
			"Weapons/Missiles/MK82HighDrag": "MK-82 [High Drag]",
			"Weapons/Missiles/MK83": "MK-83",
			"Weapons/Missiles/SB-1": "SB-1 Bomb",
			"Weapons/Missiles/SideARM": "AGM-126",
			"Weapons/Missiles/SubMissile": "Cluster Munition",
			"Weapons/Missiles/SAMs/APCIRSAM": "IR APC SAM",
			"Weapons/Missiles/SAMs/SaawMissile": "SAAW Missile",
			"Units/Allied/BSTOPRadar": "Backstop Radar"

			// Nuclear option GUIDs
			// "1b8b6ff39affdb64da915cc38a0cef07": "Fighter1",
			// "4c2f3d26c41434549ad78a3d4219e930": "AttackHelo1",
			// "ee86e0fadb7ab5b4b962e0428bb9ba23": "COIN",
			// "753f6183b6d18c245ad36b21ee8126c9": "Darkreach"
		};

		if (map[identifier]) return map[identifier];

		// If there wasn't a mapping, try to convert myEntityName to My Entity Name
		const name = identifier.substring(identifier.lastIndexOf("/") + 1);
		function convert(inp: string) {
			return inp.replace(/([a-z][A-Z])/g, str => str[0] + " " + str[1].toUpperCase());
		}

		// If a string has a letter followed by a number, add a space before the number, but don't add a space between numbers
		// ie: "hello123" -> "hello 123"
		function addSpace(inp: string): string {
			return inp.replace(/([a-z])(\d)/gi, "$1 $2");
		}

		return addSpace(convert(name));
	}

	toString() {
		return this.debugName;
	}
}
export { Entity, EntityReference };
