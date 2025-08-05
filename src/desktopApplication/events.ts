import { Team } from "../../../VTOLLiveViewerCommon/dist/shared.js";
import { Reader } from "./binaryRecording.js";

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

type IdEvent<T extends string, ET extends EventType> = { [key in T]: number } & { type: ET };
function idOnlyEvent<ET extends EventType, T extends string>(type: ET, idKey: T) {
	return (reader: Reader): IdEvent<T, ET> => {
		return {
			[idKey]: reader.readI32(),
			type
		} as IdEvent<T, ET>;
	};
}

export interface BaseEvent {
	type: EventType;
}

export interface EntityInitData extends BaseEvent {
	type: EventType.EntityInit;
	entityId: number;
	team: Team;
	path: string;
	name: string;
}

const entityInitDataFromBin = (reader: Reader): EntityInitData => {
	return {
		type: EventType.EntityInit,
		entityId: reader.readI32(),
		team: reader.readByte() as Team,
		path: reader.readStringByteLen(),
		name: reader.readStringByteLen()
	};
};

export interface EntityDeleteData extends BaseEvent {
	type: EventType.EntityDelete;
	entityId: number;
}
const entityDeleteDataFromBin = idOnlyEvent(EventType.EntityDelete, "entityId");

export interface FlareEvent extends BaseEvent {
	type: EventType.Flare;
	entityId: number;
}
const flareEventFromBin = idOnlyEvent(EventType.Flare, "entityId");

export interface ChaffEvent extends BaseEvent {
	type: EventType.Chaff;
	entityId: number;
}
const chaffEventFromBin = idOnlyEvent(EventType.Chaff, "entityId");

export interface WinEvent extends BaseEvent {
	type: EventType.Win;
	team: Team;
}

const winEventFromBin = (reader: Reader): WinEvent => {
	return {
		type: EventType.Win,
		team: reader.readByte() as Team
	};
};

export interface DebugLineEvent extends BaseEvent {
	type: EventType.DebugLine;
	start?: { x: number; y: number; z: number };
	end?: { x: number; y: number; z: number };
	color?: { r: number; g: number; b: number; a: number };
	id: number;
}

const debugLineEventFromBin = (reader: Reader): DebugLineEvent => {
	return {
		type: EventType.DebugLine,
		id: reader.readI32(),
		start: reader.readByte() > 0 ? { x: reader.readF32(), y: reader.readF32(), z: reader.readF32() } : undefined,
		end: reader.readByte() > 0 ? { x: reader.readF32(), y: reader.readF32(), z: reader.readF32() } : undefined,
		color: reader.readByte() > 0 ? { r: reader.readF32(), g: reader.readF32(), b: reader.readF32(), a: reader.readF32() } : undefined
	};
};

export interface DebugSphereEvent extends BaseEvent {
	type: EventType.DebugSphere;
	pos?: { x: number; y: number; z: number };
	size?: number;
	color?: { r: number; g: number; b: number; a: number };
	id: number;
}

const debugSphereEventFromBin = (reader: Reader): DebugSphereEvent => {
	return {
		type: EventType.DebugSphere,
		id: reader.readI32(),
		pos: reader.readByte() > 0 ? { x: reader.readF32(), y: reader.readF32(), z: reader.readF32() } : undefined,
		size: reader.readByte() > 0 ? reader.readF32() : undefined,
		color: reader.readByte() > 0 ? { r: reader.readF32(), g: reader.readF32(), b: reader.readF32(), a: reader.readF32() } : undefined
	};
};

export interface RemoveDebugShapeEvent extends BaseEvent {
	type: EventType.RemoveDebugShape;
	id: number;
}

const removeDebugShapeEventFromBin = idOnlyEvent(EventType.RemoveDebugShape, "id");

export type EntityEvent = EntityInitData | EntityDeleteData | FlareEvent | ChaffEvent | WinEvent | DebugLineEvent | DebugSphereEvent | RemoveDebugShapeEvent;

export const eventFromBinMap: { [key in EventType]: (reader: Reader) => EntityEvent & { type: key } } = {
	[EventType.EntityInit]: entityInitDataFromBin,
	[EventType.EntityDelete]: entityDeleteDataFromBin,
	[EventType.Flare]: flareEventFromBin,
	[EventType.Chaff]: chaffEventFromBin,
	[EventType.Win]: winEventFromBin,
	[EventType.DebugLine]: debugLineEventFromBin,
	[EventType.DebugSphere]: debugSphereEventFromBin,
	[EventType.RemoveDebugShape]: removeDebugShapeEventFromBin
};
