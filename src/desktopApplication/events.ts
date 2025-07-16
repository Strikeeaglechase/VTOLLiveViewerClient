import { Team } from "../../../VTOLLiveViewerCommon/dist/shared.js";

export enum EventType {
	EntityInit,
	EntityDelete,
	Chaff,
	Flare,
	Win,
	DebugLine,
	DebugSphere,
	RemoveDebugShape
}

export interface BaseEvent {
	type: EventType;
}

export interface EntityInitData extends BaseEvent {
	type: EventType.EntityInit;
	entityId: number;
	path: string;
	name: string;
}

export interface EntityDeleteData extends BaseEvent {
	type: EventType.EntityDelete;
	entityId: number;
}

export interface FlareEvent extends BaseEvent {
	type: EventType.Flare;
	entityId: number;
}

export interface ChaffEvent extends BaseEvent {
	type: EventType.Chaff;
	entityId: number;
}

export interface WinEvent extends BaseEvent {
	type: EventType.Win;
	team: Team;
}

export interface DebugLineEvent extends BaseEvent {
	type: EventType.DebugLine;
	start?: { x: number; y: number; z: number };
	end?: { x: number; y: number; z: number };
	color?: { r: number; g: number; b: number; a: number };
	id: number;
}

export interface DebugSphereEvent extends BaseEvent {
	type: EventType.DebugSphere;
	pos?: { x: number; y: number; z: number };
	size?: number;
	color?: { r: number; g: number; b: number; a: number };
	id: number;
}

export interface RemoveDebugShapeEvent extends BaseEvent {
	type: EventType.RemoveDebugShape;
	id: number;
}

export type EntityEvent = EntityInitData | EntityDeleteData | FlareEvent | ChaffEvent | WinEvent | DebugLineEvent | DebugSphereEvent | RemoveDebugShapeEvent;
