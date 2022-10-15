import * as THREE from "three";

import { Vector } from "../../../../VTOLLiveViewerCommon/dist/src/vector";
import { Application } from "../app";
import { Entity } from "../entityBase/entity";
import { SceneManager } from "./sceneManager";

const FLARE_LT = 5 * 1000;
const FLARE_DRAG = 0.95;
const FLARE_GRAV = -9;

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
	private scaleMult = 85;

	private geometry: THREE.SphereGeometry;
	private material: THREE.MeshStandardMaterial;

	constructor(private scene: SceneManager) {
		this.geometry = new THREE.SphereGeometry(1.5, 6, 6);
		this.material = new THREE.MeshStandardMaterial({ color: "#000000", side: THREE.DoubleSide });
		this.material.emissiveIntensity = 1;
		this.material.emissive = new THREE.Color("#ffe357");
	}

	public update(dt: number) {
		const now = Application.time;
		this.flares.forEach(flare => {
			if (!flare.isAlive) return;

			// TODO: Make flares move a bit to match vtol better
			flare.velocity = flare.velocity.multiply(FLARE_DRAG).add(new Vector(0, FLARE_GRAV * dt / 1000, 0));
			flare.position = flare.position.add(flare.velocity.multiply(dt / 1000));
			flare.mesh.position.set(flare.position.x, flare.position.y, flare.position.z);

			const timeAlive = (now - flare.createdAt);

			const amountThrough = 1 - (timeAlive / FLARE_LT);

			// Make flares still half size when fully faded
			const amountThroughAdjusted = 1 - ((timeAlive / FLARE_LT) * 0.8);

			flare.mesh.scale.set(1.5 * amountThroughAdjusted * this.scaleMult, 1.5 * amountThroughAdjusted * this.scaleMult, 1.5 * amountThroughAdjusted * this.scaleMult);

			// It always is, this is just to make TS happy
			if (flare.mesh.material instanceof THREE.MeshStandardMaterial) {
				flare.mesh.material.transparent = true;
				flare.mesh.material.opacity = amountThrough;
			}

			if (flare.createdAt + FLARE_LT < now || now < flare.createdAt) {
				flare.mesh.visible = false;
				flare.isAlive = false;
				flare.mesh.scale.set(2, 2, 2);
				this.freeFlares.push(flare);
			}
		});

		// this.flares = this.flares.filter(f => f.isAlive);
	}

	public fireCm(entity: Entity) {
		console.log("CMS");
		// Try to reuse a flare, otherwise create a new one
		if (this.freeFlares.length == 0) {
			const mesh = new THREE.Mesh(this.geometry, this.material);
			mesh.position.set(entity.position.x, entity.position.y, entity.position.z);

			mesh.name = "Flare";
			this.scene.add(mesh);

			this.flares.push({
				position: entity.position.clone(),
				velocity: entity.velocity.clone().multiply(0.99),
				createdAt: Application.time,
				isAlive: true,
				mesh: mesh
			});
		} else {
			const flare = this.freeFlares.pop();
			if (!flare) throw new Error("FlareManager: flare is null");
			flare.position = entity.position.clone();
			flare.velocity = entity.velocity.clone().multiply(0.99);
			flare.createdAt = Application.time;
			flare.isAlive = true;
			flare.mesh.visible = true;
			flare.mesh.position.set(flare.position.x, flare.position.y, flare.position.z);
			this.flares.push(flare);
		}
	}

	public updateScale(scale: number) {
		this.scaleMult = scale * 0.9;
	}
}

export { FlareManager };