import * as THREE from "three";

import { Application } from "../app";
import { CameraController } from "../cameraController";
import { CSS2DObject, CSS2DRenderer } from "../CSS2DRenderer";
import { TextOverlay } from "../textOverlayHandler";

const D_SCALE_MIN = 1000;
const D_SCALE_MAX = 100000;
const D_SCALE_MULT = 1000;
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

	private hasInit = false;
	constructor(private app: Application) { }

	public async init(container: HTMLDivElement): Promise<void> {
		this.scene = new THREE.Scene();

		this.renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false, powerPreference: "high-performance" });
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		// Disable shadows
		this.renderer.shadowMap.enabled = false;

		container.appendChild(this.renderer.domElement);

		this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 10, 1000000);
		this.cameraController = new CameraController(this.camera, this.renderer.domElement);
		this.cameraController.init();

		this.css2dRenderer = new CSS2DRenderer();
		this.css2dRenderer.setSize(window.innerWidth, window.innerHeight);

		this.spawnLights();
		this.setupBg();

		this.hasInit = true;
	}

	// Load the skybox
	private setupBg() {
		const skybox = new THREE.TextureLoader().setPath("./assets/skybox/").load("Over_Clouds.png");
		skybox.mapping = THREE.EquirectangularRefractionMapping;

		this.scene.background = skybox;
	}

	public run(): void {
		this.cameraController.update();
		this.renderer.render(this.scene, this.camera);

		let overrideZoom = 0;
		// If we are focused on something, all scale is relative to that
		if (this.app.currentFocus != null) {
			const d = this.app.currentFocus.position.distanceTo(this.camera.getWorldPosition(new THREE.Vector3()));
			const clampedD = Math.min(Math.max(d, D_SCALE_MIN), D_SCALE_MAX);
			const val = Math.max(1, (clampedD - D_SCALE_MIN) / (D_SCALE_MAX - D_SCALE_MIN) * D_SCALE_MULT);
			overrideZoom = val;
		}

		const camPos = this.camera.getWorldPosition(new THREE.Vector3());

		// const m = this.lastCameraPos.sub(camPos).lengthSq();
		// Why does this happen? m flickers up and down over and over again every frame
		// This code is buggy and bad, but we really only need to update the scale when the camera moves
		// TODO: Reenable this code (and fix it)
		// if (m > 10 && m < 100000) {
		this.app.entities.forEach(entity => {
			if (!entity.isActive) return;
			if (overrideZoom == 0) {
				const d = entity.position.distanceTo(camPos);
				const clampedD = Math.min(Math.max(d, D_SCALE_MIN), D_SCALE_MAX);
				const val = Math.max(1, (clampedD - D_SCALE_MIN) / (D_SCALE_MAX - D_SCALE_MIN) * D_SCALE_MULT);
				entity.scale = val;
			} else {
				entity.scale = overrideZoom;
			}
		});
		// }

		this.overlayElements.forEach(overlay => overlay.update(this.overlayElements));

		this.lastCameraPos.copy(camPos);
	}

	public postFrame() {
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

		if (overlay.elm.parentElement?.parentElement == this.css2dRenderer.domElement)
			this.css2dRenderer.domElement.removeChild(overlay.elm.parentElement);
	}

	public add(...object: THREE.Object3D[]): void {
		object.forEach(obj => {
			if (obj.name == "" && STRICT_MESH_NAME) throw new Error("Mesh added without a name!");
		});

		this.scene.add(...object);
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
}


export { SceneManager, SceneEvent };