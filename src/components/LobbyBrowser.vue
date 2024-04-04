<template>
	<div>
		<ReplayUpload v-if="!isLobbySelect()" />
		<LobbySearch />
		<div class="lobbyBrowser" v-if="isLobbySelect()">
			<div v-for="game in getGames()" :key="game.id">
				<LobbyEntry :lobby="game" />
			</div>
		</div>
		<div class="lobbyBrowser" v-else>
			<div v-for="game in getReplayRecordings()" :key="game.recordingId">
				<RecordedLobbyEntry :lobby="game" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";
	import { EventBus } from "../eventBus";
	import { RecordedLobbyInfo, VTOLLobby } from "../../../VTOLLiveViewerCommon/dist/src/shared";
	import LobbyEntry from "./LobbyEntry.vue";
	import LobbySearch from "./LobbySearch.vue";
	import { Application, ApplicationRunningState } from "../viewer/app";
	import { API_URL } from "../config";
	import RecordedLobbyEntry from "./RecordedLobbyEntry.vue";
	import ReplayUpload from "./ReplayUpload.vue";
	import LoginSteam from "./LoginSteam.vue";

	@Component({
		components: {
			LobbyEntry,
			LobbySearch,
			RecordedLobbyEntry,
			ReplayUpload,
			LoginSteam
		}
	})
	export default class LobbyBrowser extends Vue {
		lobbies: VTOLLobby[] = [];
		replayLobbies: RecordedLobbyInfo[] = [];

		@Prop()
		state: ApplicationRunningState;

		searchStr = "";
		userSearchStr = "";

		async mounted() {
			EventBus.$on("lobbies", (lobbies: VTOLLobby[]) => {
				this.lobbies = lobbies;
			});
			EventBus.$on("lobby-search", (searchStr: string) => {
				this.searchStr = searchStr;
			});
			EventBus.$on("user-search", (searchStr: string) => {
				this.userSearchStr = searchStr;
			});

			if (location.pathname == "/replay") {
				// const req = await fetch(`${API_URL}/replay/recordings`);
				// this.replayLobbies = await req.json();

				// if (window.location.search.startsWith(`?replay=`)) {
				// 	this.replayLobbies = this.replayLobbies.filter(l => l.recordingId == id);
				// }
				const id = window.location.search.split("=")[1];
				if (Application.instance.client?.id != undefined) {
					Application.instance.client.requestReplayLobbies(id || null);
				} else {
					Application.instance.on("client_id", () => {
						Application.instance.client.requestReplayLobbies(id || null);
					});
				}

				EventBus.$on("replay_lobby_info", (info: RecordedLobbyInfo) => {
					if (window.location.search.startsWith(`?replay=`) && info.recordingId != id) return;
					this.replayLobbies.push(info);
				});
			}
		}

		getGames(): VTOLLobby[] {
			const resLobbies = this.lobbies.slice().sort((a, b) => {
				return b.playerCount - a.playerCount;
			});

			return resLobbies.filter(g => {
				if (!g.name || g.name == "") return false;
				if (this.searchStr == "") {
					return !g.isPrivate;
				}

				return g.name.toLowerCase().includes(this.searchStr.toLowerCase()) || g.missionName.toLowerCase().includes(this.searchStr.toLowerCase());
			});
		}

		getReplayRecordings(): RecordedLobbyInfo[] {
			const resLobbies = this.replayLobbies.slice().sort((a, b) => {
				return b.startTime - a.startTime;
			});

			return resLobbies.filter(g => {
				let isMatch = true;
				if (this.userSearchStr) {
					if (!g.metadata) return false;
					const playerIsInLobby = g.metadata.players.some(p => {
						if (!p.name) return false;
						return p.name.toLowerCase().includes(this.userSearchStr.toLowerCase());
					});
					if (!playerIsInLobby) isMatch = false;
				}

				if (this.searchStr) {
					const lobbyNameMatch = g.lobbyName.toLowerCase().includes(this.searchStr.toLowerCase());
					const missionNameMatch = g.missionName.toLowerCase().includes(this.searchStr.toLowerCase());
					if (!lobbyNameMatch && !missionNameMatch) isMatch = false;
				}

				return isMatch;
			});
		}

		isLobbySelect() {
			return this.state == ApplicationRunningState.lobbySelect;
		}
	}
</script>

<style>
/* TODO CSS grid this so it's in a dynamic grid */

.lobbyBrowser {
	max-height: 99vh;
	overflow-y: scroll;
}

@media only screen and (min-width: 3500px) {
	.lobbyBrowser {
		width: 100%;

		display: grid;

		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	}
}

@media only screen and (min-width: 3000px) and (max-width: 3500px) {
	.lobbyBrowser {
		width: 100%;

		display: grid;

		grid-template-columns: 1fr 1fr 1fr 1fr;
	}
}

@media only screen and (min-width: 2100px) and (max-width: 3000px) {
	.lobbyBrowser {
		width: 100%;

		display: grid;

		grid-template-columns: 1fr 1fr 1fr;
	}
}

@media only screen and (min-width: 1262px) and (max-width: 2100px) {
	.lobbyBrowser {
		width: 100%;

		display: grid;

		grid-template-columns: 1fr 1fr;
	}
}

@media only screen and (max-width: 1262px) {
	.lobbyBrowser {
		width: 100%;

		display: grid;

		grid-template-columns: 1fr;
	}
}
</style>
