import { Team } from "../../../VTOLLiveViewerCommon/dist/shared.js";
import { addCommas, Application, ApplicationRunningState, deg, ftToMi, msToKnots, mToFt } from "../viewer/app.js";
import { MissileEntity } from "../viewer/entities/genericMissileEntity.js";
import { PlayerVehicle } from "../viewer/entities/playerVehicle.js";
import { Entity } from "../viewer/entityBase/entity.js";
import { ISetting, Settings, SettingType } from "../viewer/settings.js";
import { Page } from "./page.js";

const closure = (main: Entity, target: Entity) => {
	const tmp = main.position.subtract(target.position);
	const rVel = main.velocity.subtract(target.velocity);
	return -rVel.dot(tmp) / tmp.length();
};

const bearing = (a: Entity, b: Entity) => {
	const delta = a.position.subtract(b.position);
	delta.y = 0;
	const angles = delta.toAngles();
	let bearing = Math.floor(deg(angles.theta)) + 90;
	if (bearing < 0) bearing += 360;
	return bearing;
};

const range = (a: Entity, b: Entity) => ftToMi(mToFt(a.position.distanceTo(b.position)));

class RunningPage extends Page {
	public containerId = "main-container";
	public appState = [ApplicationRunningState.running, ApplicationRunningState.lobbyEnd];

	private previousSidebarIdsKey = "";

	private settingsVisible = false;
	private equipsVisible = false;
	private logVisible = true;

	private hasActiveSpeedTimeout = false;
	private speedTimeout = 0;
	private previousSpeed = 0;

	constructor(app: Application) {
		super(app);
		const settingsBtn = document.getElementById("settings-popout-btn");
		settingsBtn.addEventListener("click", () => this.toggleSettingsVisible());

		const equipsBtn = document.getElementById("equips-popout-btn");
		equipsBtn.addEventListener("click", () => this.toggleEquipsVisible());

		const toggleLogBtn = document.getElementById("toggle-log-btn");
		toggleLogBtn.addEventListener("click", () => this.toggleLogVisible());

		app.on("log_message", (m: string) => {
			const logContainer = document.getElementById("log-panel");
			const log = document.createElement("p");
			log.innerText = m;
			log.classList.add("log-message");
			logContainer.appendChild(log);
			logContainer.scrollTop = logContainer.scrollHeight;
		});

		this.createSettingsOptions();
	}

	public override update() {
		this.updateSidebarEntityList();
		this.updateUnitRangeList();
		this.updateEquipsList();
		this.updateReplaySpeedText();
	}

	private toggleSettingsVisible() {
		this.settingsVisible = !this.settingsVisible;

		const settingsContainer = document.getElementById("settings-parent");
		if (this.settingsVisible) {
			settingsContainer.style.display = "flex";
		} else {
			settingsContainer.style.display = "none";
		}
	}

	private createSettingsOptions() {
		const container = document.getElementById("settings-container");
		Settings.settings.forEach(setting => {
			this.createSettingFor(setting, container);
		});
	}

	private createSettingFor(setting: ISetting, container: HTMLElement) {
		const div = document.createElement("div");
		div.classList.add("settings-entry");
		const p = document.createElement("p");
		p.innerText = setting.name;
		p.classList.add("settings-entry-text");
		div.appendChild(p);

		switch (setting.type) {
			case SettingType.Dropdown:
				const select = document.createElement("select");
				select.classList.add("settings-select");
				select.addEventListener("change", e => this.onSettingsUpdate(setting, e));

				const s = Settings.getOptions(setting.name) as string[];
				s.forEach(option => {
					const opt = document.createElement("option");
					opt.value = option;
					opt.innerText = option;
					opt.selected = option == Settings.get(setting.name);
					select.appendChild(opt);
				});

				div.appendChild(select);
				break;

			case SettingType.Slider:
				const slider = document.createElement("input");
				slider.classList.add("settings-slider");
				slider.type = "range";
				slider.min = setting.minimum.toString();
				slider.max = setting.maximum.toString();
				slider.step = "1";
				slider.value = Settings.get(setting.name);
				slider.addEventListener("input", e => this.onSettingsUpdate(setting, e));

				div.appendChild(slider);
				break;
		}

		container.appendChild(div);
	}

	private onSettingsUpdate(setting: ISetting, ev: Event) {
		const val = (ev.target as HTMLSelectElement).value;
		Settings.set(setting.name, val);
	}

	private toggleLogVisible() {
		this.logVisible = !this.logVisible;

		const logToggleBtn = document.getElementById("toggle-log-btn");
		const logContainer = document.getElementById("log-panel");
		if (this.logVisible) {
			logToggleBtn.style.marginLeft = "300px";
			logContainer.style.display = "block";
		} else {
			logToggleBtn.style.marginLeft = "0px";
			logContainer.style.display = "none";
		}
	}

	private updateReplaySpeedText() {
		const replaySpeedContainer = document.getElementById("replay-speed-container");
		if (!this.app.isReplay) {
			if (!replaySpeedContainer.classList.contains("speed-hidden")) {
				replaySpeedContainer.classList.add("speed-hidden");
			}
			return;
		}

		const speed = Math.abs(this.app.replayController.computedReplaySpeed);
		if (speed != this.previousSpeed) {
			replaySpeedContainer.classList.remove("speed-hidden");
			this.previousSpeed = speed;
			if (this.hasActiveSpeedTimeout) {
				clearTimeout(this.speedTimeout);
				this.hasActiveSpeedTimeout = false;
			}
		} else if (!this.hasActiveSpeedTimeout) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			this.speedTimeout = setTimeout(() => {
				replaySpeedContainer.classList.add("speed-hidden");
				this.hasActiveSpeedTimeout = false;
			}, 2500);
			this.hasActiveSpeedTimeout = true;
		}

		const sign = this.app.replayController.computedReplaySpeed < 0 ? "-" : "";

		let speedStr = "";
		if (speed < 1 && speed != 0) {
			const dom = Math.round(1 / speed);
			speedStr = `${sign}1/${dom}x`;
		} else {
			speedStr = `${sign}${speed}x`;
		}

		const time = new Date(this.app.time + this.app.replayController.replayStartTime);
		const z = (v: number) => (v < 10 ? "0" + Math.floor(v) : Math.floor(v));
		const minutes = z(time.getMinutes());
		const hours = z(time.getHours());

		const durationSeconds = this.app.time / 1000;
		const durationMinutes = durationSeconds / 60;
		const formattedDurSecs = z(durationSeconds % 60);
		const formattedDurMins = z(durationMinutes % 60);
		// const totalHours = totalMinutes / 60;

		const timeStr = `${hours}:${minutes} (${formattedDurMins}:${formattedDurSecs})`;

		document.getElementById("replay-speed-text").innerText = speedStr;
		document.getElementById("replay-time-text").innerText = timeStr;
	}

	private toggleEquipsVisible() {
		this.equipsVisible = !this.equipsVisible;

		const equipsContainer = document.getElementById("equips-container");
		if (this.equipsVisible) {
			equipsContainer.classList.remove("hidden");
			equipsContainer.classList.add("shown");
		} else {
			equipsContainer.classList.remove("shown");
			equipsContainer.classList.add("hidden");
		}
	}

	private updateEquipsList() {
		const equipsVisibleButton = document.getElementById("equips-popout-btn");
		if (this.app.currentFocus == null && equipsVisibleButton.style.display != "none") {
			equipsVisibleButton.style.display = "none";
		}

		if (this.app.currentFocus != null && equipsVisibleButton.style.display != "block") {
			equipsVisibleButton.style.display = "block";
		}

		const missiles = this.app.currentFocus?.equipManager?.getWeapons() ?? "";
		const equips = this.app.currentFocus?.equipManager?.getEquips() ?? "";
		const fuel = Math.round((this.app.currentFocus?.equipManager?.getFuel() ?? 0) * 100);

		document.getElementById("equip-missiles").innerText = `Missiles: ${missiles}`;
		document.getElementById("equip-equipment").innerText = `Equipment: ${equips}`;
		document.getElementById("equip-fuel").innerText = `Fuel: ${fuel}%`;
	}

	private updateUnitRangeList() {
		if (this.app.currentFocus) {
			const fd = document.getElementById("current-focus-data");
			const f = this.app.currentFocus;
			fd.innerText = `${f.owner.pilotName} [${f.displayName}] A: ${addCommas(Math.floor(mToFt(f.position.y)))}ft H: ${Math.abs(
				Math.floor(deg(f.rotation.y))
			)} S: ${Math.floor(msToKnots(f.velocity.length()))}kt G: ${f.gForce.toFixed(1)} / ${f.maxGForce.toFixed(1)}`;
		}

		const dataEntities = this.getUnitRangeListEntities();
		const container = document.getElementById("unit-data-entities");
		const documentFragment = document.createDocumentFragment();
		dataEntities.forEach(e => {
			const entityDiv = document.createElement("div");
			const p = document.createElement("p");
			if (e.isLockingUs) entityDiv.classList.add("lockedBy");
			if (e.isLocking) entityDiv.classList.add("isLocking");

			p.innerText = `${e.entity.owner.pilotName} [${e.entity.displayName}] B: ${bearing(this.app.currentFocus, e.entity)} R: ${Math.round(
				range(this.app.currentFocus, e.entity)
			)}nm A: ${addCommas(Math.floor(mToFt(e.entity.position.y)))}ft vC: ${Math.floor(msToKnots(closure(this.app.currentFocus, e.entity)))}kt`;
		});

		container.innerHTML = "";
		container.appendChild(documentFragment);
	}

	private getUnitRangeListEntities(): { entity: Entity; isLockingUs: boolean; isLocking: boolean }[] {
		if (this.app.entities.length == 0) return [];
		if (this.app.currentFocus == null) return [];

		const focus = this.app.currentFocus;

		const valid = this.app.entities.filter(entity => {
			// If showInBra and on other team
			if (entity.showInBra && entity.team != focus.team) return true;

			// If focus is locked onto them
			if (focus instanceof PlayerVehicle && focus.lockLine?.isLockedTo(entity)) return true;

			// If they are locked onto focus
			if (entity instanceof PlayerVehicle && entity.lockLine?.isLockedTo(focus)) return true;
			return false;
		});

		const distCache: Record<string, number> = {};
		return valid
			.sort((a, b) => {
				let d1 = distCache[a.id] ? distCache[a.id] : a.position.distanceTo(focus.position);
				let d2 = distCache[b.id] ? distCache[b.id] : b.position.distanceTo(focus.position);
				distCache[a.id] = d1;
				distCache[b.id] = d2;

				// return this.entityDists[a.id]?.dist - this.entityDists[b.id]?.dist;
				return d1 - d2;
			})
			.map(entity => {
				return {
					entity: entity,
					isLockingUs: entity instanceof PlayerVehicle && entity.lockLine?.isLockedTo(focus),
					isLocking: focus instanceof PlayerVehicle && focus.lockLine?.isLockedTo(entity)
				};
			});
	}

	private updateSidebarEntityList() {
		const entities = this.app.entities.filter(e => this.shouldEntityBeShownOnSidebar(e)).sort(this.compareSidebarEntities);
		const newKey = entities.map(e => `${e.id}-${e.owner.pilotName}-${e.team}-${e.isFocus}`).join(",");
		if (newKey === this.previousSidebarIdsKey) return;
		this.previousSidebarIdsKey = newKey;

		const parentElm = document.getElementById("sidebar-entity-list");
		const documentFragment = document.createDocumentFragment();

		entities.forEach(e => {
			const entityDiv = document.createElement("div");
			entityDiv.classList.add("entity");
			if (e.team == Team.A) entityDiv.classList.add("team-a");
			if (e.team == Team.B) entityDiv.classList.add("team-b");
			if (e.isFocus) entityDiv.classList.add("thick-border");

			entityDiv.id = `sidebar-entity-${e.id}`;

			const entityText = document.createElement("p");
			entityText.innerText = `${e.owner.pilotName} (${e.displayName})`;
			entityDiv.appendChild(entityText);

			entityDiv.onclick = () => e.focus();

			documentFragment.appendChild(entityDiv);
		});

		parentElm.innerHTML = "";
		parentElm.appendChild(documentFragment);
	}

	private shouldEntityBeShownOnSidebar(e: Entity) {
		if (e instanceof MissileEntity) return false;
		if (!e.isActive) return false;
		if (e.showInSidebar) return true;
		if (e.isFocus) return true;

		return false;
	}

	private compareSidebarEntities(a: Entity, b: Entity) {
		if (a.isFocus) return -1;
		if (b.isFocus) return 1;
		if (a instanceof MissileEntity) return -1;
		if (b instanceof MissileEntity) return -1;
		if (!a.hasFoundValidOwner) return -1;
		if (!b.hasFoundValidOwner) return 1;

		return a.owner.pilotName.localeCompare(b.owner.pilotName);
	}
}

export { RunningPage };
