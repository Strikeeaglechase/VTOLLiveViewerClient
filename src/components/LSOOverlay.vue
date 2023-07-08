<template>
	<div class="lso-overlay">
		<canvas id="lso-overlay"></canvas>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	import { EventBus } from "../eventBus";
	// import { VTOLLobby } from "../../../VTOLLiveViewerCommon/dist/src/shared";
	// import LobbyEntry from "./LobbyEntry.vue";

	@Component({ components: {} })
	export default class LSOOverlay extends Vue {
		mounted() {
			// EventBus.$on("lobbies", (lobbies: VTOLLobby[]) => {
			// 	this.lobbies = lobbies;
			// });
		}
	}
</script>

<style>
#lso-overlay {
	position: absolute;
	top: 0;
	left: 0;
	pointer-events: none;
}
/* .lobbySearchBar {
	text-align: center;
	padding-top: 10px;
}

.lobby-input {
	color: white;
	font-family: monospace;
	border: 1px white solid;
	background: none;
} */
</style>
