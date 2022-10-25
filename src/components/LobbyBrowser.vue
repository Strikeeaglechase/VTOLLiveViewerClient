<template>
	<div>
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
	import {
		RecordedLobbyInfo,
		VTOLLobby,
	} from "../../../VTOLLiveViewerCommon/dist/src/shared";
	import LobbyEntry from "./LobbyEntry.vue";
	import LobbySearch from "./LobbySearch.vue";
	import { Application, ApplicationRunningState } from "../viewer/app";
	import { API_URL } from "../config";
	import RecordedLobbyEntry from "./RecordedLobbyEntry.vue";

	@Component({ components: { LobbyEntry, LobbySearch, RecordedLobbyEntry } })
	export default class LobbyBrowser extends Vue {
		lobbies: VTOLLobby[] = [];
		replayLobbies: RecordedLobbyInfo[] = [];

		@Prop()
		state: ApplicationRunningState;

		searchStr = "";

		async mounted() {
			EventBus.$on("lobbies", (lobbies: VTOLLobby[]) => {
				this.lobbies = lobbies;
			});
			EventBus.$on("lobby-search", (searchStr: string) => {
				this.searchStr = searchStr;
			});

			if (location.pathname == "/replay") {
				const req = await fetch(`${API_URL}/recordings`);
				this.replayLobbies = await req.json();
				console.log(this.replayLobbies);
			}
		}

		getGames(): VTOLLobby[] {
			const resLobbies = this.lobbies.slice().sort((a, b) => {
				return b.playerCount - a.playerCount;
			});

			return resLobbies.filter((g) => {
				if (!g.name || g.name == "") return false;
				if (this.searchStr == "") {
					return !g.isPrivate;
				}

				return (
					g.name.toLowerCase().includes(this.searchStr.toLowerCase()) ||
					g.missionName
						.toLowerCase()
						.includes(this.searchStr.toLowerCase())
				);
			});
		}

		getReplayRecordings(): RecordedLobbyInfo[] {
			const resLobbies = this.replayLobbies.slice().sort((a, b) => {
				return b.startTime - a.startTime;
			});

			return resLobbies.filter((g) => {
				return (
					g.lobbyName
						.toLowerCase()
						.includes(this.searchStr.toLowerCase()) ||
					g.missionName
						.toLowerCase()
						.includes(this.searchStr.toLowerCase())
				);
			});
		}

		isLobbySelect() {
			return this.state == ApplicationRunningState.lobbySelect;
		}
	}
</script>

<style>
/* TODO CSS grid this so it's in a dynamic grid */

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
