<template>
	<div class="lobbySearchBar">
		<input
			class="lobby-input"
			id="lobbyInp"
			type="text"
			placeholder="Search.."
			@input="updateSearch()"
		/>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	import { EventBus } from "../eventBus";
	// import { VTOLLobby } from "../../../VTOLLiveViewerCommon/dist/src/shared";
	// import LobbyEntry from "./LobbyEntry.vue";

	@Component({ components: {} })
	export default class LobbySearch extends Vue {
		mounted() {
			// EventBus.$on("lobbies", (lobbies: VTOLLobby[]) => {
			// 	this.lobbies = lobbies;
			// });
		}

		updateSearch() {
			EventBus.$emit(
				"lobby-search",
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				document.getElementById("lobbyInp").value
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
}
</style>
