import { Vector2 } from "three";

export const textAlign = {
	center: new Vector2(0, 0),
	left: new Vector2(1, 0),
	top: new Vector2(0, -1),
	topLeft: new Vector2(1, -1),
	topRight: new Vector2(-1, -1),
	right: new Vector2(-1, 0),
	bottom: new Vector2(0, 1),
	bottomLeft: new Vector2(1, 1),
	bottomRight: new Vector2(-1, 1)
};

const fontHeightCache: { [id: string]: number } = {};

export function getFontHeight(fontStyle: string) {
	let result = fontHeightCache[fontStyle];

	if (!result) {
		const body = document.getElementsByTagName("body")[0];
		const dummy = document.createElement("div");

		const dummyText = document.createTextNode("MÉq");
		dummy.appendChild(dummyText);
		dummy.setAttribute("style", `font:${fontStyle};position:absolute;top:0;left:0`);
		body.appendChild(dummy);
		result = dummy.offsetHeight;

		fontHeightCache[fontStyle] = result;
		body.removeChild(dummy);
	}

	return result;
}
