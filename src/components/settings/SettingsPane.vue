<template>
	<div class="settings" v-if="settingsVisible">
		<div class="settings-content">
			<p class="settings-header">Settings</p>
			<div v-for="setting in Settings.settings" :key="setting.name"><SettingsEntry :name="setting.name" :type="setting.type" /></div>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	import { EventBus } from "../../eventBus";
	import SettingsEntry from "./SettingsEntry.vue";
	import { Settings } from "../../viewer/settings";

	@Component({ components: { SettingsEntry } })
	export default class SettingsPane extends Vue {
		settingsVisible = false;
		Settings = Settings;

		mounted() {
			EventBus.$on("settings-toggle", () => {
				this.settingsVisible = !this.settingsVisible;
			});
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
</style>
