import { RecordedLobbyInfo } from "../../../VTOLLiveViewerCommon/dist/shared.js";
import { API_URL } from "../config.js";
import { Application, ApplicationRunningState } from "../viewer/app.js";
import { Page } from "./page.js";

class ReplaySelectPage extends Page {
	public containerId = "replay-select-container";
	public appState = [ApplicationRunningState.replaySelect];

	private hasAddedClientEventHandler = false;
	private replayLoadingId: string = null;
	private autoplayReplayId = null;
	private autoplayHasStarted = false;
	private replays: RecordedLobbyInfo[] = [];
	private loadedReplays = new Set<string>();

	constructor(app: Application) {
		super(app);

		document.getElementById("replay-update-button").addEventListener("click", () => {
			this.requestReplays();
		});
	}

	private getFilterParams() {
		const userSearchStr = (document.getElementById("replay-user-search-input") as HTMLInputElement)?.value || null;
		const searchStr = (document.getElementById("replay-lobby-search-input") as HTMLInputElement)?.value || null;
		const hostSearchStr = (document.getElementById("replay-host-search-input") as HTMLInputElement)?.value || null;

		const lowerDateStr = (document.getElementById("replay-date-lower") as HTMLInputElement)?.value || null;
		const upperDateStr = (document.getElementById("replay-date-upper") as HTMLInputElement)?.value || null;
		let lowerDateBound = lowerDateStr ? new Date(lowerDateStr).getTime() : -Infinity;
		let upperDateBound = upperDateStr ? new Date(upperDateStr).getTime() : Infinity;

		return { userSearchStr, searchStr, hostSearchStr, lowerDateBound, upperDateBound };
	}

	public override onShow(): void {
		super.onShow();
		this.replayLoadingId = null;
		this.autoplayHasStarted = false;
		this.autoplayReplayId = null;

		const replaySearchBox = document.getElementById("replay-search");
		replaySearchBox.style.display = "";

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

	private addClientEventHandler() {
		const client = Application.instance.client;
		client.on("replay_lobby_info", (info: RecordedLobbyInfo) => {
			this.replays.push(info);
			this.appendNewReplayInfo(info);
		});
	}

	private requestReplays() {
		let urlParams = new URLSearchParams(window.location.search);
		if (urlParams.has("replay")) {
			const replayId = urlParams.get("replay");
			console.log(`Requesting replay for specific ID: ${replayId}`);
			this.autoplayReplayId = replayId;
			this.autoplayHasStarted = true;
			Application.instance.client.requestReplayLobbies(replayId, null, null, null, -Infinity, Infinity);
		} else {
			const { userSearchStr, searchStr, hostSearchStr, lowerDateBound, upperDateBound } = this.getFilterParams();

			Application.instance.client.requestReplayLobbies(null, searchStr, userSearchStr, hostSearchStr, lowerDateBound, upperDateBound);
		}
	}

	private appendNewReplayInfo(info: RecordedLobbyInfo) {
		if (this.loadedReplays.has(info.recordingId)) return;
		this.loadedReplays.add(info.recordingId);

		const date = new Date(info.startTime || Date.now()).toISOString();
		const dayStr = date.substring(0, 10);
		const timeStr = date.substring(11, 16);

		const totalSeconds = info.duration / 1000;
		const totalMinutes = totalSeconds / 60;
		const totalHours = totalMinutes / 60;
		const z = (v: number) => (v < 10 ? "0" + Math.floor(v) : Math.floor(v));

		const seconds = z(totalSeconds % 60);
		const minutes = z(totalMinutes % 60);
		const hours = z(totalHours % 60);
		const time = `${hours}:${minutes}:${seconds}`;

		const tbody = document.getElementById("replay-table-body");
		const tr = document.createElement("tr");
		tr.id = `recording-${info.recordingId}`;
		const td = (text: string) => {
			const td = document.createElement("td");
			td.innerText = text;
			tr.appendChild(td);
		};

		td(info.lobbyName);
		td(info.hostName ?? "");
		td(info.missionName);
		td(dayStr + " " + timeStr);
		td(time);

		const downloadButton = document.createElement("img");
		downloadButton.src = "./assets/DownloadIcon.png";
		downloadButton.classList.add("downloadBtn");

		downloadButton.addEventListener("click", async () => {
			const dlName = `${info.lobbyName}-${new Date(info.startTime || Date.now()).toISOString()}.vtgr`;
			const url = `${API_URL}/replay/recordings/${info.recordingId}/${encodeURIComponent(dlName)}`;
			window.open(url, "_blank").focus();
		});

		const downloadTd = document.createElement("td");
		downloadTd.appendChild(downloadButton);
		tr.appendChild(downloadTd);

		tr.addEventListener("click", async () => await this.loadReplay(info));
		if (this.autoplayReplayId == info.recordingId) this.loadReplay(info);

		tbody.appendChild(tr);
	}

	private async loadReplay(info: RecordedLobbyInfo) {
		const app = Application.instance;
		// Cancel running requests and stop live game data
		app.client.cancelRequestReplayLobbies();

		this.replayLoadingId = info.recordingId;
		// Update URL if this is not an autoplayed replay
		if (!this.autoplayHasStarted) {
			window.history.pushState({}, "", `/replay?replay=${info.recordingId}`);
		}

		// Begin fetch, and start replay after sufficiently buffered
		const loadingPrec = document.getElementById("replayLoadingPrec");
		loadingPrec.style.display = "block";
		await app.replayController.requestReplay(info.recordingId, n => (loadingPrec.innerText = `Loading ${(n * 100).toFixed(0)}%`));
		app.beginReplay(info.lobbyId);
	}

	public override onHide(): void {
		super.onHide();
		const container = document.getElementById("replay-table-body");
		container.innerHTML = "";

		Application.instance.client.cancelRequestReplayLobbies();
	}

	public override update() {
		const { userSearchStr, searchStr, hostSearchStr, lowerDateBound, upperDateBound } = this.getFilterParams();

		this.replays.forEach(info => {
			let shouldBeShown = true;
			if (this.replayLoadingId != null && this.replayLoadingId != info.recordingId) {
				shouldBeShown = false;
			}

			if (userSearchStr) {
				if (!info.metadata) shouldBeShown = false;
				else {
					const playerIsInLobby = info.metadata.players.some(p => {
						if (!p.name) return false;
						return p.name.toLowerCase().includes(userSearchStr);
					});
					if (!playerIsInLobby) shouldBeShown = false;
				}
			}

			if (searchStr) {
				const lobbyNameMatch = info.lobbyName?.toString().toLowerCase().includes(searchStr);
				const missionNameMatch = info.missionName?.toString().toLowerCase()?.includes(searchStr);
				const dateMatch = new Date(info.startTime || Date.now()).toISOString().includes(searchStr);
				if (!lobbyNameMatch && !missionNameMatch && !dateMatch) shouldBeShown = false;
			}

			if (hostSearchStr) {
				if (!info.hostName) shouldBeShown = false;
				else if (!info.hostName.toLowerCase().includes(hostSearchStr)) shouldBeShown = false;
			}

			const startTime = info.startTime || Date.now();
			if (startTime < lowerDateBound || startTime > upperDateBound) shouldBeShown = false;

			const div = document.getElementById(`recording-${info.recordingId}`);
			if (!div) return;
			if (shouldBeShown && div.style.display == "none") div.style.display = "";
			if (!shouldBeShown && div.style.display != "none") div.style.display = "none";
		});

		let urlParams = new URLSearchParams(window.location.search);
		if (!this.autoplayHasStarted && urlParams.has("replay") && !this.replayLoadingId) {
			this.autoplayHasStarted = true;
			const replayId = urlParams.get("replay");
			const replay = this.replays.find(r => r.recordingId == replayId);
			if (replay) this.loadReplay(replay);
		}
	}
}

export { ReplaySelectPage };
