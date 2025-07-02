import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("isElectron", true);
contextBridge.exposeInMainWorld("vtgrApi", {
	onChunk: (callback: (chunk: string | Buffer) => void) => ipcRenderer.on("vtgr-chunk", (event, chunk) => callback(chunk)),
	onFinish: (callback: () => void) => ipcRenderer.on("vtgr-complete", () => callback())
});
console.log(`Electron preload script ran`);
