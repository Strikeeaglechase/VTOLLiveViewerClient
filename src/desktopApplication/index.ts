import { exec } from "child_process";
import { app, BrowserWindow, BrowserWindowConstructorOptions, ipcMain, Menu, MenuItem, screen } from "electron";
import squirrelStartupExit from "electron-squirrel-startup";
import windowStateKeeper from "electron-window-state";
import fs from "fs";
import path from "path";
import { updateElectronApp, UpdateSourceType } from "update-electron-app";
import { fileURLToPath } from "url";

import { getLogger, Logger } from "./logger.js";
import { Converter } from "./recordingToVtgr.js";

const targetFileIgnore = "index.js";
const forceLoadFile = process.argv[1]?.endsWith(targetFileIgnore) ? "C:/Users/strik/Desktop/Programs/CSharp/AIPLoader/sim/result.vtgr" : "";

const aipSimCwdPath = "./aipSimResults/";
const devModeOpen = false;
class ElectronApplication {
	private logger: Logger;

	private win: BrowserWindow;
	private graphWin: BrowserWindow;
	private sensorWin: BrowserWindow;
	private targetFile: string;

	private isRvtMode = false;
	private hasSentRvtData = false;
	private aipSimCommand: string;
	private rvtValuesDirty = false;
	private aipSimRunning = false;

	constructor() {
		const logPath = path.join(app.getPath("userData"), "headless-client.log");
		this.logger = getLogger(logPath);

		app.setAppUserModelId("com.strik.HeadlessClient");
	}

	public async init() {
		if (squirrelStartupExit) {
			app.quit();
			return;
		}

		let argv = process.argv.slice(1);
		if (argv[0]?.endsWith(targetFileIgnore)) {
			argv = argv.slice(1);
			this.logger.warn(`Ignoring target file: ${targetFileIgnore}`);
		}

		if (await this.checkCLICommand(argv)) {
			if (!this.isRvtMode) app.quit();
			return;
		}

		this.buildMenuBar();
		app.whenReady().then(() => this.afterAppReady());
		app.on("window-all-closed", () => {
			app.quit();
		});
	}

	private async copyEmittedFile(sourceFile: string, outputFolder: string, filename: string) {
		const filePath = path.join(path.dirname(sourceFile), filename);
		const outputFilePath = path.join(path.dirname(outputFolder), filename);
		if (fs.existsSync(filePath)) {
			fs.copyFileSync(filePath, outputFilePath);
			console.log(`Copied emitted file from ${filePath} to ${outputFilePath}`);
		} else {
			console.warn(`Emitted file not found: ${filePath}`);
		}
	}

	private async checkCLICommand(args: string[]): Promise<boolean> {
		if (args.length == 0) return false;

		switch (args[0].toLowerCase()) {
			case "--convert":
				await this.handleConvertCommand(args);
				break;
			case "--rvt":
				await this.handleRapidValueTestingCommand(args);
				break;
			default:
				return false;
		}

		return true;
	}

	private async handleConvertCommand(args: string[]): Promise<void> {
		const inputFile = args[args.indexOf("--input") + 1];
		const outputPath = args[args.indexOf("--output") + 1];
		const mapPath = args[args.indexOf("--map") + 1];
		if (!fs.existsSync(inputFile)) {
			this.logger.error(`Input file does not exist: ${inputFile}`);
			return;
		}

		if (!outputPath) {
			this.logger.error(`Output path not specified. Use --output <path>`);
			return;
		}

		if (!outputPath || outputPath == args[0]) {
			this.logger.error(`Invalid output path: ${outputPath}`);
			return;
		}

		if (!mapPath) {
			this.logger.error(`Map path not specified. Use --map <path>`);
			return;
		}

		const converter = new Converter(this.logger);
		const writeStream = fs.createWriteStream(outputPath);
		const vtgr = converter.convert(inputFile, mapPath);
		vtgr.pipe(writeStream);

		this.copyEmittedFile(inputFile, outputPath, "graphs.json");
		this.copyEmittedFile(inputFile, outputPath, "state.json");

		return new Promise<void>((resolve, reject) => {
			writeStream.on("finish", () => {
				this.logger.log(`Conversion complete. VTGR file written to ${outputPath}`);
				resolve();
			});
			writeStream.on("error", err => {
				this.logger.error(`Error writing VTGR file: ${err.message}`);
				// reject(err);
				resolve();
			});
		});
	}

	private async executeAipSim() {
		if (this.aipSimRunning) return;
		this.aipSimRunning = true;
		const cwd = path.resolve(aipSimCwdPath);
		if (!fs.existsSync(cwd)) {
			fs.mkdirSync(cwd, { recursive: true });
		}

		const child = exec(this.aipSimCommand, { cwd: cwd });
		const start = Date.now();

		child.stdout.on("data", data => {
			this.logger.info(`[AIP]${data.trim()}`);
		});

		child.stderr.on("data", data => {
			this.logger.error(`AIP Sim error: ${data}`);
		});

		child.on("exit", code => {
			this.logger.log(`AIP Sim exited with code ${code}, exec time: ${Date.now() - start}ms`);
			this.aipSimRunning = false;
			if (this.rvtValuesDirty) {
				this.rvtValuesDirty = false;
				this.executeAipSim();
			}

			this.emitGraphData();
		});
	}

	private async handleRapidValueTestingCommand(args: string[]): Promise<void> {
		this.logger.info(`Starting AIP Rapid Value Testing mode...`);
		this.isRvtMode = true;
		app.on("window-all-closed", () => app.quit());
		this.buildMenuBar();

		this.aipSimCommand = args[1];
		if (!this.aipSimCommand.includes("--no-map")) {
			this.aipSimCommand += " --no-map";
		}
		this.logger.log(`AIP Sim command: ${this.aipSimCommand}`);

		await new Promise(res => app.whenReady().then(res));

		const dirname = fileURLToPath(import.meta.url);

		const winState = windowStateKeeper({
			defaultWidth: 1000,
			defaultHeight: 800
		});

		const winOptions: BrowserWindowConstructorOptions = {
			title: "AIP Rapid Value Testing",
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

		this.graphWin = new BrowserWindow(winOptions);
		winState.manage(this.graphWin);

		ipcMain.on("set-rvt-data", (event, data: string) => {
			try {
				fs.writeFileSync(path.join(aipSimCwdPath, "rvt.json"), data, "utf-8");
			} catch (e) {}

			this.rvtValuesDirty = true;
			this.executeAipSim();
		});

		await this.graphWin.loadFile(path.join(dirname, "..", "..", "..", "public", "graph.html"));
		this.executeAipSim();
	}

	private async afterAppReady() {
		await this.createMainWindow();
		// this.configureAutoUpdate();
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

		ipcMain.on("set-targeted-entity", (event, entityId: number) => {
			if (this.graphWin && !this.graphWin.isDestroyed()) {
				this.graphWin.webContents.send("targeted-entity", entityId);
			}

			if (this.sensorWin && !this.sensorWin.isDestroyed()) {
				this.sensorWin.webContents.send("targeted-entity", entityId);
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

		const graphPath = !this.isRvtMode ? path.join(path.dirname(this.targetFile), "graphs.json") : path.join(aipSimCwdPath, "graphs.json");
		if (fs.existsSync(graphPath) && this.graphWin) {
			this.logger.log(`Loading graph data from: ${graphPath}`);
			const graphData = fs.readFileSync(graphPath, "utf-8");
			this.graphWin.webContents.send("vtgr-graph-data", graphData);
		}

		if (this.isRvtMode && !this.hasSentRvtData) {
			const testingValuesData = fs.readFileSync(path.join(aipSimCwdPath, "rvt.json"), "utf-8");
			this.logger.log(`Loading RVT data from: ${path.join(aipSimCwdPath, "rvt.json")}`);
			this.graphWin.webContents.send("vtgr-rvt-data", testingValuesData);
			this.hasSentRvtData = true;
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

	private async reloadVtrMode() {
		await this.graphWin.loadFile(path.join(fileURLToPath(import.meta.url), "..", "..", "..", "public", "graph.html"));
		this.emitGraphData();
	}

	private async reloadWithFile() {
		if (this.isRvtMode) {
			this.reloadVtrMode();
			return;
		}

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

		if (!this.isRvtMode) {
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
		}

		Menu.setApplicationMenu(menu);
	}
}

const eApp = new ElectronApplication();
eApp.init();
