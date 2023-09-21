import * as THREE from "three";
import { markRaw } from "vue";

import { Application } from "../app";
import { CameraController } from "../cameraController";
import { CSS2DObject, CSS2DRenderer } from "../CSS2DRenderer";
import { TextOverlay } from "../textOverlayHandler";

// const D_SCALE_MIN = 1000;
// const D_SCALE_MAX = 100000;
// const D_SCALE_MULT = 1000;

const MAX_SCALE = 30;
const MIN_SCALE = 1;
const SCALE_OFFSET = 0;
const SCALE_RANGE_MULT = 0.01;

const CAM_NEAR = 10;
const CAM_FAR = 1000000;

const STRICT_MESH_NAME = true; // Require all meshes to have a name

enum SceneEvent {
	remove = "REMOVE"
}

class SceneManager {
	public camera: THREE.PerspectiveCamera;
	public scene: THREE.Scene;
	public renderer: THREE.WebGLRenderer;
	public cameraController: CameraController;
	private css2dRenderer: CSS2DRenderer;

	public overlayElements: TextOverlay[] = [];
	private overlay2dObjects: CSS2DObject[] = [];

	private lastCameraPos: THREE.Vector3 = new THREE.Vector3();
	public primaryLight: THREE.DirectionalLight;

	private sceneAddQueue: THREE.Object3D[] = [];

	private hasInit = false;
	constructor(private app: Application) {
		markRaw(this);
	}

	public async init(container: HTMLDivElement): Promise<void> {
		this.scene = new THREE.Scene();

		this.renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false, powerPreference: "high-performance" });
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		// Disable shadows
		this.renderer.shadowMap.enabled = false;

		container.appendChild(this.renderer.domElement);

		this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, CAM_NEAR, CAM_FAR);
		this.cameraController = new CameraController(this.camera, this.renderer.domElement);
		this.cameraController.init();

		this.css2dRenderer = new CSS2DRenderer();
		this.css2dRenderer.setSize(window.innerWidth, window.innerHeight);

		this.spawnLights();
		this.setupBg();

		this.sceneAddQueue.forEach(obj => this.scene.add(obj));

		this.hasInit = true;
	}

	// Load the skybox
	private setupBg() {
		const skybox = new THREE.TextureLoader().setPath("./assets/skybox/").load("Over_Clouds.png");
		skybox.mapping = THREE.EquirectangularRefractionMapping;

		this.scene.background = skybox;
	}

	public calculateScale(d: number) {
		return Math.min(Math.max((d - SCALE_OFFSET) * SCALE_RANGE_MULT, MIN_SCALE), MAX_SCALE);
	}

	public run(): void {
		this.cameraController.update();
		// if (this.camera.parent) this.camera.parent.updateMatrixWorld();
		// this.camera.updateMatrixWorld();

		let overrideZoom = 0;

		// If we are focused on something, all scale is relative to that
		if (this.app.currentFocus != null) {
			const d = this.app.currentFocus.position.distanceTo(this.camera.getWorldPosition(new THREE.Vector3()));
			overrideZoom = this.calculateScale(d);
			this.app.emit("unit_scale", overrideZoom);
		}

		const camPos = this.camera.getWorldPosition(new THREE.Vector3());

		this.app.entities.forEach(entity => {
			if (!entity.isActive) return;
			if (overrideZoom == 0) {
				const d = entity.position.distanceTo(camPos);
				entity.scale = this.calculateScale(d);
			} else {
				entity.scale = overrideZoom;
			}
		});

		this.overlayElements.forEach(overlay => overlay.updateBoundingRect());
		this.overlayElements.forEach(overlay => overlay.update(this.overlayElements));

		this.renderer.render(this.scene, this.camera);
		this.lastCameraPos.copy(camPos);
	}

	public postFrame() {
		this.overlayElements.forEach(overlay => overlay.runBatchedUpdate());
		this.css2dRenderer.render(this.scene, this.camera, this.overlay2dObjects);
	}

	private spawnLights(): void {
		const amb = new THREE.AmbientLight(0x505050); // soft white light
		amb.name = "Ambient light";
		this.scene.add(amb);

		this.primaryLight = new THREE.DirectionalLight(0xffffff, 1);
		// Light is moved to center of the map when it loads, initial pos dosn't matter
		this.primaryLight.position.y = 2501;
		this.primaryLight.position.z = 500;

		this.primaryLight.name = "Primary light";
		this.scene.add(this.primaryLight);

		// helper.position.copy(this.primaryLight.position);
		// const test = new TextOverlay(helper).edit("Hello World!").offset(0, 500, 0);
	}

	public handleResize(): void {
		if (!this.hasInit) return;
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		this.camera.aspect = window.innerWidth / window.innerHeight;
		this.camera.updateProjectionMatrix();
		this.css2dRenderer.setSize(window.innerWidth, window.innerHeight);
	}

	// Add new 2D text overlay
	public registerOverlay(overlay: TextOverlay, obj: CSS2DObject) {
		this.overlayElements.push(overlay);
		this.overlay2dObjects.push(obj);
	}

	// Remove a 2D text overlay
	public removeOverlay(overlay: TextOverlay, obj: THREE.Object3D) {
		this.overlayElements = this.overlayElements.filter(ov => ov != overlay);
		this.overlay2dObjects = this.overlay2dObjects.filter(ov => ov != obj);

		if (overlay.elm.parentElement?.parentElement == this.css2dRenderer.domElement) this.css2dRenderer.domElement.removeChild(overlay.elm.parentElement);
	}

	public add(...object: THREE.Object3D[]): void {
		object.forEach(obj => {
			if (obj.name == "" && STRICT_MESH_NAME) throw new Error("Mesh added without a name!");
		});
		if (!this.hasInit) this.sceneAddQueue.push(...object);
		else this.scene.add(...object);
	}

	public remove(...object: THREE.Object3D[]): void {
		object.forEach(obj => this.notifyAllChildren(obj, SceneEvent.remove));
		this.scene.remove(...object);
	}

	private notifyAllChildren(object: THREE.Object3D, event: SceneEvent) {
		if (!object) return;
		object.children.forEach(child => this.notifyAllChildren(child, event));
		object.dispatchEvent({ type: event });
	}

	private recurseCountChildren(object: THREE.Object3D): number {
		let count = 0;
		object.children.forEach(child => (count += this.recurseCountChildren(child)));
		return count + object.children.length;
	}

	private buildChildrenTree(object: THREE.Object3D, depth = 0): string {
		let vertsText = ``;
		if (object instanceof THREE.Mesh) {
			// object.geometry.
			const verts = object?.geometry?.attributes?.position?.count;
			vertsText = ` (${verts} verts)`;
		}
		let str = "";
		str += "  ".repeat(depth);
		str += (object.name || `ID ${object.id}`) + vertsText + "\n";
		object.children.forEach(child => (str += this.buildChildrenTree(child, depth + 1)));
		return str;
	}

	public debug() {
		console.log(`${this.scene.children.length} direct scene children`);
		console.log(`${this.recurseCountChildren(this.scene)} total scene children`);

		const meshNames: Record<string, number> = {};
		this.scene.children.forEach(child => {
			if (child.name in meshNames) meshNames[child.name] += 1;
			else meshNames[child.name] = 1;
		});

		console.log(meshNames);

		console.log(this.buildChildrenTree(this.scene));
	}
}

export { SceneManager, SceneEvent, CAM_FAR, CAM_NEAR };
