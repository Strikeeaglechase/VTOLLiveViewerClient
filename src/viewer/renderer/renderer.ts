import { Color, ColorValue } from "./color";

export const rad = (deg: number): number => deg * Math.PI / 180;
export const deg = (rad: number): number => rad * 180 / Math.PI;

interface Point { x: number; y: number; }

class Renderer {
	private canvas: HTMLCanvasElement;
	public ctx: CanvasRenderingContext2D;
	private transformStack: Array<{ r: number, x: number, y: number; }> = [];
	private prevArgs = { x: 0, y: 0, w: 0, h: 0 };

	constructor(canvasId?: string) {
		this.canvas = document.getElementById(canvasId ?? "main") as HTMLCanvasElement;

		const contex = this.canvas.getContext("2d");
		if (!contex) {
			throw new Error(`Unable to resolve canvas rendering context`);
		}
		this.ctx = contex;

		this.ctx.font = `12pt Anonymous Pro, monospace`;
	}

	resize(width: number, height: number): void {
		this.canvas.width = width;
		this.canvas.height = height;
	}

	clear(c?: ColorValue): void {
		this.ctx.fillStyle = new Color(c).hex;
		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
	}

	private parseArgs(args: any[]): { x: number, y: number, w: number, h: number, c: ColorValue | null; } {
		// Allowed formats:
		// [color]
		// [x,y,w]
		// [x,y,w,color]
		// [x,y,w,h]
		// [x,y,w,h,color]
		let ret: { x: number, y: number, w: number, h: number, c: ColorValue | null; };
		if (args.length == 0) {
			ret = {
				...this.prevArgs,
				c: null
			};
		} else if (typeof args[0] == "object") {
			ret = {
				...this.prevArgs,
				c: args[0] as ColorValue
			};
		} else if (args.length == 3) {
			ret = {
				x: args[0],
				y: args[1],
				w: args[2],
				h: args[2],
				c: null
			};
		} else if (typeof args[3] == "object") {
			ret = {
				x: args[0],
				y: args[1],
				w: args[2],
				h: args[2],
				c: args[3]
			};
		} else if (args.length == 4) {
			ret = {
				x: args[0],
				y: args[1],
				w: args[2],
				h: args[3],
				c: null
			};
		} else {
			ret = {
				x: args[0],
				y: args[1],
				w: args[2],
				h: args[3],
				c: args[4]
			};
		}
		this.prevArgs = ret;

		return ret;
	}

	rect(): void;
	rect(c: ColorValue): void;
	rect(x: number, y: number, w: number): void;
	rect(x: number, y: number, w: number, c: ColorValue): void;
	rect(x: number, y: number, w: number, h: number): void;
	rect(x: number, y: number, w: number, h: number, c?: ColorValue): void;
	rect(...args: any[]): void {
		const { x, y, w, h, c } = this.parseArgs(args);
		this.ctx.fillStyle = new Color(c).hex;
		this.ctx.fillRect(x, y, w, h);
	}

	strokeRect(): void;
	strokeRect(c: ColorValue): void;
	strokeRect(x: number, y: number, w: number): void;
	strokeRect(x: number, y: number, w: number, c: ColorValue): void;
	strokeRect(x: number, y: number, w: number, h: number): void;
	strokeRect(x: number, y: number, w: number, h: number, c?: ColorValue): void;
	strokeRect(...args: any[]): void {
		const { x, y, w, h, c } = this.parseArgs(args);
		this.ctx.strokeStyle = new Color(c).hex;
		this.ctx.strokeRect(x, y, w, h);
	}

	ellipse(): void;
	ellipse(c: ColorValue): void;
	ellipse(x: number, y: number, w: number): void;
	ellipse(x: number, y: number, w: number, c: ColorValue): void;
	ellipse(x: number, y: number, w: number, h: number): void;
	ellipse(x: number, y: number, w: number, h: number, c?: ColorValue): void;
	ellipse(...args: any[]): void {
		const { x, y, w, h, c } = this.parseArgs(args);
		this.ctx.fillStyle = new Color(c).hex;
		this.ctx.beginPath();
		this.ctx.ellipse(x, y, w, h, 0, 0, Math.PI * 2);
		this.ctx.fill();
	}

	strokeEllipse(): void;
	strokeEllipse(c: ColorValue): void;
	strokeEllipse(x: number, y: number, w: number): void;
	strokeEllipse(x: number, y: number, w: number, c?: ColorValue): void;
	strokeEllipse(x: number, y: number, w: number, h: number): void;
	strokeEllipse(x: number, y: number, w: number, h: number, c?: ColorValue): void;
	strokeEllipse(...args: any[]): void {
		const { x, y, w, h, c } = this.parseArgs(args);
		this.ctx.strokeStyle = new Color(c).hex;
		this.ctx.beginPath();
		this.ctx.ellipse(x, y, w, h, 0, 0, Math.PI * 2);
		this.ctx.stroke();
	}

	dashedEllipse(x: number, y: number, w: number, h: number, dash: number[], c?: ColorValue): void {
		this.ctx.strokeStyle = new Color(c).hex;
		this.ctx.beginPath();
		this.ctx.setLineDash(dash);
		this.ctx.ellipse(x, y, w, h, 0, 0, Math.PI * 2);
		this.ctx.stroke();
		this.ctx.setLineDash([]);
	}

	line(x: number, y: number, x2: number, y2: number, c?: ColorValue): void {
		this.ctx.strokeStyle = new Color(c).hex;
		this.ctx.beginPath();
		this.ctx.moveTo(x, y);
		this.ctx.lineTo(x2, y2);
		this.ctx.stroke();
	}

	text(msg: string, x: number, y: number, c?: ColorValue, fontSize?: number | string): void {
		if (fontSize) {
			this.ctx.font = typeof fontSize == "number" ? `${fontSize}pt Anonymous Pro, monospace` : fontSize;
		} else {
			this.ctx.font = "12pt Anonymous Pro, monospace";
		}
		this.ctx.fillStyle = new Color(c).hex;
		this.ctx.fillText(msg, x, y);
	}

	transform(x: number, y: number, r: number): void {
		this.ctx.translate(x, y);
		this.ctx.rotate(rad(r));
		this.transformStack.push({ x, y, r });
	}

	revert(): void {
		const transform = this.transformStack.pop();
		if (!transform) return;
		this.ctx.rotate(rad(-transform.r));
		this.ctx.translate(-transform.x, -transform.y);
	}

	debugObject(obj: any, x: number, y: number, c?: ColorValue): number {
		const maxKeyLength = Math.max(...Object.keys(obj).map(s => s.length));
		Object.keys(obj).forEach(key => {
			if (typeof obj[key] == "object") {
				if (!Array.isArray(obj[key])) {
					this.text(key, x, y, c);
					y += 15;
					y = this.debugObject(obj[key], x + 15, y, c);
				} else {
					if (typeof obj[key][0] != "object") {
						const str = obj[key].join(", ");
						this.text(`${key.padEnd(maxKeyLength)}: [${str}]`, x, y, c);
					} else {
						this.text(`${key}[${obj[key].length}]`, x, y, c);
					}
					y += 15;
				}
			} else {
				this.text(`${key.padEnd(maxKeyLength)}: ${obj[key]}`, x, y, c);
				y += 15;
			}
		});
		return y;
	}

	point(x: number, y: number, c?: ColorValue): void {
		this.rect(x, y, 1, 1, c);
	}

	roundCornerRect(x: number, y: number, w: number, h: number, r: number, c?: ColorValue): void {
		const xOffsetStart = x + r;
		const xOffsetEnd = x + w - r;
		const yOffsetStart = y + r;
		const yOffsetEnd = y + h - r;

		this.rect(xOffsetStart, y, w - (2 * r), h, c); //x axis rect
		this.rect(x, yOffsetStart, w, h - (2 * r), c); //y axis rect
		this.ellipse(xOffsetStart, yOffsetStart, r, c); //top left corner
		this.ellipse(xOffsetEnd, yOffsetStart, r, c); //top right corner
		this.ellipse(xOffsetStart, yOffsetEnd, r, c); //bottom left corner
		this.ellipse(xOffsetEnd, yOffsetEnd, r, c); //bottom right corner
	}

	strokeRoundCornerRect(x: number, y: number, w: number, h: number, r: number, c?: ColorValue): void {
		const xOffsetStart = x + r;
		const xOffsetEnd = x + w - r;
		const yOffsetStart = y + r;
		const yOffsetEnd = y + h - r;

		this.strokeRect(xOffsetStart, y, w - (2 * r), h, c); //x axis rect
		this.strokeRect(x, yOffsetStart, w, h - (2 * r), c); //y axis rect
		this.strokeEllipse(xOffsetStart, yOffsetStart, r, c); //top left corner
		this.strokeEllipse(xOffsetEnd, yOffsetStart, r, c); //top right corner
		this.strokeEllipse(xOffsetStart, yOffsetEnd, r, c); //bottom left corner
		this.strokeEllipse(xOffsetEnd, yOffsetEnd, r, c); //bottom right corner
	}

	path(points: Point[], c?: ColorValue): void { //Argument as array?
		this.ctx.strokeStyle = new Color(c).hex;
		this.ctx.beginPath();
		this.ctx.moveTo(points[0].x, points[0].y);

		points.forEach(element => {
			this.ctx.moveTo(element.x, element.y);
		});

		this.ctx.stroke();
	}

	triangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, c: ColorValue): void { //not done
		this.ctx.fillStyle = new Color(c).hex;
		this.ctx.beginPath();
		this.ctx.moveTo(x1, y1);
		this.ctx.moveTo(x2, y2);
		this.ctx.moveTo(x3, y3);
		this.ctx.fill();
	}

	strokeTriangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, c: ColorValue): void { //not done
		this.ctx.strokeStyle = new Color(c).hex;
		this.ctx.beginPath();
		this.ctx.moveTo(x1, y1);
		this.ctx.moveTo(x2, y2);
		this.ctx.moveTo(x3, y3);
		this.ctx.stroke();
	}
}
export { Renderer };