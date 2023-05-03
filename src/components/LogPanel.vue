<template>
	<div class="log-container">
		<div
			class="log-header"
			:style="getHeaderStyle()"
			v-on:click="toggleHide"
		>
			<p>{{ isHidden ? "Show" : "Hide" }}</p>
		</div>
		<div id="log-panel" :style="getLogPanelStyle()">
			<p v-for="msg in logMessages" :key="msg.id" class="log-message">
				{{ msg.message }}
			</p>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from "vue-property-decorator";
	import { Application, LogMessage } from "../viewer/app";
	import { EventBus } from "../eventBus";

	@Component({ components: {} })
	export default class LogPanel extends Vue {
		logMessages: LogMessage[] = [];
		lastLength = 0;
		isHidden = false;

		mounted() {
			EventBus.$on("log-messages", (messages: LogMessage[]) => {
				this.logMessages = messages;
				if (this.logMessages.length > this.lastLength) {
					this.$nextTick(() => {
						const logPanel = document.getElementById("log-panel");
						if (!logPanel) return;
						logPanel.scrollTop = logPanel.scrollHeight;
					});
				}
			});
		}

		getLogPanelStyle() {
			return {
				display: this.isHidden ? "none" : "block",
			};
		}

		getHeaderStyle() {
			return {
				"margin-left": this.isHidden ? "0px" : "300px",
			};
		}

		toggleHide() {
			this.isHidden = !this.isHidden;
		}
	}
</script>

<style>
.log-container {
	position: fixed;
	left: 0;
	bottom: 0;

	/* Margins */
	padding-left: 10px;
	padding-bottom: 5px;
	margin-bottom: 15px;
	margin-left: 10px;
}

.log-header {
	text-align: center;
	background: rgba(0, 0, 0, 0.5);
	color: white;
	width: 50px;
}

.log-header p {
	margin: 0;
	font-size: 14px;
	padding-bottom: 2px;
	padding-top: 2px;
}

.log-header:hover {
	background: rgba(0, 0, 0, 0.8);
	cursor: pointer;
}

#log-panel {
	/* Position */

	width: 350px;
	height: 150px;
	background: rgba(0, 0, 0, 0.3);
	overflow: auto;
}

#log-panel:hover {
	background: rgba(0, 0, 0, 0.6);
}

.log-message {
	text-align: left;
	margin-top: 2px;
	margin-bottom: 0px;
}

div::-webkit-scrollbar {
	width: 8px;
}

div::-webkit-scrollbar-track {
	background: grey;
}

div::-webkit-scrollbar-thumb {
	background-color: rgb(51, 51, 51);
	border-radius: 0px;
	/* border: 3px solid orange; */
}
</style>
 