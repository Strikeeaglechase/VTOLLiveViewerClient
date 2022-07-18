<template>
	<div>
		<LobbySearch />
		<div id="lobbyBrowser">
			<div v-for="game in getGames()" :key="game.id">
				<LobbyEntry
					:lobby="game"
					:longestName="longestName"
					:longestMission="longestMission"
					:longestPlayers="longestPlayers"
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	import { EventBus } from "../eventBus";
	import { VTOLLobby } from "../../../VTOLLiveViewerCommon/dist/src/shared";
	import LobbyEntry from "./LobbyEntry.vue";
	import LobbySearch from "./LobbySearch.vue";

	@Component({ components: { LobbyEntry, LobbySearch } })
	export default class LobbyBrowser extends Vue {
		lobbies: VTOLLobby[] = [];
		longestName = 10;
		longestMission = 10;
		longestPlayers = 10;

		searchStr = "";

		mounted() {
			EventBus.$on("lobbies", (lobbies: VTOLLobby[]) => {
				this.lobbies = lobbies;
			});
			EventBus.$on("lobby-search", (searchStr: string) => {
				this.searchStr = searchStr;
			});
		}

		getGames(): VTOLLobby[] {
			this.lobbies.forEach((lobby) => {
				if (lobby.name.length > this.longestName) {
					this.longestName = lobby.name.length;
				}
				if (lobby.missionName.length > this.longestMission) {
					this.longestMission = lobby.missionName.length;
				}
				const pText = `${lobby.playerCount} / ${lobby.maxPlayers}`;
				if (pText.length > this.longestPlayers) {
					this.longestPlayers = pText.length;
				}
			});
			const resLobbies = this.lobbies.slice().sort((a, b) => {
				return b.playerCount - a.playerCount;
			});

			return resLobbies.filter((g) => {
				if (this.searchStr == "") {
					return !g.isPrivate;
				}

				return g.name
					.toLowerCase()
					.startsWith(this.searchStr.toLowerCase());
			});
		}
	}
</script>

<style>
/* TODO CSS grid this so it's in a dynamic grid */

@media only screen and (min-width: 3500px) {
	#lobbyBrowser {
		width: 100%;

		display: grid;

		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	}
}

@media only screen and (min-width: 3000px) and (max-width: 3500px) {
	#lobbyBrowser {
		width: 100%;

		display: grid;

		grid-template-columns: 1fr 1fr 1fr 1fr;
	}
}

@media only screen and (min-width: 2100px) and (max-width: 3000px) {
	#lobbyBrowser {
		width: 100%;

		display: grid;

		grid-template-columns: 1fr 1fr 1fr;
	}
}

@media only screen and (min-width: 1262px) and (max-width: 2100px) {
	#lobbyBrowser {
		width: 100%;

		display: grid;

		grid-template-columns: 1fr 1fr;
	}
}

@media only screen and (max-width: 1262px) {
	#lobbyBrowser {
		width: 100%;

		display: grid;

		grid-template-columns: 1fr;
	}
}
</style>
