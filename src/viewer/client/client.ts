/* eslint-disable @typescript-eslint/no-empty-function */

import { EnableRPCs, RPC } from "../../../../VTOLLiveViewerCommon/dist/src/rpc.js";
import { DbUserEntry, UserScopes } from "../../../../VTOLLiveViewerCommon/dist/src/shared.js";
import { setNewUserToken } from "./cookies";

@EnableRPCs("instance")
class Client {
	public expectedReplayChunks = -1;
	public onUserQueryResult: (users: DbUserEntry[]) => void = () => { };
	constructor(public id: string) { }

	@RPC("out")
	subscribe(gameId: string) { }

	@RPC("out")
	setUser(key: string) { }

	@RPC("out")
	replayGame(id: string) { }

	@RPC("in")
	expectChunks(count: number) {
		this.expectedReplayChunks = count;
		console.log(`Expecting ${count} chunks for replay`);
	}

	@RPC("in")
	ping(n: number) {
		this.pong(n);
	}

	@RPC("out")
	pong(n: number) { }

	@RPC("out")
	adminSearchUsers(query: string) { }

	@RPC("in")
	adminSearchUsersResult(users: DbUserEntry[]) {
		this.onUserQueryResult(users);
	}

	@RPC("out")
	adminSetUserScopes(id: string, scopes: UserScopes[]) { }

	@RPC("out")
	kickUser(id: string) { }

	@RPC("in")
	newToken(token: string) {
		console.log(`Server sent new token`);
		setNewUserToken(token);

		this.setUser(token);
	}
}

export { Client };