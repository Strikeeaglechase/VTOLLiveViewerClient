import * as THREE from "three";

import { IVector3 } from "../../../../VTOLLiveViewerCommon/dist/vector.js";
import { Application } from "../app.js";

class Debug {
	private static pointGeomCache: Record<number, THREE.SphereGeometry> = {};
	private static pointMatCache: Record<number, THREE.MeshBasicMaterial> = {};
	private static lineMatCache: Record<string, THREE.LineBasicMaterial> = {};

	private static points: { mesh: THREE.Mesh; size: number; color: number; inUse: boolean }[] = [];
	private static lines: { mesh: THREE.Line; color: number; inUse: boolean }[] = [];

	private static getOrCreatePoint(size: number, color: number) {
		const existing = this.points.find(point => point.size === size && point.color === color && !point.inUse);

		if (existing) {
			existing.inUse = true;
			existing.mesh.visible = true;
			return existing;
		}

		const geom = this.pointGeomCache[size] || new THREE.SphereGeometry(size, 8, 8);
		const material = this.pointMatCache[color] || new THREE.MeshBasicMaterial({ color: color, wireframe: true, side: THREE.DoubleSide });
		this.pointGeomCache[size] = geom;
		this.pointMatCache[color] = material;

		const mesh = new THREE.Mesh(geom, material);
		mesh.name = "debugPoint";

		Application.instance.sceneManager.add(mesh);

		const point = { mesh, size, color, inUse: true };
		this.points.push(point);

		return point;
	}

	public static point(pt: IVector3, size: number = 1, color: number = 0xffffff) {
		const point = this.getOrCreatePoint(size, color);
		point.mesh.position.set(pt.x, pt.y, pt.z);

		// const mk = mark(15, 0x0000ff);
		// mk.position.set(pt.x, pt.y, pt.z);
		// Application.instance.sceneManager.add(mk);
	}

	private static getOrCreateLine(color: number) {
		const existing = this.lines.find(line => line.color === color && !line.inUse);

		if (existing) {
			existing.inUse = true;
			existing.mesh.visible = true;
			return existing;
		}

		const material = this.lineMatCache[color] || new THREE.LineBasicMaterial({ color: color });
		this.lineMatCache[color] = material;

		const mesh = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0)]), material);
		mesh.name = "debugLine";
		mesh.frustumCulled = false;

		Application.instance.sceneManager.add(mesh);

		const line = { mesh, color, inUse: true };
		this.lines.push(line);

		return line;
	}

	public static line(a: IVector3, b: IVector3, color: number = 0xffffff) {
		const line = this.getOrCreateLine(color);
		const geometry = line.mesh.geometry as THREE.BufferGeometry;
		// const positions = new Float32Array([a.x, a.y, a.z, b.x, b.y, b.z]);
		// geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

		geometry.setFromPoints([new THREE.Vector3(a.x, a.y, a.z), new THREE.Vector3(b.x, b.y, b.z)]);
		line.mesh.computeLineDistances();
	}

	public static frameReset() {
		this.points.forEach(point => {
			point.mesh.visible = false;
			point.inUse = false;
		});

		this.lines.forEach(line => {
			line.mesh.visible = false;
			line.inUse = false;
		});
	}
}

export { Debug };
