import * as THREE from "three";
import { IVector3 } from "vtol-live-viewer-shared/dist/vector.js";

import { Application } from "../../app.js";
import { IDisposable } from "../radarDataVisulizer.js";

interface LineDashInfo {
	dashSize: number;
	gapSize: number;
}

class ManagedLine implements IDisposable {
	public threeLine: THREE.Line;
	public geom: THREE.BufferGeometry;
	public material: THREE.LineBasicMaterial | THREE.LineDashedMaterial;

	public scaleEffected = true;

	constructor(private app: Application, color: number, dashInfo?: LineDashInfo) {
		this.geom = new THREE.BufferGeometry();

		if (!dashInfo) {
			this.material = new THREE.LineBasicMaterial({ color });
		} else {
			this.material = new THREE.LineDashedMaterial({
				color,
				scale: 1,
				dashSize: dashInfo.dashSize,
				gapSize: dashInfo.gapSize
			});
		}

		this.threeLine = new THREE.Line(this.geom, this.material);
		this.threeLine.frustumCulled = false;
		this.threeLine.name = "managedLine";

		this.app.sceneManager.add(this.threeLine);
	}

	public moveAndPoint(start: IVector3, end: IVector3) {
		this.threeLine.position.set(start.x, start.y, start.z);
		this.geom.setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(end.x, end.y, end.z)]);
	}

	public setBetweenPoints(start: THREE.Vector3, end: THREE.Vector3) {
		this.geom.setFromPoints([start, end]);
		this.threeLine.computeLineDistances();
	}

	public onScale(scale: number) {
		if (this.scaleEffected) {
			this.threeLine.scale.set(scale, scale, scale);
		}
	}

	public dispose() {
		this.app.sceneManager.remove(this.threeLine);
		this.geom.dispose();
	}
}

export { ManagedLine, LineDashInfo };
