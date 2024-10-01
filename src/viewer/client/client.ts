/* eslint-disable @typescript-eslint/no-empty-function */

import { EventEmitter } from "../../../../VTOLLiveViewerCommon/dist/eventEmitter.js";
import { EnableRPCs, RPC } from "../../../../VTOLLiveViewerCommon/dist/rpc.js";
import { DbUserEntry, RecordedLobbyInfo, UserScopes, VTGRHeader } from "../../../../VTOLLiveViewerCommon/dist/shared.js";
import { COOKIE_DOMAIN, LOGOUT_URL } from "../../config";
import { Application } from "../app.js";
import { eraseCookie, setNewUserToken } from "./cookies";

@EnableRPCs("instance")
class Client extends EventEmitter<"replay_header" | "replay_lobby_info"> {
	public expectedReplaySize = -1;
	public onUserQueryResult: (users: DbUserEntry[]) => void = () => {};
	constructor(public id: string) {
		super();
	}

	@RPC("out")
	subscribe(gameId: string) {}

	@RPC("out")
	setUser(key: string) {}

	@RPC("out")
	requestReplayLobbies(
		id: string | null,
		lobbyNameQuery: string,
		playerNameQuery: string,
		hostNameQuery: string,
		lowerDateBound: number,
		upperDateBound: number
	) {}

	@RPC("out")
	cancelRequestReplayLobbies() {}

	@RPC("in")
	replayLobbyInfo(info: RecordedLobbyInfo) {
		this.emit("replay_lobby_info", info);
	}
	@RPC("in")
	invalidateToken() {
		eraseCookie("user_token", COOKIE_DOMAIN);
		window.location.assign(LOGOUT_URL);
	}

	@RPC("out")
	replayGame(id: string) {}

	@RPC("in")
	replayHeader(header: VTGRHeader) {
		this.emit("replay_header", header);
	}

	@RPC("in")
	expectReplaySize(size: number) {
		this.expectedReplaySize = size;
		console.log(`Expecting replay size of ${size} bytes`);
	}

	@RPC("in")
	ping(n: number) {
		this.pong(n);
	}

	@RPC("out")
	pong(n: number) {}

	@RPC("out")
	adminSearchUsers(query: string) {}

	@RPC("in")
	error(message: string) {
		Application.instance.emit("error_message", message);
	}

	@RPC("in")
	adminSearchUsersResult(users: DbUserEntry[]) {
		this.onUserQueryResult(users);
	}

	@RPC("out")
	adminSetUserScopes(id: string, scopes: UserScopes[]) {}

	@RPC("out")
	kickUser(id: string) {}

	@RPC("out")
	enableRecordLobby(lobbyId: string, password: string = "") {}

	@RPC("out")
	unsubscribeFromLiveLobbyList() {}

	@RPC("in")
	newToken(token: string) {
		console.log(`Server sent new token`);
		setNewUserToken(token);

		this.setUser(token);
	}
}

export { Client };
