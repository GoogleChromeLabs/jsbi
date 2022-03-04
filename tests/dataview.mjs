// Copyright 2022 Google Inc.
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

const ab = new ArrayBuffer(16);
const dv = new DataView(ab, 0, 8);
const dv2 = new DataView(ab, 8, 8);

function hexParse(s) {
  if (s.charCodeAt(0) === 0x2D) {
    const result = JSBI.BigInt(s.slice(1));
    result.sign = true;
    return result;
  }
  return JSBI.BigInt(s);
}
function hexParse2(s) {
  if (s.charCodeAt(0) === 0x2D) return -BigInt(s.slice(1));
  return BigInt(s);
}

function dataViewEqual(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (a.getUint8(i) !== b.getUint8(i)) return false;
  }
  return true;
}

function dump(dataview) {
  const chunks = [];
  for (let i = 0; i < 8; i++) {
    chunks.push('0x' + dataview.getUint8(i).toString(16));
  }
  return chunks.join(', ');
}

function error(what, value, littleEndian, expected, actual) {
  throw new Error(`Incorrect ${what} for ${value}, littleEndian=${
      littleEndian}: expected ${expected} but got ${actual}`);
}

function test(value) {
  const jsbi = hexParse(value);
  const bigint = hexParse2(value);
  for (const littleEndian of [true, false]) {
    // Signed
    JSBI.DataViewSetBigInt64(dv, 0, jsbi, littleEndian);
    dv2.setBigInt64(0, bigint, littleEndian);
    if (!dataViewEqual(dv, dv2)) {
      error('signed DV contents', value, littleEndian, dump(dv2), dump(dv));
    }
    let out = JSBI.DataViewGetBigInt64(dv, 0, littleEndian);
    let out2 = JSBI.BigInt(dv2.getBigInt64(0, littleEndian).toString());
    if (!JSBI.equal(out, out2)) {
      error(
          'signed readout value', value, littleEndian, jsbi.toString(16),
          out.toString(16));
    }
    // Unsigned
    JSBI.DataViewSetBigUint64(dv, 0, jsbi, littleEndian);
    dv2.setBigUint64(0, bigint, littleEndian);
    if (!dataViewEqual(dv, dv2)) {
      error('unsigned DV contents', value, littleEndian, dump(dv2), dump(dv));
    }
    out = JSBI.DataViewGetBigUint64(dv, 0, littleEndian);
    out2 = JSBI.BigInt(dv2.getBigUint64(0, littleEndian).toString());
    if (!JSBI.equal(out, out2)) {
      error(
          'unsigned readout value', value, littleEndian, jsbi.toString(16),
          out.toString(16));
    }
  }
}

const tests = [
  '0',
  '1',
  '-1',
  '2',
  '-2',
  '0xFFFFFFFF',
  '-0xFFFFFFFF',
  '0xFFFFFFFFFFFFFFFF',
  '0xFFFFFFFF00000000',
  '-0x8000000000000000',
  // Verify byte order.
  '0x1234567890abcdef',
  // ...00110011... bit patterns to flush out 30-bit digits issues.
  '0x3333333333333333',
  '0xcccccccccccccccc',
];

for (const t of tests) test(t);
