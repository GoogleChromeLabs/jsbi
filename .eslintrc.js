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

module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'node': true
  },
  'plugins': [
    '@typescript-eslint'
  ],
  'extends': [
    'eslint:recommended',
    'google'
  ],
  "parser": "@typescript-eslint/parser",
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'globals': {
    'BigInt': true
  },
  "ignorePatterns": [
    "node_modules/",
    "/dist/",
    "/tsc-out/",
  ],
  'rules': {
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'prefer-const': [
      'error'
    ],
    'no-constant-condition': [
      'error',
      {
        'checkLoops': false
      }
    ],
    'valid-typeof': [
      'off' // https://github.com/eslint/eslint/pull/9636#issuecomment-381019896
    ],
    'no-unused-vars': [
      'off' // false positive for `leading_zero`? TODO: investigate
    ],
    'no-else-return': [
      'error'
    ],
    'camelcase': [
      'error'
    ],
    'require-jsdoc': [
      'off'
    ],
    'new-cap': [
      'error',
      {
        // `BigInt` is capitalized although it is not a constructor.
        // This matches the spec.
        'capIsNew': false
      }
    ]
  }
};
