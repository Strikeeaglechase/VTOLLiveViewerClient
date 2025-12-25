import { Application } from "../app.js";

interface IDisposable {
	onScale(scale: number);
	dispose(): void;
}

class ManagedObject implements IDisposable {
	constructor(public obj: THREE.Object3D) {
		if (!obj.name) obj.name = "managedObject";
		Application.instance.sceneManager.add(obj);
	}

	public onScale(scale: number) {
		this.obj.scale.set(scale, scale, scale);
	}

	public dispose() {
		Application.instance.sceneManager.remove(this.obj);
	}
}

export { IDisposable, ManagedObject };
