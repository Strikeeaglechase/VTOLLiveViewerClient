<template>
	<div class="settings-popout-btn">
		<button>Hello World!</button>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	import SettingsPane from "./SettingsPane.vue";
	@Component({ components: { SettingsPane } })
	export default class SettingsPopoutButton extends Vue {}
</script>

<style scoped>
button {
	/* font-weight: bold; */
	font-family: Anonymous Pro, monospace;
	background-color: #434c53;
	color: #ffffff;
	border-width: 1px;
	border-color: #000a0f;
	padding-top: 2px;
	padding-bottom: 2px;
	transition: color 0.25s;
	font-size: 1em;
}

button:hover {
	background-color: #434c53;
	-webkit-box-shadow: inset 0px 0px 6px 5px rgb(0 0 0 / 30%);
	box-shadow: inset 0px 0px 6px 5px rgb(0 0 0 / 30%);
	transition: color 0.25s;
}

.settings-popout-btn {
	pointer-events: auto;
}
</style>
