import { Application, ApplicationRunningState } from "../viewer/app.js";

abstract class Page {
	public abstract containerId: string;
	public abstract appState: ApplicationRunningState[];
	public isActive = false;

	constructor(public app: Application) {}

	public onShow() {
		const container = document.getElementById(this.containerId);
		container.style.display = "block";
	}

	public onHide() {
		const container = document.getElementById(this.containerId);
		container.style.display = "none";
	}

	public update() {}
}

export { Page };
