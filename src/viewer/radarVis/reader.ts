class Reader {
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

	public readVector3() {
		const x = this.readF32();
		const y = this.readF32();
		const z = this.readF32();
		return { x, y, z };
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

	public readI16() {
		const result = this.buf.readInt16LE(this.index);
		this.index += 2;
		return result;
	}

	public readByte() {
		const result = this.buf.readUInt8(this.index);
		this.index += 1;
		return result;
	}

	public readSByte() {
		const result = this.buf.readInt8(this.index);
		this.index += 1;
		return result;
	}

	public read7BitEncodedInt() {
		let result = 0;
		let shift = 0;
		let byte: number;
		do {
			byte = this.readByte();
			result |= (byte & 0x7f) << shift;
			shift += 7;
		} while (byte & 0x80);

		return result;
	}

	public readString() {
		const length = this.read7BitEncodedInt();
		const str = this.buf.toString("utf-8", this.index, this.index + length);
		this.index += length;

		return str;
	}
}
export { Reader };
