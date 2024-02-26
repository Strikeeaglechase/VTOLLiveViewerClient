import * as THREE from "three";

import { EnableRPCs, RPC, RPCController } from "../../../../VTOLLiveViewerCommon/dist/src/rpc.js";
import { Vector3 } from "../../../../VTOLLiveViewerCommon/dist/src/shared.js";
import { Vector } from "../../../../VTOLLiveViewerCommon/dist/src/vector.js";
import { rad } from "../app";
import { IdentityManager } from "../identities";
import { Settings } from "../settings";
import { Entity } from "./entity";

enum JammerMode {
	NOISE,
	DRFM,
	SAS
}

/*
70 - EF-24
89 - 26b
46 - 42c
90 - 45
147 - 55
0 - b11
65 - e4,

*/

const jammerColors: Record<JammerMode, [number, number, number]> = {
	[JammerMode.NOISE]: [235, 160, 0],
	[JammerMode.DRFM]: [0, 200, 20],
	[JammerMode.SAS]: [0, 115, 240]
};

class JTransmitter {
	private mode: JammerMode = JammerMode.NOISE;
	private model = 0;
	private targetPoint: Vector = new Vector(0, 0, 0);
	private targetVelocity: Vector = new Vector(0, 0, 0);
	private active = false;

	private mesh: THREE.Mesh | null = null;
	private geom: THREE.ConeGeometry;
	private material: THREE.MeshBasicMaterial;

	private pastModes: JammerMode[] = [];
	private pastModels: number[] = [];

	constructor(private entity: Entity, public index: string) {
		Settings.instance.on("Show Jamming", (newState: string) => {
			if (!this.mesh) return;
			if (newState == "Yes") {
				this.mesh.visible = this.active;
			} else {
				this.mesh.visible = false;
			}
		});
	}

	public beginJam(gPoint: Vector3, velocity: Vector3) {
		console.log(`Begin jam with transmitter ${this.index}`);
		this.active = true;
		this.targetPoint = new Vector(-gPoint.x, gPoint.y, gPoint.z);
		this.targetVelocity = new Vector(-velocity.x, velocity.y, velocity.z);

		if (this.mesh == null) {
			const coneAngle = 1; // degrees
			const defaultConeLength = 10; // this.targetPoint.distanceTo(this.entity.position);
			const coneRadius = Math.tan(rad(coneAngle)) * defaultConeLength;

			const color = jammerColors[this.mode];
			const threeColor = new THREE.Color(color[0] / 255, color[1] / 255, color[2] / 255);
			this.geom = new THREE.ConeGeometry(coneRadius, defaultConeLength, 32);
			this.material = new THREE.MeshBasicMaterial({ color: threeColor, transparent: true, opacity: 0.25, side: THREE.DoubleSide });
			this.mesh = new THREE.Mesh(this.geom, this.material);

			const coneLength = this.targetPoint.distanceTo(this.entity.position);
			this.mesh.lookAt(this.targetPoint.x, this.targetPoint.y, this.targetPoint.z);
			this.mesh.rotateX(rad(-90));
			this.mesh.translateY(-coneLength / 2);
			this.mesh.scale.set(coneLength / 10, coneLength / 10, coneLength / 10);

			this.entity.object.add(this.mesh);
		}

		if (Settings.get("Show Jamming") == "Yes") this.mesh.visible = true;

		if (this.mode == JammerMode.SAS) {
			this.entity.showSasMesh();
		}
	}

	public updateJam(gPoint: Vector3, velocity: Vector3, power: number, timestamp: number, drfmFreq: number) {
		this.targetPoint = new Vector(-gPoint.x, gPoint.y, gPoint.z);
		this.targetVelocity = new Vector(-velocity.x, velocity.y, velocity.z);

		if (this.mesh == null) {
			console.warn(`Update jam with transmitter ${this.index} but no mesh`);
			this.beginJam(gPoint, velocity);
		}

		if (this.mesh == null) {
			console.error(`Even after trying to create a mesh, it's still null`);
			return;
		}

		const coneLength = this.targetPoint.distanceTo(this.entity.position);
		this.mesh.position.set(0, 0, 0);
		this.mesh.rotation.set(0, 0, 0);
		this.mesh.lookAt(this.targetPoint.x, this.targetPoint.y, this.targetPoint.z);
		this.mesh.rotateX(rad(-90));
		this.mesh.translateY(-coneLength / 2);
		this.mesh.scale.set(coneLength / 10, coneLength / 10, coneLength / 10);

		if (this.mode == JammerMode.SAS) {
			this.entity.showSasMesh();
		} else {
			this.entity.hideSasMesh();
		}
	}

	public endJam() {
		console.log(`End jam with transmitter ${this.index}`);
		this.active = false;
		if (this.mesh != null) {
			this.mesh.visible = false;
		}
		this.entity.hideSasMesh();
	}

	public tDecoyModel(decoyIdentityIdx: number) {
		this.model = decoyIdentityIdx;
		const ident = IdentityManager.getIdentityByIndex(decoyIdentityIdx);
		if (!ident) {
			console.error(`Decoy model with transmitter ${this.index} with decoyIdentityIdx ${decoyIdentityIdx} does not exist`);
			return;
		}

		console.log(`Decoy model with transmitter ${this.index} with decoyIdentityIdx ${decoyIdentityIdx} and ident ${ident?.name} (${ident?.ident})`);
		this.entity.setSasMesh(ident.ident);
		this.pastModels.push(this.model);
	}

	public tMode(mode: number) {
		console.log(`Mode with transmitter ${this.index} with mode ${mode}`);
		this.mode = mode;

		if (this.mesh) {
			this.material.color = new THREE.Color(jammerColors[this.mode][0] / 255, jammerColors[this.mode][1] / 255, jammerColors[this.mode][2] / 255);
		}

		this.pastModes.push(this.mode);
	}

	public popMode() {
		this.mode = this.pastModes.pop() ?? JammerMode.NOISE;
		if (this.mode == JammerMode.SAS) {
			this.entity.showSasMesh();
		} else {
			this.entity.hideSasMesh();
		}
	}

	public popModel() {
		this.model = this.pastModels.pop() ?? -1;
		if (this.model == -1) {
			this.entity.hideSasMesh();
		} else {
			const ident = IdentityManager.getIdentityByIndex(this.model);
			if (!ident) {
				console.error(`Decoy model with transmitter ${this.index} with decoyIdentityIdx ${this.model} does not exist`);
				return;
			}

			this.entity.setSasMesh(ident.ident);
		}
	}
}

@EnableRPCs("instance")
class RadarJammerSync {
	private transmitters: JTransmitter[] = [];
	constructor(private entity: Entity, public id: string) {}

	private getTransmitter(idx: number) {
		if (this.transmitters[idx] == null) {
			this.transmitters[idx] = new JTransmitter(this.entity, idx.toString());
			console.log(`Created new jammer transmitter ${this.id}-${idx}`);
		}
		return this.transmitters[idx];
	}

	public remove() {
		console.log(`Remove jammer with id ${this.id}`);
		RPCController.deregister(this);
	}

	@RPC("in")
	public BeginJam(idx: number, gPoint: Vector3, velocity: Vector3) {
		this.getTransmitter(idx).beginJam(gPoint, velocity);
	}

	@RPC("in")
	public UpdateJam(idx: number, gPoint: Vector3, velocity: Vector3, power: number, timestamp: number, drfmFreq: number) {
		this.getTransmitter(idx).updateJam(gPoint, velocity, power, timestamp, drfmFreq);
	}

	@RPC("in")
	public EndJam(idx: number) {
		this.getTransmitter(idx).endJam();
	}

	@RPC("in")
	public TDecoyModel(tIdx: number, decoyIdentityIdx: number) {
		this.getTransmitter(tIdx).tDecoyModel(decoyIdentityIdx);
	}

	@RPC("in")
	public TMode(tIdx: number, mode: number) {
		this.getTransmitter(tIdx).tMode(mode);
	}

	public popMode(tIdx: number) {
		this.getTransmitter(tIdx).popMode();
	}

	public popModel(tIdx: number) {
		this.getTransmitter(tIdx).popModel();
	}
}

export { RadarJammerSync };
