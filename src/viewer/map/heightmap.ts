import * as THREE from "three";

import { MissionInfoWithoutSpawns } from "../../../../VTOLLiveViewerCommon/dist/shared.js";
import { IVector3 } from "../../../../VTOLLiveViewerCommon/dist/vector.js";
import { API_URL, STORAGE_URL } from "../../config";
import { Application } from "../app.js";
import { METERS_PER_PIXEL } from "./mapInfo.js";

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

const XZ = (v: THREE.Vector3) => new THREE.Vector2(v.x, v.z);

class HeightMap {
	private maxHeight = 6000;
	private minHeight = 80; // This is negative
	public width: number;
	public height: number;

	public images: { data: ImageData }[] = [];
	public map: number[][];
	private highestOfQuad: number[][] = [];

	constructor(private mission: MissionInfoWithoutSpawns, private mapMesh: THREE.Group) {}

	public async init() {
		console.log(`Height map init start!`);
		let idx = 0;
		// eslint-disable-next-line no-constant-condition
		while (true) {
			// Load maps until there are no more to load (404 error)
			const imageData = await this.loadNextImageData(idx);
			if (imageData == null) break;

			idx++;
			this.images.push({ data: imageData });
		}

		console.log(`All images loaded!`);
	}

	private async loadNextImageData(idx: number): Promise<ImageData | null> {
		const resolvedImage = await new Promise<HTMLImageElement | null>(async res => {
			const image = new Image();
			image.crossOrigin = "Anonymous";

			const replayHeader = Application.instance.replayController?.header;
			if (Application.instance.localVtgrFile != null) {
				console.log(`Loading image from local VTGR file: map_${idx}.png`);
				const localFile = Application.instance.localVtgrFile;
				const mapDataui8 = await localFile.getMap(idx);
				if (mapDataui8 == null) return res(null);

				const blob = new Blob([mapDataui8], { type: "image/png" });
				image.src = URL.createObjectURL(blob);
			} else if (Application.instance.isReplay && replayHeader.includesMission) {
				const fPath = encodeURIComponent(`recordings/${replayHeader.id}.vtgr`);
				image.src = `${STORAGE_URL}/read_unzip/?key=${fPath}&file=map_${idx}.png`;
				console.log(`Loading image: ${image.src}`);
			} else {
				if (this.mission.isBuiltin) {
					image.src = `${API_URL}/workshop/mapBuiltin/${this.mission.campaignId}/${this.mission.mapId}/${idx}`;
				} else {
					image.src = `${API_URL}/workshop/map/${this.mission.workshopId}/${this.mission.mapId}/${idx}`;
				}
			}

			image.onerror = () => res(null);
			image.onload = () => {
				console.log(`Image ${idx} loaded!`);
				this.width = image.width;
				this.height = image.height;
				res(image);
			};
		});

		if (!resolvedImage) return null;

		return this.imageToPixels(resolvedImage);
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

	public loadFromWorkerData(heights: number[][]) {
		this.map = heights;
		// Compute heights of quad
		this.map.forEach((row, y) => {
			this.highestOfQuad[y] = [];
			row.forEach((height, x) => {
				const a = this.map[y][x];
				if (x + 1 >= this.width || y + 1 >= this.height) {
					this.highestOfQuad[y][x] = a;
					return;
				}

				const b = this.map[y][x + 1];
				const c = this.map[y + 1][x];
				const d = this.map[y + 1][x + 1];

				const highest = Math.max(a, b, c, d);
				this.highestOfQuad[y][x] = highest;
			});
		});
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

	public marchingLinecast(ipt1: IVector3, ipt2: IVector3) {
		if (!this.map) return { hitGround: false, hitPoint: new THREE.Vector3() };

		const wpt1 = new THREE.Vector3(ipt1.x, ipt1.y, ipt1.z);
		const wpt2 = new THREE.Vector3(ipt2.x, ipt2.y, ipt2.z);
		const pt1 = this.mapMesh.worldToLocal(wpt1.clone());
		const pt2 = this.mapMesh.worldToLocal(wpt2.clone());
		const maxDistance = pt1.distanceTo(pt2);

		let marchStep = 250;
		const step = pt2.clone().sub(pt1).normalize().multiplyScalar(marchStep);

		let currentPoint = pt1.clone();
		while (currentPoint.distanceTo(pt1) < maxDistance) {
			currentPoint.add(step);

			// If line is going up, and gone longer than 25k there's practically no chance of hitting the ground
			if (currentPoint.distanceTo(pt1) > 25_000 && pt2.y > pt1.y) {
				break;
			}

			// Next point under ground?
			let worldHeight: number;
			const cx = Math.floor(currentPoint.x / METERS_PER_PIXEL);
			const cy = Math.floor(currentPoint.z / METERS_PER_PIXEL);
			if (cx < 0 || cy < 0 || cx >= this.width || cy >= this.height) {
				worldHeight = 0;
				marchStep = 1000;
			} else {
				marchStep = 250;
				worldHeight = this.highestOfQuad[cy][cx];
			}

			if (currentPoint.y < worldHeight) {
				// Hit ground
				this.mapMesh.localToWorld(currentPoint);
				return { hitGround: true, hitPoint: currentPoint };
			}
		}

		return { hitGround: false, hitPoint: new THREE.Vector3() };
	}

	// Almost works, but not quite
	private linecast(ipt1: IVector3, ipt2: IVector3, mm: THREE.Group) {
		if (!this.map) return { hitGround: false, hitPoint: new THREE.Vector3() };

		const wpt1 = new THREE.Vector3(ipt1.x, ipt1.y, ipt1.z);
		const wpt2 = new THREE.Vector3(ipt2.x, ipt2.y, ipt2.z);
		const pt1 = mm.worldToLocal(wpt1.clone());
		const pt2 = mm.worldToLocal(wpt2.clone());

		const startPoint = XZ(pt1).divideScalar(METERS_PER_PIXEL);
		const endPoint = XZ(pt2).divideScalar(METERS_PER_PIXEL);
		const ySlope = (pt2.y - pt1.y) / pt1.distanceTo(pt2);

		const dir3 = pt2.clone().sub(pt1).normalize();
		const dir = XZ(dir3).normalize();
		const unitStepSize = new THREE.Vector2(Math.sqrt(1 + (dir.y / dir.x) * (dir.y / dir.x)), Math.sqrt(1 + (dir.x / dir.y) * (dir.x / dir.y)));
		let currentChunk = new THREE.Vector2(Math.floor(startPoint.x), Math.floor(startPoint.y));
		let lengths = new THREE.Vector2();
		let step = new THREE.Vector2();

		if (dir.x < 0) {
			step.x = -1;
			lengths.x = (startPoint.x - currentChunk.x) * unitStepSize.x;
		} else {
			step.x = 1;
			lengths.x = (currentChunk.x + 1 - startPoint.x) * unitStepSize.x;
		}

		if (dir.y < 0) {
			step.y = -1;
			lengths.y = (startPoint.y - currentChunk.y) * unitStepSize.y;
		} else {
			step.y = 1;
			lengths.y = (currentChunk.y + 1 - startPoint.y) * unitStepSize.y;
		}

		let distance = 0;
		const distMax = startPoint.distanceTo(endPoint);
		let hitGround = false;
		while (distance < distMax) {
			if (lengths.x < lengths.y) {
				currentChunk.x += step.x;
				distance = lengths.x;
				lengths.x += unitStepSize.x;
			} else {
				currentChunk.y += step.y;
				distance = lengths.y;
				lengths.y += unitStepSize.y;
			}

			let worldHeight;
			if (currentChunk.x < 0 || currentChunk.y < 0 || currentChunk.x >= this.width || currentChunk.y >= this.height) {
				worldHeight = 0;
			} else {
				worldHeight = this.highestOfQuad[Math.floor(currentChunk.y)][Math.floor(currentChunk.x)];
			}

			// const currentPoint = pt1.y + ySlope * distance * METERS_PER_PIXEL;
			const currentPoint3d = pt1.clone().add(dir3.clone().multiplyScalar(distance * METERS_PER_PIXEL));
			// Debug.point(mm.localToWorld(currentPoint3d), 50, 0xff0000);
			const currentPoint = currentPoint3d.y;
			const worldPoint = new THREE.Vector3(currentChunk.x * METERS_PER_PIXEL, currentPoint, currentChunk.y * METERS_PER_PIXEL);
			// Debug.point(mm.localToWorld(worldPoint), 50, 0xff00ff);
			const hPoint = new THREE.Vector3(currentChunk.x * METERS_PER_PIXEL, worldHeight, currentChunk.y * METERS_PER_PIXEL);
			// Debug.point(mm.localToWorld(hPoint), 25, 0x00ff00);

			if (currentPoint < worldHeight) {
				hitGround = true;
				break;
			}
		}

		const hitPoint = pt1.clone().add(dir3.clone().multiplyScalar(distance * METERS_PER_PIXEL));
		mm.localToWorld(hitPoint);
		return { hitGround, hitPoint };
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
