import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

/** @type {import('rollup').RollupOptions} */
export default {
	input: 'dist/viewer/map/mapLoad.worker.js',
	output: {
		dir: 'public',
		format: 'es',
	},
	context: "this",

	plugins: [
		nodeResolve({ preferBuiltins: false }),
		commonjs(),
	]
};
