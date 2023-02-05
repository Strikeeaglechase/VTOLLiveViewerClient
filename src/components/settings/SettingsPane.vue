<template>
	<div class="settings">
		<p>Hello World!</p>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";

	@Component({ components: {} })
	export default class SettingsPane extends Vue {}
</script>

<style>
.settings {
	width: 300px;
	height: 150px;
	right: 0;
	position: fixed;
}
</style>
