<template>
	<div class="settings-popout-btn">
		<button v-on:click="toggle">Settings</button>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	import SettingsPane from "./SettingsPane.vue";
	import { EventBus } from "../../eventBus";
	@Component({ components: { SettingsPane } })
	export default class SettingsPopoutButton extends Vue {
		toggle() {
			EventBus.$emit("settings-toggle");
		}
	}
</script>

<style scoped>
button {
	/* font-weight: bold; */
	font-family: Anonymous Pro, monospace;
	background-color: rgba(50, 50, 50, 0.6);
	color: #ffffff;
	border: none;

	padding-top: 4px;
	padding-bottom: 4px;
	transition: color 0.25s;
	font-size: 1em;
	width: 100%;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
}

button:hover {
	background-color: #434c53;
	-webkit-box-shadow: inset 0px 0px 6px 5px rgb(0 0 0 / 30%);
	box-shadow: inset 0px 0px 6px 5px rgb(0 0 0 / 30%);
	transition: color 0.25s;
}

.settings-popout-btn {
	pointer-events: auto;
	text-align: center;
	margin-right: 10px;
	margin-top: 5px;

	min-width: 150px;
	border-width: 2px;
	border-color: #04508a;
	border-style: solid;
}

.settings-pane {
	position: absolute;
	left: -50vw;
}
</style>
