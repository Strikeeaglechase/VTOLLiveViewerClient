<template>
	<div class="lobby-browser-entry">
		<div class="thumbnail-container-hor">
			<div class="thumbnail-container-vert">
				<img class="thumbnail" :src="getPreviewImageUrl()" onerror="this.src='no_preview.png'" />
			</div>
		</div>

		<div class="long-text">
			<span class="date">{{ getDate() }} &nbsp; </span>
			<span class="name">{{ lobby.lobbyName }} &nbsp; </span>
			<span class="mission"> {{ lobby.missionName }} &nbsp; </span>
			<span class="time">
				{{ parseTime() }}
			</span>
		</div>
		<div class="btn-container">
			<button v-on:click="joinLobby()">
				{{ joinBtnText }}
			</button>
			<button v-on:click="download()">Download</button>
		</div>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";
	import { LobbyConnectionStatus, RecordedLobbyInfo, VTOLLobby } from "../../../VTOLLiveViewerCommon/dist/src/shared";
	import { API_URL } from "../config";
	import { Application } from "../viewer/app";

	@Component({ components: {} })
	export default class RecordedLobbyEntry extends Vue {
		@Prop()
		lobby!: RecordedLobbyInfo;

		joinBtnText = "View";

		async mounted() {
			if (window.location.search == `?replay=${this.lobby.recordingId}`) {
				if (Application.instance?.client?.id != undefined) {
					console.log(`Already have client id, starting replay load immediately`);
					this.joinLobbyReq();
				} else {
					console.log(`Pushed onload request for replay ${this.lobby.recordingId}`);
					Application.instance.on("client_id", () => this.joinLobbyReq());
				}
			}
		}

		async joinLobby() {
			window.location.href += `?replay=${this.lobby.recordingId}`;
			// if (this.joinBtnText != "View") {
			// 	console.warn(`Tried to join lobby ${this.lobby.recordingId} twice`);
			// 	return;
			// }
		}

		async joinLobbyReq() {
			// document.getElementById("start")?.click();
			console.log(`Requesting replay for ${this.lobby.lobbyName} Recording ID: ${this.lobby.recordingId}`);

			this.joinBtnText = "Loading...";
			await Application.instance.replayController.requestReplay(this.lobby.recordingId, n => (this.joinBtnText = `${(n * 100).toFixed(0)}%`));
			this.joinBtnText = "Starting";
			Application.instance.beginReplay(this.lobby.lobbyId);
		}

		parseTime() {
			const totalSeconds = this.lobby.duration / 1000;
			const totalMinutes = totalSeconds / 60;
			const totalHours = totalMinutes / 60;
			const z = (v: number) => (v < 10 ? "0" + Math.floor(v) : Math.floor(v));

			const seconds = z(totalSeconds % 60);
			const minutes = z(totalMinutes % 60);
			const hours = z(totalHours % 60);
			return `${hours}:${minutes}:${seconds}`;
		}

		async download() {
			const req = await fetch(`${API_URL}/replay/recordings/${this.lobby.recordingId}`);
			if (req.status >= 300) {
				alert(`Failed to download replay: ${req.statusText} (${req.status})`);
				return;
			}
			const data = await req.blob();
			const url = window.URL.createObjectURL(data);
			const a = document.createElement("a");
			a.style.display = "none";
			a.download = `${this.lobby.lobbyName}-${new Date(this.lobby.startTime || Date.now()).toISOString()}.vtgr`;
			a.href = url;
			document.body.appendChild(a);
			a.click();
			// console.log(a);
			window.URL.revokeObjectURL(url);
		}

		getDate() {
			return new Date(this.lobby.startTime || Date.now()).toISOString().substring(0, 10);
		}

		getPreviewImageUrl() {
			let wsId = this.lobby.workshopId;
			// Support for old name scheme
			if ("type" in this.lobby) {
				wsId = this.lobby.type as string;
			}

			if (wsId == "built-in" || !wsId || this.lobby.missionInfo?.isBuiltin)
				return `${API_URL}/workshop/preview/${this.lobby.campaignId}/${this.lobby.missionId}`;
			return `${API_URL}/workshop/preview/${wsId}/${this.lobby.missionId}`;
		}
	}
</script>

<style scoped>
.btn-container {
	display: flex;
	flex-direction: column;
	width: 200px;
	height: 100%;
}

.lobby-browser-entry {
	color: white;
	font-family: monospace;
	font-size: 16px;
	/* text-align: center; */
	text-align: left;

	border: 1px white solid;

	padding: 0px;

	margin-left: auto;
	margin-right: auto;
	margin-top: 10px;
	margin-bottom: 10px;

	max-width: 600px;

	display: flex;

	align-items: center;
	justify-content: space-between;

	min-height: 100px;
	max-height: 100px;

	min-width: 600px;
	max-width: 600px;
}

.thumbnail-container-hor {
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;

	min-width: 100px;
	max-width: 100px;
}

.thumbnail-container-vert {
	height: 100%;

	display: flex;
	flex-direction: column;
	justify-content: center;

	max-width: 160px;
}

.thumbnail {
	width: 100px;
	height: 100px;
	object-fit: cover;
	border-right: 1px solid white;
}

.name {
	font-weight: bold;
}

.privLob {
	border-color: red;
}

.long-text {
	display: flex;
	flex-direction: column;

	max-width: 300px;
	min-width: 300px;
	margin-left: 40px;
}

.grey {
	color: grey;
}

.faded {
	filter: grayscale(50%) brightness(50%) saturate(50%);
}

p {
	margin: 0px;
	display: inline;
}

button {
	/* font-weight: bold; */
	font-family: monospace;
	background-color: transparent;
	color: #ffffff;
	border: 1px white solid;
	font-size: 1.2em;

	padding: 15px;

	margin-left: auto;
	margin-right: 25px;

	height: 50px;
	max-height: 50px;
	min-height: 50px;

	min-width: 140px;
	width: 140px;
	max-width: 140px;

	margin-right: 0;

	border-right: 0;
	border-bottom: 0;

	cursor: pointer;
}

button:nth-of-type(1) {
	border-top: 0;
}

button:hover {
	background-color: white;
	color: rgb(41, 41, 41);
}

.disableBtn {
	color: grey;
	border: 1px grey solid;
}

.disableBtn:hover {
	color: grey;
	border: 1px grey solid;
	background-color: transparent;
}
</style>
