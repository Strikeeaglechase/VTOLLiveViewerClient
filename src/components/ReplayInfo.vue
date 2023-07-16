<template>
	<div class="replay-overlay" v-if="isReplay" :class="{ hidden: hide }">
		<div>
			<p class="speed-txt">{{ getSpeed() }}</p>
		</div>
		<div>
			<p>{{ getTime() }}</p>
			<p style="display: none">{{ tick }}</p>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	import { EventBus } from "../eventBus";
	import { Application, ApplicationRunningState } from "../viewer/app";
	// import { VTOLLobby } from "../../../VTOLLiveViewerCommon/dist/src/shared";
	// import LobbyEntry from "./LobbyEntry.vue";

	@Component({ components: {} })
	export default class ReplayInfo extends Vue {
		isReplay = false;
		app: Application;
		prevSpeed = 0;

		tick = 0;
		// private fadeOutTimeout: number;
		hide = false;
		isTimeout = false;
		timeout = 0;

		mounted() {
			EventBus.$on("state", (state: ApplicationRunningState) => {
				this.isReplay =
					state == ApplicationRunningState.running &&
					Application.instance.isReplay;

				this.app = Application.instance;
			});

			setInterval(() => this.tick++, 1000 / 60);
		}

		getTime() {
			const time = new Date(
				this.app.time + this.app.replayController.replayStartTime
			);
			const z = (v: number) => (v < 10 ? "0" + Math.floor(v) : Math.floor(v));
			const minutes = z(time.getMinutes());
			const hours = z(time.getHours());

			const durationSeconds = this.app.time / 1000;
			const durationMinutes = durationSeconds / 60;
			const formattedDurSecs = z(durationSeconds % 60);
			const formattedDurMins = z(durationMinutes % 60);
			// const totalHours = totalMinutes / 60;

			return `${hours}:${minutes} (${formattedDurMins}:${formattedDurSecs})`;
		}

		getSpeed() {
			const speed = Math.abs(this.app.replayController.computedReplaySpeed);

			if (speed != this.prevSpeed) {
				this.hide = false;
				this.prevSpeed = speed;
				if (this.isTimeout) {
					clearTimeout(this.timeout);
					this.isTimeout = false;
				}
			} else if (!this.isTimeout) {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				this.timeout = setTimeout(() => {
					this.hide = true;
					this.isTimeout = false;
				}, 2500);
				this.isTimeout = true;
			}

			const sign =
				this.app.replayController.computedReplaySpeed < 0 ? "-" : "";

			if (speed < 1 && speed != 0) {
				const dom = Math.round(1 / speed);
				return `${sign}1/${dom}x`;
			}
			return `${sign}${speed}x`;
		}
	}
</script>

<style scoped>
.replay-overlay {
	position: absolute;
	top: 50px;
	left: 15px;
	opacity: 1;
}

.speed-txt {
	font-size: 32px;
}

p {
	margin-bottom: 0px;
	margin-top: 0px;
}

.hidden {
	opacity: 0;
	transition: opacity 0.5s;
}
</style>

