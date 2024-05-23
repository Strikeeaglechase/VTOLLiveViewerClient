import { EventEmitter } from "../../../VTOLLiveViewerCommon/dist/eventEmitter.js";
import { Application } from "./app";

enum SettingType {
	Dropdown = 0,
	Slider = 1
}

type SettingName =
	| "Missile Labels"
	| "Player Labels"
	| "BRA Readouts"
	| "AI Labels"
	| "Markers"
	| "Show Jamming"
	| "Scale Mode"
	| "Pilot Look Indicator"
	| "Trail Length";

interface ISetting {
	name: SettingName;
	type: SettingType;
	default?: string;
	options?: { name: string; value: string }[] | string[];
	minimum?: number;
	maximum?: number;
	onChange?: (newState: string, app: Application, settings: Settings) => void;
}

class Settings extends EventEmitter<SettingName> {
	public static instance = new Settings();
	public static settings: ISetting[] = [];
	private static state: Record<SettingName, string> = {} as Record<SettingName, string>;

	public static disableSaving = false;

	private constructor() {
		super();
	}

	public static register(setting: ISetting) {
		this.settings.push(setting);
	}

	public static get(name: SettingName) {
		return this.state[name];
	}

	public static getOptions(name: SettingName) {
		const setting = this.settings.find(setting => setting.name === name);
		if (setting?.options) return setting.options;
		return [];
	}

	public static set(name: SettingName, value: string) {
		this.state[name] = value;
		this.save();
		this.instance.emit(name, value);

		const setting = this.settings.find(setting => setting.name === name);
		if (setting?.onChange) setting.onChange(value, Application.instance, this.instance);
	}

	public static init() {
		const savedSettings = JSON.parse(localStorage.getItem("settings") ?? "{}");

		this.settings.forEach(setting => {
			this.state[setting.name] = savedSettings[setting.name] ?? setting.default;
		});

		console.log(this.state);
	}

	private static save() {
		if (Settings.disableSaving) return;
		localStorage.setItem("settings", JSON.stringify(this.state));
	}
}

Settings.register({
	name: "Missile Labels",
	type: SettingType.Dropdown,
	options: ["Off", "Type Only", "All"],
	default: "All"
});

Settings.register({
	name: "Player Labels",
	type: SettingType.Dropdown,
	options: ["Off", "Type Only", "All"],
	default: "All"
});

Settings.register({
	name: "BRA Readouts",
	type: SettingType.Dropdown,
	options: ["Players Only", "Players and AI"],
	default: "Players Only"
});

Settings.register({
	name: "AI Labels",
	type: SettingType.Dropdown,
	options: ["Off", "Type Only", "All"],
	default: "All"
});

Settings.register({
	name: "Markers",
	type: SettingType.Dropdown,
	options: ["Off", "Sprite Only", "All"],
	default: "All"
});

Settings.register({
	name: "Show Jamming",
	type: SettingType.Dropdown,
	options: ["Yes", "No"],
	default: "Yes"
});

Settings.register({
	name: "Scale Mode",
	type: SettingType.Dropdown,
	options: ["Auto", "Real"],
	default: "Auto"
});

Settings.register({
	name: "Pilot Look Indicator",
	type: SettingType.Dropdown,
	options: ["Off", "On"],
	default: "On"
});

Settings.register({
	name: "Trail Length",
	type: SettingType.Slider,
	minimum: 1,
	maximum: 256 * 4,
	default: "1028"
});

Settings.init();

export { Settings, SettingType, ISetting, SettingName };
