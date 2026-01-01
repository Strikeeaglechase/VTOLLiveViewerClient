import * as THREE from "three";
import { Vector } from "vtol-live-viewer-shared/dist/vector.js";

import { Application, msToKnots, rad } from "../app.js";
import { TextOverlay } from "../textOverlayHandler.js";
import { LockCone } from "./mesh/cone.js";
import { ManagedLine } from "./mesh/line.js";
import { DashedAndSolidLinedSphereMarker, LinedBoxMarker, LinedMarker } from "./mesh/marker.js";
import {
	allReturnTypes,
	GateState,
	HOJData,
	LockingRadarData,
	LockReturn,
	RadarData,
	RadarDataReport,
	RadarDetectedTarget,
	ReturnTypes
} from "./radarDataReport.js";
import { Reader } from "./reader.js";
import { IDisposable, ManagedObject } from "./managedObject.js";

// const TWS_COLOR = 0xae00ff; // Purple
const TWS_COLOR = 0x0066ff; // Blue
const FAKE_COLOR = 0xff6200; // Orange
const DETECTED_ACTOR_COLOR = 0x00ff00; // Green
const LR_SIZE = 2;
const LR_VERTS = 2;
const TWS_SIZE = 6;
const LR_COLORS: Record<ReturnTypes, number> = {
	[ReturnTypes.Actual]: 0x00ffa7, // Cyan
	[ReturnTypes.Chaff]: 0xff00ff, // Magenta
	[ReturnTypes.Jammer]: 0xffff00 // Yellow
};
const HOJ_COLOR = 0xff69b4; // Hot Pink

interface LRIndicator {
	marker: DashedAndSolidLinedSphereMarker;
	used: boolean;
	text: TextOverlay;
}

class RadarVisualizer {
	private _visible = true;
	public get visible(): boolean {
		return this._visible;
	}

	private report: GroupedRadarReport = { id: -1, radar: null, lockingRadar: null, hoj: null };
	public set visible(val: boolean) {
		this._visible = val;
		if (!this.visible) {
			this.setRadarScanElementsVisibility(false, false);
			this.hideLockingRadarElements();
		} else {
			this.handleReport(this.report);
		}
	}

	public parentId: number;
	public ticksNoReport: number = 0;
	private lockingRadarStatus = "";
	private radarStatus = "";

	public get status() {
		return `${this.radarStatus} ${this.lockingRadarStatus}`.trim();
	}

	private sweepLine: ManagedLine;
	private limitLineLeft: ManagedLine;
	private limitLineRight: ManagedLine;

	private hojLine: ManagedLine;

	private detectedActorMarkers: Map<number, { mesh: ManagedObject; updatedAt: number }> = new Map();
	private twsTrackMarkers: LinedMarker[] = [];
	private fakeTrackMarkers: LinedMarker[] = [];

	private lrMarkers: Record<ReturnTypes, LRIndicator[]> = {
		[ReturnTypes.Actual]: [],
		[ReturnTypes.Chaff]: [],
		[ReturnTypes.Jammer]: []
	};
	private lrNotInGateBoxes: ManagedObject[] = [];
	private lrSelectedBox: ManagedObject;
	private lockCone: LockCone;
	private ppParent: ManagedObject;
	private ppInfoText: TextOverlay;

	private ownedObjects: IDisposable[] = [];
	private radar: RadarData;
	private radarDataUpdateTime: number;
	private lockingRadar: LockingRadarData;
	private lockingRadarDataUpdateTime: number;

	private pos: THREE.Vector3;
	private cameraRig: THREE.Object3D;

	constructor(public app: Application) {
		this.sweepLine = new ManagedLine(this.app, 0xffff00);
		this.limitLineLeft = new ManagedLine(this.app, 0xffff00);
		this.limitLineRight = new ManagedLine(this.app, 0xffff00);

		this.hojLine = new ManagedLine(this.app, HOJ_COLOR);
		this.hojLine.scaleEffected = false;
		this.ownedObjects.push(this.sweepLine, this.limitLineLeft, this.limitLineRight, this.hojLine);

		for (let i = 0; i < 4; i++) this.twsTrackMarkers.push(new LinedBoxMarker(this, TWS_COLOR, TWS_SIZE));
		for (let i = 0; i < 10; i++) this.fakeTrackMarkers.push(new LinedBoxMarker(this, FAKE_COLOR, TWS_SIZE, { dashSize: 50, gapSize: 50 }));

		this.lrSelectedBox = this.genBoxMarker(0x00ff00, true, LR_SIZE * 2);
		this.lockCone = new LockCone(this.app, 0xffff00);
		this.ppParent = new ManagedObject(new THREE.Object3D());
		this.ppInfoText = new TextOverlay(this.ppParent.obj).offset(0, 10, 0);
		this.ownedObjects.push(this.lockCone, this.ppParent, this.lrSelectedBox);

		this.app.on("unit_scale", (scale: number) => {
			this.ownedObjects.forEach(owned => {
				owned.onScale(scale);
			});
		});
	}

	public handleReport(report: GroupedRadarReport) {
		this.report = report;
		const { radar, lockingRadar, hoj } = report;

		this.ticksNoReport = 0;
		this.radar = radar;
		this.lockingRadar = lockingRadar;

		if (!this.visible) return;

		if (radar) this.handleRadarReport(radar);
		else {
			this.setRadarScanElementsVisibility(false, false);
			this.radarStatus = "";
		}

		if (lockingRadar) this.handleLockingRadarReport(lockingRadar);

		if (hoj) this.handleHojReport(hoj);
		else this.hojLine.threeLine.visible = false;
	}

	private handleHojReport(hoj: HOJData) {
		if (!hoj.active || !hoj.direction) {
			this.hojLine.threeLine.visible = false;
			return;
		}
		this.hojLine.threeLine.visible = true;

		const len = 100_000;
		const end = new THREE.Vector3(this.pos.x + -hoj.direction.x * len, this.pos.y + hoj.direction.y * len, this.pos.z + hoj.direction.z * len);
		this.hojLine.setBetweenPoints(this.pos, end);
	}

	public interpolateElements() {
		const entVel = this.app.getEntityById(this.parentId)?.velocity;
		if (!entVel) return;
		if (this.radar) {
			const radarDt = (Application.time - this.radarDataUpdateTime) / 1000;
			this.radarDataUpdateTime = Application.time;
			if (radarDt != 0) {
				this.radar.position.x += entVel.x * radarDt;
				this.radar.position.y += entVel.y * radarDt;
				this.radar.position.z += entVel.z * radarDt;

				this.radar.twsTracks.forEach(t => {
					if (t.entityId <= 0) return;
					t.position.x += t.velocity.x * radarDt;
					t.position.y += t.velocity.y * radarDt;
					t.position.z += t.velocity.z * radarDt;
				});

				this.radar.fakeTargets.forEach(t => {
					if (t.entityId <= 0) return;
					t.position.x += t.velocity.x * radarDt;
					t.position.y += t.velocity.y * radarDt;
					t.position.z += t.velocity.z * radarDt;
				});

				if (this.visible) this.handleRadarReport(this.radar);
			}
		}

		if (this.lockingRadar) {
			const lockRadarDt = (Application.time - this.lockingRadarDataUpdateTime) / 1000;
			this.lockingRadarDataUpdateTime = Application.time;
			if (lockRadarDt != 0) {
				this.lockingRadar.position.x += entVel.x * lockRadarDt;
				this.lockingRadar.position.y += entVel.y * lockRadarDt;
				this.lockingRadar.position.z += entVel.z * lockRadarDt;
				if (this.lockingRadar.ecmInfo) {
					this.lockingRadar.ecmInfo.lockReturns.forEach(lr => {
						lr.pos.x += lr.vel.x * lockRadarDt;
						lr.pos.y += lr.vel.y * lockRadarDt;
						lr.pos.z += lr.vel.z * lockRadarDt;
					});

					this.lockingRadar.lockData.position.x += this.lockingRadar.lockData.velocity.x * lockRadarDt;
					this.lockingRadar.lockData.position.y += this.lockingRadar.lockData.velocity.y * lockRadarDt;
					this.lockingRadar.lockData.position.z += this.lockingRadar.lockData.velocity.z * lockRadarDt;

					this.lockingRadar.ecmInfo.pulseParams.radarPos.x += entVel.x * lockRadarDt;
					this.lockingRadar.ecmInfo.pulseParams.radarPos.y += entVel.y * lockRadarDt;
					this.lockingRadar.ecmInfo.pulseParams.radarPos.z += entVel.z * lockRadarDt;
				}

				if (this.visible) this.handleLockingRadarReport(this.lockingRadar);
			}
		}
	}

	private hideLockingRadarElements() {
		this.lockingRadarStatus = "";
		allReturnTypes.forEach(rt => {
			this.lrMarkers[rt].forEach(marker => {
				marker.marker.setVisible(false);
				marker.used = false;
				marker.text.hide();
			});
		});

		this.lrNotInGateBoxes.forEach(box => {
			box.obj.visible = false;
		});
		this.lrSelectedBox.obj.visible = false;
		this.lockCone.setVisible(false);
		this.ppInfoText.hide();
	}

	private handleLockingRadarReport(lockingRadar: LockingRadarData) {
		this.lockingRadarDataUpdateTime = Application.time;
		this.pos = new THREE.Vector3(-lockingRadar.position.x, lockingRadar.position.y, lockingRadar.position.z);
		this.hideLockingRadarElements();
		if (!lockingRadar.ecmInfo) return;

		lockingRadar.ecmInfo.lockReturns.forEach(lr => this.updateLrMarker(lr));
		const pp = lockingRadar.ecmInfo.pulseParams;
		this.ppInfoText.edit(`xClose: ${msToKnots(pp.xClosingSpeed).toFixed(2)} kn | Gate: Δ${msToKnots(pp.speedGate).toFixed(2)} kn`).show();
		const tPos = lockingRadar.lockData.position;
		this.ppParent.obj.position.set(-tPos.x, tPos.y, tPos.z);
		// lockingRadar.ecmInfo.pulseParams.rangeGate

		this.lockCone.setVisible(true);
		this.lockCone.updatePoint(
			this.pos,
			new THREE.Vector3(-lockingRadar.lockData.position.x, lockingRadar.lockData.position.y, lockingRadar.lockData.position.z)
		);
	}

	private updateLrMarker(lr: LockReturn) {
		const { marker, text } = this.getOrCreateLrMarker(lr.type);

		// Hide everything by default
		marker.setDashedLineEnabled(false);
		marker.setSolidLineEnabled(false);
		marker.setSolidMarkerVisible(false);
		marker.setTransparentMarkerVisible(false);

		// Show and position marker
		marker.setVisible(true);
		marker.setPositions(this.pos, new THREE.Vector3(-lr.pos.x, lr.pos.y, lr.pos.z));

		const vel = Math.sqrt(lr.vel.x * lr.vel.x + lr.vel.y * lr.vel.y + lr.vel.z * lr.vel.z);
		const velKn = msToKnots(vel);

		const xCloseSpeed = Vector.from(this.lockingRadar.ecmInfo.pulseParams.radarLookDir).dot(Vector.from(lr.vel));
		const deltaXCloseSpeed = Math.abs(xCloseSpeed - this.lockingRadar.ecmInfo.pulseParams.xClosingSpeed);
		const deltaXCloseSpeedKn = msToKnots(deltaXCloseSpeed);
		text
			.edit(
				`${ReturnTypes[lr.type]}\nW: ${(lr.weight * 10000).toFixed(2)}, V: ${velKn.toFixed(0)}kn\nxCloseDelta: ${deltaXCloseSpeedKn.toFixed(0)}kn\n${
					GateState[lr.gateState]
				}`
			)
			.show();

		if (lr.gateState != GateState.InGate) {
			marker.setTransparentMarkerVisible(true);

			// Non-gate box shows no line
		} else {
			marker.setSolidMarkerVisible(true);
		}

		if (lr.isSelected) {
			this.lrSelectedBox.obj.visible = true;
			this.lrSelectedBox.obj.position.set(-lr.pos.x, lr.pos.y, lr.pos.z);

			// Selected box shows solid line
			marker.setSolidLineEnabled(true);
			this.lockingRadarStatus = `Locked ${ReturnTypes[lr.type]}`;
		} else if (lr.gateState == GateState.InGate) {
			// Non-selected box shows dashed line
			marker.setDashedLineEnabled(true);
		}

		if (lr.type == ReturnTypes.Actual && this.cameraRig) {
			this.cameraRig.position.set(-lr.pos.x, lr.pos.y, lr.pos.z);
		}
	}

	private handleRadarReport(radar: RadarData) {
		this.radarDataUpdateTime = Application.time;
		this.pos = new THREE.Vector3(-radar.position.x, radar.position.y, radar.position.z);

		this.setRadarScanElementsVisibility(true, this.lockingRadar == null || !this.lockingRadar.lockData?.locked);
		this.drawScanAndLimits();
		this.radarStatus = "";

		if (this.lockingRadar == null || !this.lockingRadar.lockData?.locked) {
			this.radarStatus += "Scanning";
		}

		radar.detectedActors.forEach(da => {
			if (!this.detectedActorMarkers.has(da)) {
				const marker = this.genSphereMarker(DETECTED_ACTOR_COLOR, true, 3);
				this.detectedActorMarkers.set(da, { mesh: marker, updatedAt: Application.time });
			}

			const actor = this.app.getEntityById(da);
			if (actor) {
				const marker = this.detectedActorMarkers.get(da);
				marker.updatedAt = Application.time;
				marker.mesh.obj.position.set(actor.position.x, actor.position.y, actor.position.z);
				marker.mesh.obj.visible = true;
			}
		});

		this.detectedActorMarkers.forEach((marker, id) => {
			if (Application.time - marker.updatedAt > 250 || Application.time < marker.updatedAt) {
				marker.mesh.obj.visible = false;
			}
		});

		this.updateTrackMarkers(radar.twsTracks, this.twsTrackMarkers);
		this.updateTrackMarkers(radar.fakeTargets, this.fakeTrackMarkers);

		const twsLength = radar.twsTracks.filter(t => t.entityId > 0).length;
		const fakeLength = radar.fakeTargets.filter(t => t.entityId > 0).length;
		if (twsLength > 0) this.radarStatus += ` TWS x${twsLength}`;
		if (fakeLength > 0) this.radarStatus += ` Fake x${fakeLength}`;
	}

	private getOrCreateLrMarker(returnType: ReturnTypes): LRIndicator {
		let markerSet = this.lrMarkers[returnType].find(marker => !marker.used);
		if (!markerSet) {
			const marker = new DashedAndSolidLinedSphereMarker(this, LR_COLORS[returnType], LR_SIZE, { dashSize: 25, gapSize: 40 }, LR_VERTS);
			this.ownedObjects.push(marker);
			markerSet = { marker, used: true, text: new TextOverlay(marker.endMarkerSolid.obj).offset(0, 3, 0) };
			this.lrMarkers[returnType].push(markerSet);
		}

		markerSet.used = true;
		return markerSet;
	}

	private getOrCreateLrNotInGateBox(): ManagedObject {
		let box = this.lrNotInGateBoxes.find(b => !b.obj.visible);
		if (!box) {
			box = this.genBoxMarker(0xff0000, true, LR_SIZE);
			this.lrNotInGateBoxes.push(box);
		}

		return box;
	}

	private setRadarScanElementsVisibility(markerVisibility: boolean, scanLineVisibility: boolean) {
		this.twsTrackMarkers.forEach(markerSet => markerSet.setVisible(markerVisibility));
		this.fakeTrackMarkers.forEach(markerSet => markerSet.setVisible(markerVisibility));
		this.limitLineLeft.threeLine.visible = scanLineVisibility;
		this.limitLineRight.threeLine.visible = scanLineVisibility;
		this.sweepLine.threeLine.visible = scanLineVisibility;
	}

	private updateTrackMarkers(tracks: RadarDetectedTarget[], markers: LinedMarker[]) {
		tracks.forEach((track, idx) => {
			const markerSet = markers[idx];
			if (track.entityId == -1) {
				markerSet.setVisible(false);
				return;
			}

			markerSet.setVisible(true);
			markerSet.setPositions(this.pos, new THREE.Vector3(-track.position.x, track.position.y, track.position.z));
		});
	}

	private drawScanAndLimits() {
		const forward = new THREE.Vector3(0, 0, 100);
		this.sweepLine.moveAndPoint(this.pos, forward);
		this.limitLineLeft.moveAndPoint(this.pos, forward);
		this.limitLineRight.moveAndPoint(this.pos, forward);

		const scanRotQuat = new THREE.Quaternion().setFromEuler(
			new THREE.Euler(rad(this.radar.rotTfGlobal.x), -rad(this.radar.rotTfGlobal.y), -rad(this.radar.rotTfGlobal.z), "YXZ")
		);
		this.sweepLine.threeLine.setRotationFromQuaternion(scanRotQuat);

		const halfFov = this.radar.rotationRange / 2;
		const left = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), rad(halfFov));
		const right = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), rad(-halfFov));

		var rotQuat = new THREE.Quaternion().setFromEuler(
			new THREE.Euler(rad(this.radar.rotation.x), -rad(this.radar.rotation.y), -rad(this.radar.rotation.z), "YXZ")
		);
		const leftQuat = rotQuat.clone().multiply(left);
		const rightQuat = rotQuat.clone().multiply(right);
		this.limitLineLeft.threeLine.setRotationFromQuaternion(leftQuat);
		this.limitLineRight.threeLine.setRotationFromQuaternion(rightQuat);
	}

	public genSphereMarker(color: number, wireframe: boolean, size: number, verts = 6, opacity: number = 1): ManagedObject {
		const geometry = new THREE.SphereGeometry(size, verts, verts);
		const material = new THREE.MeshBasicMaterial({ color, wireframe, transparent: opacity < 1 && !wireframe, opacity });
		const sphere = new THREE.Mesh(geometry, material);
		sphere.name = "radarDetectedActorMarker";

		const managed = new ManagedObject(sphere);
		this.ownedObjects.push(managed);

		return managed;
	}

	public genBoxMarker(color: number, wireframe: boolean, size: number, opacity: number = 1): ManagedObject {
		const geometry = new THREE.BoxGeometry(size, size, size);
		const material = new THREE.MeshBasicMaterial({ color, wireframe, transparent: opacity < 1 && !wireframe, opacity });
		const box = new THREE.Mesh(geometry, material);
		box.name = "radarTwsTrackMarker";

		const managed = new ManagedObject(box);
		this.ownedObjects.push(managed);

		return managed;
	}

	public getCamRig(): THREE.Object3D {
		if (!this.cameraRig) {
			this.cameraRig = new THREE.Object3D();
		}

		this.cameraRig.position.set(this.pos.x, this.pos.y, this.pos.z);
		return this.cameraRig;
		// return this.lrMarkers[ReturnTypes.Actual][0]?.marker?.endMarkerSolid?.obj;
	}

	public cleanup() {
		console.log(`Cleanup ${this.parentId} radar visualizer`);
		this.ownedObjects.forEach(owned => owned.dispose());
	}
}

interface GroupedRadarReport {
	radar: RadarData;
	lockingRadar: LockingRadarData;
	hoj: HOJData;
	id: number;
}

class RadarDataVisualizer {
	private radars: RadarVisualizer[] = [];
	private radarVisVisibilityCache: Record<number, boolean> = {};

	constructor(private app: Application) {}

	public getRadarVisualizers(): RadarVisualizer[] {
		return this.radars;
	}

	public handleRadarDataReport(data: string) {
		this.radars.forEach(rdr => rdr.ticksNoReport++);

		const reader = new Reader(Buffer.from(data, "base64"));
		const radarData = new RadarDataReport();
		radarData.build(reader);

		const allIds: Set<number> = new Set();
		radarData.radars.forEach(radar => allIds.add(radar.parentNetId));
		radarData.lockingRadars.forEach(lr => allIds.add(lr.parentNetId));
		radarData.hojAntennas.forEach(hoj => allIds.add(hoj.parentNetId));

		const groupedRadarData: GroupedRadarReport[] = Array.from(allIds).map(id => {
			return {
				id,
				radar: radarData.radars.find(r => r.parentNetId == id),
				lockingRadar: radarData.lockingRadars.find(lr => lr.parentNetId == id),
				hoj: radarData.hojAntennas.find(h => h.parentNetId == id)
			};
		});

		groupedRadarData.forEach(groupedRadarReport => {
			if (groupedRadarReport.id == -1 || !groupedRadarReport.id) return;

			let visualizer = this.radars.find(r => r.parentId == groupedRadarReport.id);
			if (!visualizer) {
				visualizer = new RadarVisualizer(this.app);
				visualizer.parentId = groupedRadarReport.id;
				visualizer.visible = this.radarVisVisibilityCache[groupedRadarReport.id] ?? true;
				this.radars.push(visualizer);
			}

			visualizer.handleReport(groupedRadarReport);
		});

		this.radars = this.radars.filter(r => {
			if (r.ticksNoReport >= 50) {
				this.radarVisVisibilityCache[r.parentId] = r.visible;
				r.cleanup();
				return false;
			}

			return true;
		});
	}

	public update(dt: number) {
		this.radars.forEach(radar => radar.interpolateElements());
	}

	public getRadarForEntity(entityId: number) {
		return this.radars.find(r => r.parentId == entityId);
	}

	public hasRadarDataForEntity(entityId: number) {
		return this.radars.some(r => r.parentId == entityId);
	}
}

export { RadarDataVisualizer, RadarVisualizer };
