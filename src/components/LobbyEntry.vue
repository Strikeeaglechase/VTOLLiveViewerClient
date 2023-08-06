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
			<span class="name">{{ lobby.name }} &nbsp; </span>
			<span class="mission"> {{ lobby.missionName }} &nbsp; </span>
			<span class="players">
				{{ lobby.playerCount }} / {{ lobby.maxPlayers }}
			</span>
		</div>
		<button
			v-on:click="joinLobby()"
			:class="{ disableBtn: lobby.playerCount >= lobby.maxPlayers }"
		>
			{{ joinBtnText }}
		</button>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from "vue-property-decorator";
	import {
		LobbyConnectionStatus,
		VTOLLobby,
	} from "../../../VTOLLiveViewerCommon/dist/src/shared";
	import { API_URL } from "../config";
	import { Application } from "../viewer/app";

	@Component({ components: {} })
	export default class LobbyEntry extends Vue {
		@Prop()
		lobby!: VTOLLobby;

		joinBtnText = "Join";

		joinLobby() {
			console.log(`Joining lobby ${this.lobby.id}`);
			if (this.lobby.state == LobbyConnectionStatus.Connected) {
				Application.instance.subscribe(this.lobby);
			}

			this.lobby.state = LobbyConnectionStatus.Connecting;
			this.joinBtnText = "Connecting...";
			if (this.lobby.isPrivate) {
				const password = prompt("Enter password");
				if (!password) return;
				Application.instance.requestJoinPrivateLobby(
					this.lobby.id,
					password
				);
			} else {
				Application.instance.requestJoinLobby(this.lobby.id);
			}
			const connRes = this.lobby.waitForConnectionResult();
			connRes.then(({ status, reason }) => {
				if (status == LobbyConnectionStatus.Connected) {
					Application.instance.subscribe(this.lobby);
				} else if (status == LobbyConnectionStatus.Invalid) {
					this.joinBtnText = reason;
					setTimeout(() => {
						this.joinBtnText = "Join";
						this.lobby.state = LobbyConnectionStatus.None;
					}, 3000);
				}
			});
			// Application.instance.subscribe(this.lobby);
		}

		getPreviewImageUrl() {
			if (!this.lobby.mission)
				return "https://cdn.discordapp.com/attachments/764631819642863626/997338764198297670/no_preview.png";

			if (this.lobby.mission.isBuiltin)
				return `${API_URL}/workshop/previewBuiltin/${this.lobby.mission.campaignId}/${this.lobby.mission.id}`;
			return `${API_URL}/workshop/preview/${this.lobby.mission.workshopId}/${this.lobby.mission.id}`;
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

	cursor: pointer;
}

button:hover {
	background-color: white;
	color: rgb(41, 41, 41);
}

.disableBtn {
	color: grey;
	border: 1px grey solid;
	cursor: auto;
}

.disableBtn:hover {
	color: grey;
	border: 1px grey solid;
	background-color: transparent;
}
</style>
