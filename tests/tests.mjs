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
  // Test `JSBI.toNumber` as well.
  console.assert(9007199254740993 === JSBI.toNumber(result));
}

const TESTS = [
  {
    operation: 'add',
    a: '-0xF72AAE64D54951CAE560D9B4531CE6CF02426F8CD601B77',
    b: '-0xF3CF5EDD759DBCC7449962CDB52AE0295BE7306D51555C70',
    expected: '-0x1034209C3C2F251E3F2EF7068FA5CAE964C0B57661EB577E7',
  },
  { // https://github.com/GoogleChromeLabs/jsbi/pull/14
    operation: 'remainder',
    a: '0x62A49213A5CD1793CB4518A12CA4FB5F3AB6DBD8B465D0D86975CEBDA6B6093',
    b: '0x7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
    expected: '0x7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFE',
  },
  { // https://github.com/GoogleChromeLabs/jsbi/pull/14#issuecomment-439484605
    operation: 'remainder',
    a: '0x10000000000000000',
    b: '0x100000001',
    expected: '0x1',
  },
  { // https://github.com/GoogleChromeLabs/jsbi/issues/44#issue-630518844
    operation: 'bitwiseAnd',
    a: '0b10000010001000100010001000100010001000100010001000100010001000100',
    b: '-0b10000000000000000000000000000000000000000000000000000000000000001',
    expected: '0b10001000100010001000100010001000100010001000100010001000100',
  },
  { // https://github.com/GoogleChromeLabs/jsbi/issues/44#issue-630518844
    operation: 'bitwiseXor',
    a: '0',
    b: '-0b1111111111111111111111111111111111111111111111111111111111111111',
    expected: '-0b1111111111111111111111111111111111111111111111111111111111111111',
  },
  {
    operation: 'square',
    a: '2',
    expected: '4',
  }
];

// https://github.com/GoogleChromeLabs/jsbi/issues/36
(function() {
  const VALID = ['123', ' 123 ', '   123   '];
  const INVALID = ['x123', 'x 123', ' 123x', '123 x', '123  xx', '123 ?a'];
  for (const v of VALID) {
    const result = JSBI.BigInt(v);
    console.assert(JSBI.equal(result, JSBI.BigInt(123)));
  }
  for (const i of INVALID) {
    try {
      const result = JSBI.BigInt(i);
      throw "unreachable";
    } catch (exception) {
      console.assert(exception instanceof SyntaxError);
    }
  }
})();

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
