import * as THREE from "three";

import { Entity } from "./entity";

const MAX_LINE_TRAIL_LEN = 256 * 4;
const TRAIL_RATE = 1000 / 5;

// TODO: This still gets expensive over time. Need to do chunking, possibly just an "active" and "inactive" chunk
class SimpleUnitTrail {
	constructor(private entity: Entity) { }
	private lineMesh: THREE.Line;
	private lineGeom: THREE.BufferGeometry;
	private linePoints: THREE.Vector3[] = [];

	private hasInit = false;

	public color = {
		r: 0,
		g: 100,
		b: 255
	};
	private lastTrailTime = 0;

	public updateColor(color: { r: number; g: number; b: number; }): void {
		this.color = color;
		if (this.hasInit) {
			const mat = this.lineMesh.material as THREE.LineBasicMaterial;
			mat.color.set(new THREE.Color(this.color.r, this.color.g, this.color.b));
		}
	}

	public init(): void {
		const lineMat = new THREE.LineBasicMaterial({ color: new THREE.Color(this.color.r, this.color.g, this.color.b) });
		this.lineGeom = new THREE.BufferGeometry();
		this.lineMesh = new THREE.Line(this.lineGeom, lineMat);
		this.lineMesh.frustumCulled = false;
		this.lineMesh.name = "Simple unit trail line";
		this.entity.scene.add(this.lineMesh);
		this.hasInit = true;
	}

	private extendTrail() {
		this.linePoints.push(new THREE.Vector3(this.entity.position.x, this.entity.position.y, this.entity.position.z));
		this.lineGeom.setFromPoints(this.linePoints);
		this.lastTrailTime = Date.now();
	}

	public run(): void {
		if (!this.hasInit) return;

		if (Date.now() - this.lastTrailTime > TRAIL_RATE) this.extendTrail();

		this.linePoints[this.linePoints.length - 1]?.set(this.entity.position.x, this.entity.position.y, this.entity.position.z);

		if (this.lineGeom.attributes["position"] && this.linePoints.length > 2) {
			const pos = this.lineGeom.attributes["position"].array as Float32Array;
			pos[pos.length - 3] = this.entity.position.x;
			pos[pos.length - 2] = this.entity.position.y;
			pos[pos.length - 1] = this.entity.position.z;

			this.lineGeom.attributes["position"].needsUpdate = true;
		}

		if (this.linePoints.length > MAX_LINE_TRAIL_LEN) this.linePoints.shift();
	}

	public reset(): void {
		this.remove();
		this.init();
	}

	public remove(): void {
		this.linePoints = [];
		this.entity.scene.remove(this.lineMesh);
	}
}

export { SimpleUnitTrail };