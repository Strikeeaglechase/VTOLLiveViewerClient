import { LobbyConnectionStatus, RecordedLobbyInfo, VTOLLobby } from "../../../VTOLLiveViewerCommon/dist/shared.js";
import { API_URL } from "../config.js";
import { Application, ApplicationRunningState } from "../viewer/app.js";
import { Page } from "./page.js";

const lobbyEntry = `
<div class="lobby-browser-entry lobby-entry %EntryClass%">
	<div class="thumbnail-container-hor" style="min-width: 160px;max-width: 160px;">
		<div class="thumbnail-container-vert">
			<img class="thumbnail" class="%ThumbnailClass%" src="%PreviewUrl%" onerror="this.src='no_preview.png'" />
		</div>
	</div>

	<div class="long-text" class="%TextClass%">
		<span class="name"> %LobbyName% &nbsp; </span>
		<span class="mission"> %MissionName% &nbsp; </span>
		<span class="players"> %PlayerCount% / %MaxPlayers% </span>
	</div>
	<button class="%ButtonClasses%" style="margin-right: 25px;">
		%JoinButtonText%
	</button>
</div>
`;

const replayEntry = `
<div class="lobby-browser-entry replay-entry" id="%Id%">
	<div class="thumbnail-container-hor" style="min-width: 100px;max-width: 100px;">
		<div class="thumbnail-container-vert">
			<img class="thumbnail" src="%PreviewUrl%" onerror="this.src='no_preview.png'" />
		</div>
	</div>

	<div class="replay-long-text">
		<span class="date">%Date% &nbsp; </span>
		<span class="name">%LobbyName% &nbsp; </span>
		<span class="mission"> %MissionName% &nbsp; </span>
		<span class="time"> %Time% </span>
	</div>
	<div class="btn-container">
		<button class="view-btn replay-button">View</button>
		<button class="download-btn replay-button">Download</button>
	</div>
</div>
`;

const allowedLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ 1234567890[]-_";
const filterStr = (str: string) =>
	str
		?.toString()
		.split("")
		.filter(c => allowedLetters.includes(c))
		.join("");

class LobbySelectPage extends Page {
	public containerId = "lobby-select-container";
	public appState = [ApplicationRunningState.lobbySelect, ApplicationRunningState.replaySelect];

	private lastLobbiesKey = "";
	private hasAddedClientEventHandler = false;

	private replays: RecordedLobbyInfo[] = [];
	private wasReplayMode = false;

	private replayLoadingId: string = null;
	private autoplayReplayId = null;
	private autoplayHasStarted = false;

	constructor(app: Application) {
		super(app);
	}

	public override onShow(): void {
		super.onShow();
		const container = document.getElementById("browser-container");
		container.innerHTML = "";
		this.lastLobbiesKey = "";
		this.replayLoadingId = null;
		this.autoplayHasStarted = false;
		this.autoplayReplayId = null;

		if (this.app.state != ApplicationRunningState.replaySelect) {
			const replaySearchBox = document.getElementById("replay-search");
			replaySearchBox.style.display = "none";
			this.wasReplayMode = false;
		} else {
			const replaySearchBox = document.getElementById("replay-search");
			replaySearchBox.style.display = "";
			this.wasReplayMode = true;

			if (!this.hasAddedClientEventHandler) {
				if (Application.instance.client) {
					this.addClientEventHandler();
					this.requestReplays();
				} else {
					Application.instance.on("client_id", () => {
						this.addClientEventHandler();
						this.requestReplays();
					});
				}
				this.hasAddedClientEventHandler = true;
			} else {
				this.requestReplays();
			}
		}
	}

	private requestReplays() {
		const query = window.location.search;
		if (query.startsWith("?replay=")) {
			const replayId = query.substring(8);
			console.log(`Requesting replay for specific ID: ${replayId}`);
			this.autoplayReplayId = replayId;
			this.autoplayHasStarted = true;
			Application.instance.client.requestReplayLobbies(replayId);
		} else {
			Application.instance.client.requestReplayLobbies(null);
		}
	}

	public override onHide(): void {
		super.onHide();

		if (this.wasReplayMode) Application.instance.client.cancelRequestReplayLobbies();
	}

	private addClientEventHandler() {
		const client = Application.instance.client;
		client.on("replay_lobby_info", (info: RecordedLobbyInfo) => {
			this.replays.push(info);
			this.appendNewReplayInfo(info);
		});
	}

	public override update() {
		if (this.app.state == ApplicationRunningState.lobbySelect) this.updateLobbies();
		else this.updateReplays();
	}

	private getLobbiesToDisplay() {
		const searchValue = (document.getElementById("lobby-search-input") as HTMLInputElement)?.value ?? "";
		const resLobbies = this.app.gameList.slice().sort((a, b) => {
			return b.playerCount - a.playerCount;
		});

		return resLobbies.filter(g => {
			if (!g.name || g.name == "") return false;
			if (searchValue == "") {
				return !g.isPrivate;
			}

			return g.name.toLowerCase().includes(searchValue.toLowerCase()) || g.missionName.toLowerCase().includes(searchValue.toLowerCase());
		});
	}

	private updateLobbies() {
		const lobbies = this.getLobbiesToDisplay();
		const key = lobbies.map(l => `${l.name}-${l.playerCount}-${l.name}-${l.missionName}-${l.readyStatus}`).join(",");
		if (key == this.lastLobbiesKey) return;
		this.lastLobbiesKey = key;

		const container = document.getElementById("browser-container");
		container.innerHTML = "";
		const fragment = document.createDocumentFragment();

		lobbies.forEach(l => {
			const entry = this.createLobbyEntry(l);
			fragment.appendChild(entry);
		});

		container.appendChild(fragment);
	}

	private createLobbyEntry(lobby: VTOLLobby) {
		const text = lobbyEntry
			.replaceAll("%LobbyName%", filterStr(lobby.name))
			.replaceAll("%MissionName%", filterStr(lobby.missionName))
			.replaceAll("%PlayerCount%", lobby.playerCount.toString())
			.replaceAll("%MaxPlayers%", lobby.maxPlayers.toString())
			.replaceAll("%PreviewUrl%", this.getLobbyPreviewImageUrl(lobby))
			.replaceAll("%EntryClass%", lobby.isPrivate ? "privLob" : "")
			.replaceAll("%TextClass%", lobby.playerCount >= lobby.maxPlayers ? "grey" : "")
			.replaceAll("%ThumbnailClass%", lobby.playerCount >= lobby.maxPlayers ? "faded" : "")
			.replaceAll("%ButtonClasses%", lobby.playerCount >= lobby.maxPlayers || lobby.readyStatus == 1 ? "disableBtn" : "")
			.replaceAll("%JoinButtonText%", lobby.readyStatus == 0 ? "Join" : "Invl Mission");

		const div = document.createElement("div");
		div.innerHTML = text;

		const button = div.querySelector("button");

		button.addEventListener("click", () => {
			this.joinLobby(lobby, div);
		});

		return div;
	}

	private appendNewReplayInfo(info: RecordedLobbyInfo) {
		const date = new Date(info.startTime || Date.now()).toISOString().substring(0, 10);
		const totalSeconds = info.duration / 1000;
		const totalMinutes = totalSeconds / 60;
		const totalHours = totalMinutes / 60;
		const z = (v: number) => (v < 10 ? "0" + Math.floor(v) : Math.floor(v));

		const seconds = z(totalSeconds % 60);
		const minutes = z(totalMinutes % 60);
		const hours = z(totalHours % 60);
		const time = `${hours}:${minutes}:${seconds}`;

		const text = replayEntry
			.replaceAll("%PreviewUrl%", this.getReplayPreviewImageUrl(info))
			.replaceAll("%LobbyName%", filterStr(info.lobbyName))
			.replaceAll("%MissionName%", filterStr(info.missionName))
			.replaceAll("%Time%", time)
			.replaceAll("%Date%", date)
			.replaceAll("%Id%", `recording-${info.recordingId}`);

		const div = document.createElement("div");
		div.innerHTML = text;

		const viewBtn = div.querySelector(".view-btn") as HTMLButtonElement;
		const downloadBtn = div.querySelector(".download-btn") as HTMLButtonElement;

		viewBtn.addEventListener("click", async () => await this.loadReplay(info, viewBtn));
		if (this.autoplayReplayId == info.recordingId) this.loadReplay(info, viewBtn);

		downloadBtn.addEventListener("click", async () => {
			const dlName = `${info.lobbyName}-${new Date(info.startTime || Date.now()).toISOString()}.vtgr`;
			const url = `${API_URL}/replay/recordings/${info.recordingId}/${encodeURIComponent(dlName)}`;
			window.open(url, "_blank").focus();
		});

		const container = document.getElementById("browser-container");
		container.appendChild(div);
	}

	private async loadReplay(info: RecordedLobbyInfo, btn: HTMLButtonElement) {
		await Application.instance.replayController.requestReplay(info.recordingId, n => (btn.innerText = `${(n * 100).toFixed(0)}%`));
		Application.instance.beginReplay(info.lobbyId);
		this.replayLoadingId = info.recordingId;
		window.history.pushState({}, "", `/replay?replay=${info.recordingId}`);
	}

	private joinLobby(lobby: VTOLLobby, div: HTMLDivElement) {
		const button = div.querySelector("button");
		console.log(`Joining lobby ${lobby.id}`);
		if (lobby.state == LobbyConnectionStatus.Connected) {
			Application.instance.subscribe(lobby);
		}

		lobby.state = LobbyConnectionStatus.Connecting;
		button.innerText = "Connecting...";
		if (lobby.isPrivate) {
			const password = prompt("Enter password");
			if (!password) return;
			Application.instance.requestJoinPrivateLobby(lobby.id, password);
		} else {
			Application.instance.requestJoinLobby(lobby.id);
		}
		const connRes = lobby.waitForConnectionResult();
		connRes.then(({ status, reason }) => {
			if (status == LobbyConnectionStatus.Connected) {
				Application.instance.subscribe(lobby);
			} else if (status == LobbyConnectionStatus.Invalid) {
				button.innerText = reason;
				setTimeout(() => {
					button.innerText = "Join";
					lobby.state = LobbyConnectionStatus.None;
				}, 3000);
			}
		});
	}

	private getLobbyPreviewImageUrl(lobby: VTOLLobby) {
		if (!lobby.mission) return "no_preview.png";

		if (lobby.mission.isBuiltin) return `${API_URL}/workshop/preview/${lobby.mission.campaignId}/${lobby.mission.id}`;
		return `${API_URL}/workshop/preview/${lobby.mission.workshopId}/${lobby.mission.id}`;
	}

	private getReplayPreviewImageUrl(info: RecordedLobbyInfo) {
		let wsId = info.workshopId;
		// Support for old name scheme
		if ("type" in info) {
			wsId = info.type as string;
		}

		if (wsId == "built-in" || !wsId || info.missionInfo?.isBuiltin) return `${API_URL}/workshop/preview/${info.campaignId}/${info.missionId}`;
		return `${API_URL}/workshop/preview/${wsId}/${info.missionId}`;
	}

	private updateReplays() {
		const userSearchStr = (document.getElementById("user-search-input") as HTMLInputElement)?.value ?? "";
		const searchStr = (document.getElementById("lobby-search-input") as HTMLInputElement)?.value ?? "";

		this.replays.forEach(info => {
			let shouldBeShown = true;
			if (this.replayLoadingId != null && this.replayLoadingId != info.recordingId) {
				shouldBeShown = false;
			}

			if (userSearchStr) {
				if (!info.metadata) return false;
				const playerIsInLobby = info.metadata.players.some(p => {
					if (!p.name) return false;
					return p.name.toLowerCase().includes(userSearchStr.toLowerCase());
				});
				if (!playerIsInLobby) shouldBeShown = false;
			}

			if (searchStr) {
				const lobbyNameMatch = info.lobbyName?.toString().toLowerCase().includes(searchStr.toLowerCase());
				const missionNameMatch = info.missionName?.toString().toLowerCase()?.includes(searchStr.toLowerCase());
				if (!lobbyNameMatch && !missionNameMatch) shouldBeShown = false;
			}

			const div = document.getElementById(`recording-${info.recordingId}`);
			if (!div) return;
			if (shouldBeShown && div.style.display == "none") div.style.display = "";
			if (!shouldBeShown && div.style.display != "none") div.style.display = "none";
		});

		if (!this.autoplayHasStarted && window.location.search.startsWith("?replay=")) {
			this.autoplayHasStarted = true;
			const replayId = window.location.search.substring(8);
			const replay = this.replays.find(r => r.recordingId == replayId);
			if (replay) {
				const div = document.getElementById(`recording-${replayId}`);
				const btn = div.querySelector(".view-btn") as HTMLButtonElement;
				this.loadReplay(replay, btn);
			}
		}
	}
}

export { LobbySelectPage };
