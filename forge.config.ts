// const { FusesPlugin } = require('@electron-forge/plugin-fuses');
// const { FuseV1Options, FuseVersion } = require('@electron/fuses');
// import MakerSquirrel from "@electron-forge/maker-squirrel";
// import MakerZip from "@electron-forge/maker-zip";

import type { ForgeConfig } from "@electron-forge/shared-types";

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
		},
		{
			name: "@electron-forge/maker-squirrel",
			config: {
				name: "HeadlessClient"
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
