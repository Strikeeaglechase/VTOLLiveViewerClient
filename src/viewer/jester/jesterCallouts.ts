import { Application, deg } from "../app";
import { PlayerVehicle } from "../entities/playerVehicle";
import { Entity } from "../entityBase/entity";

const MAX_CALLOUT_RATE = 5000;
const oneMile = 1852;

type CalloutResult = { message: string; call: true } | { call: false; message?: string };

const cm = (message: string) => ({ message, call: true });

class JesterCallouts {
	private synth: SpeechSynthesisUtterance;
	private lastCalloutTime = 0;
	private app: Application;

	private closeEntities: Set<number> = new Set();
	private lastResults: Record<string, boolean> = {};

	private previousClosestEntity = -1;
	private mergeAtTime = 0;
	private enemyAltAtMerge = 0;

	constructor(private entity: Entity) {
		this.app = this.entity.app;

		const voices = window.speechSynthesis.getVoices();
		this.synth = new SpeechSynthesisUtterance();
		this.synth.volume = 1;
		this.synth.voice = voices[1];
		this.synth.rate = 3;
	}

	public update() {
		// if (Date.now() - this.lastCalloutTime < MAX_CALLOUT_RATE) return;

		this.calloutAlways(this.checkForPreMerge);
		this.calloutOnRisingEdge(this.checkForHeadOn);
		this.calloutOnRisingEdge(this.checkForMerge);

		const closestEnemy = this.getClosestEnemy();
		if (closestEnemy && closestEnemy.id !== this.previousClosestEntity) {
			this.onClosestEntityChange();
		}
		this.previousClosestEntity = closestEnemy ? closestEnemy.id : -1;
	}
	private onClosestEntityChange() {
		this.mergeAtTime = 0;
	}

	private calloutAlways(method: () => CalloutResult) {
		const result = method.apply(this);
		if (result.call) this.callout(result.message);
	}

	private calloutOnRisingEdge(method: () => CalloutResult) {
		const fid = method.name;
		const result = method.apply(this);
		if (result.call && !this.lastResults[fid]) this.callout(result.message);
		this.lastResults[fid] = result.call;
	}

	private checkForMerge(): CalloutResult {
		const closestEntity = this.getClosestEnemy();
		if (!closestEntity) return { call: false };
		if (this.mergeAtTime == 0) {
			// Have we merged?
			const relPos = this.entity.position.subtract(closestEntity.position);
			const pdp = relPos.clone().unit().dot(this.entity.velocity.clone().unit());
			if (pdp > 0) {
				this.mergeAtTime = Date.now();
				this.enemyAltAtMerge = closestEntity.position.y;
			}
			return { call: false };
		}

		if (Date.now() - this.mergeAtTime < 1000) return { call: false }; // Make a merge call at 1 second after merge
		const altChange = closestEntity.position.y - this.enemyAltAtMerge;
		if (altChange > 250) return cm("Merged, he's climbing");
		if (altChange < -250) return cm("Merged, he's diving");
		return cm("Merged, level");
	}

	private checkForHeadOn(): CalloutResult {
		const closestEntity = this.getClosestEnemy();
		if (!closestEntity) return { call: false };
		if (this.entity.position.distanceTo(closestEntity.position) > 0.75 * oneMile) return { call: false };

		const angle = this.getVelocityAngle(closestEntity);
		const vdp = this.entity.velocity.clone().unit().dot(closestEntity.velocity.clone().unit()); // Vel dot product
		const relPos = this.entity.position.clone().subtract(closestEntity.position);
		const pdp = relPos.clone().unit().dot(this.entity.velocity.clone().unit()); // Position dot product to check if on front or behind

		const offDistance = this.entity.velocity.clone().unit().cross(relPos).length();

		if (angle < 45 && vdp < -0.9 && pdp < 0 && offDistance < 250) return cm("Head on");
		return { call: false };
	}

	private checkForPreMerge(): CalloutResult {
		const closeEntities: PlayerVehicle[] = [];
		for (const entity of this.app.entities) {
			if (!(entity instanceof PlayerVehicle)) continue;
			if (entity.team === this.entity.team) continue;

			const dist = entity.position.distanceTo(this.entity.position);
			if (dist < 3 * oneMile) closeEntities.push(entity);
		}

		const currentCloseEntities = new Set<number>();
		let calloutResult: CalloutResult = { call: false };
		for (const e of closeEntities) {
			currentCloseEntities.add(e.id);
			if (this.closeEntities.has(e.id)) continue;
			const closure = this.closure(e);
			if (closure < 0) continue;

			const callout = this.getCalloutFor(e);
			calloutResult = cm(`Close bandit ${callout}`);
		}

		this.closeEntities = currentCloseEntities;

		return calloutResult;
	}

	private getClosestEnemy() {
		let closestEntity: PlayerVehicle | null = null;
		let closestDist = Infinity;

		for (const entity of this.app.entities) {
			if (!(entity instanceof PlayerVehicle)) continue;
			if (entity.team === this.entity.team) continue;

			const dist = entity.position.distanceTo(this.entity.position);
			if (dist < closestDist) {
				closestDist = dist;
				closestEntity = entity;
			}
		}

		return closestEntity;
	}

	private getCalloutFor(target: PlayerVehicle) {
		const name = this.vName(target);
		const altStr = this.relativeAltStr(target.position.y);
		const clockDirection = this.clockDirectionFor(target);

		return `${clockDirection}o'clock ${altStr} ${name}`;
	}

	private vName(target: PlayerVehicle) {
		switch (target.type) {
			case "Vehicles/SEVTF":
				return "Ghost";
			case "Vehicles/FA-26B":
				return "Wasp";
			case "Vehicles/AH-94":
				return "Dragonfly";
			case "Vehicles/VTOL4":
				return "Kestrel";
			case "Vehicles/T-55":
				return "Tyro";
			case "Vehicles/EF-24":
				return "Mischief";
		}
	}

	private clockDirectionFor(target: Entity) {
		const delta = this.entity.position.subtract(target.position);
		delta.y = 0;
		const angles = delta.toAngles();
		let bearing = Math.floor(deg(angles.theta)) + 90;
		if (bearing < 0) bearing += 360;

		let clockDirection = Math.round(Math.floor(bearing / 30));
		if (clockDirection == 0) clockDirection = 12;
		return clockDirection;
	}

	private closure(target: Entity) {
		const tmp = this.entity.position.subtract(target.position);
		const rVel = this.entity.velocity.subtract(target.velocity);
		return -rVel.dot(tmp) / tmp.length();
	}

	private relativeAltStr(alt: number) {
		const delta = this.entity.position.y - alt;
		if (Math.abs(delta) < 1000) return "";

		if (delta < 0) return "high";
		else return "low";
	}

	private getVelocityAngle(target: Entity) {
		const dot = this.entity.velocity.dot(target.velocity);
		const angle = deg(Math.acos(dot / (this.entity.velocity.length() * target.velocity.length())));

		return Math.abs(180 - angle);
	}

	public callout(callout: string) {
		this.synth.text = callout;
		this.lastCalloutTime = Date.now();
		console.log(`Callout: %c${callout}`, "color: #00ff00");
		// window.speechSynthesis.speak(this.synth);
	}
}

export { JesterCallouts };
