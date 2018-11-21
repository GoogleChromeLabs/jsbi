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

// Test Array and DataView polyfills
{
  function arrayEqual(a, b) {
    if (a.length != b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] != b[i]) return false;
    }
    return true;
  }

  function testSet(methodName, number, byteOffset, littleEndian, expected) {
    const arr = new ArrayBuffer(8 + byteOffset);
    const view = new DataView(arr);
    JSBI[`DataViewSet${methodName}`](view, byteOffset, number, littleEndian);
    const result = new Uint8Array(arr);

    const arr2 = new ArrayBuffer(8 + byteOffset);
    const view2 = new DataView(arr2);
    view2[`set${methodName}`](byteOffset, number, littleEndian);
    const resultNative = new Uint8Array(arr2);

    // test against expected value
    console.assert(
      arrayEqual(result, expected),
      `
        Unexpected result for DataViewSet${methodName}
        Expected: ${expected}
        Expected: ${resultNative} (DataView.set${methodName})
        Actual:   ${result}
      `.trim().replace(/\t/g, '')
    );

  }

  function testGet(methodName, utf8arr, byteOffset, littleEndian, expected) {
    const view = new DataView(utf8arr.buffer);
    const result = JSBI[`DataViewGet${methodName}`](view, byteOffset, littleEndian);

    const view2 = new DataView(utf8arr.buffer);
    const resultNative = JSBI.BigInt(String(view2[`get${methodName}`](byteOffset, littleEndian)));

    // test against expected value
    console.assert(
      JSBI.equal(result, expected),
      `
        Unexpected result for DataViewGet${methodName}
        Expected: ${expected}
        Expected: ${resultNative} (DataView.get${methodName})
        Actual:   ${result}
      `.trim().replace(/\t/g, '')
    );

  }

  testSet(
    'BigUint64',
    JSBI.BigInt('9223372036854775807'), // String(2n ** 63n - 1n)
    0, false,
    [127, 255, 255, 255, 255, 255, 255, 255]
  );
  testSet(
    'BigUint64',
    JSBI.BigInt('9223372036854775807'),
    0, true,
    [255, 255, 255, 255, 255, 255, 255, 127]
  );
  testSet(
    'BigUint64',
    JSBI.BigInt('9223372036854775807'),
    1, false,
    [0, 127, 255, 255, 255, 255, 255, 255, 255]
  );
  testSet(
    'BigUint64',
    JSBI.BigInt('9223372036854775807'),
    1, true,
    [0, 255, 255, 255, 255, 255, 255, 255, 127]
  );

  testSet(
    'BigInt64',
    JSBI.BigInt('-1152921504606846975'), // - String(2n ** 60n - 1n)
    0, false,
    [240, 0, 0, 0, 0, 0, 0, 1]
  );
  testSet(
    'BigInt64',
    JSBI.BigInt('-1152921504606846975'),
    0, true,
    [1, 0, 0, 0, 0, 0, 0, 240]
  );

  testGet(
    'BigUint64',
    new Uint8Array([127, 255, 255, 255, 255, 255, 255, 255]),
    0, false,
    JSBI.BigInt('9223372036854775807')
  );

  testGet(
    'BigUint64',
    new Uint8Array([255, 255, 255, 255, 255, 255, 255, 127]),
    0, true,
    JSBI.BigInt('9223372036854775807')
  );

  testGet(
    'BigInt64',
    new Uint8Array([192, 0, 0, 0, 0, 0, 0, 1]),
    0, false,
    JSBI.BigInt('-4611686018427387903')
  );

  testGet(
    'BigInt64',
    new Uint8Array([1, 0, 0, 0, 0, 0, 0, 192]),
    0, true,
    JSBI.BigInt('-4611686018427387903')
  );


}
