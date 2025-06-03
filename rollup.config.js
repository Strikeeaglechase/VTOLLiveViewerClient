import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { visualizer } from "rollup-plugin-visualizer";

/** @type {import('rollup').RollupOptions} */
export default {
	input: 'dist/main.js',
	output: {
		dir: 'public',
		format: 'es',
	},
	context: "this",

	plugins: [
		nodeResolve({ preferBuiltins: false }),
		commonjs(),
		// visualizer({
		// 	template: "sunburst",
		// 	exclude: [{ file: "*/**/*three*" }, { file: "*/**/*common*" }]
		// })
	]
};
