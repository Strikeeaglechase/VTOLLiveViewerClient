import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

/** @type {import('rollup').RollupOptions} */
export default {
	input: 'dist/main.js',
	output: {
		dir: 'public',
		format: 'es',
	},

	plugins: [nodeResolve({ preferBuiltins: false }), commonjs()]
};
