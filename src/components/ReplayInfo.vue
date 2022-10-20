<template>
	<div>
		<div><p>2x</p></div>
		<div>
			<p>{{ Date.now() }}</p>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	import { EventBus } from "../eventBus";
	// import { VTOLLobby } from "../../../VTOLLiveViewerCommon/dist/src/shared";
	// import LobbyEntry from "./LobbyEntry.vue";

	@Component({ components: {} })
	export default class ReplayInfo extends Vue {
		mounted() {
			// EventBus.$on("lobbies", (lobbies: VTOLLobby[]) => {
			// 	this.lobbies = lobbies;
			// });
		}
	}
</script>

<style>
</style>

