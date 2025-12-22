import { IVector3 } from "vtol-live-viewer-shared/dist/vector.js";

import { Reader } from "./reader.js";

class RadarDetectedTarget {
	public entityId: number;
	public position?: IVector3;
	public velocity?: IVector3;
	public identity?: number;

	public build(reader: Reader) {
		this.entityId = reader.readI16();
		if (this.entityId === -1) return;

		this.position = reader.readVector3();
		this.velocity = reader.readVector3();
		this.identity = reader.readI16();
	}
}

class RadarData {
	public parentNetId: number;
	public position: IVector3;
	public rotation: IVector3;
	public rotTfGlobal: IVector3;

	public angle: number;
	public sweepFov: number;
	public rotationRange: number;

	public txStrength: number;
	public rxSensitivity: number;
	public enabled: boolean;

	public detectedActors: number[] = [];
	public twsTracks: RadarDetectedTarget[] = [];
	public fakeTargets: RadarDetectedTarget[] = [];
	public pdtIdx: number;

	public build(reader: Reader) {
		this.enabled = reader.readByte() > 0;
		if (!this.enabled) return;

		this.parentNetId = reader.readI16();
		this.position = reader.readVector3();
		this.rotation = reader.readVector3();
		this.rotTfGlobal = reader.readVector3();
		this.angle = reader.readF32();
		this.sweepFov = reader.readF32();
		this.rotationRange = reader.readF32();
		this.txStrength = reader.readF32();
		this.rxSensitivity = reader.readF32();

		const numDetectedActors = reader.readByte();
		this.detectedActors = new Array(numDetectedActors);
		for (let i = 0; i < numDetectedActors; i++) this.detectedActors[i] = reader.readI16();

		this.twsTracks = new Array(4);
		for (let i = 0; i < 4; i++) {
			const t = new RadarDetectedTarget();
			t.build(reader);
			this.twsTracks[i] = t;
		}

		this.fakeTargets = new Array(10);
		for (let i = 0; i < 10; i++) {
			const t = new RadarDetectedTarget();
			t.build(reader);
			this.fakeTargets[i] = t;
		}

		this.pdtIdx = reader.readSByte();
	}
}

class LockData {
	public locked: boolean;
	public actorEntityId: number;
	public position: IVector3;
	public velocity: IVector3;
	public lockedChaff: boolean;

	public build(reader: Reader) {
		this.locked = reader.readByte() > 0;
		this.actorEntityId = reader.readI16();
		this.position = reader.readVector3();
		this.velocity = reader.readVector3();
		this.lockedChaff = reader.readByte() > 0;
	}
}

interface PulseParams {
	radarPos: IVector3;
	radarLookDir: IVector3;
	dotLim: number;
	xRange: number;
	rangeGate: number;
	xClosingSpeed: number;
	speedGate: number;
	freq: number;
	freqGate: number;
}

enum ReturnTypes {
	Actual,
	Chaff,
	Jammer
}
const allReturnTypes = [ReturnTypes.Actual, ReturnTypes.Chaff, ReturnTypes.Jammer];

interface LockReturn {
	type: ReturnTypes;
	pos: IVector3;
	vel: IVector3;
	weight: number;
	gateState: GateState;
	isSelected: boolean;
}

enum GateState {
	InGate,
	OutFreq,
	OutRange,
	OutAzimuth,
	OutVelocity
}

class InternalECMInfo {
	public pulseParams: PulseParams;

	public lockReturns: LockReturn[] = [];

	public build(reader: Reader) {
		this.pulseParams = {
			radarPos: reader.readVector3(),
			radarLookDir: reader.readVector3(),
			dotLim: reader.readF32(),
			xRange: reader.readF32(),
			rangeGate: reader.readF32(),
			xClosingSpeed: reader.readF32(),
			speedGate: reader.readF32(),
			freq: reader.readF32(),
			freqGate: reader.readF32()
		};

		const lrCount = reader.readByte();
		for (let i = 0; i < lrCount; i++) {
			const name = reader.readByte();
			const pos = reader.readVector3();
			const vel = reader.readVector3();
			const weight = reader.readF32();
			const gateState = reader.readByte();
			const isSelected = reader.readByte() > 0;
			this.lockReturns.push({ type: name, pos, vel, weight, gateState, isSelected });
		}
	}
}

class LockingRadarData {
	public parentNetId: number;
	public position: IVector3;
	public txStrength: number;
	public rxSensitivity: number;
	public lockData?: LockData;
	public ecmInfo?: InternalECMInfo;

	public build(reader: Reader) {
		this.parentNetId = reader.readI16();
		this.position = reader.readVector3();
		this.txStrength = reader.readF32();
		this.rxSensitivity = reader.readF32();

		const hasLdEcm = reader.readByte() > 0;
		if (hasLdEcm) {
			this.lockData = new LockData();
			this.lockData.build(reader);
			this.ecmInfo = new InternalECMInfo();
			this.ecmInfo.build(reader);
		}
	}
}

class RadarDataReport {
	public radars: RadarData[] = [];
	public lockingRadars: LockingRadarData[] = [];
	public steamId: string;

	public build(reader: Reader) {
		const type = reader.readString();
		const lobbyId = reader.readU64();

		const version = reader.readByte();
		if (version != 1) throw new Error(`Unsupported RadarDataReport version: ${version}`);

		this.steamId = reader.readU64().toString();

		const radarCount = reader.readByte();
		this.radars = new Array(radarCount);
		for (let i = 0; i < radarCount; i++) {
			const newRadar = new RadarData();
			newRadar.build(reader);
			this.radars[i] = newRadar;
		}

		const lockingRadarCount = reader.readByte();
		this.lockingRadars = new Array(lockingRadarCount);
		for (let i = 0; i < lockingRadarCount; i++) {
			const newLockingRadar = new LockingRadarData();
			newLockingRadar.build(reader);
			this.lockingRadars[i] = newLockingRadar;
		}
	}
}

export {
	RadarDataReport,
	LockingRadarData,
	InternalECMInfo,
	LockReturn,
	GateState,
	ReturnTypes,
	PulseParams,
	RadarData,
	RadarDetectedTarget,
	LockData,
	allReturnTypes
};
