type ColorValue =
	number |
	string |
	Color |
	[number, number, number] |
	[number, number, number, number] |
	{ r: number, b: number, g: number; } |
	{ r: number, b: number, g: number; a: number; } |
	null |
	undefined;

const numToHex = (value: number): string => {
	const r = Math.floor(value).toString(16);
	return r.length == 2 ? r : "0" + r;
};

class Color {
	r = 0;
	g = 0;
	b = 0;
	a = 255;

	constructor(value?: ColorValue | null) {
		if (value == undefined || value == null) value = 0;
		switch (typeof value) {
			case "number":
				this.r = value;
				this.g = value;
				this.b = value;
				break;
			case "string":
				this.fromHex(value);
				break;
			case "object":
				if (Array.isArray(value)) {
					this.fromArr(value);
				} else {
					this.fromObject(value);
				}
				break;
		}
	}

	get rgb(): string {
		return `rgb(${this.r},${this.g},${this.b})`;
	}

	get rgba(): string {
		return `rgba(${this.r},${this.g},${this.b},${this.a})`;
	}

	get hex(): string {
		return `#${this.arr.map(numToHex).join("")}`;
	}

	get arr(): [number, number, number, number] {
		return [this.r, this.g, this.b, this.a];
	}

	fromHex(hex: string): void {
		this.r = parseInt(hex[1] + hex[2], 16);
		this.g = parseInt(hex[3] + hex[4], 16);
		this.b = parseInt(hex[5] + hex[6], 16);
		if (hex.length == 9) this.a = parseInt(hex[7] + hex[8], 16);
	}

	fromArr(arr: number[]): void {
		this.r = arr[0];
		this.g = arr[1];
		this.b = arr[2];
		if (arr[3] != undefined) this.a = arr[3];
	}

	fromObject(obj: { r: number, g: number, b: number, a?: number; }): void {
		this.r = obj.r;
		this.g = obj.g;
		this.b = obj.b;
		if (obj.a != undefined) this.a = obj.a;
	}

	static random(): Color {
		return new Color([Math.random() * 255, Math.random() * 255, Math.random() * 255]);
	}
}
export { Color, ColorValue };