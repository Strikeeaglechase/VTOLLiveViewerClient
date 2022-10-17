import * as THREE from "three";
import { markRaw } from "vue";

import { Vector } from "../../../../VTOLLiveViewerCommon/dist/src/vector";
import { Application } from "../app";
import { SceneManager } from "./sceneManager.js";

const BULLET_MAX_LT = 5 * 1000; // 5 seconds
const USE_BULLET_LINE = true; // Either use a line, or using a cylinder

enum BulletReturnState {
	free, // Bullet is unused and can be reused
	dying, // Bullet has timed out this frame
	running // Bullet is in use 
}

class Bullet {
	private position: Vector;
	private velocity: Vector;
	private cylinder: THREE.Object3D;

	private line: THREE.Line;
	private lineGeometry: THREE.BufferGeometry;

	private firedAt: number;
	private isAlive = false;

	constructor(geometry: THREE.CylinderGeometry, material: THREE.MeshBasicMaterial, lineMat: THREE.LineBasicMaterial, private masterBulletObject: THREE.Object3D) {
		if (USE_BULLET_LINE) {
			this.lineGeometry = new THREE.BufferGeometry();
			this.lineGeometry.setFromPoints([new THREE.Vector3(), new THREE.Vector3()]);
			this.line = new THREE.Line(this.lineGeometry, lineMat);
			this.line.frustumCulled = false;
			this.line.name = "Line Bullet";
			this.line.visible = false;
			masterBulletObject.add(this.line);
		} else {
			const cylinder = new THREE.Mesh(geometry, material);
			cylinder.rotation.set(Math.PI / 2, 0, 0);

			this.cylinder = new THREE.Object3D();
			this.cylinder.add(cylinder);

			this.cylinder.name = "Bullet";
			this.cylinder.visible = false;
			masterBulletObject.add(this.cylinder);
		}

		markRaw(this);
	}

	public fire(position: Vector, velocity: Vector,) {
		this.position = position;
		this.velocity = velocity;
		this.firedAt = Application.time;
		this.isAlive = true;

		if (USE_BULLET_LINE) {
			this.line.visible = true;
		} else {
			this.cylinder.visible = true;
		}
	}

	public update(dt: number): BulletReturnState {
		if (!this.isAlive) return BulletReturnState.free;
		this.position = this.position.add(this.velocity.multiply(dt / 1000));
		const futurePos = this.position.add(this.velocity.multiply(16.6 / 1000));

		if (USE_BULLET_LINE) {
			const pos = this.lineGeometry.attributes["position"].array as Float32Array;
			pos[0] = this.position.x;
			pos[1] = this.position.y;
			pos[2] = this.position.z;

			pos[3] = futurePos.x;
			pos[4] = futurePos.y;
			pos[5] = futurePos.z;

			this.lineGeometry.attributes["position"].needsUpdate = true;
		} else {
			this.cylinder.position.set(this.position.x, this.position.y, this.position.z);

			this.cylinder.lookAt(new THREE.Vector3(
				futurePos.x,
				futurePos.y,
				futurePos.z,
			));

			// Gravity? Whats that?
			// this.velocity = this.velocity.add(new Vector(0, -9.8, 0).multiply(dt / 1000));
			this.cylinder.position.set(this.position.x, this.position.y, this.position.z);
		}

		this.isAlive = this.firedAt + BULLET_MAX_LT > Application.time && Application.time >= this.firedAt;
		if (!this.isAlive) {
			this.despawn();
			return BulletReturnState.dying;
		}

		return BulletReturnState.running;
	}

	private despawn() {
		// Should already be false but lets sanity check (for the little I have left)
		this.isAlive = false;
		if (USE_BULLET_LINE) {
			this.line.visible = false;
		} else {
			this.cylinder.visible = false;
		}
	}
}

class BulletManager {
	private bullets: Bullet[] = [];
	private freeBullets: Bullet[] = [];

	private masterObject: THREE.Object3D;

	private geometry: THREE.CylinderGeometry;
	private material: THREE.MeshBasicMaterial;

	private lineMat: THREE.LineBasicMaterial;

	constructor(private scene: SceneManager) {
		this.geometry = new THREE.CylinderGeometry(0.1, 0.1, 3);
		this.material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
		this.lineMat = new THREE.LineBasicMaterial({ color: 0xffff00 });

		// I have no idea if using a master object helps performance but we'll try
		this.masterObject = new THREE.Object3D();
		this.masterObject.name = "Bullet Manager";
		this.scene.add(this.masterObject);
	}

	public update(dt: number) {
		this.bullets.forEach(bullet => {
			const state = bullet.update(dt);
			if (state == BulletReturnState.dying) {
				this.freeBullets.push(bullet);
			}
		});
	}

	public fireBullet(position: Vector, velocity: Vector) {
		// Fetch existing bullet if possible
		if (this.freeBullets.length != 0) {
			const bullet = this.freeBullets.pop();
			if (!bullet) throw new Error("BulletManager: freeBullets.pop() returned null");
			bullet.fire(position, velocity);
		} else {
			// No free bullets, create a new one
			const bullet: Bullet = new Bullet(this.geometry, this.material, this.lineMat, this.masterObject);
			this.bullets.push(bullet);
			bullet.fire(position, velocity);
		}
	}
}
export { BulletManager, Bullet };