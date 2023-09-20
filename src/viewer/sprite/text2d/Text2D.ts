import * as THREE from "three";

import { CanvasText } from "./CanvasText";
import { textAlign } from "./utils";

export interface TextOptions {
	font: string;
	fillStyle: string;
	align: THREE.Vector2;
	side: number;
	antialias: boolean;
	shadowColor: string;
	shadowBlur: number;
	shadowOffsetX: number;
	shadowOffsetY: number;
	lineHeight: number;
	backgroundColor: string;
	horizontalPadding: number;
	verticalPadding: number;
}

const defaultOptions: TextOptions = {
	font: "30px Arial",
	fillStyle: "#FFFFFF",
	align: textAlign.center,
	side: THREE.DoubleSide,
	antialias: true,
	shadowColor: "rgba(0, 0, 0, 0)",
	shadowBlur: 0,
	shadowOffsetX: 0,
	shadowOffsetY: 0,
	lineHeight: 1.2,
	backgroundColor: "transparent",
	horizontalPadding: 0,
	verticalPadding: 0
};

export abstract class Text2D extends THREE.Object3D {
	public side: number;
	public antialias: boolean;
	public texture: THREE.Texture;
	public material: THREE.MeshBasicMaterial | THREE.SpriteMaterial;

	protected _align: THREE.Vector2;
	protected _font: string;
	protected _fillStyle: string;
	protected _text: string;
	protected _shadowColor: string;
	protected _shadowBlur: number;
	protected _shadowOffsetX: number;
	protected _shadowOffsetY: number;
	protected _lineHeight: number;
	protected _backgroundColor: string;
	protected _horizontalPadding: number;
	protected _verticalPadding: number;

	protected canvas: CanvasText;

	constructor(text = "", opts: Partial<TextOptions> = {}) {
		super();
		const options = { ...defaultOptions, ...opts };

		this._align = new THREE.Vector2();
		this._font = options.font;
		this._fillStyle = options.fillStyle;

		this._shadowColor = options.shadowColor;
		this._shadowBlur = options.shadowBlur;
		this._shadowOffsetX = options.shadowOffsetX;
		this._shadowOffsetY = options.shadowOffsetY;
		this._lineHeight = options.lineHeight;

		this._backgroundColor = options.backgroundColor;
		this._horizontalPadding = options.horizontalPadding;
		this._verticalPadding = options.verticalPadding;

		this.canvas = new CanvasText();

		this.align = options.align;
		this.side = options.side;

		// this.anchor = Label.fontAlignAnchor[ this._textAlign ]
		this.antialias = typeof options.antialias === "undefined" ? true : options.antialias;
		this.text = text;
	}

	abstract raycast(): void;
	abstract updateText(): void;

	get width() {
		return this.canvas.textWidth;
	}
	get height() {
		return this.canvas.textHeight;
	}

	get text(): string {
		return this._text;
	}
	set text(value) {
		if (this._text !== value) {
			this._text = value;
			this.updateText();
		}
	}

	get font(): string {
		return this._font;
	}
	set font(value) {
		if (this._font !== value) {
			this._font = value;
			this.updateText();
		}
	}

	get fillStyle() {
		return this._fillStyle;
	}

	set fillStyle(value) {
		if (this._fillStyle !== value) {
			this._fillStyle = value;
			this.updateText();
		}
	}

	get align() {
		return this._align;
	}

	set align(value: THREE.Vector2) {
		this._align.copy(value);
	}

	cleanUp() {
		if (this.texture) {
			this.texture.dispose();
		}
	}

	applyAntiAlias() {
		if (this.antialias === false) {
			this.texture.magFilter = THREE.NearestFilter;
			this.texture.minFilter = THREE.LinearMipMapLinearFilter;
		}
	}
}
