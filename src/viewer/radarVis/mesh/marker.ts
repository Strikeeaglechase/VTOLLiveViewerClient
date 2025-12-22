import { IDisposable, ManagedObject, RadarVisualizer } from "../radarDataVisulizer.js";
import { LineDashInfo, ManagedLine } from "./line.js";

abstract class LinedMarker {
	public endMarker: ManagedObject;
	public line: ManagedLine;

	constructor(protected vis: RadarVisualizer, protected color: number, protected size: number, dashInfo?: LineDashInfo) {
		this.endMarker = this.createEndMarker();
		this.line = new ManagedLine(this.vis.app, color, dashInfo);

		this.endMarker.obj.visible = false;
		this.line.threeLine.visible = false;
	}

	protected abstract createEndMarker(): ManagedObject;

	public setVisible(visible: boolean) {
		this.endMarker.obj.visible = visible;
		this.line.threeLine.visible = visible;
	}

	public setPositions(start: THREE.Vector3, end: THREE.Vector3) {
		this.endMarker.obj.position.copy(end);
		this.line.setBetweenPoints(start, end);
	}

	public setColor(color: THREE.ColorRepresentation) {
		((this.endMarker.obj as THREE.Mesh).material as THREE.MeshBasicMaterial).color.set(color);
		this.line.material.color.set(color);
	}
}

abstract class DashedAndSolidLinedMarker implements IDisposable {
	public endMarkerSolid: ManagedObject;
	public endMarkerTransparent: ManagedObject;
	private solidMarkerVisible: boolean = true;
	private transparentMarkerVisible: boolean = false;

	public solidLine: ManagedLine;
	public dashedLine: ManagedLine;

	private visible: boolean = true;
	private solidLineEnabled: boolean = true;
	private dashedLineEnabled: boolean = false;

	constructor(protected vis: RadarVisualizer, protected color: number, protected size: number, dashInfo: LineDashInfo, protected vertCount: number = 2) {
		this.endMarkerSolid = this.createEndMarker(false);
		this.endMarkerTransparent = this.createEndMarker(true);
		this.solidLine = new ManagedLine(vis.app, color);
		this.dashedLine = new ManagedLine(vis.app, color, dashInfo);

		this.dashedLine.threeLine.visible = false;
		this.dashedLine.scaleEffected = false;
		this.solidLine.threeLine.visible = false;
		this.solidLine.scaleEffected = false;
	}

	protected abstract createEndMarker(wireframe: boolean): ManagedObject;

	public setVisible(visible: boolean) {
		this.visible = visible;

		this.endMarkerSolid.obj.visible = visible && this.solidMarkerVisible;
		this.endMarkerTransparent.obj.visible = visible && this.transparentMarkerVisible;

		this.dashedLine.threeLine.visible = visible && this.dashedLineEnabled;
		this.solidLine.threeLine.visible = visible && this.solidLineEnabled;
	}

	public setColor(color: THREE.ColorRepresentation) {
		((this.endMarkerSolid.obj as THREE.Mesh).material as THREE.MeshBasicMaterial).color.set(color);
		((this.endMarkerTransparent.obj as THREE.Mesh).material as THREE.MeshBasicMaterial).color.set(color);
		this.solidLine.material.color.set(color);
		this.dashedLine.material.color.set(color);
	}

	public setDashedLineEnabled(visible: boolean) {
		this.dashedLineEnabled = visible;
		this.dashedLine.threeLine.visible = this.visible && visible;
	}

	public setSolidLineEnabled(visible: boolean) {
		this.solidLineEnabled = visible;
		this.solidLine.threeLine.visible = this.visible && visible;
	}

	public setSolidMarkerVisible(visible: boolean) {
		this.solidMarkerVisible = visible;
		this.endMarkerSolid.obj.visible = this.visible && this.solidMarkerVisible;
	}

	public setTransparentMarkerVisible(visible: boolean) {
		this.transparentMarkerVisible = visible;
		this.endMarkerTransparent.obj.visible = this.visible && this.transparentMarkerVisible;
	}

	public setPositions(start: THREE.Vector3, end: THREE.Vector3) {
		this.endMarkerSolid.obj.position.copy(end);
		this.endMarkerTransparent.obj.position.copy(end);
		this.solidLine.setBetweenPoints(start, end);
		this.dashedLine.setBetweenPoints(start, end);
	}

	public onScale(scale: number) {
		this.endMarkerSolid.obj.scale.set(scale, scale, scale);
		this.endMarkerTransparent.obj.scale.set(scale, scale, scale);
		// this.solidLine.onScale(scale);
		// this.dashedLine.onScale(scale);
	}

	public dispose(): void {
		this.solidLine.dispose();
		this.dashedLine.dispose();
	}
}

class LinedBoxMarker extends LinedMarker {
	protected createEndMarker(): ManagedObject {
		return this.vis.genBoxMarker(this.color, true, this.size);
	}
}

class LinedSphereMarker extends LinedMarker {
	protected createEndMarker(): ManagedObject {
		return this.vis.genSphereMarker(this.color, true, this.size);
	}
}

const MARKER_OPACITY = 0.5;
class DashedAndSolidLinedBoxMarker extends DashedAndSolidLinedMarker {
	protected createEndMarker(wireframe: boolean): ManagedObject {
		return this.vis.genBoxMarker(this.color, wireframe, this.size, MARKER_OPACITY);
	}
}

class DashedAndSolidLinedSphereMarker extends DashedAndSolidLinedMarker {
	protected createEndMarker(wireframe: boolean): ManagedObject {
		return this.vis.genSphereMarker(this.color, wireframe, this.size, this.vertCount, MARKER_OPACITY);
	}
}

export { LinedMarker, LinedBoxMarker, LinedSphereMarker, DashedAndSolidLinedBoxMarker, DashedAndSolidLinedSphereMarker };
