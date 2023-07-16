<template>
	<div id="app">
		<ErrorBanner />
		<div id="main-container" class="page" v-show="isRunning()">
			<Sidebar class="ui" />
			<UnitRange class="ui" />
			<ReplayInfo class="ui" />
			<LogPanel class="ui" />
			<LSOOverlay class="ui" />
		</div>
		<div id="lobby-select-container" class="page" v-show="isLobbySelect()">
			<LobbyBrowser :state="state" />
		</div>
		<div id="welcome-page" class="page" v-show="isWelcome()">
			<Welcome />
		</div>
		<div id="admin-page" class="page" v-show="isAdmin()">
			<AdminPage />
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
	import ReplayInfo from "./components/ReplayInfo.vue";
	import LogPanel from "./components/LogPanel.vue";
	import AdminPage from "./components/admin/AdminPage.vue";
	import LSOOverlay from "./components/LSOOverlay.vue";
	import ErrorBanner from "./components/ErrorBanner.vue";

	@Component({
		components: {
			Sidebar,
			UnitRange,
			LobbyBrowser,
			Welcome,
			ReplayInfo,
			LogPanel,
			AdminPage,
			LSOOverlay,
			ErrorBanner,
		},
	})
	export default class App extends Vue {
		state: ApplicationRunningState = ApplicationRunningState.welcome;
		mounted() {
			EventBus.$on("state", (state: ApplicationRunningState) => {
				this.state = state;
			});
		}

		isRunning() {
			return this.state == ApplicationRunningState.running;
		}

		isLobbySelect() {
			return (
				this.state == ApplicationRunningState.lobbySelect ||
				this.state == ApplicationRunningState.replaySelect
			);
		}

		isWelcome() {
			return this.state == ApplicationRunningState.welcome;
		}

		isAdmin() {
			return this.state == ApplicationRunningState.admin;
		}
	}
</script>

<style>
#app {
	height: 100%;
	background-color: rgb(41, 41, 41);
}

#lobby-select-container {
	background-color: rgb(41, 41, 41);
}

.page {
	height: 100%;
	overflow-y: hidden;
}
</style>
