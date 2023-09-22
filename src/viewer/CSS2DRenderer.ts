import * as THREE from "three";

// Handle the updating/rendering of 2D text overlays
class CSS2DRenderer {
	private width = 0;
	private height = 0;
	private widthHalf = 0;
	private heightHalf = 0;

	private vector: THREE.Vector3 = new THREE.Vector3();
	private viewMatrix = new THREE.Matrix4();
	private viewProjectionMatrix = new THREE.Matrix4();

	public domElement: HTMLDivElement;

	private elementStyleUpdateCache: { element: HTMLElement; style: string }[] = [];

	constructor() {
		this.domElement = document.createElement("div");
		this.domElement.className = "overlay-main";
		document.getElementById("main-container")?.appendChild(this.domElement);
	}

	public getSize() {
		return {
			width: this.width,
			height: this.height
		};
	}

	public setSize(width: number, height: number) {
		this.width = width;
		this.height = height;

		this.widthHalf = this.width / 2;
		this.heightHalf = this.height / 2;

		this.domElement.style.width = width + "px";
		this.domElement.style.height = height + "px";
	}

	private renderObject(object: CSS2DObject, camera: THREE.Camera, frustum: THREE.Frustum) {
		const element = object.element;
		const isVisible = frustum.containsPoint(object.position);
		element.style.visibility = isVisible ? "visible" : "hidden";

		if (isVisible) {
			this.vector.setFromMatrixPosition(object.matrixWorld);
			this.vector.applyMatrix4(this.viewProjectionMatrix);

			const style =
				"translate(-50%,-50%) translate(" +
				(this.vector.x * this.widthHalf + this.widthHalf) +
				"px," +
				(-this.vector.y * this.heightHalf + this.heightHalf) +
				"px)";
			this.elementStyleUpdateCache.push({ element: element, style: style });
		}
	}

	public render(scene: THREE.Scene, camera: THREE.Camera, objects: CSS2DObject[]) {
		// These aren't super great for performance, possible todo to optimize
		// scene.updateMatrixWorld();
		// if (camera.parent === null) camera.updateMatrixWorld();

		this.viewMatrix.copy(camera.matrixWorldInverse);
		this.viewProjectionMatrix.multiplyMatrices(camera.projectionMatrix, this.viewMatrix);
		const frustum = new THREE.Frustum();
		frustum.setFromProjectionMatrix(new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse));

		// this.renderObject(scene, camera, frustum);
		objects.forEach(obj => {
			this.renderObject(obj, camera, frustum);
		});

		this.elementStyleUpdateCache.forEach(cache => {
			cache.element.style.transform = cache.style;

			if (cache.element.parentNode !== this.domElement) {
				this.domElement.appendChild(cache.element);
			}
		});
		this.elementStyleUpdateCache = [];
	}
}

class CSS2DObject extends THREE.Object3D {
	constructor(public element: HTMLElement) {
		super();

		this.element.style.position = "absolute";
		this.addEventListener("removed", () => {
			if (this.element.parentNode !== null) {
				this.element.parentNode.removeChild(this.element);
			}
		});
	}
}

export { CSS2DRenderer, CSS2DObject };
