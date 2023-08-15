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

import JSBI from '../jsbi';
import { assertEqual, assertTrue } from './assert';

{
  // Test the example from the README.
  const max = JSBI.BigInt(Number.MAX_SAFE_INTEGER);
  // → 9007199254740991
  const other = JSBI.BigInt(2);
  const result = JSBI.add(max, other);
  // → 9007199254740993
  assertEqual('9007199254740993', result.toString());
  // Test `JSBI.toNumber` as well.
  assertEqual(9007199254740993, JSBI.toNumber(result));

  // Corner cases near the single digit threshold.
  assertTrue(JSBI.LT(JSBI.BigInt('0x100000000'), 0x100000001));
  assertTrue(JSBI.EQ(JSBI.BigInt('0xFFFFFFFF'), 0xFFFFFFFF));
  assertTrue(JSBI.EQ(JSBI.BigInt('0x7FFFFFFF'), 0x7FFFFFFF));
  assertTrue(JSBI.EQ(JSBI.BigInt(0x7FFFFFFF), 0x7FFFFFFF));
  assertTrue(JSBI.EQ(JSBI.BigInt(-0x7FFFFFFF), -0x7FFFFFFF));
  assertTrue(JSBI.LT(JSBI.BigInt(0x7FFFFFF0), 0x7FFFFFFF));
  assertTrue(JSBI.GT(JSBI.BigInt(-0x7FFFFFF0), -0x7FFFFFFF));

  // Regression test for issue #63.
  assertEqual(
      JSBI.BigInt(4.4384296245614243e+42).toString(),
      '4438429624561424320047307980392507864252416');
  const str = '3361387880631608742970259577528807057005903';
  assertEqual(JSBI.toNumber(JSBI.BigInt(str)), 3.361387880631609e+42);

  // Regression test for issue #72.
  assertTrue(JSBI.EQ(max, Number.MAX_SAFE_INTEGER));

  assertTrue(JSBI.EQ(JSBI.BigInt(18014398509481980), 18014398509481980));
  assertTrue(JSBI.EQ(JSBI.BigInt(18014398509481982), 18014398509481982));
  assertTrue(JSBI.EQ(JSBI.BigInt(18014398509481988), 18014398509481988));

  // Emulate an environment that doesn't have Symbol (e.g. IE11)
  // and make sure we can still coerce to primitive values.
  // See #74.
 const globalSymbol = globalThis.Symbol;
  try {
    globalThis.Symbol = undefined;
    assertTrue(JSBI.EQ(JSBI.BigInt(0x7FFFFFFF), {
      valueOf: () => 0x7FFFFFFF,
    }));
    assertTrue(JSBI.LT(JSBI.BigInt(0x7FFFFFF0), {
      valueOf: () => 0x7FFFFFFF,
    }));
  } finally {
    globalThis.Symbol = globalSymbol;
  }

  try {
    +JSBI.BigInt(0x7FFFFFFF);
    assertTrue(false, 'coercion of JSBI instances via valueOf should throw.');
  } catch (error) {
    assertTrue(error instanceof Error);
    assertEqual(error.message, 'Convert JSBI instances to native numbers using `toNumber`.');
  }
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
  {  // https://github.com/GoogleChromeLabs/jsbi/issues/57
    operation: 'signedRightShift',
    a: '-0xFFFFFFFFFFFFFFFF',
    b: '32',
    expected: '-0x100000000',
  },
];

// https://github.com/GoogleChromeLabs/jsbi/issues/36
(function() {
  const VALID = ['123', ' 123 ', '   123   '];
  const INVALID = ['x123', 'x 123', ' 123x', '123 x', '123  xx', '123 ?a',
                   '-0o0', '-0x0', '-0b0', '-0x1'];
  for (const v of VALID) {
    const result = JSBI.BigInt(v);
    assertTrue(JSBI.equal(result, JSBI.BigInt(123)));
  }
  for (const i of INVALID) {
    try {
      const result = JSBI.BigInt(i);
      throw "unreachable";
    } catch (exception) {
      assertTrue(exception instanceof SyntaxError);
    }
  }
})();

// https://github.com/GoogleChromeLabs/jsbi/issues/101
(function() {
  const o = {
    num: 123,
    [Symbol.toPrimitive]: function() { return this.num; }
  };
  const result = JSBI.BigInt(o);
  assertTrue(JSBI.equal(result, JSBI.BigInt(123)));
})();

function parse(string) {
  if (string.charCodeAt(0) === 0x2D) { // '-'
    return JSBI.unaryMinus(JSBI.BigInt(string.slice(1)));
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
  assertTrue(
    JSBI.equal(result, expected),
    `
      Unexpected result.
      ${ hex(a) } ${ operation } ${ hex(b) }
      Expected: ${ hex(expected) }
      Actual:   ${ hex(result) }
    `.trim().replace(/\t/g, '')
  );
}
