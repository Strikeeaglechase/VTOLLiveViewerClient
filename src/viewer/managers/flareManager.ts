import * as THREE from "three";

import { Vector } from "../../../../VTOLLiveViewerCommon/dist/vector";
import { Application } from "../app";
import { Entity } from "../entityBase/entity";
import { SceneManager } from "./sceneManager";

const ejectionSpeed = 45;
const gravFactor = 0.55;
const gravity = new Vector(0, gravFactor * -9.81, 0);
const drag = 0.83;
const life = 7000;
const size = 1;

const trailRate = 1000 / 30;
const maxTrailLen = trailRate * 1.5;
class FlareTrail {
	private lineMesh: THREE.Line;
	private lineGeom: THREE.BufferGeometry;
	private linePoints: THREE.Vector3[] = [];
	private lastTrailTime = 0;

	private flare: Flare;

	public color = {
		r: 200,
		g: 200,
		b: 200
	};

	constructor() {}

	public init(scene: SceneManager, flare: Flare) {
		this.flare = flare;

		const lineMat = new THREE.LineBasicMaterial({ color: new THREE.Color(this.color.r, this.color.g, this.color.b) });
		this.lineGeom = new THREE.BufferGeometry();
		this.lineMesh = new THREE.Line(this.lineGeom, lineMat);
		this.lineMesh.frustumCulled = false;
		this.lineMesh.name = "Chunked unit trail line";

		scene.add(this.lineMesh);
	}

	public update(dt: number) {
		if (Application.time - this.lastTrailTime > trailRate) {
			this.lastTrailTime = Application.time;
			this.linePoints.push(new THREE.Vector3(this.flare.position.x, this.flare.position.y, this.flare.position.z));

			if (!this.lineMesh.visible) {
				this.lineMesh.visible = true;
			}
		}

		if (this.linePoints.length > maxTrailLen) this.linePoints.shift();

		this.linePoints[this.linePoints.length - 1]?.set(this.flare.position.x, this.flare.position.y, this.flare.position.z);
		this.lineGeom.setFromPoints(this.linePoints);
	}

	public clear() {
		this.linePoints = [];
		this.lineGeom.setFromPoints(this.linePoints);
		this.lineMesh.visible = false;
	}
}

interface Flare {
	position: Vector;
	velocity: Vector;
	createdAt: number;
	mesh: THREE.Mesh;
	isAlive: boolean;
	trail: FlareTrail;
}

class FlareManager {
	private flares: Flare[] = [];
	private freeFlares: Flare[] = [];
	private scaleMult = 1;

	private geometry: THREE.BoxGeometry;
	private material: THREE.MeshStandardMaterial;

	constructor(private scene: SceneManager) {
		// this.geometry = new THREE.SphereGeometry(1.5, 6, 6);
		this.geometry = new THREE.BoxGeometry(size, size, size, 1, 1, 1);
		this.material = new THREE.MeshStandardMaterial({ color: "#000000", side: THREE.DoubleSide });
		this.material.emissiveIntensity = 1;
		// this.material.emissive = new THREE.Color("#ffe357");
		this.material.emissive = new THREE.Color("#fff25e");
	}

	public update(dt: number) {
		const now = Application.time;
		this.flares.forEach(flare => {
			if (!flare.isAlive) return;
			this.updateFlare(flare, dt);

			if (flare.createdAt + life < now || now < flare.createdAt) {
				flare.mesh.visible = false;
				flare.isAlive = false;
				flare.trail.clear();
				// flare.mesh.scale.set(2, 2, 2);
				this.freeFlares.push(flare);
			}
		});
	}

	private updateFlare(flare: Flare, dt: number) {
		const gravForce = gravity.clone().multiply(dt / 1000);
		const dragForce = flare.velocity.multiply(-drag).multiply(dt / 1000);
		flare.velocity = flare.velocity.add(gravForce).add(dragForce);
		flare.position = flare.position.add(flare.velocity.multiply(dt / 1000));

		flare.mesh.position.set(flare.position.x, flare.position.y, flare.position.z);

		flare.trail.update(dt);

		flare.mesh.scale.set(this.scaleMult, this.scaleMult, this.scaleMult);
	}

	public fireCm(entity: Entity) {
		// Try to reuse a flare, otherwise create a new one
		if (this.freeFlares.length == 0) {
			const mesh = new THREE.Mesh(this.geometry, this.material);
			mesh.position.set(entity.position.x, entity.position.y, entity.position.z);

			mesh.name = "Flare";
			this.scene.add(mesh);

			const flare: Flare = {
				position: entity.position.clone(),
				velocity: this.getFlareInitVelocity(entity),
				createdAt: Application.time,
				isAlive: true,
				mesh: mesh,
				trail: new FlareTrail()
			};

			flare.trail.init(this.scene, flare);

			this.flares.push(flare);
		} else {
			const flare = this.freeFlares.pop();
			if (!flare) throw new Error("FlareManager: flare is null");
			flare.position = entity.position.clone();
			flare.velocity = this.getFlareInitVelocity(entity);
			flare.createdAt = Application.time;
			flare.isAlive = true;
			flare.mesh.visible = true;
			flare.mesh.position.set(flare.position.x, flare.position.y, flare.position.z);
			// this.flares.push(flare);
		}
	}

	private getFlareInitVelocity(entity: Entity) {
		const num = Math.random();
		const maxAngle = 3;
		const maxRadDelta = maxAngle * (num * num) * (Math.PI / 180);

		const rotation = new THREE.Euler(entity.rotation.x, entity.rotation.y, entity.rotation.z);
		const ejectDir = new THREE.Vector3(0, -1, 0).applyQuaternion(new THREE.Quaternion().setFromEuler(rotation));
		const randOffset = new THREE.Vector3().randomDirection().projectOnPlane(ejectDir);

		const angle = ejectDir.angleTo(randOffset);
		const rotationAxis = new THREE.Vector3().crossVectors(ejectDir, randOffset).normalize();
		const clampedAngle = Math.min(angle, maxRadDelta);

		ejectDir.applyAxisAngle(rotationAxis, clampedAngle);

		const eSpeedLow = ejectionSpeed * 0.9;
		const eSpeedHigh = ejectionSpeed * 1.1;
		const ejectSpeed = eSpeedLow + Math.random() * (eSpeedHigh - eSpeedLow);
		const velocity = new Vector(
			entity.velocity.x + ejectDir.x * ejectSpeed,
			entity.velocity.y + ejectDir.y * ejectSpeed,
			entity.velocity.z + ejectDir.z * ejectSpeed
		);

		return velocity;
	}

	public updateScale(scale: number) {
		console.log(scale);
		this.scaleMult = Math.max(1, scale * 0.7);
	}
}

export { FlareManager };
