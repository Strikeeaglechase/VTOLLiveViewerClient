import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

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
		z: 0,
	};
	private onLerpDone?: () => void;
	constructor(private camera: THREE.Camera, private domElement: HTMLCanvasElement) { }

	public init(): void {
		this.fakeCamera = this.camera.clone();

		this.frontRefPoint = new THREE.Object3D();
		this.fakeCamera.add(this.frontRefPoint);
		this.frontRefPoint.position.set(0, 0, -10);

		this.orbit = new OrbitControls(this.fakeCamera, this.domElement);

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

		this.domElement.addEventListener("click", (e) => this.stopCurrentMove());
		this.domElement.addEventListener("wheel", (e) => this.stopCurrentMove());
	}

	update() {
		if (this.doPosLerp) {
			if (
				this.fakeCamera.position.distanceTo(this.lerpTarget) < ZOOM_INTO_DIST
			) {
				this.doPosLerp = false;
			} else {
				this.fakeCamera.position.lerp(this.lerpTarget, 0.05);
			}
		}
		if (this.doRotLerp) {
			const rotationMatrix = new THREE.Matrix4();
			const targetQuaternion = new THREE.Quaternion();
			rotationMatrix.lookAt(
				this.fakeCamera.position,
				this.lerpTarget,
				this.fakeCamera.up
			);
			targetQuaternion.setFromRotationMatrix(rotationMatrix);
			this.fakeCamera.quaternion.rotateTowards(targetQuaternion, 0.05);
			this.fakeCamera.updateMatrixWorld();
			const vector = new THREE.Vector3();
			vector.setFromMatrixPosition(this.frontRefPoint.matrixWorld);
			this.orbit.target = vector;
			if (this.fakeCamera.quaternion.equals(targetQuaternion)) {
				this.orbit.target.set(
					this.lerpTarget.x,
					this.lerpTarget.y,
					this.lerpTarget.z
				);
				this.doRotLerp = false;
			}
		}
		const curPos = {
			x: Math.round(this.fakeCamera.position.x),
			y: Math.round(this.fakeCamera.position.y),
			z: Math.round(this.fakeCamera.position.z),
		};
		if (
			curPos.x != this.lastPos.x ||
			curPos.y != this.lastPos.y ||
			curPos.z != this.lastPos.z
		) {
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