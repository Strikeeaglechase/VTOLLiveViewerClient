<template>
	<div class="settings" v-if="settingsVisible">
		<div class="settings-content">
			<p class="settings-header">Settings</p>
			<div class="settings-content-flex-container">
				<div class="left-settings-container">
					<div v-for="setting in Settings.settings" :key="setting.name"><SettingsEntry :name="setting.name" :type="setting.type" /></div>
				</div>
				<div class="right-settings-container" v-if="isReplay">
					<button v-on:click="downloadCarrierLandings()">{{ downloadText }}</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	import { EventBus } from "../../eventBus";
	import SettingsEntry from "./SettingsEntry.vue";
	import { Settings } from "../../viewer/settings";
	import { API_URL } from "../../config";
	import { Application, ApplicationRunningState } from "../../viewer/app";

	@Component({ components: { SettingsEntry } })
	export default class SettingsPane extends Vue {
		settingsVisible = false;
		Settings = Settings;
		isReplay = false;
		app: Application;

		downloadText = "Download Carrier Landings";

		mounted() {
			EventBus.$on("state", (state: ApplicationRunningState) => {
				this.isReplay = state == ApplicationRunningState.running && Application.instance.isReplay;
				this.app = Application.instance;
			});

			EventBus.$on("settings-toggle", () => {
				this.settingsVisible = !this.settingsVisible;
			});

			// this.settingsVisible = true;
		}

		async downloadCarrierLandings() {
			if (this.downloadText != "Download Carrier Landings") {
				return;
			}

			this.downloadText = "Processing...";
			const replayId = this.app.replayController.header.id;
			console.log(`Starting download for ${replayId}`);

			const reqUrl = `${API_URL}/lrs/rate/${replayId}`;
			const req = await fetch(reqUrl);
			if (req.status >= 300) {
				alert(`Failed to download replay: ${req.statusText} (${req.status})`);
				return;
			}
			const data = await req.blob();
			const url = window.URL.createObjectURL(data);
			const a = document.createElement("a");
			a.style.display = "none";
			a.download = `landings.zip`;
			a.href = url;
			document.body.appendChild(a);
			a.click();
			window.URL.revokeObjectURL(url);
		}
	}
</script>

<style>
.settings {
	display: flex;
	flex-direction: column;
	align-items: center;
	position: absolute;
	width: 100%;
	pointer-events: none;
	margin-top: 10px;
	z-index: 1;
}

.settings-content {
	pointer-events: all;
	width: 50vw;
	background-color: rgba(0, 0, 0, 0.5);

	border-width: 3px;
	border-color: #04508a;
	border-style: solid;

	padding: 5px;
}

.settings-header {
	font-size: 16px;
	margin-top: 0px;
}

.settings-content-flex-container {
	display: flex;
	justify-content: space-between;
}
</style>
