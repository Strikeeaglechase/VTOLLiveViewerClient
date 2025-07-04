import { UserScopes } from "../../../VTOLLiveViewerCommon/dist/shared.js";
import { COOKIE_DOMAIN, IS_ALPHA, IS_ELECTRON, LOGIN_URL, LOGOUT_URL } from "../config.js";
import { Application, ApplicationRunningState } from "../viewer/app.js";
import { eraseCookie, getLoggedInUser, hasPerm, isLoggedIn } from "../viewer/client/cookies.js";
import { LocalVTGRFile } from "../viewer/localVTGRHandler.js";
import { Page } from "./page.js";

class WelcomePage extends Page {
	public containerId = "welcome-page";
	public appState = [ApplicationRunningState.welcome];
	private startedLoadingLocalReplay = false;

	public constructor(app: Application) {
		super(app);

		const viewLobbiesButton = document.getElementById("view-lobbies-button") as HTMLDivElement;
		const viewReplaysButton = document.getElementById("view-replays-button") as HTMLDivElement;
		const loadLocalReplayButton = document.getElementById("load-local-replay-button") as HTMLDivElement;

		const canAccessLobbies = !IS_ALPHA || hasPerm(UserScopes.ALPHA_ACCESS) || hasPerm(UserScopes.DONOR);
		if (!canAccessLobbies) {
			viewLobbiesButton.classList.add("greyout-wrapper");
			viewLobbiesButton.children[0].classList.add("greyout");
		}

		viewLobbiesButton.onclick = () => {
			if (canAccessLobbies) {
				Application.setState(ApplicationRunningState.lobbySelect);
			}
		};

		viewReplaysButton.onclick = () => {
			Application.setState(ApplicationRunningState.replaySelect);
		};

		loadLocalReplayButton.onclick = e => {
			if (this.startedLoadingLocalReplay) return;
			const input = document.getElementById("upload-hidden-input") as HTMLInputElement;
			input.click();
			e.preventDefault();

			input.onchange = async () => {
				const file = input.files?.[0];
				if (!file) return;

				try {
					this.startedLoadingLocalReplay = true;
					const vtgr = await LocalVTGRFile.loadFromFile(file);
					this.app.localVtgrFile = vtgr;

					vtgr.start();
				} catch (err) {
					console.error("Error handling VTGR file:", err);
					alert(`Error loading VTGR file: ${err}`);
					this.startedLoadingLocalReplay = false;
				}
			};
		};

		if (IS_ELECTRON) {
			viewLobbiesButton.style.display = "none";
			viewReplaysButton.style.display = "none";
			loadLocalReplayButton.style.display = "block";
		}

		if (isLoggedIn()) {
			const container = document.getElementById("steam-login-container") as HTMLDivElement;
			const loginButton = document.getElementById("steam-login-button") as HTMLDivElement;
			loginButton.style.display = "none";

			const user = getLoggedInUser();
			const pfp = document.getElementById("steam-pfp") as HTMLImageElement;
			pfp.src = user.pfpUrl;

			const name = document.getElementById("steam-username") as HTMLParagraphElement;
			name.innerText = user.username;

			container.addEventListener("click", () => {
				eraseCookie("user_token", COOKIE_DOMAIN);
				window.location.assign(LOGOUT_URL);
			});
		} else {
			const container = document.getElementById("steam-login-container") as HTMLDivElement;
			const pfpContainer = document.getElementById("steam-pfp-container") as HTMLDivElement;

			if (IS_ELECTRON) container.style.display = "none";

			pfpContainer.style.display = "none";

			container.addEventListener("click", () => {
				window.location.assign(LOGIN_URL);
			});
		}
	}
}

export { WelcomePage };
