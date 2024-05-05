import { UserScopes } from "../../../VTOLLiveViewerCommon/dist/shared.js";
import { COOKIE_DOMAIN, IS_ALPHA, LOGIN_URL, LOGOUT_URL } from "../config.js";
import { Application, ApplicationRunningState } from "../viewer/app.js";
import { eraseCookie, getLoggedInUser, hasPerm, isLoggedIn } from "../viewer/client/cookies.js";
import { Page } from "./page.js";

class WelcomePage extends Page {
	public containerId = "welcome-page";
	public appState = [ApplicationRunningState.welcome];

	public constructor(app: Application) {
		super(app);

		const viewLobbiesButton = document.getElementById("view-lobbies-button") as HTMLDivElement;
		const viewReplaysButton = document.getElementById("view-replays-button") as HTMLDivElement;

		const canAccessLobbies = !IS_ALPHA || hasPerm(UserScopes.ALPHA_ACCESS);
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

			pfpContainer.style.display = "none";

			container.addEventListener("click", () => {
				window.location.assign(LOGIN_URL);
			});
		}
	}
}

export { WelcomePage };
