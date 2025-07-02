import { app, BrowserWindow, BrowserWindowConstructorOptions, screen } from "electron";
import squirrelStartupExit from "electron-squirrel-startup";
import windowStateKeeper from "electron-window-state";
import fs from "fs";
import path from "path";
import { updateElectronApp, UpdateSourceType } from "update-electron-app";
import { fileURLToPath } from "url";

if (squirrelStartupExit) app.quit();
app.setAppUserModelId("com.strik.HeadlessClient");

const watchDelay = 1000;

function getLogger(filePath?: string) {
	let writeStream: fs.WriteStream = null;

	if (filePath) {
		writeStream = fs.createWriteStream(filePath, { flags: "a" });
		writeStream.write(`Logger initialized at ${new Date().toISOString()}\n`);
	}

	function log(header: string, message: any[]) {
		if (!writeStream) return;

		const formattedMessage = message.map(m => (typeof m === "object" ? JSON.stringify(m, null, 2) : m)).join(" ");
		writeStream.write(`${header}${formattedMessage}\n`);
	}

	const logObject = {
		info: (message: string) => logObject.log(message),
		log: (...message: any[]) => {
			const header = `[${new Date().toISOString()}][INFO] `;
			log(header, message);
			console.log(header, ...message);
		},
		warn: (...message: any[]) => {
			const header = `[${new Date().toISOString()}][WARN] `;
			log(header, message);
			console.warn(header, ...message);
		},
		error: (...message: any[]) => {
			const header = `[${new Date().toISOString()}][ERROR] `;
			log(header, message);
			console.error(header, ...message);
		}
	};

	return logObject;
}

// const logger = getLogger(`C:/Users/strik/Desktop/Programs/Typescript/VTOLLiveViewer/VTOLLiveViewerClient/headless-client.log`);
const logPath = path.join(app.getPath("userData"), "headless-client.log");
const logger = getLogger(logPath);
logger.log(`Logger file path: ${logPath}`);

const devModeOpen = false;

async function createWindow() {
	const displays = screen.getAllDisplays();
	logger.log(`Found ${displays.length} displays:`);
	displays.forEach((display, index) => {
		logger.log(`Display ${index + 1}:`);
		logger.log(`  - ID: ${display.id}`);
		logger.log(`  - Size: ${display.size.width}x${display.size.height}`);
		logger.log(`  - Bounds: x=${display.bounds.x}, y=${display.bounds.y}, width=${display.bounds.width}, height=${display.bounds.height}`);
	});

	const openOnDisplay = displays.find(d => d.bounds.x > 0) ?? screen.getPrimaryDisplay();
	logger.log(`Opening on display ${displays.indexOf(openOnDisplay) + 1} (${openOnDisplay.id})`);

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
		winOptions.width = openOnDisplay.size.width;
		winOptions.height = openOnDisplay.size.height;
		winOptions.x = openOnDisplay.bounds.x;
		winOptions.y = openOnDisplay.bounds.y;
	}

	const win = new BrowserWindow(winOptions);
	winState.manage(win);

	if (devModeOpen) {
		win.webContents.openDevTools();
		win.maximize();
	}

	await win.loadFile(path.join(dirname, "..", "..", "..", "public", "index.html"));

	configureAutoUpdate();

	// const targetFile: string = "C:/Users/strik/Desktop/Programs/Typescript/VTOLLiveViewer/HCServices/vtgrService/ingest-finished/test.vtgr";
	const targetFile = process.argv[1];
	if (!targetFile || targetFile == "dist/desktopApplication/index.js") return;

	if (!fs.existsSync(targetFile)) {
		logger.error(`Target file does not exist: ${targetFile}`);
		return;
	}

	sendFileToRenderer(targetFile, win);

	let watchTimer: NodeJS.Timeout;
	fs.watch(targetFile, {}, (eventType, filename) => {
		if (watchTimer) clearTimeout(watchTimer);

		watchTimer = setTimeout(async () => {
			logger.log(`File change detected: ${eventType} on ${filename}`);
			if (!fs.existsSync(targetFile)) {
				logger.error(`Target file does not exist: ${targetFile}`);
				return;
			}

			await win.loadFile(path.join(dirname, "..", "..", "..", "public", "index.html"));
			sendFileToRenderer(targetFile, win);

			watchTimer = null;
		}, watchDelay);
	});
}

function configureAutoUpdate() {
	updateElectronApp({
		logger: logger,
		updateInterval: "1 hour",

		updateSource: {
			type: UpdateSourceType.ElectronPublicUpdateService,
			repo: "Strikeeaglechase/VTOLLiveViewerClient"
		}
	});

	// autoUpdater.checkForUpdates();
	// autoUpdater.on("update-downloaded", (event, releaseNotes, releaseName, releaseDate, updateURL) => {
	// 	logger.log(`Update downloaded: ${releaseName} on ${releaseDate}`);

	// 	const result = dialog.showMessageBoxSync(win, {
	// 		type: "question",
	// 		title: "An Update is Available",
	// 		message: `An update is available: ${releaseName}\n\n${releaseNotes}`,
	// 		buttons: ["Install Now", "Later"]
	// 	});

	// 	if (result === 0) {
	// 		logger.log("User chose to install update immediately.");
	// 		autoUpdater.quitAndInstall();
	// 	} else {
	// 		logger.log("User chose to install update later.");
	// 	}
	// });
}

function sendFileToRenderer(filePath: string, win: BrowserWindow) {
	logger.log(`Loading target file: ${filePath}`);

	const readStream = fs.createReadStream(filePath, { encoding: "binary" });
	let idx = 0;
	readStream.on("data", chunk => {
		// logger.log(`[${idx}] Sent ${chunk.length} bytes of data to renderer`);
		win.webContents.send(`vtgr-chunk`, { data: chunk, index: idx++ });
	});

	readStream.on("close", () => {
		logger.log(`Finished reading file: ${filePath}`);
		win.webContents.send(`vtgr-complete`);
	});
}

app.whenReady().then(() => createWindow());
app.on("window-all-closed", () => {
	app.quit();
});
