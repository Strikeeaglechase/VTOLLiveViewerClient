import * as THREE from "three";

import { Application, rad } from "../app";
import { AIGroundUnit } from "../entities/aiGroundUnit";
import { PlayerVehicle } from "../entities/playerVehicle";
import { Renderer } from "../renderer/renderer";
import { mark } from "../threeUtils";
import { CAM_NEAR } from "./sceneManager";

class LSOManager {
	private render: Renderer;
	private landingAircraft: PlayerVehicle;
	private landingTarget: AIGroundUnit;

	private landingAircraftPlane: THREE.Mesh;
	private distancePoint: THREE.Object3D;
	private landingPoint: THREE.Mesh;

	private offsetXChild: THREE.Object3D;
	private offsetYChild: THREE.Object3D;
	private offsetXMesh: THREE.Line;
	private offsetYMesh: THREE.Line;

	private childrenOfEntity: THREE.Object3D[] = [];
	private childrenOfScene: THREE.Object3D[] = [];

	public landingDist = 0;
	constructor(private app: Application) {}

	public init() {
		this.render = new Renderer("lso-overlay");
		this.render.resize(window.innerWidth, window.innerHeight);
		window.addEventListener("resize", e => {
			this.render.resize(window.innerWidth, window.innerHeight);
		});
	}

	public update(dt: number) {
		if (!this.landingAircraft || !this.landingAircraftPlane) return;

		const landingPos = new THREE.Vector3();
		this.landingPoint.getWorldPosition(landingPos);
		const dist = this.landingAircraft.position.distanceTo(landingPos);
		this.distancePoint.position.set(0, 0, -dist);
		this.landingDist = dist;

		const correctLineupPoint = new THREE.Vector3();
		this.distancePoint.getWorldPosition(correctLineupPoint);

		const aircraftPosition = new THREE.Vector3(this.landingAircraft.position.x, this.landingAircraft.position.y, this.landingAircraft.position.z);

		this.landingAircraftPlane.position.copy(correctLineupPoint);
		this.landingAircraftPlane.rotation.set(this.landingTarget.rotation.x, this.landingTarget.rotation.y, this.landingTarget.rotation.z);

		const plane = this.landingAircraftPlane.getWorldDirection(new THREE.Vector3()).normalize();
		const projectedAircraftPoint = aircraftPosition.clone().projectOnPlane(plane);
		const projectedIntendedPoint = correctLineupPoint.clone().projectOnPlane(plane);
		const delta = projectedAircraftPoint.sub(projectedIntendedPoint);

		this.offsetXChild.position.set(delta.x * 10, 0, 0);
		this.offsetYChild.position.set(0, delta.y, 0);

		const offsetXRealPoint = new THREE.Vector3();
		const offsetYRealPoint = new THREE.Vector3();
		this.offsetXChild.getWorldPosition(offsetXRealPoint);
		this.offsetYChild.getWorldPosition(offsetYRealPoint);

		this.offsetXMesh.geometry.setFromPoints([correctLineupPoint, offsetXRealPoint]);
		this.offsetXMesh.computeLineDistances();
		this.offsetXMesh.frustumCulled = false;

		this.offsetYMesh.geometry.setFromPoints([correctLineupPoint, offsetYRealPoint]);
		this.offsetXMesh.computeLineDistances();
		this.offsetYMesh.frustumCulled = false;
	}

	public enableLSO(entity: AIGroundUnit) {
		// Tell the entities to go to LSO mode
		this.landingTarget = entity;
		entity.isLsoTarget = true;

		// Position camera and look vector
		// Assign the LSO camera positions
		const lsoPosOffset = new THREE.Vector3(30, 27, -110);
		const lookPosOffset = lsoPosOffset.clone().add(new THREE.Vector3(-2, 3, -10));
		const lsoPosMarker = new THREE.Object3D();
		const lsoLookMarker = new THREE.Object3D();
		// markObj(lsoPosMarker, 5, 0x00ff00);
		// markObj(lsoLookMarker, 2, 0xff0000);
		entity.mesh.add(lsoLookMarker, lsoPosMarker);
		this.childrenOfEntity.push(lsoLookMarker, lsoPosMarker);
		lsoPosMarker.position.copy(lsoPosOffset);
		lsoLookMarker.position.copy(lookPosOffset);

		const lsoWorldPos = new THREE.Vector3();
		const lsoWorldLook = new THREE.Vector3();
		lsoPosMarker.getWorldPosition(lsoWorldPos);
		lsoLookMarker.getWorldPosition(lsoWorldLook);
		// markPoint(lsoWorldPos, 15, 0x00ff00);
		// markPoint(lsoWorldLook, 15, 0x00ff00);

		const camController = this.app.sceneManager.cameraController;

		// Configure LSO camera
		this.app.setFocusImmediately(entity);
		camController.camera.near = 0.1;
		camController.camera.updateProjectionMatrix();
		// The camera will currently be parented to the carrier, but the non-rotating transform
		// so we use the global pos to get the rotation calc from above, but subtract off the carrier pos to get local offset
		camController.fakeCamera.position.copy(lsoWorldPos.sub(entity.position.to(THREE.Vector3)));
		camController.orbit.target.copy(lsoWorldLook.sub(entity.position.to(THREE.Vector3)));

		// Don't enable LSO mode until camera focus is already set
		this.app.isLsoMode = true;

		const landingPointMarker = mark(2, 0x0000ff);
		landingPointMarker.rotation.set(rad(3.5), rad(10.1), 0);
		landingPointMarker.position.set(5, 27, -110);
		entity.mesh.add(landingPointMarker);
		this.childrenOfEntity.push(landingPointMarker);

		this.landingPoint = landingPointMarker;

		const landingLine = new THREE.Line(
			new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, -50000)]),
			new THREE.LineBasicMaterial({ color: 0x0000ff })
		);
		landingPointMarker.add(landingLine);

		// const distancePoint = mark(2, 0xff0000);
		const distancePoint = new THREE.Object3D();
		this.distancePoint = distancePoint;
		landingPointMarker.add(distancePoint);

		const plane = new THREE.Mesh(
			new THREE.PlaneGeometry(1000, 1000, 10, 10),
			new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide, transparent: true, wireframe: true })
		);
		plane.name = "lso-plane";
		// this.app.sceneManager.add(plane);
		this.landingAircraftPlane = plane;

		this.offsetXMesh = new THREE.Line(
			new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0)]),
			new THREE.LineBasicMaterial({ color: 0xff0000 })
		);

		this.offsetYMesh = new THREE.Line(
			new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0)]),
			new THREE.LineBasicMaterial({ color: 0x00ff00 })
		);
		this.offsetXMesh.name = "lso-offset-x";
		this.offsetYMesh.name = "lso-offset-y";

		this.offsetXChild = new THREE.Object3D();
		this.offsetYChild = new THREE.Object3D();
		this.distancePoint.add(this.offsetXChild, this.offsetYChild);
		this.app.sceneManager.add(this.offsetXMesh, this.offsetYMesh);
		this.childrenOfScene.push(this.offsetXMesh, this.offsetYMesh);
	}

	public disableLSO() {
		console.log("Disabling LSO");
		const camController = this.app.sceneManager.cameraController;
		camController.camera.near = CAM_NEAR;
		camController.camera.updateProjectionMatrix();

		if (this.landingAircraft) this.landingAircraft.isLandingLso = false;
		if (this.landingTarget) this.landingTarget.isLsoTarget = false;

		this.childrenOfEntity.forEach(child => {
			this.landingTarget.mesh.remove(child);
		});

		this.childrenOfScene.forEach(child => {
			this.app.sceneManager.remove(child);
		});
	}

	public trackAircraft(entity: PlayerVehicle) {
		this.landingAircraft = entity;
		this.landingAircraft.isLandingLso = true;
	}
}

export { LSOManager };
