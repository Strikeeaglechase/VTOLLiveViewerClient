import Vue from "vue";

import App from "./App.vue";
import { Application } from "./viewer/app";

Vue.config.productionTip = false;

new Vue({
	render: h => h(App)
}).$mount('#app');

// Master entry point, load application once the window is loaded
window.onload = () => {
	const app = new Application();
	app.init();
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	//@ts-ignore
	window.app = app;

};

