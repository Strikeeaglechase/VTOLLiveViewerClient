// UnitTrail is a fancy two-part trail that involves a 2D line and a "tape" behind the aircraft akin to how tacview does it
// The performance hit was too high to keep, but this could be optimized/readded at some point

import * as THREE from "three";

import { Entity } from "./entity";

const TRAIL_RATE = 1000 / 5;

const LT_DROPOFF_START = 1000;
const LT_DROPOFF_LEN = 500;
const LT_BASE = 0.7;

const CHUNK_RATE = 15000;
const MAX_LINE_TRAIL_LEN = 256 * 4;

class TrailChunk {
	private currentPoints: THREE.Vector3[] = [];
	private trailMesh: THREE.Mesh;
	private geometry = new THREE.BufferGeometry();
	private trail: [THREE.Vector3, THREE.Vector3][] = [];

	private verts: THREE.Vector3[] = [];
	private normals: number[] = [];
	private colors: number[] = [];
	private lifetimes: number[] = [];

	// private _isShown = true;
	// public set isShown(v: boolean) {
	// 	this._isShown = v;
	// 	this.trailMesh.visible = v;
	// 	if (v) this.fullUpdateMesh();
	// }
	// public get isShown() { return this._isShown; }

	public finished = false;
	public id = Math.floor(Math.random() * 1000).toString();


	constructor(private entity: Entity, private offsetRefs: THREE.Object3D[], private color: { r: number; g: number; b: number; }) {
		const material = new THREE.RawShaderMaterial({
			uniforms: {
				time: { value: 1.0 }
			},
			vertexShader: document.getElementById('vertexShader')?.textContent as string,
			fragmentShader: document.getElementById('fragmentShader')?.textContent as string,
			side: THREE.DoubleSide,
			transparent: true,
			wireframe: true
		});

		this.trailMesh = new THREE.Mesh(this.geometry, material);
		this.trailMesh.frustumCulled = false;
		this.trailMesh.name = "Trail chunk mesh";
		this.entity.scene.add(this.trailMesh);
	}

	public extend(a: THREE.Vector3, b: THREE.Vector3) {
		this.lifetimes.push(0);

		if (this.trail.length == 0) {
			this.trail.push([a, b]);
			return;
		}
		this.currentPoints = [a, b];
		const [c, d] = this.trail[this.trail.length - 1];
		this.trail.push([a, b]);

		this.verts.push(a, b, c);
		this.verts.push(d, c, b);

		this.normals.push(
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
			0, 0, 1,
		);

		this.colors.push(
			this.color.r, this.color.g, this.color.b, LT_BASE,
			this.color.r, this.color.g, this.color.b, LT_BASE,
			this.color.r, this.color.g, this.color.b, LT_BASE,
			this.color.r, this.color.g, this.color.b, LT_BASE,
			this.color.r, this.color.g, this.color.b, LT_BASE,
			this.color.r, this.color.g, this.color.b, LT_BASE,
		);


		let idx = 0;
		while (this.lifetimes[idx++] > LT_DROPOFF_START + LT_DROPOFF_LEN);
		if (idx > 1) {
			this.lifetimes = this.lifetimes.slice(idx);
			this.trail = this.trail.slice(idx);
			this.verts = this.verts.slice(idx * 6);
			this.normals = this.normals.slice(idx * 18);
			this.colors = this.colors.slice(idx * 24);
		}

		// if (this.isShown)
		this.fullUpdateMesh();
	}

	private fullUpdateMesh() {
		const vertices = new Float32Array(this.verts.map(v => v?.toArray()).flat());
		this.geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
		this.geometry.setAttribute('normal', new THREE.Float32BufferAttribute(this.normals, 3));
		this.geometry.setAttribute('color', new THREE.Float32BufferAttribute(this.colors, 4));
		this.geometry.computeVertexNormals();
		this.geometry.normalizeNormals();
	}

	public run(a: THREE.Vector3, b: THREE.Vector3, isHead: boolean, doFading: boolean) {
		if (!isHead && !doFading) {
			this.lifetimes.forEach((lt, idx) => this.lifetimes[idx]++);
			return;
		}

		if (this.currentPoints.length == 2 && isHead /*&& this.isShown*/) {
			this.currentPoints[0].copy(a);
			this.currentPoints[1].copy(b);
			const vertices = new Float32Array(this.verts.map(v => v?.toArray()).flat());
			this.geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
		}

		this.lifetimes.forEach((lt, idx) => {
			this.lifetimes[idx]++;
			if (lt > LT_DROPOFF_START) {
				const v = Math.max((1 - ((lt - LT_DROPOFF_START) / LT_DROPOFF_LEN)) * LT_BASE, 0);
				const i = idx * 24 + 3;
				this.colors[i + 4 * 0] = v;
				this.colors[i + 4 * 1] = v;
				this.colors[i + 4 * 2] = v;
				this.colors[i + 4 * 3] = v;
				this.colors[i + 4 * 4] = v;
				this.colors[i + 4 * 5] = v;
			}
		});
		if (this.lifetimes[this.lifetimes.length - 1] > LT_DROPOFF_LEN + LT_DROPOFF_START) this.finished = true;
		/*if (this.isShown)*/ this.geometry.setAttribute('color', new THREE.Float32BufferAttribute(this.colors, 4));
	}

	public remove() {
		this.entity.scene.remove(this.trailMesh);
	}
}

class ChunkedUnitTrail {
	private offsetRefs: THREE.Object3D[] = [];
	private refGroup: THREE.Group;
	private previousPoints: THREE.Vector3[] = [];

	private lineMesh: THREE.Line;
	private lineGeom: THREE.BufferGeometry;
	private linePoints: THREE.Vector3[] = [];

	private lastTrailTime = 0;
	private lastChunkTime = Date.now();
	private currentChunk: TrailChunk;
	private chunks: TrailChunk[] = [];
	private isShown = true;

	public color = {
		r: 0,
		g: 100,
		b: 255
	};

	private hasInit = false;

	constructor(private entity: Entity) { }

	public init(): void {
		// console.log(this.color);
		const lineMat = new THREE.LineBasicMaterial({ color: new THREE.Color(this.color.r, this.color.g, this.color.b) });
		this.lineGeom = new THREE.BufferGeometry();
		this.lineMesh = new THREE.Line(this.lineGeom, lineMat);
		this.lineMesh.frustumCulled = false;
		this.lineMesh.name = "Chunked unit trail line";
		this.entity.scene.add(this.lineMesh);

		const group = new THREE.Group();
		const left = new THREE.Object3D();
		const right = new THREE.Object3D();
		const { wid, len } = this.entity.dims;
		left.position.set(-wid, 0, -len);
		right.position.set(wid, 0, -len);

		group.add(left, right);
		this.refGroup = group;
		this.offsetRefs = [left, right];

		this.entity.meshProxyObject.add(group);

		this.currentChunk = new TrailChunk(this.entity, this.offsetRefs, this.color);
		this.chunks.push(this.currentChunk);
		this.hasInit = true;
	}

	public remove(): void {
		this.chunks.forEach(chunk => chunk.remove());
		this.entity.scene.remove(this.lineMesh);
		this.offsetRefs = [];
		this.previousPoints = [];
		this.linePoints = [];
		this.chunks = [];
	}

	private extendTrail(a: THREE.Vector3, b: THREE.Vector3) {
		this.lastTrailTime = Date.now();
		this.currentChunk.extend(a, b);

		this.linePoints.push(new THREE.Vector3(this.entity.position.x, this.entity.position.y, this.entity.position.z));
		this.lineGeom.setFromPoints(this.linePoints);
	}

	public reset(): void {
		this.remove();
		this.init();
	}

	public run(): void {
		if (!this.hasInit) return;
		// const d = this.entity.position.distanceTo(this.entity.scene.camera.position);
		// if (d < 5000 && !this.isShown) { this.isShown = true; this.chunks.forEach(c => c.isShown = true); }
		// if (d > 5000 && this.isShown) { this.isShown = true; this.chunks.forEach(c => c.isShown = false); }

		// const { wid, len } = this.entity.dims;
		// this.offsetRefs[0].position.set(-wid, 0, -len);
		// this.offsetRefs[1].position.set(wid, 0, -len);

		const a = this.offsetRefs[0].getWorldPosition(new THREE.Vector3());
		const b = this.offsetRefs[1].getWorldPosition(new THREE.Vector3());

		if (Date.now() - this.lastChunkTime > CHUNK_RATE) {
			this.currentChunk = new TrailChunk(this.entity, this.offsetRefs, this.color);
			this.chunks.push(this.currentChunk);
			this.currentChunk.extend(this.previousPoints[0], this.previousPoints[1]);
			this.lastChunkTime = Date.now();
		}
		if (Date.now() - this.lastTrailTime > TRAIL_RATE) this.extendTrail(a, b);

		this.linePoints[this.linePoints.length - 1]?.set(this.entity.position.x, this.entity.position.y, this.entity.position.z);
		this.lineGeom.setFromPoints(this.linePoints);

		if (this.linePoints.length > MAX_LINE_TRAIL_LEN) this.linePoints.shift();

		this.chunks.forEach((c, idx) => {
			c.run(a, b, idx == this.chunks.length - 1, idx < 2);
		});
		this.previousPoints = [a, b];
		this.chunks = this.chunks.filter(c => !c.finished);
	}

	updateScale(scale: number) {
		if (!this.hasInit) return;
		this.refGroup.scale.set(1 / scale, 1 / scale, 1 / scale);
	}
}

export { ChunkedUnitTrail as UnitTrail };