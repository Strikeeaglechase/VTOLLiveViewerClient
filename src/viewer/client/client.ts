/* eslint-disable @typescript-eslint/no-empty-function */

import { EventEmitter } from "../../../../VTOLLiveViewerCommon/dist/src/eventEmitter.js";
import { EnableRPCs, RPC } from "../../../../VTOLLiveViewerCommon/dist/src/rpc.js";
import { DbUserEntry, RecordedLobbyInfo, UserScopes, VTGRHeader } from "../../../../VTOLLiveViewerCommon/dist/src/shared.js";
import { EventBus } from "../../eventBus";
import { setNewUserToken } from "./cookies";

@EnableRPCs("instance")
class Client extends EventEmitter<"replay_header"> {
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
	requestReplayLobbies(id: string | null) {}

	@RPC("in")
	replayLobbyInfo(info: RecordedLobbyInfo) {
		EventBus.$emit("replay_lobby_info", info);
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
		EventBus.$emit("error-message", message);
	}

	@RPC("in")
	adminSearchUsersResult(users: DbUserEntry[]) {
		this.onUserQueryResult(users);
	}

	@RPC("out")
	adminSetUserScopes(id: string, scopes: UserScopes[]) {}

	@RPC("out")
	kickUser(id: string) {}

	@RPC("in")
	newToken(token: string) {
		console.log(`Server sent new token`);
		setNewUserToken(token);

		this.setUser(token);
	}
}

export { Client };
