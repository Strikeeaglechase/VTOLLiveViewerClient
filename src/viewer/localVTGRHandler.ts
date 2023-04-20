import JSZip from "jszip";

import { VTGRHeader } from "../../../VTOLLiveViewerCommon/dist/src/shared.js";
import { Application } from "./app";

class LocalVTGRHandler {

	public static async handleFile(file: File) {
		const zip = new JSZip();
		const fileArrBuff = await file.arrayBuffer();
		console.log(fileArrBuff);
		const decompressedFile = await zip.loadAsync(fileArrBuff);
		console.log(decompressedFile);

		const headerText = await decompressedFile.file("header.json")?.async("string");
		const body = await decompressedFile.file("data.bin")?.async("uint8array");
		if (!headerText) throw new Error("No header.json file found in VTGR file");
		if (!body) throw new Error("No data.bin file found in VTGR file");

		const header = JSON.parse(headerText) as VTGRHeader;
		console.log(`Loading VTGR file ${header.info.lobbyName} (${header.id}) ${header.chunks.length} chunks`);

		header.chunks.forEach((chunk) => {
			const chunkData = body.slice(chunk.start, chunk.start + chunk.length);
			Application.instance.handleReplayChunk(chunkData);
		});
		Application.instance.beginReplay(header.info.lobbyId);
	}
}

export { LocalVTGRHandler };