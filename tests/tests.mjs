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

import JSBI from '../jsbi.mjs';

{
  // Test the example from the README.
  const max = JSBI.BigInt(Number.MAX_SAFE_INTEGER);
  // → 9007199254740991
  const other = JSBI.BigInt(2);
  const result = JSBI.add(max, other);
  // → 9007199254740993
  console.assert('9007199254740993' === result.toString());
}

const TESTS = [
  {
    operation: 'add',
    a: '-0xF72AAE64D54951CAE560D9B4531CE6CF02426F8CD601B77',
    b: '-0xF3CF5EDD759DBCC7449962CDB52AE0295BE7306D51555C70',
    expected: '-0x1034209C3C2F251E3F2EF7068FA5CAE964C0B57661EB577E7',
  },
  {
    operation: 'remainder',
    a: '0x62a49213a5cd1793cb4518a12ca4fb5f3ab6dbd8b465d0d86975cebda6b6093',
    b: '0x7fffffffffffffffffffffffffffffff',
    expected: '0x7ffffffffffffffffffffffffffffffe',
  },
  {
    operation: 'remainder',
    a: '0x10000000000000000',
    b: '0x100000001',
    expected: '0x1',
  },
];

function parse(string) {
  if (string.charCodeAt(0) === 0x2D) { // '-'
    const result = JSBI.BigInt(string.slice(1));
    result.sign = true;
    return result;
  }
  return JSBI.BigInt(string);
}

function hex(jsb) {
  if (JSBI.lessThan(jsb, 0)) {
    return `-0x${ jsb.toString(16).slice(1).toUpperCase() }`;
  }
  return `0x${ jsb.toString(16).toUpperCase() }`;
}

for (const test of TESTS) {
  const {operation} = test;
  const a = parse(test.a);
  const b = parse(test.b);
  const expected = parse(test.expected);
  const result = JSBI[operation](a, b);
  console.assert(
    JSBI.equal(result, expected),
    `
      Unexpected result.
      ${ hex(a) } ${ operation } ${ hex(b) }
      Expected: ${ hex(expected) }
      Actual:   ${ hex(result) }
    `.trim().replace(/\t/g, '')
  );
}
