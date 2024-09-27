import { Vector } from "../../../../VTOLLiveViewerCommon/dist/vector.js";
import { Application, clamp, inverseLerp, lerp } from "../app.js";
import { Entity } from "../entityBase/entity.js";

const MIN_DOPPLER_FACTOR = 0.0125;
class Radar {
	private app: Application;
	public transmissionStrength = 125000;
	public receiverSensitivity = 500;

	constructor(private entity: Entity) {
		this.app = entity.application;
	}

	private getRadarSignalStrength(target: Entity) {
		const dir = target.position.subtract(this.entity.position).unit();

		let rcs = target.rcs.getCrossSection(dir);
		const groundBehindDist = this.getGroundDist(dir, target.position);

		let a = 1;
		const scaledVel = target.velocity.divide(100).clampLength(1);
		a = Math.abs(scaledVel.dot(dir));
		a = clamp(a, MIN_DOPPLER_FACTOR, 1);

		const t = dir.dot(new Vector(0, 1, 0));
		a = lerp(a, 1.5, t);
		rcs *= a;

		if (groundBehindDist > 0) {
			let t2 = inverseLerp(25000, 500, groundBehindDist);
			t2 = lerp(0.2, 1, t2);
			rcs *= t2;
		}

		return rcs;
	}

	private getGroundDist(dir: Vector, targetPosition: Vector) {
		if (!this.app.mapLoader.heightMap) return 0;

		const maxDist = 25_000;

		const endPos = targetPosition.add(dir.multiply(maxDist));
		const { hitGround, hitPoint } = this.app.mapLoader.heightMap.marchingLinecast(targetPosition, endPos);
		if (!hitGround) return 0;

		const dist = Vector.from(hitPoint).distanceTo(targetPosition);
		return dist;
	}

	public checkCanDetect(target: Entity) {
		const radarSignalStrength = this.getRadarSignalStrength(target);
		const dist = this.entity.position.distanceTo(target.position);
		const returnStrength = (radarSignalStrength * this.transmissionStrength) / (dist * dist);

		return returnStrength > 1 / this.receiverSensitivity;
	}
}

export { Radar };
