import * as THREE from "three";
import { markRaw } from "vue";

import { IVector3 } from "../../../../VTOLLiveViewerCommon/src/vector.js";
import { Application } from "../app.js";
import { TextOverlay } from "../textOverlayHandler";

enum MarkerType {
	GPSPoint,
	Waypoint,
	Bullseye
}

const markerSpritePaths: Record<MarkerType, string> = {
	[MarkerType.GPSPoint]: "assets/sprites/gps.png",
	[MarkerType.Waypoint]: "assets/sprites/waypoint.png",
	[MarkerType.Bullseye]: "assets/sprites/bullseye.png"
};

const textPosOffset = 5;
const SPRITE_SCALE = 20;
const OVERALL_DISPLAY_OFFSET = 200;
class Marker {
	private static textureLoader = new THREE.TextureLoader();
	private static materials: Partial<Record<MarkerType, THREE.SpriteMaterial>> = {};

	private sprite: THREE.Sprite;
	// private text: SpriteText2D;
	private textOverlay: TextOverlay;
	constructor(private type: MarkerType, private name: string, private position: IVector3, private app: Application) {}

	public async init() {
		await this.loadSprite();
		this.loadText();

		this.sprite.position.set(this.position.x, this.position.y + OVERALL_DISPLAY_OFFSET, this.position.z);
		this.sprite.name = `Marker ${this.name} (${MarkerType[this.type]})`;
		this.app.sceneManager.add(this.sprite);

		this.app.on("unit_scale", (scale: number) => this.setScale(scale));
	}

	private setScale(scale: number) {
		this.sprite.scale.set(scale * SPRITE_SCALE, scale * SPRITE_SCALE, scale * SPRITE_SCALE);
		this.textOverlay.offset(0, textPosOffset * scale, 0);
	}

	private loadText() {
		// this.text = new SpriteText2D(this.name, { align: textAlign.center, font: "30px monospace", fillStyle: "#FFFFFF", antialias: true });
		this.textOverlay = new TextOverlay(this.sprite).edit(this.name).offset(0, textPosOffset, 0).show();
		markRaw(this.textOverlay);
	}

	private async loadSprite() {
		const mat = await this.getMaterial();
		this.sprite = new THREE.Sprite(mat);
		this.sprite.scale.set(SPRITE_SCALE, SPRITE_SCALE, SPRITE_SCALE);
	}

	private async getMaterial(): Promise<THREE.SpriteMaterial> {
		const existingMat = Marker.materials[this.type];
		if (existingMat) return existingMat;

		const texture = await new Promise<THREE.Texture>(res => Marker.textureLoader.load(markerSpritePaths[this.type], tex => res(tex)));
		const material = new THREE.SpriteMaterial({ map: texture });
		Marker.materials[this.type] = material;

		return material;
	}
}

export { Marker, MarkerType };
