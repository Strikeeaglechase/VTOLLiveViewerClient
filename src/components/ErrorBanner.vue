<template>
	<div id="topBanner" class="topPopupBanner" v-if="visible">
		<p id="bannerMsg">{{ message }}</p>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	import { EventBus } from "../eventBus";
	// import { VTOLLobby } from "../../../VTOLLiveViewerCommon/dist/src/shared";
	// import LobbyEntry from "./LobbyEntry.vue";

	@Component({ components: {} })
	export default class ErrorBanner extends Vue {
		message = "";
		visible = false;

		mounted() {
			EventBus.$on("error-message", (err: string) => {
				this.message = err;
				this.visible = true;
				setTimeout(() => {
					this.visible = false;
				}, 4000);
			});

			EventBus.$on("success-message", (err: string) => {
				this.message = err;
				this.visible = true;
				setTimeout(() => {
					this.visible = false;
				}, 4000);
			});
		}
	}
</script>

<style>
.topPopupBanner {
	-webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
	position: absolute;
	z-index: 2;
	width: 40%;
	left: 30%;
	border: solid 5px rgba(255, 0, 0, 0.8);
	background-color: #111 !important;
	background-image: var(--svg-ui-background);
	border-radius: 5px;
	top: 15px;
	background-color: rgba(255, 0, 0, 0.8);
}

.topPopupBanner p {
	text-align: center;
	font-size: 16px;
	margin-top: 7px;
	margin-bottom: 7px;
}
</style>
