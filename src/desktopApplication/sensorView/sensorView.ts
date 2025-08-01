import { Color, ColorValue, Renderer } from "strik-2d-renderer";
import { deg, rad } from "strik-2d-renderer/dist/renderer.js";
import { Team } from "vtol-live-viewer-shared";

import { Quaternion } from "../../../../VTOLLiveViewerCommon/dist/math/quaternion.js";
import { Vector } from "../../../../VTOLLiveViewerCommon/dist/vector.js";
import { RadarTarget, State, VisualTargetType } from "./state.js";

const radarColor: ColorValue = 155;
const radarPartialDetectColor: ColorValue = [25, 184, 0];
const radarDetectedColor: ColorValue = [0, 255, 0];
const visualTargetColor: ColorValue = [190, 196, 0];
const rwrMissileColor: ColorValue = [255, 0, 0];
const rwrNonMissileColor: ColorValue = [255, 119, 0];
const irSeekerColor: ColorValue = [255, 0, 255];

const scaleMin = 0.001;
const scaleMax = 1;

interface WrappedState {
	state: State;
	aiId: number;
}

class Application {
	private renderer: Renderer;
	private time: number = 0;
	private binnedStates: Record<number, State[][]> = [];

	private state: State;
	private targetedAi: number = 0;
	private rot: Quaternion = new Quaternion(0, 0, 0, 1);
	private euler: Vector = new Vector(0, 0, 0);

	private lastFrameTime: number = Date.now();

	private selfScreenX = 0;
	private selfScreenY = 0;
	private scale = 0.01;

	private currentDisplayY = 15;
	private legendDisplayY = 15;
	private longestLegendTextLen = 0;

	private partialDetectedTargetInitAngle: Record<number, { angle: number; time: number }> = {};

	public async init() {
		this.renderer = new Renderer("render-target");

		this.addEventListeners();
		this.onResize();

		await this.loadSensorData();

		window.vtgrApi.onTime(time => {
			this.time = time / 1000;
		});

		window.vtgrApi.onTargetedEntity(entityId => {
			this.targetedAi = entityId;
			this.updateCurrentState();
		});

		this.run();
	}

	private async loadSensorData() {
		// const response = await fetch("http://localhost:8000/sensor");
		// const stateData: State[] = await response.json();
		this.renderer.clear(25);
		this.renderer.text("Waiting for state.json data.", 25, 200, 255, 16);
		this.renderer.text("File must be in the same directory as the loaded VTGR.", 25, 225, 255, 16);

		let stateDataStr: string;
		await new Promise<void>(res => {
			window.vtgrApi.onSensorData(data => {
				stateDataStr = data;
				res();
			});
		});

		const stateData: WrappedState[] = stateDataStr
			.split("\n")
			.filter(l => l.trim().length > 0)
			.map(l => JSON.parse(l));
		console.log(`Loaded ${stateData.length} sensor states`);

		stateData.forEach(ws => {
			const binIdx = Math.floor(ws.state.time);
			if (!this.binnedStates[ws.aiId]) this.binnedStates[ws.aiId] = [];
			if (!this.binnedStates[ws.aiId][binIdx]) this.binnedStates[binIdx] = [];

			this.binnedStates[ws.aiId][binIdx].push(ws.state);
		});
	}

	private updateCurrentState() {
		const binIdx = Math.floor(this.time);
		if (!this.binnedStates[this.targetedAi] || !this.binnedStates[this.targetedAi][binIdx]) return;
		const states = this.binnedStates[this.targetedAi][binIdx];

		for (let i = 0; i < states.length; i++) {
			const state = states[i];
			if (state.time <= this.time) this.state = state;
			else break;
		}

		this.rot = new Quaternion(
			this.state.kinematics.rotation.x,
			this.state.kinematics.rotation.y,
			this.state.kinematics.rotation.z,
			this.state.kinematics.rotation.w
		);
		this.euler = this.rot.toEuler("ZXY");
	}

	private run() {
		const dt = (Date.now() - this.lastFrameTime) / 1000;
		this.lastFrameTime = Date.now();
		this.currentDisplayY = 15;
		this.legendDisplayY = 15;
		// this.time += dt;
		this.updateCurrentState();

		this.renderer.clear(25);
		const weapons = this.state.weapons
			.map(w => {
				const parts = w.split("/");
				return parts[parts.length - 1];
			})
			.join(", ");

		this.disp(`Time: ${this.time.toFixed(2)}`);
		this.disp(`Speed: ${Vector.from(this.state.kinematics.velocity).length().toFixed(0)}m/s`);
		this.disp(`Altitude: ${this.state.kinematics.position.y.toFixed(0)}m`);
		this.disp(`RAngle: ${this.state.radar.angle.toFixed(0)}°`);
		this.disp(`Flares: ${this.state.flareCount}`);
		this.disp(`Chaff: ${this.state.chaffCount}`);
		this.disp(`Radar: ${this.state.radar.detectedTargets.length}`);
		this.disp(`RWR: ${this.state.rwrContacts.length}`);
		this.disp(`Visual: ${this.state.visualTargets.length}`);
		this.disp(`Heat: ${this.state.ir.heat.toFixed(0)}`);
		this.disp(`Weapons: ${weapons}`);

		this.legend(`Radar`, radarPartialDetectColor);
		this.legend(`Visual`, visualTargetColor);
		this.legend(`RWR Aircraft`, rwrNonMissileColor);
		this.legend(`RWR Missile`, rwrMissileColor);
		this.legend(`IR Seeker`, irSeekerColor);

		this.selfScreenX = this.renderer.canvas.width / 2;
		this.selfScreenY = this.renderer.canvas.height * 0.75; //this.renderer.canvas.height / 2;

		this.renderer.transform(this.selfScreenX, this.selfScreenY, 0);
		const tSize = 20;
		this.renderer.strokeTriangle(0, 0, -tSize / 2, tSize, tSize / 2, tSize, 255);
		this.renderer.line(0, 0, 0, -tSize * 0.75, 255);

		this.drawRadar();
		this.drawVisualTargets();
		this.drawRWRContacts();
		this.drawIrSeeker();

		this.renderer.revert();

		requestAnimationFrame(() => this.run());
	}

	private drawRWRContacts() {
		const ourBearing = deg(this.euler.y);
		this.state.rwrContacts.forEach(contact => {
			const x = Math.cos(rad(contact.bearing - ourBearing - 90)) * 10000;
			const y = Math.sin(rad(contact.bearing - ourBearing - 90)) * 10000;

			this.renderer.line(0, 0, -x, y, contact.isMissile ? rwrMissileColor : rwrNonMissileColor);
		});
	}

	private drawVisualTargets() {
		const tOffDist = 150;
		this.state.visualTargets.forEach(vt => {
			const dir = Vector.from(vt.direction).applyQuaternion(this.rot);
			const xz = new Vector(dir.x, 0, dir.z).normalized();
			const x = xz.x * 10000;
			const y = -xz.z * 10000;
			this.renderer.line(0, 0, x, y, visualTargetColor);

			const tX = xz.x * tOffDist;
			const tY = -xz.z * tOffDist;

			let teamText = vt.team != Team.Unknown ? Team[vt.team] : "";
			const text = `${VisualTargetType[vt.type]}\n${teamText}`;
			const tLen = this.renderer.ctx.measureText(text).width;
			this.renderer.text(text, tX - tLen / 2, tY + 5, visualTargetColor, 10);
		});
	}

	private drawRadar() {
		// Draw main part of the radar
		const displaySize = 300;

		const adjust = this.state.radar.azimuthAdjust;
		const angle = this.state.radar.angle;
		const fov = this.state.radar.fov;

		const sweepX = Math.cos(rad(angle + adjust - 90)) * displaySize;
		const sweepY = Math.sin(rad(angle + adjust - 90)) * displaySize;
		this.renderer.line(0, 0, sweepX, sweepY, radarColor);

		const exLim = Math.cos(rad(fov / 2 + adjust - 90)) * displaySize;
		const eyLim = Math.sin(rad(fov / 2 + adjust - 90)) * displaySize;
		this.renderer.line(0, 0, exLim, eyLim, radarColor);

		const exLim2 = Math.cos(rad(-fov / 2 + adjust - 90)) * displaySize;
		const eyLim2 = Math.sin(rad(-fov / 2 + adjust - 90)) * displaySize;
		this.renderer.line(0, 0, exLim2, eyLim2, radarColor);
		const exLimRange = displaySize / this.scale;
		this.renderer.text(`${(exLimRange / 1000).toFixed(1)}km`, exLim + 5, eyLim + 5, radarColor);

		this.arc(0, 0, displaySize, -fov / 2 + adjust - 90, fov / 2 + adjust - 90, radarColor);

		// Draw detected targets
		this.state.radar.detectedTargets.forEach(pdt => {
			if (this.state.radar.twsedTargets.some(td => td.id == pdt.id)) return; // Skip TWS targets

			const lastUpdateTime = this.partialDetectedTargetInitAngle[pdt.id]?.time ?? 0;
			const isNew = this.time - pdt.detectedTime < 0.05 && this.time - lastUpdateTime > 0.1;
			if (isNew) this.partialDetectedTargetInitAngle[pdt.id] = { angle: angle + adjust, time: this.time };

			const detAngle = this.partialDetectedTargetInitAngle[pdt.id]?.angle ?? angle + adjust;
			const x = Math.cos(rad(detAngle - 90)) * 10000;
			const y = Math.sin(rad(detAngle - 90)) * 10000;
			this.renderer.line(0, 0, x, y, radarPartialDetectColor);
		});

		// Draw TWS/STT targets
		this.state.radar.twsedTargets.forEach(td => this.drawRadarTarget(td, false));
		if (this.state.radar.sttedTarget) this.drawRadarTarget(this.state.radar.sttedTarget, true);
	}

	private drawRadarTarget(td: RadarTarget, isStt: boolean) {
		const relPos = Vector.from(td.position).subtract(this.state.kinematics.position).applyQuaternion(this.rot);
		const x = relPos.x * this.scale;
		const y = -relPos.z * this.scale;

		const size = 15;
		if (isStt) {
			this.renderer.strokeRect(x - size / 2, y - size / 2, size, size, radarDetectedColor);
		} else {
			this.renderer.strokeEllipse(x, y, size / 2, radarDetectedColor);
		}

		const speedText = `${Vector.from(td.velocity).length().toFixed(0)}m/s`;
		const speedTextWidth = this.renderer.ctx.measureText(speedText).width;
		const distText = `${(relPos.length() / 1000).toFixed(1)}km`;
		const distTextWidth = this.renderer.ctx.measureText(distText).width;

		this.renderer.text(speedText, x - speedTextWidth / 2, y + size / 2 + 18, radarDetectedColor);
		this.renderer.text(distText, x - distTextWidth / 2, y - size / 2 - 8, radarDetectedColor);
	}

	private drawIrSeeker() {
		if (this.state.ir.seekerFov == 0) return;

		const ourBearing = deg(this.euler.y);
		const displaySize = 150;
		const angle = Math.atan2(this.state.ir.lookDir.z, this.state.ir.lookDir.x) + rad(ourBearing);

		const hFov = rad(this.state.ir.seekerFov) / 2;
		const x1 = Math.cos(angle + hFov) * displaySize;
		const y1 = -Math.sin(angle + hFov) * displaySize;
		this.renderer.line(0, 0, x1, y1, irSeekerColor);

		const x2 = Math.cos(angle - hFov) * displaySize;
		const y2 = -Math.sin(angle - hFov) * displaySize;
		this.renderer.line(0, 0, x2, y2, irSeekerColor);
	}

	private arc(x: number, y: number, r: number, start: number, end: number, c: ColorValue): void {
		this.renderer.ctx.fillStyle = new Color(c).hex;
		this.renderer.ctx.beginPath();
		this.renderer.ctx.arc(x, y, r, rad(start), rad(end));
		this.renderer.ctx.stroke();
	}

	private disp(text: string) {
		this.renderer.text(text, 10, this.currentDisplayY, 255, 12);
		this.currentDisplayY += 18;
	}

	private legend(text: string, color: ColorValue) {
		const tWid = this.renderer.ctx.measureText(text).width;
		this.longestLegendTextLen = Math.max(this.longestLegendTextLen, tWid);

		this.renderer.text(text, this.renderer.canvas.width - this.longestLegendTextLen - 25, this.legendDisplayY, color, 12);
		this.legendDisplayY += 18;
	}

	private addEventListeners() {
		window.addEventListener("resize", () => this.onResize());
		window.addEventListener("wheel", (e: WheelEvent) => this.onScroll(e));
	}

	private onScroll(event: WheelEvent) {
		const delta = event.deltaY > 0 ? -0.1 : 0.1;
		const mult = 1 + delta;
		this.scale *= mult;
		this.scale = Math.max(scaleMin, Math.min(scaleMax, this.scale));
	}

	private onResize() {
		this.renderer.resize(window.innerWidth, window.innerHeight + 1);
	}
}

const app = new Application();
window.onload = () => {
	// @ts-ignore
	window.app = app;
	app.init();
};
