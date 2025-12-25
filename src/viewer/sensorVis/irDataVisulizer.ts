import * as THREE from "three";

import { IVector3 } from "vtol-live-viewer-shared/dist/vector.js";
import { TextOverlay } from "../textOverlayHandler.js";
import { ManagedObject } from "./managedObject.js";
import { HeatEmitterData, HeatSeekerData, IRDataReport } from "./irDataReport.js";
import { Application, rad } from "../app.js";
import { Reader } from "./reader.js";

class HeatEmitterMarker {
	public marker: ManagedObject;
	private textOverlay: TextOverlay;

	private position: IVector3;
	private velocity: IVector3;
	public usedThisUpdate = false;

	constructor() {
		const markerMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
		const markerGeom = new THREE.SphereGeometry(0.5, 8, 8);

		this.marker = new ManagedObject(new THREE.Mesh(markerGeom, markerMat));
		this.marker.obj.visible = false;
		this.textOverlay = new TextOverlay(this.marker.obj).offset(0, 3, 0).hide();
	}

	public updateFromData(heatEmitterData: HeatEmitterData) {
		this.position = heatEmitterData.position;
		this.velocity = heatEmitterData.velocity;

		this.marker.obj.position.set(-this.position.x, this.position.y, this.position.z);
		this.marker.obj.visible = true;
		this.textOverlay.edit(`${heatEmitterData.heat.toFixed(1)}`).show();

		this.usedThisUpdate = true;
	}

	public drift(dt: number) {
		this.position.x += this.velocity.x * dt;
		this.position.y += this.velocity.y * dt;
		this.position.z += this.velocity.z * dt;

		this.marker.obj.position.set(-this.position.x, this.position.y, this.position.z);
	}

	public show() {
		this.marker.obj.visible = true;
		this.textOverlay.show();
	}

	public reset() {
		this.hide();
		this.usedThisUpdate = false;
	}

	public hide() {
		this.marker.obj.visible = false;
		this.textOverlay.hide();
	}
}

class HeatSeekerMarker {
	public fovLines: THREE.Line[] = [];
	public usedThisUpdate = false;

	constructor() {
		const lineMat = new THREE.LineBasicMaterial({ color: 0x00ff00 });
		for (let i = 0; i < 4; i++) {
			const lineGeom = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 100)]);
			const line = new THREE.Line(lineGeom, lineMat);
			line.frustumCulled = false;

			this.fovLines.push(line);
		}
	}

	public updateFromData(heatSeekerData: HeatSeekerData) {
		const mainRot = new THREE.Quaternion().setFromEuler(
			new THREE.Euler(rad(heatSeekerData.rotation.x), -rad(heatSeekerData.rotation.y), -rad(heatSeekerData.rotation.z), "YXZ")
		);

		const fovRad = rad(heatSeekerData.fov) / 2;

		const low = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), fovRad);
		const high = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), -fovRad);
		const left = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), fovRad);
		const right = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), -fovRad);

		const rots = [low, high, left, right];
		for (let i = 0; i < 4; i++) {
			const rot = new THREE.Quaternion().copy(mainRot).multiply(rots[i]);
			this.fovLines[i].setRotationFromQuaternion(rot);
			this.fovLines[i].position.set(-heatSeekerData.position.x, heatSeekerData.position.y, heatSeekerData.position.z);
		}

		this.usedThisUpdate = true;
	}

	public show() {
		this.fovLines.forEach(line => (line.visible = true));
	}

	public hide() {
		this.fovLines.forEach(line => (line.visible = false));
	}

	public reset() {
		this.hide();
		this.usedThisUpdate = false;
	}
}

class IRDataVisualizer {
	private heatEmitterMarkers: HeatEmitterMarker[] = [];
	private heatEmitterUpdateTime = Application.time;

	private heatSeekerMarkers: HeatSeekerMarker[] = [];

	constructor(private app: Application) {
		this.app.on("unit_scale", (scale: number) => {
			this.heatEmitterMarkers.forEach(marker => {
				marker.marker.obj.scale.set(scale, scale, scale);
			});

			this.heatSeekerMarkers.forEach(marker => {
				marker.fovLines.forEach(line => {
					line.scale.set(scale, scale, scale);
				});
			});
		});
	}

	public handleIrDataReport(data: string) {
		const reader = new Reader(Buffer.from(data, "base64"));
		const irDataReport = new IRDataReport();
		irDataReport.build(reader);

		this.heatEmitterMarkers.forEach(marker => marker.reset());
		irDataReport.heatEmitters.forEach(emitterData => {
			const marker = this.getOrCreateHeatEmitterMarker();
			marker.updateFromData(emitterData);
		});

		this.heatSeekerMarkers.forEach(marker => marker.reset());
		irDataReport.heatSeekers.forEach(seekerData => {
			const marker = this.getOrCreateHeatSeekerMarker();
			marker.updateFromData(seekerData);
		});
	}

	private getOrCreateHeatEmitterMarker(): HeatEmitterMarker {
		const marker = this.heatEmitterMarkers.find(m => !m.usedThisUpdate);
		if (marker) return marker;

		const newMarker = new HeatEmitterMarker();
		this.heatEmitterMarkers.push(newMarker);

		return newMarker;
	}

	private getOrCreateHeatSeekerMarker(): HeatSeekerMarker {
		const marker = this.heatSeekerMarkers.find(m => !m.usedThisUpdate);
		if (marker) return marker;

		const newMarker = new HeatSeekerMarker();
		this.heatSeekerMarkers.push(newMarker);

		return newMarker;
	}

	public update(dt: number) {
		const heatEmitterDt = (Application.time - this.heatEmitterUpdateTime) / 1000;
		this.heatEmitterUpdateTime = Application.time;
		this.heatEmitterMarkers.forEach(marker => {
			if (marker.usedThisUpdate) marker.drift(heatEmitterDt);
		});
	}
}

export { IRDataVisualizer };
