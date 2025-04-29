import * as THREE from "three";

import { Vector3 } from "../../../../VTOLLiveViewerCommon/dist/shared.js";
import { Vector } from "../../../../VTOLLiveViewerCommon/dist/vector.js";
import { Application } from "../app.js";
import { Entity } from "./entity.js";

enum SensorSource {
	RWR,
	RWRTriangulated,
	Radar,
	Optical,
	GPS
}

const sensorColors: Record<SensorSource, { color: number; lineMat: THREE.LineDashedMaterial; boxMat: THREE.MeshBasicMaterial }> = {
	[SensorSource.RWR]: { color: 0x00ff00, lineMat: null, boxMat: null },
	[SensorSource.RWRTriangulated]: { color: 0x00ff00, lineMat: null, boxMat: null },
	[SensorSource.Radar]: { color: 0x0000ff, lineMat: null, boxMat: null },
	[SensorSource.Optical]: { color: 0xff0000, lineMat: null, boxMat: null },
	[SensorSource.GPS]: { color: 0xffff00, lineMat: null, boxMat: null }
};

for (const s in sensorColors) {
	const source = +s as SensorSource;
	sensorColors[source].lineMat = new THREE.LineDashedMaterial({
		color: sensorColors[source].color,
		scale: 1,
		dashSize: 50,
		gapSize: 50
	});

	sensorColors[source].boxMat = new THREE.MeshBasicMaterial({ color: sensorColors[source].color, wireframe: true });
}

class DatalinkMarker {
	private position: Vector = new Vector();
	private velocity: Vector = new Vector();
	public falseId: number;
	public sensorSource: SensorSource;

	private lastUpdatedAt: number;
	private spawnedAt: number;

	private line: THREE.Line;
	private geometry: THREE.BufferGeometry;
	private endingBox: THREE.Mesh;

	public hasBeenRemoved = false;

	constructor(private entity: Entity, private app: Application) {}

	public init(source: SensorSource, falseId: number) {
		this.sensorSource = source;
		this.falseId = falseId;

		this.geometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0)]);

		this.line = new THREE.Line(this.geometry, sensorColors[this.sensorSource].lineMat);
		this.line.frustumCulled = false;
		this.line.name = "Datalink line";

		const endBoxGeom = new THREE.SphereGeometry(4, 8, 8);
		this.endingBox = new THREE.Mesh(endBoxGeom, sensorColors[this.sensorSource].boxMat);
		this.endingBox.name = "Datalink ending box";

		this.app.sceneManager.add(this.line);
		this.app.sceneManager.add(this.endingBox);

		this.spawnedAt = Application.time;
	}

	public updateData(pos: Vector3, vel: Vector3) {
		this.position.set(pos);
		this.velocity.set(vel);
		this.lastUpdatedAt = Application.time;
	}

	public update() {
		if (Application.time < this.spawnedAt) {
			this.remove();
			return;
		}

		if (this.hasBeenRemoved) return;

		const dt = (Application.time - this.lastUpdatedAt) / 1000;
		const pos = this.position.clone().add(this.velocity.clone().multiply(dt));

		this.geometry.setFromPoints([
			new THREE.Vector3(this.entity.position.x, this.entity.position.y, this.entity.position.z),
			new THREE.Vector3(pos.x, pos.y, pos.z)
		]);
		this.line.computeLineDistances();

		this.endingBox.position.set(pos.x, pos.y, pos.z);
		this.endingBox.scale.set(this.entity.scale, this.entity.scale, this.entity.scale);

		if (dt > 20) {
			this.remove();
		}
	}

	public remove() {
		this.hasBeenRemoved = true;
		this.line.geometry.dispose();

		this.app.sceneManager.remove(this.line);
		this.app.sceneManager.remove(this.endingBox);
	}
}

export { DatalinkMarker, SensorSource };
