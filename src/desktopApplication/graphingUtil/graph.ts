import { ColorValue, Renderer } from "strik-2d-renderer";

class Graph {
	static nameY = 20;

	public yScale = 1;
	public color: ColorValue = 255;
	public points: number[] = [];
	private derivativeData: number[] = [];
	public timeValues: number[] = [];
	public name: string = "Graph";
	public derivative = false;

	public visible = true;

	constructor(private renderer: Renderer, private canvas: HTMLCanvasElement) {}

	private calculateDerivative() {
		this.derivativeData = [];

		for (let i = 0; i < this.points.length; i++) {
			if (i == 0) {
				this.derivativeData.push(0);
				continue;
			}
			const deltaY = this.points[i] - this.points[i - 1];
			const deltaX = this.timeValues[i] - this.timeValues[i - 1];
			const derivative = deltaY / deltaX;
			this.derivativeData.push(derivative * 2);
		}
	}

	public draw(startIdx: number, endIdx: number) {
		if (this.derivativeData.length != this.points.length) {
			this.calculateDerivative();
		}

		this.renderer.text(this.name, this.canvas.width - 150, Graph.nameY, this.color);
		Graph.nameY += 20;

		// const midPoint = (this.renderer.canvas.height - 25) / 2 - 100;
		// n - 120 * yScale = midPoint
		// n = midPoint + 120 * yScale
		// const yStart = canvas.height - 25;
		// const yStart = midPoint + 120 * yScale;

		if (!this.visible) return;

		const yStart = this.canvas.height / 2 + 150;
		this.renderer.line(0, yStart, this.canvas.width, yStart, 150);

		const pointWidth = endIdx - startIdx;

		let previous = this.derivative ? this.derivativeData[0] : this.points[0];
		const points = this.derivative ? this.derivativeData : this.points;
		points.forEach((pt, idx) => {
			if (idx == 0) return;
			if (idx < startIdx || idx >= endIdx) return;

			const x = (this.canvas.width / pointWidth) * (idx - startIdx);
			const prevX = (this.canvas.width / pointWidth) * (idx - startIdx - 1);
			let y: number;
			let prevY: number;

			y = yStart - pt * this.yScale;
			prevY = yStart - previous * this.yScale;

			this.renderer.line(prevX, prevY, x, y, this.color);

			previous = pt;
		});
	}
}

export { Graph };
