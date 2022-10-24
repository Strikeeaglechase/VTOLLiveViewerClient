<template>
	<div class="lobby-browser-entry" :class="{ privLob: lobby.isPrivate }">
		<div class="thumbnail-container-hor">
			<div class="thumbnail-container-vert">
				<img
					class="thumbnail"
					:class="{ faded: lobby.playerCount >= lobby.maxPlayers }"
					:src="getPreviewImageUrl()"
					onerror="this.src='https://cdn.discordapp.com/attachments/764631819642863626/997338764198297670/no_preview.png'"
				/>
			</div>
		</div>

		<div
			class="long-text"
			:class="{ grey: lobby.playerCount >= lobby.maxPlayers }"
		>
			<span class="date">{{ getDate() }} &nbsp; </span>
			<span class="name">{{ lobby.lobbyName }} &nbsp; </span>
			<span class="mission"> {{ lobby.missionName }} &nbsp; </span>
			<span class="time">
				{{ parseTime(lobby.time) }}
			</span>
		</div>
		<button v-on:click="joinLobby()" style="margin-right: 0px">
			{{ joinBtnText }}
		</button>
		<button v-on:click="download()">Download</button>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";
	import {
		LobbyConnectionStatus,
		RecordedLobbyInfo,
		VTOLLobby,
	} from "../../../VTOLLiveViewerCommon/dist/src/shared";
	import { API_URL } from "../config";
	import { Application } from "../viewer/app";

	@Component({ components: {} })
	export default class RecordedLobbyEntry extends Vue {
		@Prop()
		lobby!: RecordedLobbyInfo;

		joinBtnText = "View";

		async joinLobby() {
			if (this.joinBtnText != "View") {
				console.warn(`Tried to join lobby ${this.lobby.lobbyId} twice`);
				return;
			}

			console.log(
				`Requesting replay for ${this.lobby.lobbyName} Recording ID: ${this.lobby.recordingId}`
			);

			this.joinBtnText = "Loading...";
			await Application.instance.requestReplay(
				this.lobby.recordingId,
				(n) => (this.joinBtnText = `${(n * 100).toFixed(0)}%`)
			);
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
			const req = await fetch(`${API_URL}/recordings/${this.lobby.lobbyId}`);
			const data = await req.blob();
			const url = window.URL.createObjectURL(data);
			const a = document.createElement("a");
			a.style.display = "none";
			a.download = `${this.lobby.lobbyName}-${new Date(
				this.lobby.startTime || Date.now()
			).toISOString()}.vtgr`;
			a.href = url;
			document.body.appendChild(a);
			a.click();
			window.URL.revokeObjectURL(url);
		}

		getDate() {
			return new Date(this.lobby.startTime || Date.now())
				.toISOString()
				.substring(0, 10);
		}

		getPreviewImageUrl() {
			// if (!this.lobby.mission)
			// 	return "https://cdn.discordapp.com/attachments/764631819642863626/997338764198297670/no_preview.png";

			if (this.lobby.type == "built-in")
				return `${API_URL}/previewBuiltin/${this.lobby.campaignId}/${this.lobby.missionId}`;
			return `${API_URL}/preview/${this.lobby.campaignId}/${this.lobby.missionId}`;
		}
	}
</script>

<style scoped>
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

	min-width: 160px;
	max-width: 160px;
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

	margin-left: 10px;
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
