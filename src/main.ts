import * as THREE from "three";
import Vue, { markRaw } from "vue";

import { RPCController } from "../../VTOLLiveViewerCommon/dist/src/rpc.js";
import App from "./App.vue";
import { USE_TIMED_LOG } from "./config";
import { Application } from "./viewer/app";

Vue.config.productionTip = false;

new Vue({
	render: h => h(App)
}).$mount('#app');

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
	markRaw(app);


	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	//@ts-ignore
	window.RPC = RPCController;

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	//@ts-ignore
	window.THREE = THREE;
};

