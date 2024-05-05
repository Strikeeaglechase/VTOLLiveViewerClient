import { Vector } from "../../../../VTOLLiveViewerCommon/dist/vector.js";

interface EntityMeshConfig {
	key: string[];
	path?: string;
	rotation?: Vector;
	position?: Vector;
	scaleDamper?: number;
	loadScale?: number;
	color?: string;
	engineOffsets?: Vector[];
}

export const entityMeshs: EntityMeshConfig[] = [
	{
		key: ["Vehicles/FA-26B", "F/A-26B"],
		path: "./assets/objects/output/vtolvr_FA-26.gltf",
		position: new Vector(0, 0, -1.5),
		rotation: new Vector(0, Math.PI, 0),
		color: "#747474",
		engineOffsets: [new Vector(-1, 0, -5), new Vector(1, 0, -5)]
	},
	{
		key: ["Vehicles/SEVTF", "F-45A"],
		path: "./assets/objects/output/vtolvr_F-45A.gltf",
		position: new Vector(0, 0, -3.5),
		engineOffsets: [new Vector(0, 0, -5)]
	},
	{
		key: ["Vehicles/VTOL4", "AV-42C"],
		path: "./assets/objects/output/vtolvr_AV-42CAI.gltf",
		position: new Vector(0, 0, -0.5),
		loadScale: 0.5,
		engineOffsets: [new Vector(-5, 0, 0), new Vector(5, 0, 0)]
	},
	{
		key: ["Vehicles/T-55", "T-55"],
		path: "./assets/objects/t55.obj",
		position: new Vector(0, 0, 0),
		rotation: new Vector(Math.PI / 2, Math.PI, 0),
		loadScale: 0.019
	},
	{
		key: ["Units/Allied/AlliedCarrier"],
		path: "./assets/objects/output/vtolvr_AlliedCarrier.gltf",
		scaleDamper: 0.1,
		color: "#404040",
		rotation: new Vector(0, 0, 0)
	},
	{
		key: ["Units/Allied/AlliedAAShip"],
		path: "./assets/objects/output/vtolvr_AlliedAAShip.gltf",
		scaleDamper: 0.1,
		color: "#404040",
		rotation: new Vector(0, 0, 0)
	},
	{
		key: ["Units/Allied/EscortCruiser"],
		path: "./assets/objects/output/vtolvr_EscortCruiser.gltf",
		scaleDamper: 0.1,
		rotation: new Vector(0, 0, 0)
	},
	{
		key: ["Units/Allied/PatriotLauncher"],
		path: "./assets/objects/patriot_Launcher.obj",
		rotation: new Vector(0, Math.PI / 2, 0),
		position: new Vector(0, 0, -2),
		loadScale: 1.5
	},
	{
		key: ["Units/Allied/BSTOPRadar"],
		path: "./assets/objects/BSTOP_RADAR.obj",
		loadScale: 0.004
	},
	{
		key: ["Units/Allied/AlliedBackstopSAM"],
		path: "./assets/objects/BSTOP_LAUNCHER.obj",
		loadScale: 0.004
	},
	{
		key: ["Vehicles/F117"],
		path: "./assets/objects/F117_LOD1.obj",
		rotation: new Vector(0, 0, 0),
		position: new Vector(0, 0, -3),
		loadScale: 0.4
	},
	{
		key: ["NuclearOption/COIN"],
		loadScale: 0.01,
		rotation: new Vector(0, 0, 0)
	}
];
