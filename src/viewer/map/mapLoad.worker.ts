import * as THREE from "three";

import { MissionInfo } from "../../../../VTOLLiveViewerCommon/dist/src/shared.js";
import { Chunk, HeightMap, HeightMapData } from "./heightmap";
import { Biome, MapLoader, METERS_PER_PIXEL } from "./mapLoader";

onmessage = function (e) {
	console.log(e.data);
};

interface ChunkDataMessage {
	chunk: Chunk;
	vertices: Float32Array;
	normals: number[];
	colors: number[];
	indices: number[];
}

// Webworker for loading heightmap data
class MapLoaderWorker {
	private heightmap: HeightMap;

	async handleMessage(e: MessageEvent<{ mission: MissionInfo; images: { data: ImageData }[] }>) {
		this.heightmap = new HeightMap(e.data.mission);
		this.heightmap.initFromImages(e.data.images);

		console.log(e.data);
		console.log(`Starting heightmap data load`);
		const d = Date.now();
		this.heightmap.computeHeights();
		const data = this.heightmap.getData();
		console.log(data);
		console.log(`Height map loaded in ${((Date.now() - d) / 1000).toFixed(3)} seconds`);

		data.chunks.forEach(row => {
			row.forEach(chunk => {
				this.processChunk(data, chunk);
			});
		});
	}

	processChunk(data: HeightMapData, chunk: Chunk) {
		const verts: THREE.Vector3[] = [];
		const normals = [];
		const colors: number[] = [];

		for (let x = 0; x < chunk.width; x++) {
			for (let y = 0; y < chunk.height; y++) {
				const yValue = chunk.heights[y][x];

				const vertex = new THREE.Vector3(x * METERS_PER_PIXEL, yValue, y * METERS_PER_PIXEL);
				verts.push(vertex);
				normals.push(0, 0, 1);

				const color = MapLoader.getColorAtHeight(yValue, Biome.normal);
				colors.push(...color.map(c => c / 255));
			}
		}

		const indices: number[] = [];
		for (let z = 0; z < chunk.height - 1; z++) {
			for (let x = 0; x < chunk.width - 1; x++) {
				const a = x + z * chunk.width;
				const b = x + 1 + z * chunk.width;
				const c = x + (z + 1) * chunk.width;
				const d = x + 1 + (z + 1) * chunk.width;

				indices.push(a, b, d);
				indices.push(d, c, a);
			}
		}

		const vertices = verts.map(v => v.toArray()).flat();

		self.postMessage({ x: chunk.indexX, y: chunk.indexY, pixPerChunk: data.pixPerChunk });
		self.postMessage(new Float32Array(vertices).buffer, { transfer: [new Float32Array(vertices).buffer] });
		self.postMessage(new Float32Array(normals).buffer, { transfer: [new Float32Array(normals).buffer] });
		self.postMessage(new Float32Array(indices).buffer, { transfer: [new Float32Array(indices).buffer] });
		self.postMessage(new Float32Array(colors).buffer, { transfer: [new Float32Array(colors).buffer] });
	}
}

const loader = new MapLoaderWorker();
onmessage = e => loader.handleMessage(e);

export { ChunkDataMessage };
