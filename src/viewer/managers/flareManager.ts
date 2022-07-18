import * as THREE from "three";

import { Vector } from "../../../../VTOLLiveViewerCommon/dist/src/vector";
import { Entity } from "../entityBase/entity";
import { SceneManager } from "./sceneManager";

const FLARE_LT = 5 * 1000;
const FLARE_DRAG = 0.995;
const FLARE_GRAV = -20;

interface Flare {
	position: Vector;
	velocity: Vector;
	createdAt: number;
	mesh: THREE.Mesh;
	isAlive: boolean;
}

class FlareManager {
	private flares: Flare[] = [];
	private freeFlares: Flare[] = [];

	private geometry: THREE.SphereGeometry;
	private material: THREE.MeshBasicMaterial;

	constructor(private scene: SceneManager) {
		this.geometry = new THREE.SphereGeometry(2);
		this.material = new THREE.MeshBasicMaterial({ color: "#ffe357", side: THREE.DoubleSide });

	}

	public update(dt: number) {
		const now = Date.now();
		this.flares.forEach(flare => {
			if (!flare.isAlive) return;

			// TODO: Make flares move a bit to match vtol better
			// flare.position = flare.position.add(flare.velocity.multiply(dt / 1000));
			// flare.velocity = flare.velocity.multiply(FLARE_DRAG).add(new Vector(0, FLARE_GRAV * dt / 1000, 0));
			// flare.mesh.position.set(flare.position.x, flare.position.y, flare.position.z);
			if (flare.createdAt + FLARE_LT < now) {
				flare.mesh.visible = false;
				flare.isAlive = false;
				this.freeFlares.push(flare);
			}
		});

		// this.flares = this.flares.filter(f => f.isAlive);
	}

	public fireCm(entity: Entity) {
		// Try to reuse a flare, otherwise create a new one
		if (this.freeFlares.length == 0) {
			const mesh = new THREE.Mesh(this.geometry, this.material);
			mesh.position.set(entity.position.x, entity.position.y, entity.position.z);

			mesh.name = "Flare";
			this.scene.add(mesh);

			this.flares.push({
				position: entity.position.clone(),
				velocity: entity.velocity.clone().multiply(0.99),
				createdAt: Date.now(),
				isAlive: true,
				mesh: mesh
			});
		} else {
			const flare = this.freeFlares.pop();
			if (!flare) throw new Error("FlareManager: flare is null");
			flare.position = entity.position.clone();
			flare.velocity = entity.velocity.clone().multiply(0.99);
			flare.createdAt = Date.now();
			flare.isAlive = true;
			flare.mesh.position.set(flare.position.x, flare.position.y, flare.position.z);
			this.flares.push(flare);
		}
	}

	public updateScale(scale: number) {
		this.flares.forEach(flare => {
			flare.mesh.scale.set(scale, scale, scale);
		});
	}
}

export { FlareManager };