import { IVector3 } from "vtol-live-viewer-shared/dist/vector.js";
import { Reader } from "./reader.js";

class HeatEmitterData {
	public position: IVector3;
	public velocity: IVector3;
	public heat: number;

	public build(reader: Reader) {
		this.position = reader.readVector3();
		this.velocity = reader.readVector3();
		this.heat = reader.readF32();
	}
}

class HeatSeekerData {
	public position: IVector3;
	public rotation: IVector3;
	public parentRot: IVector3;
	public fov: number;
	public gimbleFov: number;
	public id: number;

	public build(reader: Reader) {
		this.position = reader.readVector3();
		this.rotation = reader.readVector3();
		this.parentRot = reader.readVector3();
		this.fov = reader.readF32();
		this.gimbleFov = reader.readF32();
		this.id = reader.readI16();
	}
}

class IRDataReport {
	public steamId: string;
	public heatEmitters: HeatEmitterData[] = [];
	public heatSeekers: HeatSeekerData[] = [];

	public build(reader: Reader) {
		const type = reader.readString();
		const lobbyId = reader.readU64();

		const version = reader.readByte();
		if (version !== 1) throw new Error(`Unsupported IRDataReport version: ${version}`);
		this.steamId = reader.readU64().toString();

		const emitterCount = reader.readI16();
		this.heatEmitters = new Array(emitterCount);
		for (let i = 0; i < emitterCount; i++) {
			const emitter = new HeatEmitterData();
			emitter.build(reader);
			this.heatEmitters[i] = emitter;
		}

		const seekerCount = reader.readI16();
		this.heatSeekers = new Array(seekerCount);
		for (let i = 0; i < seekerCount; i++) {
			const seeker = new HeatSeekerData();
			seeker.build(reader);
			this.heatSeekers[i] = seeker;
		}
	}
}

export { IRDataReport, HeatEmitterData, HeatSeekerData };
