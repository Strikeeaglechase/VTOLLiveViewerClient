import * as THREE from "three";

import { MissionInfoWithoutSpawns } from "../../../../VTOLLiveViewerCommon/dist/shared.js";
import { SceneManager } from "../managers/sceneManager";
import { HeightMap } from "./heightmap";
import { METERS_PER_PIXEL } from "./mapInfo.js";

// This value may be the cause of the heightmap not lining up with the in game map
const SHOW_CHUNK_BORDERS = false;

// At some point would be nice to match the in game VTOL biomes

interface ChunkInfo {
	x: number;
	y: number;
	pixPerChunk: number;
	xHeights: number;
	yHeights: number;
}

class MapLoader {
	public heightMap: HeightMap;
	private heightMapMesh: THREE.Group;

	constructor(private sceneManager: SceneManager) {}

	public async loadHeightmapFromMission(mission: MissionInfoWithoutSpawns) {
		if (mission.mapId == "map_akutan") {
			console.warn(`Mission has Akutan map, so skipping heightmap load`);
			return;
		}

		const start = Date.now();

		const worker = new Worker(new URL("./mapLoad.worker.js", import.meta.url));

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
		if (!this.sceneManager.hasFocus()) {
			cam.position.set(0, 100000, 0);
		}
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
		let chunkIdx: ChunkInfo;
		let idx = 0;
		let loadedCount = 0;
		let bytes = 0;
		let expectedChunks = 0;
		worker.onmessage = (e: MessageEvent) => {
			if (expectedChunks == 0) {
				expectedChunks = e.data.expectedChunks;
				return;
			}

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
				if (loadedCount == expectedChunks) {
					console.log(
						`Chunk loading fully finished. Map load process took ${((Date.now() - start) / 1000).toFixed(2)}sec Map size: ${(bytes / 1000).toFixed(0)}kb`
					);
					// this.onMapLoaded();
				}
			}
		};
	}

	private createChunkMesh(chunkIdx: ChunkInfo, vertices: ArrayBuffer, normals: ArrayBuffer, indices: ArrayBuffer, colors: ArrayBuffer) {
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
		const chunkX = chunkIdx.x * METERS_PER_PIXEL * chunkIdx.pixPerChunk;
		const chunkY = chunkIdx.y * METERS_PER_PIXEL * chunkIdx.pixPerChunk;
		mesh.position.set(chunkX, 0, chunkY);
		mesh.name = `Chunk ${chunkIdx.x} ${chunkIdx.y}`;
		this.heightMapMesh.add(mesh);

		if (SHOW_CHUNK_BORDERS) {
			// Chunk border mesh
			const chunkWidth = chunkIdx.xHeights * METERS_PER_PIXEL;
			const chunkHeight = chunkIdx.yHeights * METERS_PER_PIXEL;
			const borderBox = new THREE.BoxBufferGeometry(chunkWidth, 100000, chunkHeight);
			const borderMesh = new THREE.Mesh(
				borderBox,
				new THREE.MeshLambertMaterial({
					color: 0xffffff,
					side: THREE.DoubleSide,
					wireframe: true
				})
			);
			borderMesh.position.set(chunkX + chunkWidth / 2, 0, chunkY + chunkHeight / 2);
			borderMesh.name = `Chunk border ${chunkIdx.x} ${chunkIdx.y}`;
			this.heightMapMesh.add(borderMesh);
		}
	}
}

export { MapLoader };
