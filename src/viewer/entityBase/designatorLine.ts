import * as THREE from "three";

import { IVector3 } from "../../../../VTOLLiveViewerCommon/dist/vector";
import { Application } from "../app";
import { Entity } from "./entity";

// A dashed line with a box at the end that can be locked onto entities
class DesignatorLine {
	private line: THREE.Line;
	private geometry: THREE.BufferGeometry;

	private endingBox: THREE.Mesh;

	private hasBeenSpawned = false;
	private hasInit = false;

	public lockedEntity: Entity | null = null;
	private lockedPoint: IVector3 | null = null;

	constructor(private parent: Entity, private app: Application, private color: string) {}

	public init() {
		this.geometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0)]);

		const mat = new THREE.LineDashedMaterial({
			color: this.color,
			scale: 1,
			dashSize: 50,
			gapSize: 50
		});
		this.line = new THREE.Line(this.geometry, mat);
		this.line.frustumCulled = false;
		this.line.name = "Designator line";

		const endBoxMat = new THREE.MeshBasicMaterial({ color: this.color, wireframe: true });
		const endBoxGeom = new THREE.BoxGeometry(10, 10, 10);
		this.endingBox = new THREE.Mesh(endBoxGeom, endBoxMat);
		this.endingBox.name = "Designator ending box";
		this.hasInit = true;
	}

	public lockEntity(entity: Entity) {
		this.lockedEntity = entity;
		this.lockedPoint = null;
		this.setVisible(true);
	}

	public lockUnit(unitId: number) {
		// const entity = this.app.entities.find(entity => entity.unitId == unitId);
		const entity = this.app.getEntityByUnitId(unitId);
		if (!entity) {
			console.error(`Unable to locate entity for designator lock! Entity UnitID: ${unitId}`);
			return;
		}

		this.lockEntity(entity);
	}

	public lockPoint(point: IVector3) {
		this.lockedPoint = point;
		this.lockedEntity = null;
		this.setVisible(true);
	}

	public isLockedTo(entity: Entity) {
		return this.lockedEntity == entity && this.line.visible && this.lockedEntity.isActive;
	}

	public update() {
		if (!this.hasInit) return;

		if (!this.lockedEntity && !this.lockedPoint) return;

		// Try to protected against locked to dead entities
		if (this.lockedEntity && (!this.lockedEntity.isActive || this.lockedEntity.hasDied)) {
			console.log(`Designator locked to dead or inactive entity! Entity: ${this.lockedEntity.debugName}`);
			this.lockedEntity = null;
			this.hide();
		}

		if (!this.hasBeenSpawned) {
			this.app.sceneManager.add(this.line);
			this.app.sceneManager.add(this.endingBox);
			this.hasBeenSpawned = true;
		}

		const point = this.lockedEntity ? this.lockedEntity.position : this.lockedPoint;
		if (!point) return;

		this.geometry.setFromPoints([
			new THREE.Vector3(this.parent.position.x, this.parent.position.y, this.parent.position.z),
			new THREE.Vector3(point.x, point.y, point.z)
		]);
		this.line.computeLineDistances();

		this.endingBox.position.set(point.x, point.y, point.z);

		if (this.lockedEntity) {
			this.endingBox.scale.set(this.lockedEntity.scale, this.lockedEntity.scale, this.lockedEntity.scale);
		}
	}

	public hide() {
		this.setVisible(false);
	}

	private setVisible(vis: boolean) {
		if (!this.hasInit) return;
		this.line.visible = vis;
		this.endingBox.visible = vis;
	}

	public remove() {
		if (!this.hasInit) return;
		this.app.sceneManager.remove(this.line);
		this.app.sceneManager.remove(this.endingBox);
	}
}

export { DesignatorLine };
