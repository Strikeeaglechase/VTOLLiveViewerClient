import { Team, Vector3 } from "../../../../VTOLLiveViewerCommon/dist/shared.js";

export interface Kinematics {
	position: Vector3;
	rotation: { x: number; y: number; z: number; w: number };
	velocity: Vector3;
	angularVelocity: Vector3;
}

export interface RadarTarget {
	position: Vector3;
	velocity: Vector3;
	team: Team;
	id: number;
}

export interface MinimalRadarTarget {
	id: number;
	team: Team;
	detectedTime: number;
}

export interface RadarState {
	angle: number;
	elevationAdjust: number;
	azimuthAdjust: number;
	fov: number;

	twsedTargets: RadarTarget[];
	sttedTarget: RadarTarget;
	detectedTargets: MinimalRadarTarget[];
}

export interface RWRContact {
	detectedTime: number;
	signalStrength: number;
	actorId: number;
	isLock: boolean;
	bearing: number;
	team: Team;
	isMissile: boolean;
}

export enum VisualTargetType {
	Aircraft,
	Missile
}

export interface VisuallySpottedTarget {
	type: VisualTargetType;
	direction: Vector3;
	id: number;
	team: Team;
}

export interface IRSeekerState {
	seekerFov: number;
	heat: number;
	lookDir: Vector3;
}

export interface State {
	kinematics: Kinematics;
	radar: RadarState;
	rwrContacts: RWRContact[];
	visualTargets: VisuallySpottedTarget[];
	ir: IRSeekerState;

	weapons: string[];
	flareCount: number;
	chaffCount: number;

	time: number;
}
