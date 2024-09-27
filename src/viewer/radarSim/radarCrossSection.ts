import * as THREE from "three";

import { Vector } from "../../../../VTOLLiveViewerCommon/dist/vector.js";
import { Entity } from "../entityBase/entity.js";
import { RadarReturn, UnitDef } from "./rcsDefs.js";

class RadarCrossSection {
	public overrideMultiplier = 1;
	public size: number;
	private returns: RadarReturn[];

	constructor(private entity: Entity, unit: UnitDef) {
		if (!unit) {
			this.size = 0;
			return;
		}

		this.size = unit.radarReturnSize;
		this.returns = unit.radarReturns;
	}

	public getCrossSection(inDirection: Vector): number {
		if (this.size == 0) return 0;

		const rotation = new THREE.Quaternion().setFromEuler(this.entity.rotation.to(THREE.Euler));
		const tId = inDirection.to<THREE.Vector3>(THREE.Vector3).applyQuaternion(rotation.invert()).normalize().multiplyScalar(-1);
		const finalInDirection = Vector.from(tId);

		let num = 0;
		let num2 = 0;
		this.returns.forEach(ret => {
			let num4 = finalInDirection.dot(ret.normal);
			if (num4 > 0) {
				num4 = Math.pow(num4, 15);
				num += ret.returnValue * num4;
				num2 += num4;
			}
		});

		return (100 * this.overrideMultiplier * this.size * num) / num2;
	}
}
export { RadarCrossSection };
