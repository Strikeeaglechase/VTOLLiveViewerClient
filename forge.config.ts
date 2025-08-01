import type { ForgeConfig } from "@electron-forge/shared-types";
import { gitToken } from "./gitToken.js";

const config: ForgeConfig = {
	packagerConfig: {
		asar: true,
		name: "Headless Client",
		executableName: "HeadlessClient",
		icon: "./public/favicon.ico"
	},

	makers: [
		{
			name: "@electron-forge/maker-zip",
			platforms: ["win32"],
			config: {}
		}
		// {
		// 	name: "@electron-forge/maker-squirrel",
		// 	config: {
		// 		name: "HeadlessClient"
		// 	}
		// }
	],

	publishers: [
		{
			name: "@electron-forge/publisher-github",
			config: {
				authToken: gitToken,
				repository: {
					owner: "Strikeeaglechase",
					name: "VTOLLiveViewerClient"
				}
			}
		}
	]
};

export default config;

// const config: ForgeConfig = {
// 	packagerConfig: {
// 		asar: true
// 	},
// 	rebuildConfig: {},
// 	makers: [
// 		{
// 			name: "@electron-forge/maker-squirrel",
// 			config: {}
// 		},
// 		{
// 			name: "@electron-forge/maker-zip",
// 			platforms: ["darwin"],
// 			config: {}
// 		},
// 		{
// 			name: "@electron-forge/maker-deb",
// 			config: {}
// 		},
// 		{
// 			name: "@electron-forge/maker-rpm",
// 			config: {}
// 		}
// 	],
// 	plugins: [
// 		{
// 			name: "@electron-forge/plugin-auto-unpack-natives",
// 			config: {}
// 		},
// 		// Fuses are used to enable/disable various Electron functionality
// 		// at package time, before code signing the application
// 		new FusesPlugin({
// 			version: FuseVersion.V1,
// 			[FuseV1Options.RunAsNode]: false,
// 			[FuseV1Options.EnableCookieEncryption]: true,
// 			[FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
// 			[FuseV1Options.EnableNodeCliInspectArguments]: false,
// 			[FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
// 			[FuseV1Options.OnlyLoadAppFromAsar]: true
// 		})
// 	]
// };

// export default config;
