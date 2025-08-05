import { EntityEvent, eventFromBinMap } from "./events.js";
import { KinematicData, RecordedFrame } from "./recordingToVtgr.js";

export class Reader {
	private index = 0;

	public get idx() {
		return this.index;
	}

	constructor(private buf: Buffer) {}

	public read(length: number) {
		const result = this.buf.subarray(this.index, this.index + length);
		this.index += length;
		return result;
	}

	public readF64() {
		const result = this.buf.readDoubleLE(this.index);
		this.index += 8;
		return result;
	}

	public readF32() {
		const result = this.buf.readFloatLE(this.index);
		this.index += 4;
		return result;
	}

	public readU64() {
		const result = this.buf.readBigUInt64LE(this.index);
		this.index += 8;
		return result;
	}

	public readU32() {
		const result = this.buf.readUInt32LE(this.index);
		this.index += 4;
		return result;
	}

	public readI64() {
		const result = this.buf.readBigInt64LE(this.index);
		this.index += 8;
		return result;
	}

	public readI32() {
		const result = this.buf.readInt32LE(this.index);
		this.index += 4;
		return result;
	}

	public readByte() {
		const result = this.buf.readUInt8(this.index);
		this.index += 1;
		return result;
	}

	public readStringByteLen() {
		const length = this.readByte();
		const str = this.buf.toString("utf-8", this.index, this.index + length);
		this.index += length;
		return str;
	}

	public readStringI32Len() {
		const length = this.readI32();
		const str = this.buf.toString("utf-8", this.index, this.index + length);
		this.index += length;
		return str;
	}
}

function readMotion(reader: Reader): KinematicData {
	const position = {
		x: reader.readF32(),
		y: reader.readF32(),
		z: reader.readF32()
	};

	const velocity = {
		x: reader.readF32(),
		y: reader.readF32(),
		z: reader.readF32()
	};

	const rotation = {
		x: reader.readF32(),
		y: reader.readF32(),
		z: reader.readF32()
	};

	const pyr = {
		x: reader.readF32(),
		y: reader.readF32(),
		z: reader.readF32()
	};

	const throttle = reader.readF32();
	const fuel = reader.readF32();
	const entityId = reader.readI32();

	return { position, velocity, rotation, pyr, throttle, fuel, entityId };
}

function readFrame(reader: Reader): RecordedFrame {
	const time = Number(reader.readU64());

	const motionCount = reader.readI32();

	const motion: KinematicData[] = [];
	for (let i = 0; i < motionCount; i++) motion.push(readMotion(reader));

	const eventCount = reader.readI32();
	const events: EntityEvent[] = [];
	for (let i = 0; i < eventCount; i++) {
		const eventType = reader.readByte();
		if (!(eventType in eventFromBinMap)) {
			throw new Error(`Unknown event type: ${eventType}`);
		}

		const event = eventFromBinMap[eventType](reader);
		events.push(event);
	}

	const logCount = reader.readI32();
	const logs: string[] = [];
	for (let i = 0; i < logCount; i++) {
		const log = reader.readStringI32Len();
		logs.push(log);
	}

	return { motion, events, time, logs };
}

export function readBinaryRecording(recordingStr: string): RecordedFrame[] {
	const buffer = Buffer.from(recordingStr, "binary");
	const reader = new Reader(buffer);

	const frames: RecordedFrame[] = [];
	while (reader.idx < buffer.length) {
		const frame = readFrame(reader);
		// console.log(frame);
		frames.push(frame);
	}

	return frames;
}
