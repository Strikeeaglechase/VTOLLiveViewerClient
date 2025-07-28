import * as THREE from "three";

import { EnableRPCs, RPC } from "../../../../VTOLLiveViewerCommon/dist/rpc.js";
import { Vector3 } from "../../../../VTOLLiveViewerCommon/dist/shared.js";
import { Application } from "../app.js";

@EnableRPCs("instance")
class DebugSphere {
	private mesh: THREE.Mesh;
	private geom: THREE.SphereGeometry;
	private material: THREE.MeshBasicMaterial;

	private scaleOffset: number = 1;
	private currentWorldScale: number = 1;

	constructor(private app: Application, public id: number) {
		this.geom = new THREE.SphereGeometry(1, 8, 8);
		this.material = new THREE.MeshBasicMaterial({ color: 0x00ffff, wireframe: false, side: THREE.DoubleSide });

		this.mesh = new THREE.Mesh(this.geom, this.material);
		this.mesh.name = "debugSphere";
		this.app.sceneManager.add(this.mesh);

		this.app.on("unit_scale", (scale: number) => {
			this.currentWorldScale = scale;
			this.updateScale();
		});
	}

	private updateScale() {
		const finalScale = this.currentWorldScale * this.scaleOffset;
		this.mesh.scale.set(finalScale, finalScale, finalScale);
		this.mesh.visible = true;
	}

	@RPC("in")
	public SetPosition(pos: Vector3) {
		this.mesh.position.set(-pos.x, pos.y, pos.z);
		this.mesh.visible = true;
	}

	@RPC("in")
	public SetScale(scale: number) {
		this.scaleOffset = scale;
		this.updateScale();
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
export { DebugSphere };
