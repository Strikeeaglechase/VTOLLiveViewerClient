import * as THREE from "three";

import { IVector3, Vector } from "../../../VTOLLiveViewerCommon/dist/vector";
import { Application } from "./app";
import { CSS2DObject } from "./CSS2DRenderer";
import { SceneEvent } from "./managers/sceneManager";

// Check if two HTML Elements are overlapping
function elmOverlap(domRect1: DOMRect, domRect2: DOMRect) {
	return !(domRect1.top > domRect2.bottom || domRect1.right < domRect2.left || domRect1.bottom < domRect2.top || domRect1.left > domRect2.right);
}

const enable_debug_border = false;
const use_bounding_box = false;

function hashCode(str: string) {
	let hash = 0,
		i,
		chr;
	if (str.length === 0) return hash;
	for (i = 0; i < str.length; i++) {
		chr = str.charCodeAt(i);
		hash = (hash << 5) - hash + chr;
		hash |= 0; // Convert to 32bit integer
	}
	return hash;
}

// Text 2D overlay for 3D objects
class TextOverlay {
	private outerElm: HTMLDivElement;
	public elm: HTMLDivElement;
	private textElm: HTMLParagraphElement;
	public cssObj: CSS2DObject;
	private isVisible = false;
	public isHovered = false;

	public text = "";
	private needsTextUpdate = false;

	private posOffset: IVector3 = new Vector(0, 0, 0);
	private prevPos: Vector = new Vector(0, 0, 0);
	private nextPos: Vector = new Vector(0, 0, 0);
	private lastTimeGotPosUpdate = 0;
	private lastTimeCheckedPosUpdate = 0;
	private positionSource: IVector3 | null = null;

	debugBoxHelper: THREE.BoxHelper;

	public subOverlays: TextOverlay[] = [];
	private isOverlapping = false;
	private overlappedWith: TextOverlay | null = null;
	private parentedWith: TextOverlay | null = null;

	public boundingRect: DOMRect;

	public onDblClick: ((e: MouseEvent) => void) | null = null;

	public set color(value: string) {
		if (this.textElm?.style) this.textElm.style.color = value;
	}

	// combineId controls what elements can be parented to each other
	private _combineId = -1;
	set combineId(id: string | number | null) {
		if (typeof id == "string") this._combineId = hashCode(id);
		else this._combineId = id ?? -1;
	}
	get combineId() {
		return this._combineId;
	}

	constructor(private object: THREE.Object3D, combineId: string | null = null) {
		this.outerElm = document.createElement("div");
		this.elm = document.createElement("div");
		this.elm.className = "overlay-text";
		if (enable_debug_border) this.elm.classList.add("debug-overlay-text");
		this.setVisible(true);

		this.textElm = document.createElement("p");
		this.textElm.style.margin = "0px";
		this.textElm.style.textAlign = "left";
		this.outerElm.appendChild(this.elm);
		this.elm.appendChild(this.textElm);

		this.cssObj = new CSS2DObject(this.outerElm);
		this.cssObj.name = "Overlay element";

		this.object.addEventListener(SceneEvent.remove, () => {
			Application.instance.sceneManager.removeOverlay(this, this.cssObj);
		});

		Application.instance.sceneManager.registerOverlay(this, this.cssObj);

		this.elm.addEventListener("mouseenter", () => (this.isHovered = true));
		this.elm.addEventListener("mouseleave", () => (this.isHovered = false));

		this.combineId = combineId ?? -1;

		// this.debugBoxHelper = new THREE.BoxHelper(this.object, 0x00ffff);
		// this.debugBoxHelper.name = `Debug Box Helper`;
		// Application.instance.sceneManager.add(this.debugBoxHelper);
	}

	public edit(text: string): this {
		if (text == this.text) return this;
		this.text = text;
		this.needsTextUpdate = true;

		return this;
	}

	public offset(x: number, y: number, z: number): this;
	public offset(offset: IVector3): this;
	public offset(param0: IVector3 | number, param1?: number, param2?: number): this {
		const offset = typeof param0 == "object" ? param0 : new Vector(param0, param1, param2);
		this.posOffset = offset;
		return this;
	}

	public hide() {
		this.setVisible(false);
		return this;
	}

	public show() {
		this.setVisible(true);
		return this;
	}

	public setVisible(visible: boolean) {
		const elm = this.elm.children[0] as HTMLElement;
		if (elm) elm.style.visibility = visible ? "inherit" : "hidden";

		this.isVisible = visible;
	}

	public setPosSource(source: IVector3 | null) {
		this.positionSource = source;
		return this;
	}

	public updateBoundingRect() {
		this.boundingRect = this.elm.getBoundingClientRect();
	}

	public update(overlays: TextOverlay[]) {
		if (Application.deltaTime(this.lastTimeGotPosUpdate) > 1000) {
			// No pos update in one second, start doing low-rate checks
			const timeFromLastCheck = Application.deltaTime(this.lastTimeCheckedPosUpdate);
			if (timeFromLastCheck > 5000) {
				this.updatePosition();
			}
		} else {
			this.updatePosition();
		}

		if (Application.instance.isTextOverlayHidden) {
			if (!this.elm.classList.contains("hide")) this.elm.classList.add("hide");
		} else {
			if (this.elm.classList.contains("hide")) this.elm.classList.remove("hide");
		}

		this.updateBoundingRect();
		const mx = Application.instance.mouseX;
		const my = Application.instance.mouseY;
		if (this.isInBounds(mx, my)) {
			this.isHovered = true;
		} else {
			this.isHovered = false;
		}

		// const d = Date.now();
		// if (d - this.lastUpdateTime < 100) return;
		// this.lastUpdateTime = d;

		return;
		if (this.combineId == -1) return;

		if (this.isOverlapping) {
			this.checkNeedsUnapparent();
		} else {
			// Try to find a parent
			overlays.forEach(overlay => {
				if (this.canParentTo(overlay)) this.parent(overlay);
			});
		}
	}

	public runBatchedUpdate() {
		if (!this.nextPos.equals(this.prevPos)) {
			this.prevPos = this.nextPos;

			this.cssObj.position.set(this.nextPos.x, this.nextPos.y, this.nextPos.z);
			this.cssObj.updateWorldMatrix(true, true);
			this.lastTimeGotPosUpdate = Date.now();
		}

		if (this.needsTextUpdate) {
			this.textElm.innerText = this.text;
			this.elm.style.bottom = this.text.split("\n").length * 10 + "px";
			this.needsTextUpdate = false;
		}
	}

	public isInBounds(x: number, y: number) {
		if (!this.boundingRect) return false;
		return x > this.boundingRect.left && x < this.boundingRect.right && y > this.boundingRect.top && y < this.boundingRect.bottom;
	}

	private canParentTo(overlay: TextOverlay) {
		if (this.isOverlapping) return false;
		if (overlay == this) return false;
		if (overlay.combineId != this.combineId) return false;
		if (overlay.isVisible == false) return false;

		if (overlay.parentedWith && overlay.parentedWith.subOverlays.includes(this)) return false;
		if (this.subOverlays.includes(overlay)) return false;
		if (!elmOverlap(overlay.boundingRect, this.boundingRect)) return false;

		return true;
	}

	private checkNeedsUnapparent() {
		if (this.overlappedWith && !elmOverlap(this.overlappedWith.boundingRect, this.boundingRect)) {
			this.unParent();
		}
	}

	private parent(overlapped: TextOverlay) {
		// console.log(`${this.text} parenting to ${overlapped.text}`);
		let parent = overlapped;
		function findParent() {
			if (!parent.overlappedWith) return;
			parent = parent.overlappedWith;
			findParent();
		}
		findParent();

		parent.subOverlays.push(this);
		this.overlappedWith = overlapped;
		this.parentedWith = parent;
		this.isOverlapping = true;

		this.subOverlays.forEach(sub => {
			sub.parentedWith = parent;
			parent.subOverlays.push(sub);
		});
		this.subOverlays = [];
		this.hide();
	}

	private unParent() {
		if (this.parentedWith) this.parentedWith.subOverlays = this.parentedWith.subOverlays.filter(overlay => overlay != this);
		this.overlappedWith = null;
		this.parentedWith = null;
		this.isOverlapping = false;
		this.show();
	}

	private updatePosition() {
		this.lastTimeCheckedPosUpdate = Date.now();

		let pos = new Vector();
		if (use_bounding_box) {
			const box = new THREE.Box3().setFromObject(this.object);
			pos = pos.set((box.min.x + box.max.x) / 2 + this.posOffset.x, box.max.y + this.posOffset.y, (box.min.z + box.max.z) / 2 + this.posOffset.z);
		} else {
			let posSource: IVector3;
			if (this.positionSource) posSource = this.positionSource;
			else posSource = this.object.getWorldPosition(new THREE.Vector3());

			pos = pos.set(posSource.x + this.posOffset.x, posSource.y + this.posOffset.y, posSource.z + this.posOffset.z);
		}

		this.nextPos = pos;
	}
}

export { TextOverlay };
