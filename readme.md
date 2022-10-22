# VTGR File Format
A .vtgr file fundamentally is a .zip file that contains two files
- header.json
- data.bin

## header.json
```ts
{
	id: string;
	info: {
		lobbyId: string;
		lobbyName: string;
		missionName: string;
		missionId: string;
		campaignId: string;
		type: string;
		map: string;
		recordingId: string;
		duration: number;
		startTime: number;
	};
	chunks: {
		start: number;
		length: number;
	}[];
}
```

## data.bin
The data file contains the actual replay RPC data, it is split into 30 second chunks. The chunks are defined by the `chunks` property in the header file, each chunk is a compressed block of RPC calls

Each chunk should individually be fed into `decompress` to get the result RPCs

## RPCs
The HC messaging protocol is handled via Remote Procedure Calls (RPCs). Each RPC is a JSON object with the following properties
```ts
{
	className: string;
	method: string;
	args: any[];
	id?: string;
	timestamp?: number;
}
```
The class names and methods are documented below, some classes may have multiple names that all have identical RPC calls (specifically the player vehicles) which can be seen below as Alt Names. There are two types of RPC classes, "singleInstance" or "instance". Single instance RPCs do not contain an ID, it is assumed only a single instance of that class exists. Instance RPCs contain an ID, and multiple instances of that class can exist. The ID is used to identify which instance the RPC is for.

Note that `id` is only unique within the scope of a single class, HC uses the same id for `MessageHandler` as `VTOLLobby`

The general flow to setup a replay/game is as follows
1. `Application#CreateLobby` is called with an ID
2. A `VTOLLobby` instance and `MessageHandler` instance are created with the ID
3. `VTOLLobby#UpdateLobbyInfo` and `VTOLLobby#UpdateMissionInfo` are called to fill out the lobby info
4. `NetInstantiate` calls are made, which spawns the various entities which now can receive RPCs/data

## MessageHandler (instance)

### Alt Names: None
- [IN] `NetInstantiate(id: number, ownerId: string, path: string, pos: Vector3, rot: Vector3, active: boolean)`
- [IN] `NetDestroy(id: number)`
- [IN] `SetEntityUnitID(entityId: number, unitId: number)`


## Application (singleInstance)

### Alt Names: None
- [IN] `CreateLobby(id: string)`
- [OUT] `requestJoinLobby(id: string)`
- [OUT] `requestJoinPrivateLobby(id: string, password: string)`
- [OUT] `genNewAlphaKey(key: string, adminPassword: string)`


## AIAirVehicle (instance)

### Alt Names: None
- [IN] `UpdateData(pos: Vector3, vel: Vector3, accel: Vector3, rot: Vector3)`
- [IN] `Damage()`
- [IN] `Die()`
- [IN] `Spawn()`


## AIGroundUnit (instance)

### Alt Names: None
- [IN] `UpdateData(pos: Vector3, vel: Vector3, accel: Vector3, rot: Vector3)`
- [IN] `FireBullet(position: Vector3, velocity: Vector3)`
- [IN] `Damage()`
- [IN] `Die()`
- [IN] `Spawn()`


## MissileEntity (instance)

### Alt Names: None
- [IN] `SyncShit(syncedPos: Vector3, syncedRot: Vector3, syncedVel: Vector3, syncedAccel: Vector3)`
- [IN] `Detonate()`


## GunEntity (instance)

### Alt Names: None
- [IN] `FireBullet(position: Vector3, velocity: Vector3)`


## HardpointEntity (instance)

### Alt Names: None



## PlayerVehicle (instance)

### Alt Names: F45A, FA26B, AV42, AH94
- [IN] `UpdateData(pos: Vector3, vel: Vector3, accel: Vector3, rot: Vector3, throttle: number)`
- [IN] `UpdateTGP(direction: Vector3, lockedWorldPoint: Vector3, lockedActor: number)`
- [IN] `UpdatePilotHead(direction: Vector3)`
- [IN] `FireCMS()`
- [IN] `SetLock(actorId: number, isLocked: boolean)`
- [IN] `Damage()`
- [IN] `Die()`
- [IN] `SetFuel(tank: number, fuel: number)`


## VTOLLobby (instance)

### Alt Names: None
- [IN] `UpdateLobbyInfo(name: string, missionName: string, playerCount: number, maxPlayers: number, isPrivate: boolean, isConnected: boolean, players: RawPlayerInfo[])`
- [IN] `UpdateMissionInfo(name: string, id: string, campaignId: string, workshopId: string, mapId: string, isBuiltin: boolean)`
- [IN] `CloseLobby()`
- [IN] `ConnectionResult(success: boolean)`
- [IN] `SyncLeaveLobby()`


## Client (instance)

### Alt Names: None
- [OUT] `subscribe(gameId: string)`
- [OUT] `setAlphaKey(key: string)`
- [IN] `createAlphaKey(key: string)`
- [IN] `alphaAuthResult(success: boolean)`
- [OUT] `replayGame(id: string)`
- [IN] `expectChunks(count: number)`
- [IN] `ping(n: number)`
- [OUT] `pong(n: number)`

