import { Vector } from "../../../../VTOLLiveViewerCommon/dist/vector.js";

interface RadarReturn {
	normal: Vector;
	returnValue: number;
}

interface UnitDef {
	name: UnitName;
	path: string;
	radarReturns: RadarReturn[];
	radarReturnSize: number;
	overrideMult?: number;
}

function VectorYZ(x: number, y: number, z: number) {
	return new Vector(x, y, z);
}

const fa26b: UnitDef = {
	name: "F/A-26b",
	path: "Vehicles/FA-26B",
	radarReturns: [
		{ normal: VectorYZ(0, 0, -1), returnValue: 0.003004007 },
		{ normal: VectorYZ(-0.7071068, 0, -0.7071067), returnValue: 0.02010358 },
		{ normal: VectorYZ(-0.9999999, 0, -5.960464e-8), returnValue: 0.03961299 },
		{ normal: VectorYZ(-0.7071068, 0, 0.7071067), returnValue: 0.01049242 },
		{ normal: VectorYZ(8.742278e-8, 0, 1), returnValue: 0.001444136 },
		{ normal: VectorYZ(0.7071069, 0, 0.7071067), returnValue: 0.01036091 },
		{ normal: VectorYZ(0.9999999, 0, -5.960464e-8), returnValue: 0.03931267 },
		{ normal: VectorYZ(0.7071066, 0, -0.707107), returnValue: 0.02006913 },
		{ normal: VectorYZ(0, 0.7071069, -0.7071068), returnValue: 0.09480216 },
		{ normal: VectorYZ(0, 1, 1.47514e-7), returnValue: 0.2363713 },
		{ normal: VectorYZ(0, 0.7071068, 0.7071068), returnValue: 0.04430033 },
		{ normal: VectorYZ(0, -0.7071069, 0.7071067), returnValue: 0.03837302 },
		{ normal: VectorYZ(0, -1, -1.896608e-7), returnValue: 0.2359496 },
		{ normal: VectorYZ(0, -0.7071067, -0.7071068), returnValue: 0.07296312 },
		{ normal: VectorYZ(-0.7071068, -0.7071069, 0), returnValue: 0.08872227 },
		{ normal: VectorYZ(0.7071068, -0.7071068, 0), returnValue: 0.09132164 },
		{ normal: VectorYZ(0.7071067, 0.7071069, 0), returnValue: 0.1109206 },
		{ normal: VectorYZ(-0.707107, 0.7071066, 0), returnValue: 0.1084854 }
	],
	radarReturnSize: 10.42487
};

const f45: UnitDef = {
	name: "F-45",
	path: "Vehicles/SEVTF",
	radarReturns: [
		{ normal: VectorYZ(0, 0, -1), returnValue: 0.002946681 },
		{ normal: VectorYZ(-0.7071068, 0, -0.7071067), returnValue: 0.01814487 },
		{ normal: VectorYZ(-0.9999999, 0, -5.960464e-8), returnValue: 0.03047412 },
		{ normal: VectorYZ(-0.7071068, 0, 0.7071067), returnValue: 0.01329811 },
		{ normal: VectorYZ(8.742278e-8, 0, 1), returnValue: 0.0004763133 },
		{ normal: VectorYZ(0.7071069, 0, 0.7071067), returnValue: 0.01322385 },
		{ normal: VectorYZ(0.9999999, 0, -5.960464e-8), returnValue: 0.0302301 },
		{ normal: VectorYZ(0.7071066, 0, -0.707107), returnValue: 0.01809532 },
		{ normal: VectorYZ(0, 0.7071069, -0.7071068), returnValue: 0.0683964 },
		{ normal: VectorYZ(0, 1, 1.47514e-7), returnValue: 0.1969544 },
		{ normal: VectorYZ(0, 0.7071068, 0.7071068), returnValue: 0.03913464 },
		{ normal: VectorYZ(0, -0.7071069, 0.7071067), returnValue: 0.02834333 },
		{ normal: VectorYZ(0, -1, -1.896608e-7), returnValue: 0.1823632 },
		{ normal: VectorYZ(0, -0.7071067, -0.7071068), returnValue: 0.06614517 },
		{ normal: VectorYZ(-0.7071068, -0.7071069, 0), returnValue: 0.08841226 },
		{ normal: VectorYZ(0.7071068, -0.7071068, 0), returnValue: 0.08842924 },
		{ normal: VectorYZ(0.7071067, 0.7071069, 0), returnValue: 0.1053344 },
		{ normal: VectorYZ(-0.707107, 0.7071066, 0), returnValue: 0.1050361 }
	],
	radarReturnSize: 7.381652,
	overrideMult: 0.5
};

const av42c: UnitDef = {
	name: "AV-42c",
	path: "Vehicles/VTOL4",
	radarReturns: [
		{ normal: VectorYZ(0, 0, -1), returnValue: 0.01544072 },
		{ normal: VectorYZ(-0.7071068, 0, -0.7071067), returnValue: 0.03612526 },
		{ normal: VectorYZ(-0.9999999, 0, -5.960464e-8), returnValue: 0.06578336 },
		{ normal: VectorYZ(-0.7071068, 0, 0.7071067), returnValue: 0.03200301 },
		{ normal: VectorYZ(8.742278e-8, 0, 1), returnValue: 0.01778214 },
		{ normal: VectorYZ(0.7071069, 0, 0.7071067), returnValue: 0.03244918 },
		{ normal: VectorYZ(0.9999999, 0, -5.960464e-8), returnValue: 0.06668419 },
		{ normal: VectorYZ(0.7071066, 0, -0.707107), returnValue: 0.03575701 },
		{ normal: VectorYZ(0, 0.7071069, -0.7071068), returnValue: 0.02761351 },
		{ normal: VectorYZ(0, 1, 1.47514e-7), returnValue: 0.1386332 },
		{ normal: VectorYZ(0, 0.7071068, 0.7071068), returnValue: 0.0609769 },
		{ normal: VectorYZ(0, -0.7071069, 0.7071067), returnValue: 0.04199287 },
		{ normal: VectorYZ(0, -1, -1.896608e-7), returnValue: 0.1293173 },
		{ normal: VectorYZ(0, -0.7071067, -0.7071068), returnValue: 0.06574369 },
		{ normal: VectorYZ(-0.7071068, -0.7071069, 0), returnValue: 0.06143576 },
		{ normal: VectorYZ(0.7071068, -0.7071068, 0), returnValue: 0.06017914 },
		{ normal: VectorYZ(0.7071067, 0.7071069, 0), returnValue: 0.06351941 },
		{ normal: VectorYZ(-0.707107, 0.7071066, 0), returnValue: 0.06294513 }
	],
	radarReturnSize: 8.004103
};

const kc49: UnitDef = {
	name: "KC-49",
	path: "Units/Allied/KC-49",
	radarReturns: [
		{ normal: VectorYZ(0, 0, -1), returnValue: 0.003903917 },
		{ normal: VectorYZ(-0.7071068, 0, -0.7071067), returnValue: 0.02012179 },
		{ normal: VectorYZ(-0.9999999, 0, -5.960464e-8), returnValue: 0.05364824 },
		{ normal: VectorYZ(-0.7071068, 0, 0.7071067), returnValue: 0.01705782 },
		{ normal: VectorYZ(8.742278e-8, 0, 1), returnValue: 0.003243463 },
		{ normal: VectorYZ(0.7071069, 0, 0.7071067), returnValue: 0.01706961 },
		{ normal: VectorYZ(0.9999999, 0, -5.960464e-8), returnValue: 0.05372529 },
		{ normal: VectorYZ(0.7071066, 0, -0.707107), returnValue: 0.02006058 },
		{ normal: VectorYZ(0, 0.7071069, -0.7071068), returnValue: 0.05683476 },
		{ normal: VectorYZ(0, 1, 1.47514e-7), returnValue: 0.1549265 },
		{ normal: VectorYZ(0, 0.7071068, 0.7071068), returnValue: 0.03704315 },
		{ normal: VectorYZ(0, -0.7071069, 0.7071067), returnValue: 0.030475 },
		{ normal: VectorYZ(0, -1, -1.896608e-7), returnValue: 0.1334657 },
		{ normal: VectorYZ(0, -0.7071067, -0.7071068), returnValue: 0.03211047 },
		{ normal: VectorYZ(-0.7071068, -0.7071069, 0), returnValue: 0.06586169 },
		{ normal: VectorYZ(0.7071068, -0.7071068, 0), returnValue: 0.06587703 },
		{ normal: VectorYZ(0.7071067, 0.7071069, 0), returnValue: 0.0716516 },
		{ normal: VectorYZ(-0.707107, 0.7071066, 0), returnValue: 0.07160092 }
	],
	radarReturnSize: 40.36108
};

const e4: UnitDef = {
	name: "E-4",
	path: "Units/Allied/E-4",
	radarReturns: [
		{ normal: new Vector(0, 0, -1), returnValue: 0.004927175 },
		{ normal: new Vector(-0.7071068, 0, -0.7071067), returnValue: 0.02326542 },
		{ normal: new Vector(-0.9999999, 0, -5.960464e-8), returnValue: 0.05776825 },
		{ normal: new Vector(-0.7071068, 0, 0.7071067), returnValue: 0.01916732 },
		{ normal: new Vector(8.742278e-8, 0, 1), returnValue: 0.004481045 },
		{ normal: new Vector(0.7071069, 0, 0.7071067), returnValue: 0.01917326 },
		{ normal: new Vector(0.9999999, 0, -5.960464e-8), returnValue: 0.05783843 },
		{ normal: new Vector(0.7071066, 0, -0.707107), returnValue: 0.0232193 },
		{ normal: new Vector(0, 0.7071069, -0.7071068), returnValue: 0.06018333 },
		{ normal: new Vector(0, 1, 1.47514e-7), returnValue: 0.1734357 },
		{ normal: new Vector(0, 0.7071068, 0.7071068), returnValue: 0.04185351 },
		{ normal: new Vector(0, -0.7071069, 0.7071067), returnValue: 0.03005207 },
		{ normal: new Vector(0, -1, -1.896608e-7), returnValue: 0.1449264 },
		{ normal: new Vector(0, -0.7071067, -0.7071068), returnValue: 0.03773585 },
		{ normal: new Vector(-0.7071068, -0.7071069, 0), returnValue: 0.07449895 },
		{ normal: new Vector(0.7071068, -0.7071068, 0), returnValue: 0.07449053 },
		{ normal: new Vector(0.7071067, 0.7071069, 0), returnValue: 0.07736434 },
		{ normal: new Vector(-0.707107, 0.7071066, 0), returnValue: 0.07731058 }
	],
	radarReturnSize: 39.80648
};

const unitRCSs: UnitDef[] = [fa26b, f45, av42c, kc49, e4];
type UnitName = "F/A-26b" | "F-45" | "AV-42c" | "KC-49" | "E-4";
export { UnitDef, UnitName, unitRCSs, RadarReturn };
