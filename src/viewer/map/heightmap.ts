import { MissionInfoWithoutSpawns } from "../../../../VTOLLiveViewerCommon/dist/src/shared.js";
import { API_URL } from "../../config";

interface Chunk {
	heights: number[][];

	indexX: number;
	indexY: number;

	width: number;
	height: number;
}

interface HeightMapData {
	chunks: Chunk[][];
	heights: number[][];
	width: number;
	height: number;
	pixPerChunk: number;
}

// const chunksPerSide = 7;
const pixelsPerChunkSide = 150;

class HeightMap {
	private maxHeight = 6000;
	private minHeight = 80; // This is negative
	public width: number;
	public height: number;

	public images: { data: ImageData }[] = [];
	private map: number[][];
	constructor(private mission: MissionInfoWithoutSpawns) {}

	public async init() {
		console.log(`Height map init start!`);
		let idx = 0;
		// eslint-disable-next-line no-constant-condition
		while (true) {
			// Load maps until there are no more to load (404 error)
			const resolvedImage = await new Promise<HTMLImageElement | null>(res => {
				const image = new Image();
				image.crossOrigin = "Anonymous";

				if (this.mission.isBuiltin) {
					image.src = `${API_URL}/workshop/mapBuiltin/${this.mission.campaignId}/${this.mission.mapId}/${idx}`;
				} else {
					image.src = `${API_URL}/workshop/map/${this.mission.workshopId}/${this.mission.mapId}/${idx}`;
				}

				image.onerror = () => res(null);
				image.onload = () => {
					console.log(`Image ${idx} loaded!`);
					this.width = image.width;
					this.height = image.height;
					res(image);
				};
			});

			if (!resolvedImage) break;
			else idx++;
			this.images.push({ data: this.imageToPixels(resolvedImage) });
		}

		console.log(`All images loaded!`);
	}

	public computeHeights() {
		const map: number[][] = new Array(this.height).fill([]).map(() => new Array(this.width).fill(0));
		// Add all the images together
		this.images.forEach(img => {
			for (let y = 0; y < this.height; y++) {
				for (let x = 0; x < this.width; x++) {
					map[y][x] += img.data.data[y * this.height * 4 + x * 4];
				}
			}
		});

		this.map = map;

		// Map the values to the correct height range
		this.map.forEach((row, y) => {
			row.forEach((height, x) => {
				// map[y][x] = lerp(this.minHeight, this.maxHeight, height / (4 * 256));
				map[y][x] = ((this.maxHeight + this.minHeight) / (this.images.length * 255)) * height - this.minHeight;
			});
		});

		console.log(`Height map calculated ${this.width}x${this.height}`);
	}

	private imageToPixels(img: HTMLImageElement) {
		const canvas = document.createElement("canvas");
		canvas.width = img.width;
		canvas.height = img.height;

		const ctx = canvas.getContext("2d");
		if (ctx == null) throw "Unable to get 2d context";

		ctx.drawImage(img, 0, 0);
		const pixel = ctx.getImageData(0, 0, img.width, img.height);
		for (let i = 0; i < pixel.data.length; i += 4) {
			pixel.data[i + 1] = pixel.data[i];
			pixel.data[i + 2] = pixel.data[i];
		}

		return pixel;
	}

	public initFromImages(images: { data: ImageData }[]) {
		this.images = images;
		this.width = images[0].data.width;
		this.height = images[0].data.height;
	}

	public smooth(): void {
		// Horizontal step
		let newMap: number[][] = [];
		for (let y = 0; y < this.height; y++) {
			newMap.push([]);
			for (let x = 0; x < this.width; x++) {
				const cur = this.map[y][x];
				const next = this.map[y][x + 1];
				if (next == undefined) {
					newMap[y].push(cur);
					break;
				}
				newMap[y].push(cur, (cur + next) / 2);
			}
		}
		this.map = newMap;
		newMap = [];
		// Vertical step
		for (let y = 0; y < this.height; y++) {
			const newRow = [];
			const curRow = this.map[y];
			const nextRow = this.map[y + 1];
			if (nextRow == undefined) {
				newMap.push(curRow);
				break;
			}
			for (let i = 0; i < curRow.length; i++) {
				newRow.push((curRow[i] + nextRow[i]) / 2);
			}

			newMap.push(curRow, newRow);
		}
		this.map = newMap;
		this.width = this.map[0].length;
		this.height = this.map.length;
	}

	// Resolve the height map data as chunks
	public getData(): HeightMapData {
		// const pixPerChunk = this.width / chunksPerSide;

		const chunks: Chunk[][] = [];
		for (let y = 0; y < this.height; y++) {
			for (let x = 0; x < this.width; x++) {
				const chunkX = Math.floor(x / pixelsPerChunkSide);
				const chunkY = Math.floor(y / pixelsPerChunkSide);
				if (!chunks[chunkY]) chunks[chunkY] = [];
				if (!chunks[chunkY][chunkX])
					chunks[chunkY][chunkX] = {
						indexX: chunkX,
						indexY: chunkY,
						width: 0,
						height: 0,
						heights: []
					};

				const subX = x - chunkX * pixelsPerChunkSide; // x within the chunk
				const subY = y - chunkY * pixelsPerChunkSide; // y within the chunk
				if (!chunks[chunkY][chunkX].heights[subY]) chunks[chunkY][chunkX].heights[subY] = [];
				chunks[chunkY][chunkX].heights[subY][subX] = this.map[y][x];
			}
		}

		// Make sure the edge of the chunks line up
		// Theres something fucky with the normals caused by this
		chunks.forEach((row, y) =>
			row.forEach((chunk, x) => {
				if (y + 1 < chunks.length) {
					const edge = chunks[y + 1][x];
					chunk.heights.push(edge.heights[0]);
				}

				if (x + 1 < chunks[y].length) {
					const edge = chunks[y][x + 1];
					edge.heights.forEach((row, edgeY) => {
						chunk.heights[edgeY].push(row[0]);
					});
				}

				chunk.width = chunk.heights[0].length;
				chunk.height = chunk.heights.length;
			})
		);

		return {
			chunks: chunks,
			heights: this.map,
			width: this.width,
			height: this.height,
			pixPerChunk: pixelsPerChunkSide
		};
	}
}

export { HeightMap, HeightMapData, Chunk };
