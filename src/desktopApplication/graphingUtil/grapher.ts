import { Color, ColorValue, Renderer } from "strik-2d-renderer";

import { Graph } from "./graph.js";

// Preset color palette for graphs
const GRAPH_COLORS: ColorValue[] = [
	[255, 99, 132], // Red
	[54, 162, 235], // Blue
	[255, 205, 86], // Yellow
	[75, 192, 192], // Teal
	[153, 102, 255], // Purple
	[255, 159, 64], // Orange
	[199, 199, 199], // Light Gray
	[83, 102, 255], // Indigo
	[255, 99, 255], // Pink
	[132, 255, 99], // Light Green
	[255, 206, 84], // Gold
	[46, 204, 113], // Emerald
	[231, 76, 60], // Crimson
	[52, 152, 219], // Sky Blue
	[155, 89, 182], // Amethyst
	[241, 196, 15], // Sun Flower
	[230, 126, 34], // Carrot
	[26, 188, 156], // Turquoise
	[149, 165, 166], // Concrete
	[192, 57, 43] // Dark Red
];

function getLastDataIdx(data: number[]) {
	let lastIdx = 0;
	for (let i = 0; i < data.length; i++) {
		if (data[i] != 0) lastIdx = i;
	}

	return lastIdx;
}

class Application {
	private renderer: Renderer;
	private canvas: HTMLCanvasElement;

	private graphs: Graph[] = [];
	private timeValues: number[] = [];
	private lastDataIndex = 0;

	private timeMarkInterval = 1;
	private timeStart = 0;
	private timeEnd = 1000;

	private timeMark = 0;
	private timeMarkIdx = 0;

	public async init() {
		this.renderer = new Renderer("render-target");
		const graphCanvas = document.getElementById("render-target") as HTMLCanvasElement;
		this.canvas = graphCanvas;

		this.addEventListeners();
		this.onResize();

		await this.loadMapData();
		this.graphs.forEach(g => {
			g.points = g.points.slice(0, this.lastDataIndex);
			console.log(`Graph ${g.name} has ${g.points.length} points.`);
		});
		this.timeValues = this.timeValues.slice(0, this.lastDataIndex);
		this.graphs.forEach(g => (g.timeValues = this.timeValues));

		window.vtgrApi.onTime(time => {
			this.timeMark = time / 1000;
		});

		this.setupCollapseToggle();
		this.createGraphControls();

		this.run();
	}

	private async loadMapData() {
		// const response = await fetch("http://localhost:8000/sdata");
		// const graphData: Record<string, number[]> = await response.json();

		this.renderer.clear(25);
		this.renderer.text("Waiting for graphs.json data.", 25, 200, 255, 16);
		this.renderer.text("File must be in the same directory as the loaded VTGR.", 25, 225, 255, 16);

		let graphDataStr: string;
		await new Promise<void>(res => {
			window.vtgrApi.onGraphData(data => {
				graphDataStr = data;
				res();
			});
		});

		const graphData: Record<string, number[]> = JSON.parse(graphDataStr);

		let colorIndex = 0;

		for (const [name, points] of Object.entries(graphData)) {
			if (name == "time") {
				this.timeValues = points;
				continue;
			}

			const graph = new Graph(this.renderer, this.canvas);
			graph.name = name;
			graph.points = points;
			graph.yScale = 1;
			graph.color = GRAPH_COLORS[colorIndex % GRAPH_COLORS.length];
			colorIndex++;

			this.lastDataIndex = Math.max(this.lastDataIndex, getLastDataIdx(points));

			this.graphs.push(graph);
		}
	}

	private setupCollapseToggle() {
		const collapseToggle = document.getElementById("collapse-toggle");
		const controlPanel = document.getElementById("control-panel");
		let isCollapsed = false;

		collapseToggle.addEventListener("click", function () {
			isCollapsed = !isCollapsed;

			if (isCollapsed) {
				controlPanel.classList.add("collapsed");
				collapseToggle.classList.remove("panel-expanded");
				collapseToggle.classList.add("panel-collapsed");
				collapseToggle.textContent = "▶";
			} else {
				controlPanel.classList.remove("collapsed");
				collapseToggle.classList.remove("panel-collapsed");
				collapseToggle.classList.add("panel-expanded");
				collapseToggle.textContent = "◀";
			}
		});
	}

	private createGraphControls() {
		const controlPanel = document.getElementById("control-panel");

		const timeStartSlider = document.getElementById("time-start-slider") as HTMLInputElement;
		const timeEndSlider = document.getElementById("time-end-slider") as HTMLInputElement;
		const timeMarkIntervalSlider = document.getElementById("time-marks-slider") as HTMLInputElement;
		this.bindLabelText(timeStartSlider, "time-start-value", value => parseFloat(value).toFixed(0) + "s");
		this.bindLabelText(timeEndSlider, "time-end-value", value => parseFloat(value).toFixed(0) + "s");
		this.bindLabelText(timeMarkIntervalSlider, "time-marks-value", value => parseFloat(value).toFixed(1) + "s");

		timeStartSlider.addEventListener("input", () => {
			this.timeStart = parseFloat(timeStartSlider.value);
		});
		timeEndSlider.addEventListener("input", () => {
			this.timeEnd = parseFloat(timeEndSlider.value);
		});
		timeMarkIntervalSlider.addEventListener("input", () => {
			this.timeMarkInterval = parseFloat(timeMarkIntervalSlider.value);
		});

		timeStartSlider.max = Math.ceil(this.timeValues[this.lastDataIndex - 1]).toString();
		timeEndSlider.max = Math.ceil(this.timeValues[this.lastDataIndex - 1]).toString();

		this.bindSaveValue("time-start-slider");
		this.bindSaveValue("time-end-slider");
		this.bindSaveValue("time-marks-slider");

		this.graphs.forEach((graph, index) => {
			this.createGraphControl(graph, graph.name, controlPanel);
		});
	}

	private bindLabelText(input: HTMLInputElement, labelId: string, formatter: (value: string) => string = v => v) {
		const label = document.getElementById(labelId);

		input.addEventListener("input", () => {
			label.textContent = formatter(input.value);
		});

		// Initialize label text
		label.textContent = formatter(input.value);
	}

	private bindSaveValue(inputId: string, isClick = false, clickDefault = true) {
		const input = document.getElementById(inputId) as HTMLInputElement;
		const storedValue = localStorage.getItem(inputId);
		if (storedValue) {
			if (!isClick) {
				input.value = storedValue;
				input.dispatchEvent(new Event("input"));
			} else {
				const storedValueBool = storedValue === "true";
				if (storedValueBool != clickDefault) {
					input.dispatchEvent(new Event("click"));
				}
			}
		}

		if (!isClick) {
			input.addEventListener("input", () => {
				localStorage.setItem(inputId, input.value);
			});
		} else {
			input.addEventListener("click", () => {
				const existingValue = localStorage.getItem(inputId);
				const newState = existingValue === null ? !clickDefault : existingValue === "false";
				localStorage.setItem(inputId, newState.toString());
			});
		}
	}

	private createGraphControl(graph: Graph, gName: string, controlPanel: HTMLElement) {
		const graphControls = document.createElement("div");
		graphControls.className = "graph-controls";

		const graphName = graph.name;
		graphControls.innerHTML = `
			<div class="graph-name" style="color: ${new Color(graph.color).hex}">${graphName}</div>
			<div class="control-group">
				<button class="toggle-button" id="graph-toggle-${gName}" data-graph="${graphName}">Show Graph</button>
				<button class="toggle-button off" id="derivative-toggle-${gName}" data-graph="${graphName}">Derivative</button>
			</div>
			<div class="control-group">
				<div class="slider-container">
					<input type="range" class="scale-slider" id="scale-slider-${gName}" data-graph="${graphName}" min="0.1" max="20" step="0.1" value="1">
					<span class="scale-value" id="scale-value-${gName}">1.00x</span>
				</div>
			</div>
		`;

		controlPanel.appendChild(graphControls);

		const slider = document.getElementById(`scale-slider-${gName}`) as HTMLInputElement;
		this.bindLabelText(slider, `scale-value-${gName}`, value => parseFloat(value).toFixed(2) + "x");

		slider.addEventListener("input", () => {
			graph.yScale = parseFloat(slider.value);
		});

		const toggleButton = document.getElementById(`graph-toggle-${gName}`) as HTMLButtonElement;
		toggleButton.addEventListener("click", () => {
			graph.visible = !graph.visible;
			toggleButton.classList.toggle("off", !graph.visible);
		});

		const derivativeButton = document.getElementById(`derivative-toggle-${gName}`) as HTMLButtonElement;
		derivativeButton.addEventListener("click", () => {
			graph.derivative = !graph.derivative;

			derivativeButton.classList.toggle("off", !graph.derivative);
		});

		this.bindSaveValue(`scale-slider-${gName}`);
		this.bindSaveValue(`scale-value-${gName}`);
		this.bindSaveValue(`graph-toggle-${gName}`, true);
		this.bindSaveValue(`derivative-toggle-${gName}`, true);
	}

	private run() {
		this.renderer.clear(25);

		let customStartIndex = this.timeValues.findIndex(t => t >= this.timeStart);
		let customEndIndex = this.timeValues.findIndex(t => t > this.timeEnd);
		if (customStartIndex == -1) customStartIndex = 0;
		if (customEndIndex == -1) customEndIndex = this.lastDataIndex;

		this.graphs.forEach(graph => graph.draw(customStartIndex, customEndIndex, this.timeMarkIdx));

		let lastDispTime = 0;
		const pointWidth = customEndIndex - customStartIndex;
		let hasDisplayedTimeMark = false;
		this.timeValues.forEach((time, idx) => {
			if (idx < customStartIndex || idx >= customEndIndex) return;

			const x = (this.canvas.width / pointWidth) * (idx - customStartIndex);
			const y = this.canvas.height - 25;
			if (time >= this.timeMark && !hasDisplayedTimeMark) {
				this.renderer.line(x, 0, x, this.canvas.height, [255, 255, 255]);
				hasDisplayedTimeMark = true;
				this.timeMarkIdx = idx;
			}

			if (time - lastDispTime < this.timeMarkInterval) return;
			lastDispTime = time;

			const timeStr = time.toFixed(this.timeMarkInterval < 1 ? 1 : 0);
			this.renderer.text(`${timeStr}s`, x, y, 255);
			this.renderer.dashedLine(x, 0, x, this.canvas.height, [10, 20], 100);
		});

		Graph.nameY = 20;
		requestAnimationFrame(() => this.run());
	}

	private addEventListeners() {
		window.addEventListener("resize", () => this.onResize());
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
