import { app, BrowserWindow, BrowserWindowConstructorOptions, ipcMain, Menu, MenuItem, screen } from "electron";
import squirrelStartupExit from "electron-squirrel-startup";
import windowStateKeeper from "electron-window-state";
import fs from "fs";
import path from "path";
import { updateElectronApp, UpdateSourceType } from "update-electron-app";
import { fileURLToPath } from "url";

import { getLogger, Logger } from "./logger.js";

const targetFileIgnore = "dist/desktopApplication/index.js";
const forceLoadFile = "C:/Users/strik/Desktop/Programs/CSharp/UnityGERunner/UnityTranspiler/output.vtgr";

const devModeOpen = false;
class ElectronApplication {
	private earlyQuit = false;
	private logger: Logger;

	private win: BrowserWindow;
	private graphWin: BrowserWindow;
	private sensorWin: BrowserWindow;
	private targetFile: string;

	constructor() {
		const logPath = path.join(app.getPath("userData"), "headless-client.log");
		this.logger = getLogger(logPath);

		if (squirrelStartupExit) app.quit();
		app.setAppUserModelId("com.strik.HeadlessClient");
	}

	public init() {
		if (this.earlyQuit) return;

		this.buildMenuBar();
		app.whenReady().then(() => this.afterAppReady());
		app.on("window-all-closed", () => {
			app.quit();
		});
	}

	private async afterAppReady() {
		await this.createMainWindow();
		this.configureAutoUpdate();
		this.loadFileFromArgs();
	}

	private getOpenOnDisplay() {
		const displays = screen.getAllDisplays();
		this.logger.log(`Found ${displays.length} displays:`);
		displays.forEach((display, index) => {
			this.logger.log(`Display ${index + 1}:`);
			this.logger.log(`  - ID: ${display.id}`);
			this.logger.log(`  - Size: ${display.size.width}x${display.size.height}`);
			this.logger.log(`  - Bounds: x=${display.bounds.x}, y=${display.bounds.y}, width=${display.bounds.width}, height=${display.bounds.height}`);
		});

		const openOnDisplay = displays.find(d => d.bounds.x > 0) ?? screen.getPrimaryDisplay();
		this.logger.log(`Opening on display ${displays.indexOf(openOnDisplay) + 1} (${openOnDisplay.id})`);

		return openOnDisplay;
	}

	private async createMainWindow() {
		const dirname = fileURLToPath(import.meta.url);

		const winState = windowStateKeeper({
			defaultWidth: 1000,
			defaultHeight: 800
		});

		const winOptions: BrowserWindowConstructorOptions = {
			title: "Headless Client",
			// fullscreen: true,

			x: winState.x,
			y: winState.y,
			width: winState.width,
			height: winState.height,

			webPreferences: {
				preload: path.join(dirname, "..", "preload.js"),
				sandbox: false
			}
		};

		if (devModeOpen) {
			const openOnDisplay = this.getOpenOnDisplay();
			winOptions.width = openOnDisplay.size.width;
			winOptions.height = openOnDisplay.size.height;
			winOptions.x = openOnDisplay.bounds.x;
			winOptions.y = openOnDisplay.bounds.y;
		}

		this.win = new BrowserWindow(winOptions);
		winState.manage(this.win);

		if (devModeOpen) {
			this.win.webContents.openDevTools();
			this.win.maximize();
		}

		await this.win.loadFile(path.join(dirname, "..", "..", "..", "public", "index.html"));

		ipcMain.on("set-time", (event, time: number) => {
			if (this.graphWin && !this.graphWin.isDestroyed()) {
				this.graphWin.webContents.send("time", time);
			}

			if (this.sensorWin && !this.sensorWin.isDestroyed()) {
				this.sensorWin.webContents.send("time", time);
			}
		});
	}

	private configureAutoUpdate() {
		updateElectronApp({
			logger: this.logger,
			updateInterval: "1 hour",

			updateSource: {
				type: UpdateSourceType.ElectronPublicUpdateService,
				repo: "Strikeeaglechase/VTOLLiveViewerClient"
			}
		});
	}

	private loadFileFromArgs() {
		this.targetFile = forceLoadFile ? forceLoadFile : process.argv[1];
		if (!this.targetFile || this.targetFile == targetFileIgnore) return;

		if (!fs.existsSync(this.targetFile)) {
			this.logger.error(`Target file does not exist: ${this.targetFile}`);
			return;
		}

		this.sendFileToRenderer(this.targetFile);
	}

	private sendFileToRenderer(filePath: string) {
		this.logger.log(`Loading target file: ${filePath}`);

		const readStream = fs.createReadStream(filePath, { encoding: "binary" });
		let idx = 0;
		readStream.on("data", chunk => {
			// logger.log(`[${idx}] Sent ${chunk.length} bytes of data to renderer`);
			this.win.webContents.send(`vtgr-chunk`, { data: chunk, index: idx++ });
		});

		readStream.on("close", () => {
			this.logger.log(`Finished reading file: ${filePath}`);
			this.win.webContents.send(`vtgr-complete`);
		});

		this.emitGraphData();
		this.emitSensorData();
	}

	private emitGraphData() {
		if (!this.graphWin || this.graphWin.isDestroyed()) return;

		const graphPath = path.join(path.dirname(this.targetFile), "graphs.json");
		if (fs.existsSync(graphPath) && this.graphWin) {
			this.logger.log(`Loading graph data from: ${graphPath}`);
			const graphData = fs.readFileSync(graphPath, "utf-8");
			this.graphWin.webContents.send("vtgr-graph-data", graphData);
		}
	}

	private emitSensorData() {
		if (!this.sensorWin || this.sensorWin.isDestroyed()) return;

		const sensorPath = path.join(path.dirname(this.targetFile), "state.json");
		if (!fs.existsSync(sensorPath) || !this.sensorWin) return;

		const sensorData = fs.readFileSync(sensorPath, "utf-8");
		this.logger.log(`Loading sensor data from: ${sensorPath}`);
		this.sensorWin.webContents.send("vtgr-sensor-data", sensorData);
	}

	private async reloadWithFile() {
		this.logger.log(`Reloading window with file: ${this.targetFile}`);

		const dirname = fileURLToPath(import.meta.url);
		const loadProms: Promise<void>[] = [];
		loadProms.push(this.win.loadFile(path.join(dirname, "..", "..", "..", "public", "index.html")));
		if (this.graphWin && !this.graphWin.isDestroyed()) loadProms.push(this.graphWin.loadFile(path.join(dirname, "..", "..", "..", "public", "graph.html")));
		if (this.sensorWin && !this.sensorWin.isDestroyed())
			loadProms.push(this.sensorWin.loadFile(path.join(dirname, "..", "..", "..", "public", "sensor.html")));

		await Promise.all(loadProms);

		if (!this.targetFile || !fs.existsSync(this.targetFile) || this.targetFile == targetFileIgnore) {
			this.logger.warn(`File path is invalid or does not exist: ${this.targetFile}`);
			return;
		}

		this.sendFileToRenderer(this.targetFile);
	}

	private async createGraphWindow() {
		if (this.graphWin && !this.graphWin.isDestroyed()) {
			this.graphWin.close();
		}

		const dirname = fileURLToPath(import.meta.url);
		this.graphWin = new BrowserWindow({
			title: "AIP Graph",
			width: 1000,
			height: 800,
			webPreferences: {
				preload: path.join(dirname, "..", "preload.js"),
				sandbox: false
			}
		});

		await this.graphWin.loadFile(path.join(dirname, "..", "..", "..", "public", "graph.html"));
		this.emitGraphData();
	}

	private async createSensorWin() {
		if (this.sensorWin && !this.sensorWin.isDestroyed()) {
			this.sensorWin.close();
		}

		const dirname = fileURLToPath(import.meta.url);
		this.sensorWin = new BrowserWindow({
			title: "AIP Sensor View",
			width: 1000,
			height: 800,
			webPreferences: {
				preload: path.join(dirname, "..", "preload.js"),
				sandbox: false
			}
		});

		await this.sensorWin.loadFile(path.join(dirname, "..", "..", "..", "public", "sensor.html"));
		this.emitSensorData();
	}

	private buildMenuBar() {
		const menu = new Menu();

		menu.append(
			new MenuItem({
				label: "Quit",
				click: () => {
					app.quit();
				},
				accelerator: "CmdOrCtrl+Q"
			})
		);

		menu.append(
			new MenuItem({
				label: "Restart",
				click: async () => this.reloadWithFile(),
				accelerator: "CmdOrCtrl+R"
			})
		);

		menu.append(
			new MenuItem({
				label: "Dev Tools",
				click: async (menu, win: BrowserWindow) => win.webContents.toggleDevTools(),
				accelerator: "CmdOrCtrl+Shift+I"
			})
		);

		menu.append(
			new MenuItem({
				label: "Graph",
				click: async () => this.createGraphWindow(),
				accelerator: "CmdOrCtrl+G"
			})
		);

		menu.append(
			new MenuItem({
				label: "Sensor View",
				click: async () => this.createSensorWin(),
				accelerator: "CmdOrCtrl+S"
			})
		);

		Menu.setApplicationMenu(menu);
	}
}

const eApp = new ElectronApplication();
eApp.init();
