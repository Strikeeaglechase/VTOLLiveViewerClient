<template>
	<div class="navbar">
		<div class="contact">
			<DiscordLogo />
			<p>Contact me on discord: Strikeeaglechase#0001</p>
			<GithubLogo />
		</div>
		<div class="disclaimer">
			<p class="disclaimer-text">
				Headless Client is a community project and<br />
				is not affiliated or endorsed by Boundless Dynamics
			</p>
		</div>
	</div>
</template>


<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	import DiscordLogo from "./DiscordLogo.vue";
	import GithubLogo from "./GithubLogo.vue";
	@Component({ components: { GithubLogo, DiscordLogo } })
	export default class WelcomeBottomBar extends Vue {}
</script>

<style>
.navbar {
	position: absolute;
	bottom: 0px;
	overflow: hidden;
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: center;
	background-color: #2d333b;
}

.contact {
	display: inherit;
}

@media only screen and (max-width: 1200px) {
	.contact {
		display: inherit;
		padding-bottom: 30px;
	}
}

.disclaimer {
	position: absolute;
	/* max-width: 50%; */
	width: 400px;
	right: 0px;
	text-align: right;
	bottom: 5px;
}

.disclaimer-text {
	text-align: right;
	margin-right: 8px;
	margin-bottom: 0px;
}

p {
	color: white;
	font-family: monospace;
	text-align: center;
}
</style>
