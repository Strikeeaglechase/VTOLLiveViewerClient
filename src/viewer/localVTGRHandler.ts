import * as JSZipTypeObject from "jszip";
import * as JSZipNT from "jszip/dist/jszip.js";

import { VTGRHeader } from "../../../VTOLLiveViewerCommon/dist/shared.js";
import { Application } from "./app.js";

const JSZip = JSZipNT.default as typeof JSZipTypeObject;
type JSZip = typeof JSZip;

class LocalVTGRFile {
	private app: Application;
	constructor(private header: VTGRHeader, private body: Uint8Array, private file: JSZip) {
		console.log(`Loading VTGR file ${header.info.lobbyName} (${header.id}) ${header.chunks.length} chunks`);
		this.app = Application.instance;
	}

	public async start() {
		this.app.replayController.handleHeader(this.header);

		// Technically we could feed the entire body to the replay controller, however we might exceed the JS max array size limit
		// this.app.replayController.handleReplayBytes(this.body);
		this.header.chunks.forEach((chunk, idx) => {
			const chunkData = this.body.slice(chunk.start, chunk.start + chunk.length);
			this.app.replayController.handleReplayBytes(chunkData);
		});

		this.app.beginReplay(this.header.info.lobbyId);

		// Application.instance.beginReplay(header.info.lobbyId);
	}

	public async getMap(index: number): Promise<Uint8Array> {
		return await this.file.file(`map_${index}.png`)?.async("uint8array");
	}

	public static async loadFromFile(file: File): Promise<LocalVTGRFile> {
		const fileArrBuff = await file.arrayBuffer();

		return LocalVTGRFile.loadFromArrayBuffer(Buffer.from(fileArrBuff));
	}

	public static async loadFromArrayBuffer(fileArrBuff: Buffer): Promise<LocalVTGRFile> {
		const zip = new JSZip();
		const decompressedFile = await zip.loadAsync(fileArrBuff);
		console.log(decompressedFile);

		return LocalVTGRFile.loadFromZip(decompressedFile);
	}

	public static async loadFromZip(decompressedFile: JSZip): Promise<LocalVTGRFile> {
		const headerText = await decompressedFile.file("header.json")?.async("string");
		const body = await decompressedFile.file("data.bin")?.async("uint8array");
		if (!headerText) throw new Error("No header.json file found in VTGR file");
		if (!body) throw new Error("No data.bin file found in VTGR file");

		const header = JSON.parse(headerText) as VTGRHeader;
		return new LocalVTGRFile(header, body, decompressedFile);
	}
}

export { LocalVTGRFile };
