import { Application, ApplicationRunningState } from "../viewer/app.js";
import { LobbySelectPage } from "./lobbySelectPage.js";
import { Page } from "./page.js";
import { ReplaySelectPage } from "./replaySelectPage.js";
import { RunningPage } from "./runningPage.js";
import { WelcomePage } from "./welcomePage.js";

class ComponentManager {
	public pages: Page[] = [];

	constructor(public app: Application) {
		this.pages.push(new RunningPage(app));
		this.pages.push(new LobbySelectPage(app));
		this.pages.push(new ReplaySelectPage(app));
		this.pages.push(new WelcomePage(app));

		app.on("running_state", (rs: ApplicationRunningState) => {
			this.updateVisiblePageForState(rs);
		});

		this.updateVisiblePageForState(app.state);
	}

	public update() {
		this.pages.forEach(page => {
			if (page.isActive) {
				page.update();
			}
		});
	}

	private updateVisiblePageForState(rs: ApplicationRunningState) {
		console.log(`Checking page visibility for app state ${rs}`);
		this.pages.forEach(page => {
			const shouldPageBeVisible = page.appState.includes(rs);
			if (shouldPageBeVisible && !page.isActive) {
				page.isActive = true;
				page.onShow();

				console.log(`New app state ${rs} showing page ${page.containerId}`);
			}

			if (!shouldPageBeVisible && page.isActive) {
				page.isActive = false;
				page.onHide();

				console.log(`New app state ${rs} hiding page ${page.containerId}`);
			}
		});
	}
}

export { ComponentManager };
