import * as THREE from "three";

import { MissionInfoWithoutSpawns } from "../../../../VTOLLiveViewerCommon/dist/src/shared.js";
import { SceneManager } from "../managers/sceneManager";
import { chunksPerSide, HeightMap } from "./heightmap";

// This value may be the cause of the heightmap not lining up with the in game map
const METERS_PER_PIXEL = 153.6;

// At some point would be nice to match the in game VTOL biomes
enum Biome {
	normal
}

class MapLoader {
	private heightMap: HeightMap;
	private heightMapMesh: THREE.Group;

	constructor(private sceneManager: SceneManager) {}

	public async loadHeightmapFromMission(mission: MissionInfoWithoutSpawns) {
		const start = Date.now();

		const worker = new Worker(new URL("./mapLoad.worker.ts", import.meta.url));

		this.heightMap = new HeightMap(mission);
		await this.heightMap.init();

		// Init mesh
		this.heightMapMesh = new THREE.Group();
		this.heightMapMesh.rotation.set(0, Math.PI, 0);
		this.heightMapMesh.position.set(0, 0, this.heightMap.width * METERS_PER_PIXEL);
		this.sceneManager.primaryLight.position.set(
			(this.heightMap.width * METERS_PER_PIXEL) / 2 - this.heightMap.width * METERS_PER_PIXEL,
			100000,
			(this.heightMap.height * METERS_PER_PIXEL) / 2
		);
		this.heightMapMesh.name = "Height map";
		this.sceneManager.add(this.heightMapMesh);

		// Position camera
		const ctrl = this.sceneManager.cameraController.orbit;
		const cam = this.sceneManager.cameraController.fakeCamera;
		cam.position.set(0, 100000, 0);
		ctrl.target.set(
			(this.heightMap.width * METERS_PER_PIXEL) / 2 - this.heightMap.width * METERS_PER_PIXEL,
			0,
			(this.heightMap.height * METERS_PER_PIXEL) / 2
		);

		worker.postMessage({ mission: mission, images: this.heightMap.images });

		let vertices: ArrayBuffer;
		let normals: ArrayBuffer;
		let indices: ArrayBuffer;
		let colors: ArrayBuffer;
		let chunkIdx = { x: 0, y: 0, pixPerChunk: 0 };
		let idx = 0;
		let loadedCount = 0;
		let bytes = 0;
		worker.onmessage = (e: MessageEvent) => {
			if (e.data instanceof ArrayBuffer) bytes += e.data.byteLength;

			// This is uh... an odd way of parsing the messages, but I need to send as shared memory to prevent a memory copy of all the data
			switch (idx) {
				case 0:
					chunkIdx = e.data;
					break;
				case 1:
					vertices = e.data;
					break;
				case 2:
					normals = e.data;
					break;
				case 3:
					indices = e.data;
					break;
				case 4:
					colors = e.data;
					break;
			}
			idx++;
			if (idx == 5) {
				this.createChunkMesh(chunkIdx, vertices, normals, indices, colors);
				idx = 0;
				loadedCount++;
				if (loadedCount == chunksPerSide * chunksPerSide) {
					console.log(
						`Chunk loading fully finished. Map load process took ${((Date.now() - start) / 1000).toFixed(2)}sec Map size: ${(bytes / 1000).toFixed(0)}kb`
					);
					// this.onMapLoaded();
				}
			}
		};
	}

	private createChunkMesh(
		chunkIdx: { x: number; y: number; pixPerChunk: number },
		vertices: ArrayBuffer,
		normals: ArrayBuffer,
		indices: ArrayBuffer,
		colors: ArrayBuffer
	) {
		const geometry = new THREE.BufferGeometry();
		geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
		geometry.setAttribute("normal", new THREE.Float32BufferAttribute(normals, 3));
		geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

		geometry.setIndex(Array.from(new Float32Array(indices)));
		geometry.computeVertexNormals();

		const mesh = new THREE.Mesh(
			geometry,
			new THREE.MeshLambertMaterial({
				color: 0x666666,
				side: THREE.DoubleSide,
				wireframe: false,
				vertexColors: true
			})
		);
		mesh.position.set(chunkIdx.x * METERS_PER_PIXEL * chunkIdx.pixPerChunk, 0, chunkIdx.y * METERS_PER_PIXEL * chunkIdx.pixPerChunk);
		mesh.name = `Chunk ${chunkIdx.x} ${chunkIdx.y}`;
		this.heightMapMesh.add(mesh);
	}

	public static getColorAtHeight(height: number, biome: Biome): [number, number, number] {
		if (biome == Biome.normal) {
			return this.getColorAtHeightNormal(height);
		}
		return [0, 0, 0];
	}

	// Thanks to Ierdna100 for these values
	private static getColorAtHeightNormal(height: number): [number, number, number] {
		if (height < 0) {
			return [0.0 * 255, 0.1 * 255, 0.8 * 255];
		} else if (height < 20) {
			return [196, 193, 16];
		} else if (height < 40) {
			return [153, 171, 14];
		} else if (height < 1200) {
			return [0.4 * 255, 0.8 * 255, 0.4 * 255];
		} else {
			return [209, 220, 230];
		}
	}
}

export { MapLoader, Biome, METERS_PER_PIXEL };
