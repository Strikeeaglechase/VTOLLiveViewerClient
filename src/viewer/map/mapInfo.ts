export enum Biome {
	normal
}
export const METERS_PER_PIXEL = 153.6;

export function getMapColorAtHeight(height: number, biome: Biome): [number, number, number] {
	if (biome == Biome.normal) {
		return getColorAtHeightNormal(height);
	}
	return [0, 0, 0];
}

// Thanks to Ierdna100 for these values
function getColorAtHeightNormal(height: number): [number, number, number] {
	if (height < 0) {
		return [0.0 * 255, 0.1 * 255, 0.8 * 255];
	} else if (height < 20) {
		return [196, 193, 16];
	} else if (height < 40) {
		return [153, 171, 14];
	} else if (height < 1200) {
		return [0.4 * 255, 0.8 * 255, 0.4 * 255];
	} else {
		return [209, 220, 230];
	}
}
