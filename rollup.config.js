import svelte from 'rollup-plugin-svelte'
import resolve from 'rollup-plugin-node-resolve'
import pkg from './package.json'
import svg from 'rollup-plugin-svg'
import {scss} from 'svelte-preprocess'
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";
import commonjs from 'rollup-plugin-commonjs';

const production = !process.env.ROLLUP_WATCH;

import {
  preprocess,
  createEnv,
  readConfigFile
} from "@pyoner/svelte-ts-preprocess";

const env = createEnv();
const compilerOptions = readConfigFile(env);
const opts = {
  env,
  compilerOptions: {
    ...compilerOptions,
    allowNonTsExtensions: true
  }
};

const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
  .replace(/^\w/, m => m.toUpperCase())
  .replace(/-\w/g, m => m[1].toUpperCase())

export default {
  input: 'src/main.ts',
  output: [
    {file: `dist/${pkg.name}-${pkg.version}.mjs`, 'format': 'esm', name},
    {file: `dist/${pkg.name}-${pkg.version}.js` , 'format': 'umd', name}
  ],
  plugins: [
    svg({base64: true}),
    svelte({
	preprocess: [
	    scss({}),
	    preprocess(opts)
        ],
        accessors: true
    }),
    resolve(),
    typescript(),
    commonjs({
      namedExports: {
        'node_modules/lodash/lodash.js': [
          'throttle'
        ]
      }
    }),
    production && terser()
  ]
}
