<template>
	<a
		href="javascript:void(0);"
		id="start"
		class="fancy-btn"
		v-on:click="handleClick()"
	>
		<p class="btn-txt">View {{ text }}</p>
	</a>
</template>


<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";
	import { IS_ALPHA } from "../../config";
	// import { getCookie } from "../../../../VTOLLiveViewerCommon/dist/src/cookieHelper";

	import { Application, ApplicationRunningState } from "../../viewer/app";

	@Component({})
	export default class WelcomeStartButton extends Vue {
		@Prop()
		text: string;
		@Prop()
		redirect: string;
		// viewValue = "Lobbies";

		// mounted() {
		// 	this.viewValue =
		// 		location.pathname == "/replay" ? "Recordings" : "Lobbies";
		// }

		handleClick() {
			// if (
			// 	IS_ALPHA &&
			// 	!getCookie("alpha_key") &&
			// 	location.pathname != "/replay"
			// ) {
			// 	const key = prompt("Enter alpha key:");
			// 	if (!key) {
			// 		return;
			// 	}
			// 	Application.instance.client.setAlphaKey(key);
			// }
			// Application.setState(ApplicationRunningState.lobbySelect);

			location.pathname = this.redirect;
		}
	}
</script>

<style>
:root {
	--color-red: #1aa850;
	--color-white: #fff;
	--speed-normal: 0.5s;
	--speed-fast: 0.2s;
}

.fancy-btn {
	/* letter-spacing: 2px; */
	/* text-transform: uppercase; */

	background-color: rgba(31, 31, 31, 0.5);

	transition: var(--speed-normal);
	border: 1px solid var(--color-red);
	padding: 5px;

	width: fit-content;
	height: 25px;

	display: flex;
	justify-content: center;
	margin-left: auto;
	margin-right: auto;
	margin-top: 25px;
	padding-bottom: 0px;
	padding-bottom: 7px;

	text-decoration: none;
}

.fancy-btn:hover {
	border: 1px solid transparent;
	background: var(--color-red) url("pixelgreen.png");
	transition-delay: 0.8s;
	background-size: 180px;
	animation: animate var(--speed-fast) steps(8) forwards;
}

.btn-txt {
	font-family: monospace;
	font-size: 24px;
	text-decoration: none;
	text-align: center;
	margin: 0px;
	color: var(--color-white) !important;
}

@keyframes animate {
	0% {
		background-position-y: 0;
	}
	100% {
		background-position-y: -480px;
	}
}
</style>
