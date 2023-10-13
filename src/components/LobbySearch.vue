<template>
	<div class="lobbySearchBar">
		<input class="lobby-input" id="lobbyInp" type="text" placeholder="Search.." @input="updateSearch()" />

		<div v-if="isReplay" class="replay-search">
			<input class="lobby-input" id="replayUserInp" type="text" placeholder="Search by player.." @input="updateUserSearch()" />
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	import { EventBus } from "../eventBus";
	// import { VTOLLobby } from "../../../VTOLLiveViewerCommon/dist/src/shared";
	// import LobbyEntry from "./LobbyEntry.vue";

	@Component({ components: {} })
	export default class LobbySearch extends Vue {
		isReplay = false;

		mounted() {
			// EventBus.$on("lobbies", (lobbies: VTOLLobby[]) => {
			// 	this.lobbies = lobbies;
			// });
			if (location.pathname == "/replay") {
				this.isReplay = true;
				setTimeout(() => this.updateUserSearch(), 500);
			}

			setTimeout(() => this.updateSearch(), 500);
		}

		updateSearch() {
			EventBus.$emit(
				"lobby-search",
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				document.getElementById("lobbyInp").value
			);
		}

		updateUserSearch() {
			EventBus.$emit(
				"user-search",
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				document.getElementById("replayUserInp").value
			);
		}
	}
</script>

<style>
.lobbySearchBar {
	text-align: center;
	padding-top: 10px;
}

.lobby-input {
	color: white;
	font-family: monospace;
	border: 1px white solid;
	background: none;
	margin-right: 25px;
}

.replay-search {
	display: inline-block;
}
</style>
