import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("isElectron", true);
contextBridge.exposeInMainWorld("vtgrApi", {
	onChunk: (callback: (chunk: string | Buffer) => void) => ipcRenderer.on("vtgr-chunk", (event, chunk) => callback(chunk)),
	onFinish: (callback: () => void) => ipcRenderer.on("vtgr-complete", () => callback()),
	onGraphData: (callback: (data: string) => void) => ipcRenderer.on("vtgr-graph-data", (event, data) => callback(data)),
	onSensorData: (callback: (data: string) => void) => ipcRenderer.on("vtgr-sensor-data", (event, data) => callback(data)),
	onTime: (callback: (time: number) => void) => ipcRenderer.on("time", (event, time) => callback(time)),
	setTime: (time: number) => ipcRenderer.send("set-time", time)
});
console.log(`Electron preload script ran`);
