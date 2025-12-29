import * as THREE from "three";

import { Application, rad } from "../../app.js";
import { IDisposable } from "../managedObject.js";

class LockCone implements IDisposable {
	private mesh: THREE.Mesh;

	constructor(private app: Application, color: number) {
		const coneAngle = 0.1; // degrees
		const defaultConeLength = 10; // this.targetPoint.distanceTo(this.entity.position);
		const coneRadius = Math.tan(rad(coneAngle)) * defaultConeLength;

		const threeColor = new THREE.Color(color);
		const geom = new THREE.ConeGeometry(coneRadius, defaultConeLength, 32);
		const material = new THREE.MeshBasicMaterial({ color: threeColor, transparent: true, opacity: 0.25, side: THREE.DoubleSide });
		this.mesh = new THREE.Mesh(geom, material);
	}

	public updatePoint(start: THREE.Vector3, end: THREE.Vector3) {
		const coneLength = end.distanceTo(start);
		this.mesh.position.set(start.x, start.y, start.z);
		this.mesh.rotation.set(0, 0, 0);
		this.mesh.lookAt(end.x, end.y, end.z);
		this.mesh.rotateX(rad(-90));
		this.mesh.translateY(-coneLength / 2);
		this.mesh.scale.set(coneLength / 10, coneLength / 10, coneLength / 10);
	}

	public setVisible(visible: boolean) {
		this.mesh.visible = visible;
	}

	public onScale(scale: number) {}

	public dispose(): void {
		this.app.sceneManager.remove(this.mesh);
		this.mesh.geometry.dispose();
	}
}

export { LockCone };
