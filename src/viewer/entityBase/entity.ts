import * as THREE from "three";
import { markRaw } from "vue";

import { RPCController } from "../../../../VTOLLiveViewerCommon/dist/src/rpc.js";
import { Player, Team, Vector3 } from "../../../../VTOLLiveViewerCommon/dist/src/shared.js";
import { Vector } from "../../../../VTOLLiveViewerCommon/dist/src/vector.js";
import { addCommas, Application, msToKnots, mToFt, rad } from "../app";
import { SceneManager } from "../managers/sceneManager";
import InstancedGroupMesh from "../meshLoader/instancedGroupMesh";
import { TextOverlay } from "../textOverlayHandler";
import { EquipManager } from "./equipManager";
import { SimpleUnitTrail } from "./simpleUnitTrail";

const len = 7;
const wid = 4;
const hei = 3;

const damageFadeTime = 1000; // How long the damage fade box should stick around

const trailColors: { r: number; g: number; b: number; }[] = [];
const alphaChars = "abcdefghijklmnopqrstuvwxyz".split("");

trailColors[Team.A] = { r: 0, g: 100, b: 255 };
trailColors[Team.B] = { r: 255, g: 0, b: 0 };
trailColors[Team.Unknown] = { r: 255, g: 0, b: 0 };

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
}>;

// Used for storing replay data, the entity class may be removed but this data should be kept
interface PersistentEntityData {
	setActiveAt: number;
	setInactiveAt: number;
}

class Entity {
	static persistentData: Record<number, PersistentEntityData> = {};
	private get persistentData(): PersistentEntityData {
		if (!Entity.persistentData[this.id]) Entity.persistentData[this.id] = { setActiveAt: 0, setInactiveAt: 0 };
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

	public gForce = 0;
	public maxGForce = 0;

	// Dims is likely unused/needs to be removed
	public dims = { len, wid, hei };
	public application: Application;
	public scene: SceneManager;
	public object: THREE.Object3D;
	public mesh: THREE.Mesh | THREE.Group;
	public meshProxyObject: THREE.Object3D;

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
	private iMeshOffsetObject: THREE.Object3D;

	private engineOffsets: Vector[] | null;

	protected _scale = 1;
	public set scale(scale: number) {
		const maxSetScale = MAX_OBJECT_SIZE / this.baseScaleSize;

		this._scale = Math.min(maxSetScale, Math.max(scale * this.scaleDamper, 1) * this.iMeshLoadScale);
		this.onScaleUpdate();
	}
	public get scale() { return this._scale; }
	protected scaleDamper = 1;
	private iMeshLoadScale = 1;
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
		return `${this.id} A:${this.isActive} ${this.type} [${this.unitId}]`;
	}

	// private setActiveAt: number;
	// private setInactiveAt: number;
	// private spawnAt: number;

	private _isActive = false;
	public set isActive(v: boolean) {
		this._isActive = v;
		console.log(`${this.debugName} is now ${v ? "active" : "inactive"}`);
	}
	public get isActive() { return this._isActive; }
	public get isActivating() {
		return !!this.activatingPromise;
	}
	private activatingPromise: Promise<void> | null = null;

	public hasDied = false;

	private baseLineGeom: THREE.BufferGeometry;
	private baseLine: THREE.Line;
	protected hasGotFirstPos = false;

	protected hasTrail = false;
	public showInSidebar = false;
	public showInBra = false;
	protected hasBaseLine = false;
	protected hasOverlay = true;
	protected useInstancedMesh = false;

	private isCreatingMesh = false;

	protected trail: SimpleUnitTrail = new SimpleUnitTrail(this);
	public equipManager: EquipManager = new EquipManager(this);

	public static spawnFor: string[] | RegExp = [];

	protected boundingBox: THREE.Box3;
	protected debugBoxHelper: THREE.BoxHelper;

	protected textOverlay: TextOverlay;
	private textOverlayHasHadFirstUpdate = false;

	private __name: string;

	constructor(public app: Application, config: EntityConfig = {}) {
		this.application = app;
		this.scene = app.sceneManager;

		this.hasTrail = config.hasTrail ?? this.hasTrail;
		this.showInSidebar = config.showInSidebar ?? this.showInSidebar;
		this.showInBra = config.showInBra ?? this.showInBra;
		this.hasBaseLine = config.hasBaseLine ?? this.hasBaseLine;
		this.hasOverlay = config.hasOverlay ?? this.hasOverlay;
		this.useInstancedMesh = config.useInstancedMesh ?? this.useInstancedMesh;

		if (!this.showInBra && !this.showInSidebar) {
			markRaw(this);
		}

		this.object = new THREE.Object3D();
		this.meshProxyObject = new THREE.Object3D();

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
			opacity: 0.5,
		});
		const damageGeom = new THREE.BoxGeometry(10, 10, 10);
		this.damage = {
			mesh: new THREE.Mesh(damageGeom, damageMat),
			geom: damageGeom,
			mat: damageMat,
			active: false,
			lastDamageAt: 0,
		};

		this.damage.mesh.name = "Entity Damage";
		this.damage.mesh.visible = false;
		this.scene.add(this.damage.mesh);
	}

	protected async setInactive(reason: string) {
		console.log(`Setting ${this.debugName} inactive because ${reason}, time direction: ${this.app.timeDirection} inactive at: ${this.persistentData.setInactiveAt}`);
		if (!this.isActive) {
			console.warn(`${this.debugName} is already inactive`);
			return;
		}

		if (!this.persistentData.setInactiveAt && this.app.timeDirection == 1) this.persistentData.setInactiveAt = Application.time;

		// This causes a memory leak! We need to free the components, this may be important for replay.
		this.scene.remove(this.object);

		this.object = new THREE.Object3D();
		this.meshProxyObject = new THREE.Object3D();
		this.object.add(this.meshProxyObject);

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

	private destroyDamageMesh() {
		this.scene.remove(this.damage.mesh);
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		this.damage = null;
		console.log(`Removed damage mesh for entity ${this.debugName}`);
	}

	protected async setActive(reason: string) {
		console.log(`Setting ${this.debugName} active because ${reason}`);
		if (this.isActive) {
			console.warn(`Entity ${this.debugName} is already active`);
			return;
		}

		if (this.isActivating) {
			console.warn(`Entity ${this.debugName} is already activating`);
			return;
		}

		if (!this.persistentData.setActiveAt) this.persistentData.setActiveAt = Application.time; // If this is a replay, knowing when we were set active is important for undoing it

		// Some things might want to wait for active to become true, so create a promise they can wait for
		let res: () => void;
		this.activatingPromise = new Promise<void>(resolve => res = resolve);

		if (!this.useInstancedMesh) await this.createMesh();
		else await this.createInstancedMesh();


		this.object.name = "Entity Mesh";
		// this.scene.add(this.object);
		// if (this.hasTrail) this.trail.init();
		this.isActive = true;

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		res();
		this.activatingPromise = null;
	}

	protected createDefaultMesh(): THREE.Group {
		console.warn(`Entity ${this.debugName} is using default mesh`);
		const base = new THREE.Shape([
			new THREE.Vector2(0, 0),
			new THREE.Vector2(-wid, -len),
			new THREE.Vector2(wid, -len)
		]);
		const top = new THREE.Shape([
			new THREE.Vector2(0, 0),
			new THREE.Vector2(len, hei),
			new THREE.Vector2(len, 0)
		]);

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
			console.log(`Failed to load instanced mesh for ${this.debugName}, using non-instanced`);
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
		// This is bad, really bad, but I have no idea why the text overlay count is buggy so lets just delay things a bit :)
		setTimeout(() => {
			this.maybeCreateTextOverlay(this.object);
		}, 1500 + Math.random() * 1000);
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
		this.maybeCreateTextOverlay(obj.children[0]);

		this.mesh = obj;
		this.meshProxyObject.add(this.mesh);

		this.addObjectMeshToScene();

		this.isCreatingMesh = false;
	}

	private maybeCreateTextOverlay(parent: THREE.Object3D) {
		if (!this.hasOverlay) return;
		this.textOverlay = new TextOverlay(parent, this.type).edit(this.id.toString()).offset(0, 10, 0);
		this.textOverlay.onDblClick = () => {
			this.focus();
		};
	}

	// Returns the object that should be used for raycasting
	public getInteractionMesh() {
		if (!this.isActive) {
			console.error(`GetInteractionMesh called on inactive entity ${this.debugName}`);
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
		if (path.includes("Allied")) this.team = Team.A;
		if (path.includes("Enemy")) this.team = Team.B;

		this.tryFindOwner();
		console.log(`Entity ${this.debugName} spawned as ${this.__name}. Spawn as active: ${isActive}`);
	}

	public setUnitId(uid: number) {
		this.unitId = uid;
		console.log(`Entity ${this.debugName} got unit ID ${this.unitId}`);
	}

	protected tryFindOwner(): void {
		if (this.hasFoundValidOwner) return;
		const owner = this.app.game?.players.find(p => p.steamId == this.ownerId);
		if (owner) {
			this.owner = owner;
			this.hasFoundValidOwner = true;
			this.setTeam(owner.team);
		}
	}

	public focus() {
		this.app.setFocusTo(this);
	}

	protected onFirstPos() {
		console.log(`Entity ${this.debugName} first pos`);
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
		if (!this.isActive) {
			// console.warn(`Entity ${this.debugName} got motion update while inactive`);
			return;
		}

		// Handles the weird unity->threejs rotation
		const quat = new THREE.Quaternion().setFromEuler(new THREE.Euler(rad(rot.x), -rad(rot.y), -rad(rot.z), "YXZ"));
		const r = new THREE.Euler().setFromQuaternion(quat);

		// x axis is flipped in threejs
		this.position.set(-pos.x, pos.y, pos.z);
		this.rotation.set(r.x, r.y, r.z);
		this.velocity.set(-vel.x, vel.y, vel.z);
		this.acceleration.set(-accel.x, accel.y, accel.z);
	}

	protected setTeam(team: Team) {
		if (this.team != Team.Unknown && this.team != team) {
			console.warn(`Entity ${this.debugName} already has team ${this.team}, overwriting with ${team}`);
		}

		this.team = team;
		this.trail.updateColor(trailColors[this.team]);
	}

	public update(dt: number): void {
		if (!this.isActive) {
			console.warn(`Entity ${this.debugName} is not active but update was called! Call runInactiveUpdate instead`);
			return;
		}

		// Interpolate position using velocity
		this.velocity = this.velocity.add(this.acceleration.multiply(dt / 1000));
		this.position = this.position.add(this.velocity.multiply(dt / 1000));

		this.gForce = (this.acceleration.length() / 9.8 + 1);
		this.maxGForce = Math.max(this.maxGForce, this.gForce);

		if (this.owner) this.team = this.owner.team;

		// Object gets position, meshProxyObject gets rotation, things that want to parent to pos but not rot can use `object`
		this.object.position.set(this.position.x, this.position.y, this.position.z);
		this.meshProxyObject.rotation.set(this.rotation.x, this.rotation.y, this.rotation.z);
		this.object.updateMatrixWorld();

		if (this.useInstancedMesh) {
			if (!this.position.equals(this.previousPosition) || this._scale != this.previousScale) {
				this.object.updateMatrixWorld();

				this.iMeshOffsetObject.updateMatrixWorld();

				if (!this.iMesh) {
					console.log(`Entity ${this.debugName} has no instanced mesh. Active: ${this.isActive}`);
					this.createMesh();
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
					this.textOverlay.edit(`${this.displayName}\n${alt}${spdText}`);
				} else {
					this.textOverlay.edit(`${this.textOverlay.subOverlays.length + 1}x ${this.displayName}\n${alt}`);
				}

				this.textOverlayHasHadFirstUpdate = true;
			}
		}

		this.previousPosition.set(this.position);
		this.previousVelocity.set(this.velocity);
		this.previousScale = this._scale;

		// Time has been set to before when we were active, deactivate
		if (Application.time < this.persistentData.setActiveAt) {
			this.setInactive(`Time is before the activation time (${this.persistentData.setActiveAt})`);
		}
	}

	public runInactiveUpdate(dt: number): void {
		if (this.isActive) {
			console.warn(`Entity ${this.debugName} is active but runInactiveUpdate was called! Call update instead`);
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
			this.setActive(`Is currently inactive, but past the activeAt time (${activeAt}) and before the inactiveAt time (${inactiveAt}). Time: ${Application.time}`);
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
		console.log(`Entity ${this.debugName} has died`);
		this.triggerDamage();
		this.app.setTimeout(() => { this.setInactive(`Entity died`); }, damageFadeTime * 3);
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

	public async remove(): Promise<void> {
		console.log(`Removing entity ${this.debugName}`);

		// If entity was removed while it was being activated, we need to wait for activation to complete
		// This is often caused due to resync causing spawn -> death, this should be changed to a better solution
		if (this.activatingPromise) {
			console.log(`Waiting for entity ${this.debugName} to finish activating before removing`);
			await this.activatingPromise;
			console.log(`Entity ${this.debugName} finished activating, can now remove`);
		}

		if (!this.persistentData.setInactiveAt && this.app.timeDirection == 1) this.persistentData.setInactiveAt = Application.time;
		RPCController.deregister(this);
		this.app.finalDeleteEntity(this); // Queue a request to remove entity from list
		if (!this.isActive) return;

		this.trail.remove();
		this.scene.remove(this.baseLine);
		if (this.damage) this.destroyDamageMesh();

		if (this.useInstancedMesh && this.iMesh) {
			const obj = new THREE.Object3D();
			obj.position.set(0, 0, 0);
			obj.updateMatrixWorld();
			this.iMesh.setMatrixAt(this.iMeshId, obj.matrixWorld);
			this.iMesh.setNeedsUpdate(true);
		}

		this.scene.remove(this.object);
		this.isActive = false;
	}

	static identifierToDisplayName(identifier: string): string {
		const map: Record<string, string> = {
			"Vehicles/SEVTF": "F-45A",
			"Vehicles/FA-26B": "F/A-26B",
			"Vehicles/AH-94": "AH-94",
			"Vehicles/VTOL4": "AV-42C",
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
		};

		if (map[identifier]) return map[identifier];

		// If there wasn't a mapping, try to convert myEntityName to My Entity Name
		const name = identifier.substring(identifier.lastIndexOf("/") + 1);
		function convert(inp: string) {
			return inp.replace(/([a-z][A-Z])/g, (str) => str[0] + " " + str[1].toUpperCase());
		}

		// If a string has a letter followed by a number, add a space before the number, but don't add a space between numbers
		// ie: "hello123" -> "hello 123"
		function addSpace(inp: string): string {
			return inp.replace(/([a-z])(\d)/gi, '$1 $2');
		}

		return addSpace(convert(name));
	}

	toString() {
		return this.debugName;
	}
}
export { Entity };