<template>
	<a href="https://discord.gg/u7X72wc" target="_blank">
		<img src="discord.svg" class="discordlink" />
	</a>
</template>


<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	@Component
	export default class DiscordLogo extends Vue {}
</script>

<style>
.discordlink {
	max-width: 32px;
	margin-left: 5px;
	margin-right: 5px;
	margin-top: 8px;
	/* fill: #cdd9e5; */
}

a {
  padding: 0;
  margin: 0;
  min-height: 0;
  max-height: 40px;
}
</style>
