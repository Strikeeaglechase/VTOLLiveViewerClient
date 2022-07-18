<template>
	<div id="app">
		<div id="main-container" v-show="isRunning()">
			<Sidebar />
			<UnitRange />
		</div>
		<div id="lobby-select-container" v-show="isLobbySelect()">
			<LobbyBrowser />
		</div>
		<div id="welcome-page" v-show="isWelcome()">
			<Welcome />
		</div>
	</div>
</template>

<script lang="ts">
	import Component from "vue-class-component";
	import Vue from "vue";
	import Sidebar from "./components/Sidebar.vue";
	import UnitRange from "./components/UnitRange.vue";
	import LobbyBrowser from "./components/LobbyBrowser.vue";
	import { Application, ApplicationRunningState } from "./viewer/app";
	import { EventBus } from "./eventBus";
	import Welcome from "./components/welcome/Welcome.vue";

	@Component({ components: { Sidebar, UnitRange, LobbyBrowser, Welcome } })
	export default class App extends Vue {
		state: ApplicationRunningState = ApplicationRunningState.welcome;
		mounted() {
			EventBus.$on("state", (state: ApplicationRunningState) => {
				this.state = state;
				console.log(this.state);
			});
		}

		isRunning() {
			return this.state == ApplicationRunningState.running;
		}

		isLobbySelect() {
			return this.state == ApplicationRunningState.lobbySelect;
		}

		isWelcome() {
			return this.state == ApplicationRunningState.welcome;
		}
	}
</script>

<style>
#app {
	height: 100%;
	background-color: rgb(41, 41, 41);
}
#main-container {
	height: 100%;
}
#lobby-select-container {
	background-color: rgb(41, 41, 41);
}
#welcome-page {
	height: 100%;
}
</style>
