// Copyright 2018 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the “License”);
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// <https://apache.org/licenses/LICENSE-2.0>.
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an “AS IS” BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import babel from 'rollup-plugin-babel';
import pkg from './package.json';
import minify from 'rollup-plugin-babel-minify';

// Keep JSBI bundle separated and consistent after TS migration.
// See issue #79.
const input = 'tsc-out/jsbi.mjs';

export default [
  {
    input: input,
    plugins: [
      minify({
        comments: false,
      }),
    ],
    output: [
      // Create a Node.js-friendly CommonJS build.
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'default',
        sourcemap: true,
      },
      // Create a JavaScript module build, for bundlers.
      {
        file: pkg.module,
        format: 'es',
        exports: 'default',
        sourcemap: true,
      },
    ],
  },
  {
    input: input,
    plugins: [
      babel(),
      minify({
        comments: false,
      }),
    ],
    output: [
      // Create a browser-friendly UMD build.
      {
        name: 'JSBI',
        file: pkg.browser,
        format: 'umd',
        exports: 'default',
        sourcemap: true,
      },
    ],
  },
];
