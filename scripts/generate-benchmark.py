#!/usr/bin/env python3
# coding=utf-8
#
# Copyright 2018 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the “License”);
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
# <https://apache.org/licenses/LICENSE-2.0>.
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an “AS IS” BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
# This is a heavily modified version of V8's tool at:
# https://chromium.googlesource.com/v8/v8/+/master/tools/bigint-tester.py

# Original license:
# Copyright 2017 the V8 project authors. All rights reserved.
# Use of this source code is governed by a BSD-style license that can be
# found in the LICENSE file [1].
#
# [1] https://chromium.googlesource.com/v8/v8/+/master/LICENSE

import argparse
import math
import multiprocessing
import os
import random
import subprocess
import sys
import tempfile

# Configuration.
kChars = "0123456789ABCDEF"
kBase = 16
kLineLengthBig = 70  # A bit less than 80.
kLineLengthSmall = 16  # Generating 64-bit values.
kNumInputsGenerate = 100
kNumInputsStress = 1000

# Internally used sentinels.
kNo = 0
kYes = 1
kRandom = 2

TEST_LICENSE_HEADER = """\
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

// This file was generated by %s, do not modify!
""" % sys.argv[0]

TEST_HEADER = """
import JSBI from '../dist/jsbi.mjs';
const JSBigInt = JSBI.BigInt;

let errorCount = 0;

const dataBigNative = [];
const dataBigJsbi = [];
const dataSmallNative = [];
const dataSmallJsbi = [];

function hexParseN(s) {
  if (s.charCodeAt(0) === 0x2D) return -BigInt(s.slice(1));
  return BigInt(s);
}
function parseNative(d) {
  if (d.b) {
    return {a: hexParseN(d.a), b: hexParseN(d.b), r: hexParseN(d.r)};
  }
  return {a: hexParseN(d.a), r: hexParseN(d.r)};
}
function hexParse(s) {
  if (s.charCodeAt(0) === 0x2D) {
    const result = JSBigInt(s.slice(1));
    result.sign = true;
    return result;
  }
  return JSBigInt(s);
}
function parseJSBI(d) {
  if (d.b) {
    return {a: hexParse(d.a), b: hexParse(d.b), r: hexParse(d.r)};
  }
  return {a: hexParse(d.a), r: hexParse(d.r)};
}
function prepareData(src, dstNative, dstJsbi) {
  for (let i = 0; i < src.length; i++) {
    const d = src[i];
    dstNative.push(parseNative(d));
    dstJsbi.push(parseJSBI(d));
  }
}
prepareData(dataBig, dataBigNative, dataBigJsbi);
prepareData(dataSmall, dataSmallNative, dataSmallJsbi);
"""

TEST_BODY = """
function test%(variant)s(data, reps) {
  for (let i = 0; i < data.length; i++) {
    const d = data[i];
    const r = %(testop)s;
    if (%(comparison)s) {%(inputs)s
      console.log('Result:   ' + r.toString(16));
      console.log('Expected: ' + d.r.toString(16));
      console.log('Op: %(opname)s');
      errorCount++;
    }
  }
  let r;
  const t1 = Date.now();
  for (let j = 0; j < reps; j++) {
    for (let i = 0; i < data.length; i++) {
      const d = data[i];
      r = %(testop)s;
    }
  }
  // Confuse the compiler into thinking that the loop is needed :-)
  const d = data[data.length - 1];
  if (%(comparison)s) throw new Error('no dead code elimination please');
  return Date.now() - t1;
}
"""

INPUT_PRINTER_BINARY = """
      console.log('Input A:  ' + d.a.toString(16));
      console.log('Input B:  ' + d.b.toString(16));"""

INPUT_PRINTER_UNARY = """
      console.log('Input:    ' + d.a.toString(16));"""

TEST_FOOTER = """
const kRepsBig = %(reps_big)d;
const kRepsSmall = %(reps_small)d;

console.log('Testing %(opname)s:');
console.log('Native/big:   ' + testNative(dataBigNative, kRepsBig));
console.log('JSBI/big:     ' + testJsbi(dataBigJsbi, kRepsBig));
console.log('Native/small: ' + testNative(dataSmallNative, kRepsSmall));
console.log('JSBI/small:   ' + testJsbi(dataSmallJsbi, kRepsSmall));

if (errorCount !== 0) {
  console.error('Finished with ' + errorCount + ' errors.');
  // Support both d8 (`quit`) and Node.js (`process.exit`).
  (typeof quit !== 'undefined' ? quit : process.exit)(1);
}"""

def GenRandom(length, negative=kRandom):
  if length == 0: return "'0x0'"
  s = ["'"]
  if negative == kYes or (negative == kRandom and (random.randint(0, 1) == 0)):
    s.append("-")  # 50% chance of negative.
  s.append("0x")
  s.append(kChars[random.randint(1, kBase - 1)])  # No leading zero.
  for i in range(1, length):
    s.append(kChars[random.randint(0, kBase - 1)])
  s.append("'")
  return "".join(s)

def Parse(x):
  if x.startswith("'0x"):
    return int(x[3:-1], kBase)
  if x.startswith("'-0x"):
    return -int(x[4:-1], kBase)
  return int(x, kBase)

def Format(x):
  original = x
  negative = False
  if x == 0: return "'0x0'"
  if x < 0:
    negative = True
    x = -x
  s = ""
  while x > 0:
    s = kChars[x % kBase] + s
    x = x // kBase
  s = "0x" + s
  if negative:
    s = "-" + s
  assert Parse(s) == original
  return "'" + s + "'"

class TestGenerator(object):
  # Subclasses must implement these.
  # Returns a JSON snippet defining inputs and expected output for one test.
  def EmitOne(self, line_length): raise NotImplementedError

  def GetTestOpNative(self): raise NotImplementedError
  def GetTestOpJSBI(self): raise NotImplementedError
  def GetOpString(self): raise NotImplementedError
  def GetOpMethod(self): raise NotImplementedError
  def GetInputPrinter(self): raise NotImplementedError

  def EmitLicense(self):
    return TEST_LICENSE_HEADER

  def EmitHeader(self):
    return TEST_HEADER

  def EmitFooter(self, reps):
    return TEST_FOOTER % {"reps_big": reps,
                          "reps_small": 3 * reps,
                          "opname": self.GetOpMethod()}

  def EmitData(self, count):
    big = []
    small = []
    for i in range(count):
      big.append(self.EmitOne(kLineLengthBig))
      small.append(self.EmitOne(kLineLengthSmall))
    return ("const dataBig = [" + ", ".join(big) + "];\n\nconst dataSmall = [" +
            ", ".join(small) + "];")

  def EmitTestBodyNative(self):
    return TEST_BODY % {"variant": "Native",
                        "testop": self.GetTestOpNative(),
                        "comparison": "d.r !== r",
                        "inputs": self.GetInputPrinter(),
                        "opname": self.GetOpString()}

  def EmitTestBodyJSBI(self):
    return TEST_BODY % {"variant": "Jsbi",
                        "testop": self.GetTestOpJSBI(),
                        "comparison": "!JSBI.equal(r, d.r)",
                        "inputs": self.GetInputPrinter(),
                        "opname": self.GetOpMethod()}

  def PrintTest(self, count):
    print(self.EmitLicense())
    print(self.EmitData(count))
    print(self.EmitHeader())
    print(self.EmitTestBodyNative())
    print(self.EmitTestBodyJSBI())
    print(self.EmitFooter(self.GetReps()))

  def RunTest(self, count, binary):
    jsbi_location = os.path.join(
        os.path.dirname(os.path.abspath(__file__)),
        "dist/jsbi.mjs")
    reps = 3  # A few iterations are enough for correctness testing.
    try:
      fd, path = tempfile.mkstemp(suffix=".mjs", prefix="bigint-test-")
      with open(path, "w") as f:
        f.write(self.EmitData(count))
        f.write(self.EmitHeader())
        f.write(self.EmitTestBodyJSBI())
        # Just turn native testing into a no-op.
        f.write("function testNative(data, reps) { return 'disabled'; }");
        f.write(self.EmitFooter(reps))
      return subprocess.call("%s %s" % (binary, path), shell=True)
    finally:
      os.close(fd)
      os.remove(path)

class UnaryOp(TestGenerator):
  # Subclasses must implement these two.
  def GetOpString(self): raise NotImplementedError
  def GenerateResult(self, x): raise NotImplementedError

  # Subclasses may override this:
  def GenerateInput(self, line_length):
    min_length = 0 if line_length != kLineLengthBig else int(line_length / 2);
    return GenRandom(random.randint(min_length, line_length))

  def GetReps(self): return 40000

  # Subclasses should not override anything below.
  def EmitOne(self, line_length):
    x_str = self.GenerateInput(line_length)
    x_num = Parse(x_str)
    result_num = self.GenerateResult(x_num)
    result_str = Format(result_num)
    return "{\n  a: %s,\n  r: %s,\n}" % (x_str, result_str)

  def GetInputPrinter(self):
    return INPUT_PRINTER_UNARY

  def GetTestOpNative(self):
    return "%sd.a" % self.GetOpString()

  def GetTestOpJSBI(self):
    return "JSBI.%s(d.a)" % self.GetOpMethod()

class BinaryOp(TestGenerator):
  # Subclasses must implement these.
  def GetOpString(self): raise NotImplementedError
  def GetOpMethod(self): raise NotImplementedError
  def GenerateResult(self, left, right): raise NotImplementedError

  # Subclasses may override these:
  def GenerateInputLengths(self, line_length):
    min_length = 0 if line_length != kLineLengthBig else int(line_length / 2);
    return (random.randint(min_length, line_length),
            random.randint(min_length, line_length))

  def GenerateInputs(self, line_length):
    left_length, right_length = self.GenerateInputLengths(line_length)
    return GenRandom(left_length), GenRandom(right_length)

  def GetReps(self): return 40000

  # Subclasses should not override anything below.
  def EmitOne(self, line_length):
    left_str, right_str = self.GenerateInputs(line_length)
    left_num = Parse(left_str)
    right_num = Parse(right_str)
    result_num = self.GenerateResult(left_num, right_num)
    result_str = Format(result_num)
    return ("{\n  a: %s,\n  b: %s,\n  r: %s,\n}" %
            (left_str, right_str, result_str))

  def GetInputPrinter(self):
    return INPUT_PRINTER_BINARY

  def GetTestOpNative(self):
    return "d.a %s d.b" % self.GetOpString()

  def GetTestOpJSBI(self):
    return "JSBI.%s(d.a, d.b)" % self.GetOpMethod()

class Neg(UnaryOp):
  def GetOpString(self): return "-"
  def GetOpMethod(self): return "unaryMinus"
  def GenerateResult(self, x): return -x

class BitNot(UnaryOp):
  def GetOpString(self): return "~"
  def GetOpMethod(self): return "bitwiseNot"
  def GenerateResult(self, x): return ~x

class Add(BinaryOp):
  def GetOpString(self): return "+"
  def GetOpMethod(self): return "add"
  def GenerateResult(self, a, b): return a + b

class Sub(BinaryOp):
  def GetOpString(self): return "-"
  def GetOpMethod(self): return "subtract"
  def GenerateResult(self, a, b): return a - b

class Mul(BinaryOp):
  def GetOpString(self): return "*"
  def GetOpMethod(self): return "multiply"
  def GenerateResult(self, a, b): return a * b
  def GenerateInputLengths(self, line_length):
    left_length = random.randint(1, line_length)
    return left_length, line_length - left_length

class Div(BinaryOp):
  def GetOpString(self): return "/"
  def GetOpMethod(self): return "divide"
  def GetReps(self): return 10000
  def GenerateResult(self, a, b):
    result = abs(a) // abs(b)
    if (a < 0) != (b < 0): result = -result
    return result
  def GenerateInputLengths(self, line_length):
    # Let the left side be longer than the right side with high probability,
    # because that case is more interesting.
    min_left = line_length * 6 // 10
    max_right = line_length * 7 // 10
    return random.randint(min_left, line_length), random.randint(1, max_right)

class Mod(Div):  # Sharing GenerateInputLengths.
  def GetOpString(self): return "%"
  def GetOpMethod(self): return "remainder"
  def GenerateResult(self, a, b):
    result = a % b
    if a < 0 and result > 0:
      result -= abs(b)
    if a > 0 and result < 0:
      result += abs(b)
    return result

class Shl(BinaryOp):
  def GetOpString(self): return "<<"
  def GetOpMethod(self): return "leftShift"
  def GenerateInputsInternal(self, line_length, small_shift_positive):
    left_length = random.randint(0, line_length - 1)
    left = GenRandom(left_length)
    small_shift = random.randint(0, 1) == 0
    if small_shift:
      right_length = 1 + int(math.log((line_length - left_length), kBase))
      neg = kNo if small_shift_positive else kYes
    else:
      right_length = random.randint(0, 3)
      neg = kYes if small_shift_positive else kNo
    right = GenRandom(right_length, negative=neg)
    return left, right

  def GenerateInputs(self, line_length):
    return self.GenerateInputsInternal(line_length, True)
  def GenerateResult(self, a, b):
    if b < 0: return a >> -b
    return a << b

class Sar(Shl):  # Sharing GenerateInputsInternal.
  def GetOpString(self): return ">>"
  def GetOpMethod(self): return "signedRightShift"
  def GenerateInputs(self, line_length):
    return self.GenerateInputsInternal(line_length, False)
  def GenerateResult(self, a, b):
    if b < 0: return a << -b
    return a >> b

class BitAnd(BinaryOp):
  def GetOpString(self): return "&"
  def GetOpMethod(self): return "bitwiseAnd"
  def GenerateResult(self, a, b): return a & b

class BitOr(BinaryOp):
  def GetOpString(self): return "|"
  def GetOpMethod(self): return "bitwiseOr"
  def GenerateResult(self, a, b): return a | b

class BitXor(BinaryOp):
  def GetOpString(self): return "^"
  def GetOpMethod(self): return "bitwiseXor"
  def GenerateResult(self, a, b): return a ^ b

OPS = {
  "add": Add,
  "sub": Sub,
  "mul": Mul,
  "div": Div,
  "mod": Mod,
  "neg": Neg,
  "not": BitNot,
  "shl": Shl,
  "sar": Sar,
  "and": BitAnd,
  "or": BitOr,
  "xor": BitXor
}

OPS_NAMES = ", ".join(sorted(OPS.keys()))

def RunOne(op, num_inputs, binary):
  return OPS[op]().RunTest(num_inputs, binary)
def WrapRunOne(args):
  return RunOne(*args)
def RunAll(args):
  for op in args.op:
    for r in range(args.runs):
      yield (op, args.num_inputs, args.binary)

def Main():
  parser = argparse.ArgumentParser(
      description="Helper for generating or running BigInt tests.")
  parser.add_argument(
      "action", help="Action to perform: 'generate' or 'stress'")
  parser.add_argument(
      "op", nargs="+",
      help="Operation(s) to test, one or more of: %s. In 'stress' mode, "
           "special op 'all' tests all ops." % OPS_NAMES)
  parser.add_argument(
      "-n", "--num-inputs", type=int, default=-1,
      help="Number of input/output sets in each generated test. Defaults to "
           "%d for 'generate' and '%d' for 'stress' mode." %
           (kNumInputsGenerate, kNumInputsStress))

  stressopts = parser.add_argument_group("'stress' mode arguments")
  stressopts.add_argument(
      "-r", "--runs", type=int, default=1000,
      help="Number of tests (with NUM_INPUTS each) to generate and run. "
           "Default: %(default)s.")
  stressopts.add_argument(
      "-b", "--binary", default="out/x64.debug/d8",
      help="The 'd8' binary to use. Default: %(default)s.")
  args = parser.parse_args()

  for op in args.op:
    if op not in OPS.keys() and op != "all":
      print("Invalid op '%s'. See --help." % op)
      return 1

  if len(args.op) == 1 and args.op[0] == "all":
    args.op = OPS.keys()

  if args.action == "generate":
    if args.num_inputs < 0: args.num_inputs = kNumInputsGenerate
    for op in args.op:
      OPS[op]().PrintTest(args.num_inputs)
  elif args.action == "stress":
    if args.num_inputs < 0: args.num_inputs = kNumInputsStress
    result = 0
    pool = multiprocessing.Pool(multiprocessing.cpu_count())
    for r in pool.imap_unordered(WrapRunOne, RunAll(args)):
      result = result or r
    return result
  else:
    print("Invalid action '%s'. See --help." % args.action)
    return 1

if __name__ == "__main__":
  sys.exit(Main())
