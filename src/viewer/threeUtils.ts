import * as THREE from "three";

import { IVector3 } from "../../../VTOLLiveViewerCommon/src/vector.js";
import { Application } from "./app";

function mark(size: number, color: number) {
	const markerGeom = new THREE.SphereGeometry(size, 8, 8);
	const markerMat = new THREE.MeshBasicMaterial({ color: color, wireframe: true, side: THREE.DoubleSide });
	const markerMesh = new THREE.Mesh(markerGeom, markerMat);
	markerMesh.name = "lso-marker";

	return markerMesh;
}

function markObj(obj: THREE.Object3D, size: number, color: number) {
	const markerGeom = new THREE.SphereGeometry(size, 8, 8);
	const markerMat = new THREE.MeshBasicMaterial({ color: color, wireframe: true, side: THREE.DoubleSide });
	const markerMesh = new THREE.Mesh(markerGeom, markerMat);
	markerMesh.name = "lso-marker";
	Application.instance.sceneManager.add(markerMesh);
	const posVec = new THREE.Vector3();
	setInterval(() => {
		obj.getWorldPosition(posVec);
		markerMesh.position.copy(posVec);
		// markerMesh.rotation.copy(obj.rotation);
	});
	return markerMesh;
}

function markPoint(point: IVector3, size: number, color: number) {
	const markerGeom = new THREE.SphereGeometry(size, 8, 8);
	const markerMat = new THREE.MeshBasicMaterial({ color: color, wireframe: true, side: THREE.DoubleSide });
	const markerMesh = new THREE.Mesh(markerGeom, markerMat);
	markerMesh.name = "lso-marker";
	markerMesh.position.set(point.x, point.y, point.z);
	Application.instance.sceneManager.add(markerMesh);
}

export { mark, markObj, markPoint };
