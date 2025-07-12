import * as THREE from "three";

import { EnableRPCs, RPC } from "../../../../VTOLLiveViewerCommon/dist/rpc.js";
import { Vector3 } from "../../../../VTOLLiveViewerCommon/dist/shared.js";
import { Application } from "../app.js";

@EnableRPCs("instance")
class DebugLine {
	private mesh: THREE.Line;
	private geom: THREE.BufferGeometry;
	private material: THREE.LineBasicMaterial;
	private start: THREE.Vector3 = new THREE.Vector3();
	private end: THREE.Vector3 = new THREE.Vector3();

	constructor(private app: Application, public id: number) {
		this.geom = new THREE.BufferGeometry();
		this.material = new THREE.LineBasicMaterial({ color: 0x00ffff, side: THREE.DoubleSide });

		this.mesh = new THREE.Line(this.geom, this.material);
		this.mesh.name = "debugLine";
		this.mesh.frustumCulled = false;
		this.app.sceneManager.add(this.mesh);
	}

	private updateGeometry() {
		this.geom.setFromPoints([this.start, this.end]);
		this.mesh.geometry = this.geom;
		this.mesh.visible = true;
	}

	@RPC("in")
	public SetStart(pos: Vector3) {
		this.start.set(-pos.x, pos.y, pos.z);
		this.updateGeometry();
	}

	@RPC("in")
	public SetEnd(pos: Vector3) {
		this.end.set(-pos.x, pos.y, pos.z);
		this.updateGeometry();
	}

	@RPC("in")
	public SetColor(color: number) {
		this.material.color.set(color);
		(this.mesh.material as THREE.Material).needsUpdate = true;
		this.mesh.visible = true;
	}

	@RPC("in")
	public Hide() {
		this.mesh.visible = false;
	}
}

export { DebugLine };
