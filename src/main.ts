import * as THREE from "three";

import { RPCController } from "../../VTOLLiveViewerCommon/dist/rpc.js";
import { USE_TIMED_LOG } from "./config";
import { Application } from "./viewer/app";

// Master entry point, load application once the window is loaded
window.onload = () => {
	if (USE_TIMED_LOG) {
		const log = console.log;
		console.log = (...args) => {
			log("[" + new Date().toISOString().substring(14, 22) + "]", ...args);
		};
	}

	const app = Application.instance;
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	//@ts-ignore
	window.app = app;

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	//@ts-ignore
	window.RPC = RPCController;

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	//@ts-ignore
	window.THREE = THREE;
};
