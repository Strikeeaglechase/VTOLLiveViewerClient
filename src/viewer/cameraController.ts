import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { Vector } from "../../../VTOLLiveViewerCommon/dist/vector.js";
import { Application } from "./app.js";
import { METERS_PER_PIXEL } from "./map/mapInfo.js";

const ZOOM_INTO_DIST = 500;
// Custom camera controller handle focusing/moving the camera
class CameraController {
	public orbit: OrbitControls;
	public fakeCamera: THREE.Camera;
	private lerpTarget: THREE.Vector3 = new THREE.Vector3();
	private frontRefPoint: THREE.Object3D;

	private doPosLerp = false;
	private doRotLerp = false;
	private wasJustRunning = false;
	private lastPos = {
		x: 0,
		y: 0,
		z: 0
	};
	private onLerpDone?: () => void;

	// private cameraAltitude = 100000;
	private wallpaperCameraTargetPos = new Vector();

	// private debugCanvas: HTMLCanvasElement;
	// private debugRenderer: Renderer;

	private cameraMaxX = Infinity;
	private cameraMinX = -Infinity;
	private cameraMaxZ = Infinity;
	private cameraMinZ = -Infinity;

	private mapCornerCalcUtil = new THREE.Object3D();

	constructor(public camera: THREE.PerspectiveCamera, private domElement: HTMLCanvasElement, private app: Application) {
		// const debugCanvas = document.createElement("canvas");
		// debugCanvas.width = window.innerWidth;
		// debugCanvas.height = window.innerHeight;
		// debugCanvas.style.position = "absolute";
		// debugCanvas.style.top = "0";
		// debugCanvas.style.left = "0";
		// debugCanvas.id = "debugCanvas";
		// // debugCanvas.style.opacity = "0.25";
		// document.body.appendChild(debugCanvas);
		// this.debugCanvas = debugCanvas;
		// this.debugRenderer = new Renderer("debugCanvas");
	}

	public init(): void {
		this.fakeCamera = this.camera.clone();

		this.frontRefPoint = new THREE.Object3D();
		this.fakeCamera.add(this.frontRefPoint);
		this.frontRefPoint.position.set(0, 0, -10);

		this.orbit = new OrbitControls(this.fakeCamera, this.domElement);
		this.orbit.minDistance = 20;
		this.orbit.zoomSpeed = 1.5;

		// Idfk what the defaults should be
		// this.orbit.mouseButtons.LEFT = 2;
		// this.orbit.mouseButtons.RIGHT = 0;
		// this.orbit.mouseButtons.MIDDLE = -1;
		//Prevent weird panning when pressing wasd
		this.orbit.keys.LEFT = "";
		this.orbit.keys.RIGHT = "";
		this.orbit.keys.UP = "";
		this.orbit.keys.BOTTOM = "";
		this.orbit.enableDamping = true;

		this.domElement.addEventListener("click", e => this.stopCurrentMove());
		this.domElement.addEventListener("wheel", e => this.stopCurrentMove());

		// window.addEventListener("keydown", (e) => {
		// 	if (e.key == "Alt") {
		// 		this.orbit.mouseButtons.RIGHT = 0;
		// 		this.orbit.mouseButtons.LEFT = 2;
		// 	}
		// });

		// window.addEventListener("keyup", (e) => {
		// 	if (e.key == "Alt") {
		// 		this.orbit.mouseButtons.RIGHT = 2;
		// 		this.orbit.mouseButtons.LEFT = 0;
		// 	}
		// });
	}

	public update() {
		if (this.app.isWallpaperMode) {
			this.updateWallpaperMotion();
			return;
		}

		if (this.doPosLerp) {
			if (this.fakeCamera.position.distanceTo(this.lerpTarget) < ZOOM_INTO_DIST) {
				this.doPosLerp = false;
			} else {
				this.fakeCamera.position.lerp(this.lerpTarget, 0.05);
			}
		}
		if (this.doRotLerp) {
			const rotationMatrix = new THREE.Matrix4();
			const targetQuaternion = new THREE.Quaternion();
			rotationMatrix.lookAt(this.fakeCamera.position, this.lerpTarget, this.fakeCamera.up);
			targetQuaternion.setFromRotationMatrix(rotationMatrix);
			this.fakeCamera.quaternion.rotateTowards(targetQuaternion, 0.05);
			this.fakeCamera.updateMatrixWorld();
			const vector = new THREE.Vector3();
			vector.setFromMatrixPosition(this.frontRefPoint.matrixWorld);
			this.orbit.target = vector;
			if (this.fakeCamera.quaternion.equals(targetQuaternion)) {
				this.orbit.target.set(this.lerpTarget.x, this.lerpTarget.y, this.lerpTarget.z);
				this.doRotLerp = false;
			}
		}
		const curPos = {
			x: Math.round(this.fakeCamera.position.x),
			y: Math.round(this.fakeCamera.position.y),
			z: Math.round(this.fakeCamera.position.z)
		};
		if (curPos.x != this.lastPos.x || curPos.y != this.lastPos.y || curPos.z != this.lastPos.z) {
			this.lastPos = {
				x: curPos.x,
				y: curPos.y,
				z: curPos.z
			};
		}

		if (!this.doRotLerp && !this.doPosLerp && this.wasJustRunning) {
			this.wasJustRunning = false;
			if (this.onLerpDone) this.onLerpDone();
		}
		this.orbit.update();

		this.camera.position.copy(this.fakeCamera.position);
		this.camera.quaternion.copy(this.fakeCamera.quaternion);
		this.camera.scale.copy(this.fakeCamera.scale);
	}

	public updateWallpaperMotion() {
		this.camera.rotation.set(-Math.PI / 2, 0, 0);
		// this.camera.rotation.set(0, Math.PI / 2, 0);
		const heightmap = this.app.mapLoader?.heightMap;
		if (!heightmap) return;

		let averageXPos = 0;
		let averageZPos = 0;
		let count = 0;

		let minScreenX = Infinity;
		let maxScreenX = -Infinity;
		let minScreenY = Infinity;
		let maxScreenY = -Infinity;

		const viewMatrix = new THREE.Matrix4();
		const viewProjectionMatrix = new THREE.Matrix4();
		viewMatrix.copy(this.camera.matrixWorldInverse);
		viewProjectionMatrix.multiplyMatrices(this.camera.projectionMatrix, viewMatrix);

		const projectionVector = new THREE.Vector3();
		const width = window.innerWidth;
		const height = window.innerHeight;
		const widthHalf = width / 2;
		const heightHalf = height / 2;

		this.app.entities.forEach(entity => {
			if (entity.__name != "PlayerVehicle") return;

			averageXPos += entity.position.x;
			averageZPos += entity.position.z;
			count++;

			projectionVector.setFromMatrixPosition(entity.object.matrixWorld);
			projectionVector.applyMatrix4(viewProjectionMatrix);

			const screenX = projectionVector.x * widthHalf + widthHalf;
			const screenY = -projectionVector.y * heightHalf + heightHalf;

			minScreenX = Math.min(minScreenX, screenX);
			maxScreenX = Math.max(maxScreenX, screenX);
			minScreenY = Math.min(minScreenY, screenY);
			maxScreenY = Math.max(maxScreenY, screenY);
		});

		if (count < 2) return;

		averageXPos /= count;
		averageZPos /= count;

		const edgeBuffer = 150;
		const edgeBufferLarger = 50;
		const zoomRate = 0.02;

		// this.debugRenderer.ctx.clearRect(0, 0, this.debugCanvas.width, this.debugCanvas.height);

		// Zoomed too far out?
		const zoomInMinX = minScreenX > edgeBuffer;
		const zoomInMaxX = maxScreenX < width - edgeBuffer;
		const zoomInMinY = minScreenY > edgeBuffer;
		const zoomInMaxY = maxScreenY < height - edgeBuffer;

		const zoomOutMinX = minScreenX > edgeBufferLarger;
		const zoomOutMaxX = maxScreenX < width - edgeBufferLarger;
		const zoomOutMinY = minScreenY > edgeBufferLarger;
		const zoomOutMaxY = maxScreenY < height - edgeBufferLarger;

		if (zoomInMinX && zoomInMaxX && zoomInMinY && zoomInMaxY) {
			this.wallpaperCameraTargetPos.y *= 1 - zoomRate;
		}

		if (!zoomOutMinX || !zoomOutMaxX || !zoomOutMinY || !zoomOutMaxY) {
			this.wallpaperCameraTargetPos.y *= 1 + zoomRate;
		}

		// const minXColor: ColorValue = zoomInMinX ? [0, 255, 0] : [255, 0, 0];
		// this.debugRenderer.line(minScreenX, 0, minScreenX, height, minXColor);
		// const maxXColor: ColorValue = zoomInMaxX ? [0, 255, 0] : [255, 0, 0];
		// this.debugRenderer.line(maxScreenX, 0, maxScreenX, height, maxXColor);
		// const minYColor: ColorValue = zoomInMinY ? [0, 255, 0] : [255, 0, 0];
		// this.debugRenderer.line(0, minScreenY, width, minScreenY, minYColor);
		// const maxYColor: ColorValue = zoomInMaxY ? [0, 255, 0] : [255, 0, 0];
		// this.debugRenderer.line(0, maxScreenY, width, maxScreenY, maxYColor);

		this.wallpaperCameraTargetPos.y = Math.max(1000, Math.min(60000, this.wallpaperCameraTargetPos.y));
		// this.camera.position.set(averageXPos, this.cameraAltitude, averageZPos);
		this.wallpaperCameraTargetPos.set(averageXPos, this.wallpaperCameraTargetPos.y, averageZPos);
		this.moveWallpaperCamera();
	}

	private getScreenPos(obj: THREE.Object3D) {
		const width = window.innerWidth;
		const height = window.innerHeight;
		const widthHalf = width / 2;
		const heightHalf = height / 2;

		const projectionVector = new THREE.Vector3();
		const viewMatrix = new THREE.Matrix4();
		const viewProjectionMatrix = new THREE.Matrix4();
		viewMatrix.copy(this.camera.matrixWorldInverse);
		viewProjectionMatrix.multiplyMatrices(this.camera.projectionMatrix, viewMatrix);
		projectionVector.setFromMatrixPosition(obj.matrixWorld);
		projectionVector.applyMatrix4(viewProjectionMatrix);

		const screenX = projectionVector.x * widthHalf + widthHalf;
		const screenY = -projectionVector.y * heightHalf + heightHalf;
		return { x: screenX, y: screenY };
	}

	private getScreenCorners() {
		this.mapCornerCalcUtil.position.set(0, 0, 0);
		this.mapCornerCalcUtil.updateMatrixWorld(true);
		const topLeft = this.getScreenPos(this.mapCornerCalcUtil);

		this.mapCornerCalcUtil.position.set(0, 0, this.app.mapLoader.heightMap.width * METERS_PER_PIXEL);
		this.mapCornerCalcUtil.updateMatrixWorld(true);
		const topRight = this.getScreenPos(this.mapCornerCalcUtil);

		this.mapCornerCalcUtil.position.set(-this.app.mapLoader.heightMap.height * METERS_PER_PIXEL, 0, 0);
		this.mapCornerCalcUtil.updateMatrixWorld(true);
		const bottomLeft = this.getScreenPos(this.mapCornerCalcUtil);

		this.mapCornerCalcUtil.position.set(-this.app.mapLoader.heightMap.height * METERS_PER_PIXEL, 0, this.app.mapLoader.heightMap.width * METERS_PER_PIXEL);
		this.mapCornerCalcUtil.updateMatrixWorld(true);
		const bottomRight = this.getScreenPos(this.mapCornerCalcUtil);

		return { topLeft, topRight, bottomLeft, bottomRight };
	}

	private moveWallpaperCamera() {
		const lerpRate = 0.005;
		this.wallpaperCameraTargetPos.x = Math.min(this.cameraMaxX, Math.max(this.cameraMinX, this.wallpaperCameraTargetPos.x));
		this.wallpaperCameraTargetPos.z = Math.min(this.cameraMaxZ, Math.max(this.cameraMinZ, this.wallpaperCameraTargetPos.z));

		const screenCorners = this.getScreenCorners();
		let minX = Infinity;
		let maxX = -Infinity;
		let minY = Infinity;
		let maxY = -Infinity;
		for (const corner in screenCorners) {
			// let debugElement = document.getElementById(corner);
			// if (!debugElement) {
			// 	debugElement = document.createElement("div");
			// 	debugElement.id = corner;
			// 	debugElement.style.position = "absolute";
			// 	debugElement.style.width = "10px";
			// 	debugElement.style.height = "10px";
			// 	debugElement.style.backgroundColor = "red";
			// 	document.body.appendChild(debugElement);
			// }
			const pos = screenCorners[corner as keyof typeof screenCorners];
			// debugElement.style.left = pos.x + "px";
			// debugElement.style.top = pos.y + "px";

			minX = Math.min(minX, pos.x);
			maxX = Math.max(maxX, pos.x);
			minY = Math.min(minY, pos.y);
			maxY = Math.max(maxY, pos.y);
		}

		const camCorrectSpeed = 1000;

		// Can see left void
		if (minX > 0) this.cameraMinX = this.camera.position.x + camCorrectSpeed;
		// Can see right void
		if (maxX < window.innerWidth) this.cameraMaxX = this.camera.position.x - camCorrectSpeed;
		// Can see top void
		if (minY > 0) this.cameraMinZ = this.camera.position.z + camCorrectSpeed;
		// Can see bottom void
		if (maxY < window.innerHeight) this.cameraMaxZ = this.camera.position.z - camCorrectSpeed;

		// Calculate 4 corners of the map

		this.camera.position.lerp(this.wallpaperCameraTargetPos.to(THREE.Vector3), lerpRate);
	}

	set(vec: THREE.Vector3) {
		this.fakeCamera.position.copy(vec);
	}

	//Instructs the camera to go to a new point in space
	lerpCamTo(x: number, y: number, z: number, onLerpDone?: () => void) {
		this.lerpTarget.set(x, y, z);
		this.doPosLerp = true;
		this.doRotLerp = true;
		this.wasJustRunning = true;
		this.onLerpDone = onLerpDone;
	}

	posLerpTo(x: number, y: number, z: number) {
		this.lerpTarget = new THREE.Vector3(x, y, z);
		this.doPosLerp = true;
	}

	stopCurrentMove() {
		this.doPosLerp = false;
		this.doRotLerp = false;
	}
}

export { CameraController };
