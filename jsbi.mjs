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

class JSBI extends Array {
  constructor(length, sign) {
    if (length > JSBI.__kMaxLength) {
      throw new RangeError('Maximum BigInt size exceeded');
    }
    super(length);
    this.sign = sign;
  }

  static BigInt(arg) {
    if (typeof arg === 'number') {
      if (arg === 0) return JSBI.__zero();
      if ((arg | 0) === arg) {
        if (arg < 0) {
          return JSBI.__oneDigit(-arg, true);
        }
        return JSBI.__oneDigit(arg, false);
      }
      if (!Number.isFinite(arg) || Math.floor(arg) !== arg) {
        throw new RangeError('The number ' + arg + ' cannot be converted to ' +
                             'BigInt because it is not an integer');
      }
      return JSBI.__fromDouble(arg);
    } else if (typeof arg === 'string') {
      const result = JSBI.__fromString(arg);
      if (result === null) {
        throw new SyntaxError('Cannot convert ' + arg + ' to a BigInt');
      }
      return result;
    } else if (typeof arg === 'boolean') {
      if (arg === true) {
        return JSBI.__oneDigit(1, false);
      }
      return JSBI.__zero();
    } else if (typeof arg === 'object') {
      if (arg.constructor === JSBI) return arg;
      const primitive = JSBI.__toPrimitive(arg);
      return JSBI.BigInt(primitive);
    }
    throw new TypeError('Cannot convert ' + arg + ' to a BigInt');
  }

  toDebugString() {
    const result = ['BigInt['];
    for (const digit of this) {
      result.push((digit ? (digit >>> 0).toString(16) : digit) + ', ');
    }
    result.push(']');
    return result.join('');
  }

  toString(radix = 10) {
    if (radix < 2 || radix > 36) {
      throw new RangeError(
          'toString() radix argument must be between 2 and 36');
    }
    if (this.length === 0) return '0';
    if ((radix & (radix - 1)) === 0) {
      return JSBI.__toStringBasePowerOfTwo(this, radix);
    }
    return JSBI.__toStringGeneric(this, radix, false);
  }

  // Equivalent of "Number(my_bigint)" in the native implementation.
  // TODO: add more tests
  static toNumber(x) {
    const xLength = x.length;
    if (xLength === 0) return 0;
    if (xLength === 1) {
      const value = x.__unsignedDigit(0);
      return x.sign ? -value : value;
    }
    const xMsd = x.__digit(xLength - 1);
    const msdLeadingZeros = JSBI.__clz30(xMsd);
    const xBitLength = xLength * 30 - msdLeadingZeros;
    if (xBitLength > 1024) return x.sign ? -Infinity : Infinity;
    let exponent = xBitLength - 1;
    let currentDigit = xMsd;
    let digitIndex = xLength - 1;
    const shift = msdLeadingZeros + 3;
    let mantissaHigh = (shift === 32) ? 0 : currentDigit << shift;
    mantissaHigh >>>= 12;
    const mantissaHighBitsUnset = shift - 12;
    let mantissaLow = (shift >= 12) ? 0 : (currentDigit << (20 + shift));
    let mantissaLowBitsUnset = 20 + shift;
    if (mantissaHighBitsUnset > 0 && digitIndex > 0) {
      digitIndex--;
      currentDigit = x.__digit(digitIndex);
      mantissaHigh |= (currentDigit >>> (30 - mantissaHighBitsUnset));
      mantissaLow = currentDigit << mantissaHighBitsUnset + 2;
      mantissaLowBitsUnset = mantissaHighBitsUnset + 2;
    }
    if (mantissaLowBitsUnset > 0 && digitIndex > 0) {
      digitIndex--;
      currentDigit = x.__digit(digitIndex);
      mantissaLow |= (currentDigit >>> (30 - mantissaLowBitsUnset));
      mantissaLowBitsUnset -= 30;
    }
    const rounding = JSBI.__decideRounding(x, mantissaLowBitsUnset,
        digitIndex, currentDigit);
    if (rounding === 1 || (rounding === 0 && (mantissaLow & 1) === 1)) {
      mantissaLow = (mantissaLow + 1) >>> 0;
      if (mantissaLow === 0) {
        // Incrementing mantissaLow overflowed.
        mantissaHigh++;
        if ((mantissaHigh >>> 20) !== 0) {
          // Incrementing mantissaHigh overflowed.
          mantissaHigh = 0;
          exponent++;
          if (exponent > 1023) {
            // Incrementing the exponent overflowed.
            return x.sign ? -Infinity : Infinity;
          }
        }
      }
    }
    const signBit = x.sign ? (1 << 31) : 0;
    exponent = (exponent + 0x3FF) << 20;
    JSBI.__kBitConversionInts[1] = signBit | exponent | mantissaHigh;
    JSBI.__kBitConversionInts[0] = mantissaLow;
    return JSBI.__kBitConversionDouble[0];
  }

  // Operations.

  static unaryMinus(x) {
    if (x.length === 0) return x;
    const result = x.__copy();
    result.sign = !x.sign;
    return result;
  }

  static bitwiseNot(x) {
    if (x.sign) {
      // ~(-x) == ~(~(x-1)) == x-1
      return JSBI.__absoluteSubOne(x).__trim();
    }
    // ~x == -x-1 == -(x+1)
    return JSBI.__absoluteAddOne(x, true);
  }

  static exponentiate(x, y) {
    if (y.sign) {
      throw new RangeError('Exponent must be positive');
    }
    if (y.length === 0) {
      return JSBI.__oneDigit(1, false);
    }
    if (x.length === 0) return x;
    if (x.length === 1 && x.__digit(0) === 1) {
      // (-1) ** even_number == 1.
      if (x.sign && (y.__digit(0) & 1) === 0) {
        return JSBI.unaryMinus(x);
      }
      // (-1) ** odd_number == -1, 1 ** anything == 1.
      return x;
    }
    // For all bases >= 2, very large exponents would lead to unrepresentable
    // results.
    if (y.length > 1) throw new RangeError('BigInt too big');
    let expValue = y.__unsignedDigit(0);
    if (expValue === 1) return x;
    if (expValue >= JSBI.__kMaxLengthBits) {
      throw new RangeError('BigInt too big');
    }
    if (x.length === 1 && x.__digit(0) === 2) {
      // Fast path for 2^n.
      const neededDigits = 1 + ((expValue / 30) | 0);
      const sign = x.sign && ((expValue & 1) !== 0);
      const result = new JSBI(neededDigits, sign);
      result.__initializeDigits();
      // All bits are zero. Now set the n-th bit.
      const msd = 1 << (expValue % 30);
      result.__setDigit(neededDigits - 1, msd);
      return result;
    }
    let result = null;
    let runningSquare = x;
    // This implicitly sets the result's sign correctly.
    if ((expValue & 1) !== 0) result = x;
    expValue >>= 1;
    for (; expValue !== 0; expValue >>= 1) {
      runningSquare = JSBI.multiply(runningSquare, runningSquare);
      if ((expValue & 1) !== 0) {
        if (result === null) {
          result = runningSquare;
        } else {
          result = JSBI.multiply(result, runningSquare);
        }
      }
    }
    return result;
  }

  static multiply(x, y) {
    if (x.length === 0) return x;
    if (y.length === 0) return y;
    let resultLength = x.length + y.length;
    if (x.__clzmsd() + y.__clzmsd() >= 30) {
      resultLength--;
    }
    const result = new JSBI(resultLength, x.sign !== y.sign);
    result.__initializeDigits();
    for (let i = 0; i < x.length; i++) {
      JSBI.__multiplyAccumulate(y, x.__digit(i), result, i);
    }
    return result.__trim();
  }

  static divide(x, y) {
    if (y.length === 0) throw new RangeError('Division by zero');
    if (JSBI.__absoluteCompare(x, y) < 0) return JSBI.__zero();
    const resultSign = x.sign !== y.sign;
    const divisor = y.__unsignedDigit(0);
    let quotient;
    if (y.length === 1 && divisor <= 0x7FFF) {
      if (divisor === 1) {
        return resultSign === x.sign ? x : JSBI.unaryMinus(x);
      }
      quotient = JSBI.__absoluteDivSmall(x, divisor, null);
    } else {
      quotient = JSBI.__absoluteDivLarge(x, y, true, false);
    }
    quotient.sign = resultSign;
    return quotient.__trim();
  }

  static remainder(x, y) {
    if (y.length === 0) throw new RangeError('Division by zero');
    if (JSBI.__absoluteCompare(x, y) < 0) return x;
    const divisor = y.__unsignedDigit(0);
    if (y.length === 1 && divisor <= 0x7FFF) {
      if (divisor === 1) return JSBI.__zero();
      const remainderDigit = JSBI.__absoluteModSmall(x, divisor);
      if (remainderDigit === 0) return JSBI.__zero();
      return JSBI.__oneDigit(remainderDigit, x.sign);
    }
    const remainder = JSBI.__absoluteDivLarge(x, y, false, true);
    remainder.sign = x.sign;
    return remainder.__trim();
  }

  static add(x, y) {
    const sign = x.sign;
    if (sign === y.sign) {
      // x + y == x + y
      // -x + -y == -(x + y)
      return JSBI.__absoluteAdd(x, y, sign);
    }
    // x + -y == x - y == -(y - x)
    // -x + y == y - x == -(x - y)
    if (JSBI.__absoluteCompare(x, y) >= 0) {
      return JSBI.__absoluteSub(x, y, sign);
    }
    return JSBI.__absoluteSub(y, x, !sign);
  }

  static subtract(x, y) {
    const sign = x.sign;
    if (sign !== y.sign) {
      // x - (-y) == x + y
      // (-x) - y == -(x + y)
      return JSBI.__absoluteAdd(x, y, sign);
    }
    // x - y == -(y - x)
    // (-x) - (-y) == y - x == -(x - y)
    if (JSBI.__absoluteCompare(x, y) >= 0) {
      return JSBI.__absoluteSub(x, y, sign);
    }
    return JSBI.__absoluteSub(y, x, !sign);
  }

  static leftShift(x, y) {
    if (y.length === 0 || x.length === 0) return x;
    if (y.sign) return JSBI.__rightShiftByAbsolute(x, y);
    return JSBI.__leftShiftByAbsolute(x, y);
  }

  static signedRightShift(x, y) {
    if (y.length === 0 || x.length === 0) return x;
    if (y.sign) return JSBI.__leftShiftByAbsolute(x, y);
    return JSBI.__rightShiftByAbsolute(x, y);
  }

  static unsignedRightShift() {
    throw new TypeError(
        'BigInts have no unsigned right shift; use >> instead');
  }

  static lessThan(x, y) {
    return JSBI.__compareToBigInt(x, y) < 0;
  }

  static lessThanOrEqual(x, y) {
    return JSBI.__compareToBigInt(x, y) <= 0;
  }

  static greaterThan(x, y) {
    return JSBI.__compareToBigInt(x, y) > 0;
  }

  static greaterThanOrEqual(x, y) {
    return JSBI.__compareToBigInt(x, y) >= 0;
  }

  static equal(x, y) {
    if (x.sign !== y.sign) return false;
    if (x.length !== y.length) return false;
    for (let i = 0; i < x.length; i++) {
      if (x.__digit(i) !== y.__digit(i)) return false;
    }
    return true;
  }

  static notEqual(x, y) {
    return !JSBI.equal(x, y);
  }

  static bitwiseAnd(x, y) {
    if (!x.sign && !y.sign) {
      return JSBI.__absoluteAnd(x, y).__trim();
    } else if (x.sign && y.sign) {
      const resultLength = Math.max(x.length, y.length) + 1;
      // (-x) & (-y) == ~(x-1) & ~(y-1) == ~((x-1) | (y-1))
      // == -(((x-1) | (y-1)) + 1)
      let result = JSBI.__absoluteSubOne(x, resultLength);
      const y1 = JSBI.__absoluteSubOne(y);
      result = JSBI.__absoluteOr(result, y1, result);
      return JSBI.__absoluteAddOne(result, true, result).__trim();
    }
    // Assume that x is the positive BigInt.
    if (x.sign) {
      [x, y] = [y, x];
    }
    // x & (-y) == x & ~(y-1) == x &~ (y-1)
    return JSBI.__absoluteAndNot(x, JSBI.__absoluteSubOne(y)).__trim();
  }

  static bitwiseXor(x, y) {
    if (!x.sign && !y.sign) {
      return JSBI.__absoluteXor(x, y).__trim();
    } else if (x.sign && y.sign) {
      // (-x) ^ (-y) == ~(x-1) ^ ~(y-1) == (x-1) ^ (y-1)
      const resultLength = Math.max(x.length, y.length);
      const result = JSBI.__absoluteSubOne(x, resultLength);
      const y1 = JSBI.__absoluteSubOne(y);
      return JSBI.__absoluteXor(result, y1, result).__trim();
    }
    const resultLength = Math.max(x.length, y.length) + 1;
    // Assume that x is the positive BigInt.
    if (x.sign) {
      [x, y] = [y, x];
    }
    // x ^ (-y) == x ^ ~(y-1) == ~(x ^ (y-1)) == -((x ^ (y-1)) + 1)
    let result = JSBI.__absoluteSubOne(y, resultLength);
    result = JSBI.__absoluteXor(result, x, result);
    return JSBI.__absoluteAddOne(result, true, result).__trim();
  }

  static bitwiseOr(x, y) {
    const resultLength = Math.max(x.length, y.length);
    if (!x.sign && !y.sign) {
      return JSBI.__absoluteOr(x, y).__trim();
    } else if (x.sign && y.sign) {
      // (-x) | (-y) == ~(x-1) | ~(y-1) == ~((x-1) & (y-1))
      // == -(((x-1) & (y-1)) + 1)
      let result = JSBI.__absoluteSubOne(x, resultLength);
      const y1 = JSBI.__absoluteSubOne(y);
      result = JSBI.__absoluteAnd(result, y1, result);
      return JSBI.__absoluteAddOne(result, true, result).__trim();
    }
    // Assume that x is the positive BigInt.
    if (x.sign) {
      [x, y] = [y, x];
    }
    // x | (-y) == x | ~(y-1) == ~((y-1) &~ x) == -(((y-1) ~& x) + 1)
    let result = JSBI.__absoluteSubOne(y, resultLength);
    result = JSBI.__absoluteAndNot(result, x, result);
    return JSBI.__absoluteAddOne(result, true, result).__trim();
  }

  static asIntN(n, x) {
    if (x.length === 0) return x;
    n = Math.floor(n);
    if (n === 0) return JSBI.__zero();
    // If {x} has less than {n} bits, return it directly.
    if (n >= JSBI.__kMaxLengthBits) return x;
    const neededLength = ((n + 29) / 30) | 0;
    if (x.length < neededLength) return x;
    const topDigit = x.__unsignedDigit(neededLength - 1);
    const compareDigit = 1 << ((n - 1) % 30);
    if (x.length === neededLength && topDigit < compareDigit) return x;
    // Otherwise truncate and simulate two's complement.
    const hasBit = (topDigit & compareDigit) === compareDigit;
    if (!hasBit) return JSBI.__truncateToNBits(n, x);
    if (!x.sign) return JSBI.__truncateAndSubFromPowerOfTwo(n, x, true);
    if ((topDigit & (compareDigit - 1)) === 0) {
      for (let i = neededLength - 2; i >= 0; i--) {
        if (x.__digit(i) !== 0) {
          return JSBI.__truncateAndSubFromPowerOfTwo(n, x, false);
        }
      }
      if (x.length === neededLength && topDigit === compareDigit) return x;
      return JSBI.__truncateToNBits(n, x);
    }
    return JSBI.__truncateAndSubFromPowerOfTwo(n, x, false);
  }

  static asUintN(n, x) {
    if (x.length === 0) return x;
    n = Math.floor(n);
    if (n === 0) return JSBI.__zero();
    // If {x} is negative, simulate two's complement representation.
    if (x.sign) {
      if (n > JSBI.__kMaxLengthBits) {
        throw new RangeError('BigInt too big');
      }
      return JSBI.__truncateAndSubFromPowerOfTwo(n, x, false);
    }
    // If {x} is positive and has up to {n} bits, return it directly.
    if (n >= JSBI.__kMaxLengthBits) return x;
    const neededLength = ((n + 29) / 30) | 0;
    if (x.length < neededLength) return x;
    const bitsInTopDigit = n % 30;
    if (x.length == neededLength) {
      if (bitsInTopDigit === 0) return x;
      const topDigit = x.__digit(neededLength - 1);
      if ((topDigit >>> bitsInTopDigit) === 0) return x;
    }
    // Otherwise, truncate.
    return JSBI.__truncateToNBits(n, x);
  }

  // Operators.

  static ADD(x, y) {
    x = JSBI.__toPrimitive(x);
    y = JSBI.__toPrimitive(y);
    if (typeof x === 'string') {
      if (typeof y !== 'string') y = y.toString();
      return x + y;
    }
    if (typeof y === 'string') {
      return x.toString() + y;
    }
    x = JSBI.__toNumeric(x);
    y = JSBI.__toNumeric(y);
    if (JSBI.__isBigInt(x) && JSBI.__isBigInt(y)) {
      return JSBI.add(x, y);
    }
    if (typeof x === 'number' && typeof y === 'number') {
      return x + y;
    }
    throw new TypeError(
        'Cannot mix BigInt and other types, use explicit conversions');
  }

  static LT(x, y) {
    return JSBI.__compare(x, y, 0);
  }
  static LE(x, y) {
    return JSBI.__compare(x, y, 1);
  }
  static GT(x, y) {
    return JSBI.__compare(x, y, 2);
  }
  static GE(x, y) {
    return JSBI.__compare(x, y, 3);
  }

  static EQ(x, y) {
    while (true) {
      if (JSBI.__isBigInt(x)) {
        if (JSBI.__isBigInt(y)) return JSBI.equal(x, y);
        return JSBI.EQ(y, x);
      } else if (typeof x === 'number') {
        if (JSBI.__isBigInt(y)) return JSBI.__equalToNumber(y, x);
        if (typeof y !== 'object') return x == y;
        y = JSBI.__toPrimitive(y);
      } else if (typeof x === 'string') {
        if (JSBI.__isBigInt(y)) {
          x = JSBI.__fromString(x);
          if (x === null) return false;
          return JSBI.equal(x, y);
        }
        if (typeof y !== 'object') return x == y;
        y = JSBI.__toPrimitive(y);
      } else if (typeof x === 'boolean') {
        if (JSBI.__isBigInt(y)) return JSBI.__equalToNumber(y, +x);
        if (typeof y !== 'object') return x == y;
        y = JSBI.__toPrimitive(y);
      } else if (typeof x === 'symbol') {
        if (JSBI.__isBigInt(y)) return false;
        if (typeof y !== 'object') return x == y;
        y = JSBI.__toPrimitive(y);
      } else if (typeof x === 'object') {
        if (typeof y === 'object' && y.constructor !== JSBI) return x == y;
        x = JSBI.__toPrimitive(x);
      } else {
        return x == y;
      }
    }
  }

  static NE(x, y) {
    return !JSBI.EQ(x, y);
  }

  // Helpers.

  static __zero() {
    return new JSBI(0, false);
  }

  static __oneDigit(value, sign) {
    const result = new JSBI(1, sign);
    result.__setDigit(0, value);
    return result;
  }

  __copy() {
    const result = new JSBI(this.length, this.sign);
    for (let i = 0; i < this.length; i++) {
      result[i] = this[i];
    }
    return result;
  }

  __trim() {
    let newLength = this.length;
    let last = this[newLength - 1];
    while (last === 0) {
      newLength--;
      last = this[newLength - 1];
      this.pop();
    }
    if (newLength === 0) this.sign = false;
    return this;
  }

  __initializeDigits() {
    for (let i = 0; i < this.length; i++) {
      this[i] = 0;
    }
  }

  static __decideRounding(x, mantissaBitsUnset, digitIndex, currentDigit) {
    if (mantissaBitsUnset > 0) return -1;
    let topUnconsumedBit;
    if (mantissaBitsUnset < 0) {
      topUnconsumedBit = -mantissaBitsUnset - 1;
    } else {
      // {currentDigit} fit the mantissa exactly; look at the next digit.
      if (digitIndex === 0) return -1;
      digitIndex--;
      currentDigit = x.__digit(digitIndex);
      topUnconsumedBit = 29;
    }
    // If the most significant remaining bit is 0, round down.
    let mask = 1 << topUnconsumedBit;
    if ((currentDigit & mask) === 0) return -1;
    // If any other remaining bit is set, round up.
    mask -= 1;
    if ((currentDigit & mask) !== 0) return 1;
    while (digitIndex > 0) {
      digitIndex--;
      if (x.__digit(digitIndex) !== 0) return 1;
    }
    return 0;
  }

  static __fromDouble(value) {
    const sign = value < 0;
    JSBI.__kBitConversionDouble[0] = value;
    const rawExponent = (JSBI.__kBitConversionInts[1] >>> 20) & 0x7FF;
    const exponent = rawExponent - 0x3FF;
    const digits = ((exponent / 30) | 0) + 1;
    const result = new JSBI(digits, sign);
    const kHiddenBit = 0x00100000;
    let mantissaHigh = (JSBI.__kBitConversionInts[1] & 0xFFFFF) | kHiddenBit;
    let mantissaLow = JSBI.__kBitConversionInts[0];
    const kMantissaHighTopBit = 20;
    // 0-indexed position of most significant bit in most significant digit.
    const msdTopBit = exponent % 30;
    // Number of unused bits in the mantissa. We'll keep them shifted to the
    // left (i.e. most significant part).
    let remainingMantissaBits = 0;
    // Next digit under construction.
    let digit;
    // First, build the MSD by shifting the mantissa appropriately.
    if (msdTopBit < kMantissaHighTopBit) {
      const shift = kMantissaHighTopBit - msdTopBit;
      remainingMantissaBits = shift + 32;
      digit = mantissaHigh >>> shift;
      mantissaHigh = (mantissaHigh << (32 - shift)) | (mantissaLow >>> shift);
      mantissaLow = mantissaLow << (32 - shift);
    } else if (msdTopBit === kMantissaHighTopBit) {
      remainingMantissaBits = 32;
      digit = mantissaHigh;
      mantissaHigh = mantissaLow;
    } else {
      const shift = msdTopBit - kMantissaHighTopBit;
      remainingMantissaBits = 32 - shift;
      digit = (mantissaHigh << shift) | (mantissaLow >>> (32 - shift));
      mantissaHigh = mantissaLow << shift;
    }
    result.__setDigit(digits - 1, digit);
    // Then fill in the rest of the digits.
    for (let digitIndex = digits - 2; digitIndex >= 0; digitIndex--) {
      if (remainingMantissaBits > 0) {
        remainingMantissaBits -= 30;
        digit = mantissaHigh >>> 2;
        mantissaHigh = (mantissaHigh << 30) | (mantissaLow >>> 2);
        mantissaLow = (mantissaLow << 30);
      } else {
        digit = 0;
      }
      result.__setDigit(digitIndex, digit);
    }
    return result.__trim();
  }

  static __isWhitespace(c) {
    if (c <= 0x0D && c >= 0x09) return true;
    if (c <= 0x9F) return c === 0x20;
    if (c <= 0x01FFFF) {
      return c === 0xA0 || c === 0x1680;
    }
    if (c <= 0x02FFFF) {
      c &= 0x01FFFF;
      return c <= 0x0A || c === 0x28 || c === 0x29 || c === 0x2F ||
             c === 0x5F || c === 0x1000;
    }
    return c === 0xFEFF;
  }

  static __fromString(string, radix = 0) {
    let sign = 0;
    let leadingZero = false;
    const length = string.length;
    let cursor = 0;
    if (cursor === length) return JSBI.__zero();
    let current = string.charCodeAt(cursor);
    // Skip whitespace.
    while (JSBI.__isWhitespace(current)) {
      if (++cursor === length) return JSBI.__zero();
      current = string.charCodeAt(cursor);
    }

    // Detect radix.
    if (current === 0x2B) { // '+'
      if (++cursor === length) return null;
      current = string.charCodeAt(cursor);
      sign = 1;
    } else if (current === 0x2D) { // '-'
      if (++cursor === length) return null;
      current = string.charCodeAt(cursor);
      sign = -1;
    }

    if (radix === 0) {
      radix = 10;
      if (current === 0x30) { // '0'
        if (++cursor === length) return JSBI.__zero();
        current = string.charCodeAt(cursor);
        if (current === 0x58 || current === 0x78) { // 'X' or 'x'
          radix = 16;
          if (++cursor === length) return null;
          current = string.charCodeAt(cursor);
        } else if (current === 0x4F || current === 0x6F) { // 'O' or 'o'
          radix = 8;
          if (++cursor === length) return null;
          current = string.charCodeAt(cursor);
        } else if (current === 0x42 || current === 0x62) { // 'B' or 'b'
          radix = 2;
          if (++cursor === length) return null;
          current = string.charCodeAt(cursor);
        } else {
          leadingZero = true;
        }
      }
    } else if (radix === 16) {
      if (current === 0x30) { // '0'
        // Allow "0x" prefix.
        if (++cursor === length) return JSBI.__zero();
        current = string.charCodeAt(cursor);
        if (current === 0x58 || current === 0x78) { // 'X' or 'x'
          if (++cursor === length) return null;
          current = string.charCodeAt(cursor);
        } else {
          leadingZero = true;
        }
      }
    }
    // Skip leading zeros.
    while (current === 0x30) {
      leadingZero = true;
      if (++cursor === length) return JSBI.__zero();
      current = string.charCodeAt(cursor);
    }

    // Allocate result.
    const chars = length - cursor;
    let bitsPerChar = JSBI.__kMaxBitsPerChar[radix];
    let roundup = JSBI.__kBitsPerCharTableMultiplier - 1;
    if (chars > (1 << 30) / bitsPerChar) return null;
    const bitsMin =
        (bitsPerChar * chars + roundup) >>> JSBI.__kBitsPerCharTableShift;
    const resultLength = ((bitsMin + 29) / 30) | 0;
    const result = new JSBI(resultLength, false);

    // Parse.
    const limDigit = radix < 10 ? radix : 10;
    const limAlpha = radix > 10 ? radix - 10 : 0;

    if ((radix & (radix - 1)) === 0) {
      // Power-of-two radix.
      bitsPerChar >>= JSBI.__kBitsPerCharTableShift;
      const parts = [];
      const partsBits = [];
      let done = false;
      do {
        let part = 0;
        let bits = 0;
        while (true) {
          let d;
          if (((current - 48) >>> 0) < limDigit) {
            d = current - 48;
          } else if ((((current | 32) - 97) >>> 0) < limAlpha) {
            d = (current | 32) - 87;
          } else {
            done = true;
            break;
          }
          bits += bitsPerChar;
          part = (part << bitsPerChar) | d;
          if (++cursor === length) {
            done = true;
            break;
          }
          current = string.charCodeAt(cursor);
          if (bits + bitsPerChar > 30) break;
        }
        parts.push(part);
        partsBits.push(bits);
      } while (!done);
      JSBI.__fillFromParts(result, parts, partsBits);
    } else {
      result.__initializeDigits();
      let done = false;
      let charsSoFar = 0;
      do {
        let part = 0;
        let multiplier = 1;
        while (true) {
          let d;
          if (((current - 48) >>> 0) < limDigit) {
            d = current - 48;
          } else if ((((current | 32) - 97) >>> 0) < limAlpha) {
            d = (current | 32) - 87;
          } else {
            done = true;
            break;
          }

          const m = multiplier * radix;
          if (m > 0x3FFFFFFF) break;
          multiplier = m;
          part = part * radix + d;
          charsSoFar++;
          if (++cursor === length) {
            done = true;
            break;
          }
          current = string.charCodeAt(cursor);
        }
        roundup = JSBI.__kBitsPerCharTableMultiplier * 30 - 1;
        const digitsSoFar = (((bitsPerChar * charsSoFar + roundup) >>>
                             JSBI.__kBitsPerCharTableShift) / 30) | 0;
        result.__inplaceMultiplyAdd(multiplier, part, digitsSoFar);
      } while (!done);
    }

    if (cursor !== length) {
      if (!JSBI.__isWhitespace(current)) return null;
      for (cursor++; cursor < length; cursor++) {
        current = string.charCodeAt(cursor);
        if (!JSBI.__isWhitespace(current)) return null;
      }
    }

    // Get result.
    if (sign !== 0 && radix !== 10) return null;
    result.sign = (sign === -1);
    return result.__trim();
  }

  static __fillFromParts(result, parts, partsBits) {
    let digitIndex = 0;
    let digit = 0;
    let bitsInDigit = 0;
    for (let i = parts.length - 1; i >= 0; i--) {
      const part = parts[i];
      const partBits = partsBits[i];
      digit |= (part << bitsInDigit);
      bitsInDigit += partBits;
      if (bitsInDigit === 30) {
        result.__setDigit(digitIndex++, digit);
        bitsInDigit = 0;
        digit = 0;
      } else if (bitsInDigit > 30) {
        result.__setDigit(digitIndex++, digit & 0x3FFFFFFF);
        bitsInDigit -= 30;
        digit = part >>> (partBits - bitsInDigit);
      }
    }
    if (digit !== 0) {
      if (digitIndex >= result.length) throw new Error('implementation bug');
      result.__setDigit(digitIndex++, digit);
    }
    for (; digitIndex < result.length; digitIndex++) {
      result.__setDigit(digitIndex, 0);
    }
  }

  static __toStringBasePowerOfTwo(x, radix) {
    const length = x.length;
    let bits = radix - 1;
    bits = ((bits >>> 1) & 0x55) + (bits & 0x55);
    bits = ((bits >>> 2) & 0x33) + (bits & 0x33);
    bits = ((bits >>> 4) & 0x0F) + (bits & 0x0F);
    const bitsPerChar = bits;
    const charMask = radix - 1;
    const msd = x.__digit(length - 1);
    const msdLeadingZeros = JSBI.__clz30(msd);
    const bitLength = length * 30 - msdLeadingZeros;
    let charsRequired =
        ((bitLength + bitsPerChar - 1) / bitsPerChar) | 0;
    if (x.sign) charsRequired++;
    if (charsRequired > (1 << 28)) throw new Error('string too long');
    const result = new Array(charsRequired);
    let pos = charsRequired - 1;
    let digit = 0;
    let availableBits = 0;
    for (let i = 0; i < length - 1; i++) {
      const newDigit = x.__digit(i);
      const current = (digit | (newDigit << availableBits)) & charMask;
      result[pos--] = JSBI.__kConversionChars[current];
      const consumedBits = bitsPerChar - availableBits;
      digit = newDigit >>> consumedBits;
      availableBits = 30 - consumedBits;
      while (availableBits >= bitsPerChar) {
        result[pos--] = JSBI.__kConversionChars[digit & charMask];
        digit >>>= bitsPerChar;
        availableBits -= bitsPerChar;
      }
    }
    const current = (digit | (msd << availableBits)) & charMask;
    result[pos--] = JSBI.__kConversionChars[current];
    digit = msd >>> (bitsPerChar - availableBits);
    while (digit !== 0) {
      result[pos--] = JSBI.__kConversionChars[digit & charMask];
      digit >>>= bitsPerChar;
    }
    if (x.sign) result[pos--] = '-';
    if (pos !== -1) throw new Error('implementation bug');
    return result.join('');
  }

  static __toStringGeneric(x, radix, isRecursiveCall) {
    const length = x.length;
    if (length === 0) return '';
    if (length === 1) {
      let result = x.__unsignedDigit(0).toString(radix);
      if (isRecursiveCall === false && x.sign) {
        result = '-' + result;
      }
      return result;
    }
    const bitLength = length * 30 - JSBI.__clz30(x.__digit(length - 1));
    const maxBitsPerChar = JSBI.__kMaxBitsPerChar[radix];
    const minBitsPerChar = maxBitsPerChar - 1;
    let charsRequired = bitLength * JSBI.__kBitsPerCharTableMultiplier;
    charsRequired += minBitsPerChar - 1;
    charsRequired = (charsRequired / minBitsPerChar) | 0;
    const secondHalfChars = (charsRequired + 1) >> 1;
    // Divide-and-conquer: split by a power of {radix} that's approximately
    // the square root of {x}, then recurse.
    const conqueror = JSBI.exponentiate(JSBI.__oneDigit(radix, false),
        JSBI.__oneDigit(secondHalfChars, false));
    let quotient;
    let secondHalf;
    const divisor = conqueror.__unsignedDigit(0);
    if (conqueror.length === 1 && divisor <= 0x7FFF) {
      quotient = new JSBI(x.length, false);
      quotient.__initializeDigits();
      let remainder = 0;
      for (let i = x.length * 2 - 1; i >= 0; i--) {
        const input = (remainder << 15) | x.__halfDigit(i);
        quotient.__setHalfDigit(i, (input / divisor) | 0);
        remainder = (input % divisor) | 0;
      }
      secondHalf = remainder.toString(radix);
    } else {
      const divisionResult = JSBI.__absoluteDivLarge(x, conqueror, true, true);
      quotient = divisionResult.quotient;
      const remainder = divisionResult.remainder.__trim();
      secondHalf = JSBI.__toStringGeneric(remainder, radix, true);
    }
    quotient.__trim();
    let firstHalf = JSBI.__toStringGeneric(quotient, radix, true);
    while (secondHalf.length < secondHalfChars) {
      secondHalf = '0' + secondHalf;
    }
    if (isRecursiveCall === false && x.sign) {
      firstHalf = '-' + firstHalf;
    }
    return firstHalf + secondHalf;
  }

  static __unequalSign(leftNegative) {
    return leftNegative ? -1 : 1;
  }
  static __absoluteGreater(bothNegative) {
    return bothNegative ? -1 : 1;
  }
  static __absoluteLess(bothNegative) {
    return bothNegative ? 1 : -1;
  }

  static __compareToBigInt(x, y) {
    const xSign = x.sign;
    if (xSign !== y.sign) return JSBI.__unequalSign(xSign);
    const result = JSBI.__absoluteCompare(x, y);
    if (result > 0) return JSBI.__absoluteGreater(xSign);
    if (result < 0) return JSBI.__absoluteLess(xSign);
    return 0;
  }

  static __compareToNumber(x, y) {
    if (y | 0 === 0) {
      const xSign = x.sign;
      const ySign = (y < 0);
      if (xSign !== ySign) return JSBI.__unequalSign(xSign);
      if (x.length === 0) {
        if (ySign) throw new Error('implementation bug');
        return y === 0 ? 0 : -1;
      }
      // Any multi-digit BigInt is bigger than an int32.
      if (x.length > 1) return JSBI.__absoluteGreater(xSign);
      const yAbs = Math.abs(y);
      const xDigit = x.__unsignedDigit(0);
      if (xDigit > yAbs) return JSBI.__absoluteGreater(xSign);
      if (xDigit < yAbs) return JSBI.__absoluteLess(xSign);
      return 0;
    }
    return JSBI.__compareToDouble(x, y);
  }

  static __compareToDouble(x, y) {
    if (y !== y) return y; // NaN.
    if (y === Infinity) return -1;
    if (y === -Infinity) return 1;
    const xSign = x.sign;
    const ySign = (y < 0);
    if (xSign !== ySign) return JSBI.__unequalSign(xSign);
    if (y === 0) {
      throw new Error('implementation bug: should be handled elsewhere');
    }
    if (x.length === 0) return -1;
    JSBI.__kBitConversionDouble[0] = y;
    const rawExponent = (JSBI.__kBitConversionInts[1] >>> 20) & 0x7FF;
    if (rawExponent === 0x7FF) {
      throw new Error('implementation bug: handled elsewhere');
    }
    const exponent = rawExponent - 0x3FF;
    if (exponent < 0) {
      // The absolute value of y is less than 1. Only 0n has an absolute
      // value smaller than that, but we've already covered that case.
      return JSBI.__absoluteGreater(xSign);
    }
    const xLength = x.length;
    let xMsd = x.__digit(xLength - 1);
    const msdLeadingZeros = JSBI.__clz30(xMsd);
    const xBitLength = xLength * 30 - msdLeadingZeros;
    const yBitLength = exponent + 1;
    if (xBitLength < yBitLength) return JSBI.__absoluteLess(xSign);
    if (xBitLength > yBitLength) return JSBI.__absoluteGreater(xSign);
    // Same sign, same bit length. Shift mantissa to align with x and compare
    // bit for bit.
    const kHiddenBit = 0x00100000;
    let mantissaHigh = (JSBI.__kBitConversionInts[1] & 0xFFFFF) | kHiddenBit;
    let mantissaLow = JSBI.__kBitConversionInts[0];
    const kMantissaHighTopBit = 20;
    const msdTopBit = 29 - msdLeadingZeros;
    if (msdTopBit !== (((xBitLength - 1) % 30) | 0)) {
      throw new Error('implementation bug');
    }
    let compareMantissa; // Shifted chunk of mantissa.
    let remainingMantissaBits = 0;
    // First, compare most significant digit against beginning of mantissa.
    if (msdTopBit < kMantissaHighTopBit) {
      const shift = kMantissaHighTopBit - msdTopBit;
      remainingMantissaBits = shift + 32;
      compareMantissa = mantissaHigh >>> shift;
      mantissaHigh = (mantissaHigh << (32 - shift)) | (mantissaLow >>> shift);
      mantissaLow = mantissaLow << (32 - shift);
    } else if (msdTopBit === kMantissaHighTopBit) {
      remainingMantissaBits = 32;
      compareMantissa = mantissaHigh;
      mantissaHigh = mantissaLow;
    } else {
      const shift = msdTopBit - kMantissaHighTopBit;
      remainingMantissaBits = 32 - shift;
      compareMantissa =
          (mantissaHigh << shift) | (mantissaLow >>> (32 - shift));
      mantissaHigh = mantissaLow << shift;
    }
    xMsd = xMsd >>> 0;
    compareMantissa = compareMantissa >>> 0;
    if (xMsd > compareMantissa) return JSBI.__absoluteGreater(xSign);
    if (xMsd < compareMantissa) return JSBI.__absoluteLess(xSign);
    // Then, compare additional digits against remaining mantissa bits.
    for (let digitIndex = xLength - 2; digitIndex >= 0; digitIndex--) {
      if (remainingMantissaBits > 0) {
        remainingMantissaBits -= 30;
        compareMantissa = mantissaHigh >>> 2;
        mantissaHigh = (mantissaHigh << 30) | (mantissaLow >>> 2);
        mantissaLow = (mantissaLow << 30);
      } else {
        compareMantissa = 0;
      }
      const digit = x.__unsignedDigit(digitIndex);
      if (digit > compareMantissa) return JSBI.__absoluteGreater(xSign);
      if (digit < compareMantissa) return JSBI.__absoluteLess(xSign);
    }
    // Integer parts are equal; check whether {y} has a fractional part.
    if (mantissaHigh !== 0 || mantissaLow !== 0) {
      if (remainingMantissaBits === 0) throw new Error('implementation bug');
      return JSBI.__absoluteLess(xSign);
    }
    return 0;
  }

  static __equalToNumber(x, y) {
    if (y | 0 === y) {
      if (y === 0) return x.length === 0;
      // Any multi-digit BigInt is bigger than an int32.
      return (x.length === 1) && (x.sign === (y < 0)) &&
             (x.__unsignedDigit(0) === Math.abs(y));
    }
    return JSBI.__compareToDouble(x, y) === 0;
  }

  // Comparison operations, chosen such that "op ^ 2" reverses direction:
  // 0 - lessThan
  // 1 - lessThanOrEqual
  // 2 - greaterThan
  // 3 - greaterThanOrEqual
  static __comparisonResultToBool(result, op) {
    switch (op) {
      case 0: return result < 0;
      case 1: return result <= 0;
      case 2: return result > 0;
      case 3: return result >= 0;
    }
    throw new Error('unreachable');
  }

  static __compare(x, y, op) {
    x = JSBI.__toPrimitive(x);
    y = JSBI.__toPrimitive(y);
    if (typeof x === 'string' && typeof y === 'string') {
      switch (op) {
        case 0: return x < y;
        case 1: return x <= y;
        case 2: return x > y;
        case 3: return x >= y;
      }
    }
    if (JSBI.__isBigInt(x) && typeof y === 'string') {
      y = JSBI.__fromString(y);
      if (y === null) return false;
      return JSBI.__comparisonResultToBool(JSBI.__compareToBigInt(x, y), op);
    }
    if (typeof x === 'string' && JSBI.__isBigInt(y)) {
      x = JSBI.__fromString(x);
      if (x === null) return false;
      return JSBI.__comparisonResultToBool(JSBI.__compareToBigInt(x, y), op);
    }
    x = JSBI.__toNumeric(x);
    y = JSBI.__toNumeric(y);
    if (JSBI.__isBigInt(x)) {
      if (JSBI.__isBigInt(y)) {
        return JSBI.__comparisonResultToBool(JSBI.__compareToBigInt(x, y), op);
      }
      if (typeof y !== 'number') throw new Error('implementation bug');
      return JSBI.__comparisonResultToBool(JSBI.__compareToNumber(x, y), op);
    }
    if (typeof x !== 'number') throw new Error('implementation bug');
    if (JSBI.__isBigInt(y)) {
      // Note that "op ^ 2" reverses the op's direction.
      return JSBI.__comparisonResultToBool(JSBI.__compareToNumber(y, x),
          op ^ 2);
    }
    if (typeof y !== 'number') throw new Error('implementation bug');
    switch (op) {
      case 0: return x < y;
      case 1: return x <= y;
      case 2: return x > y;
      case 3: return x >= y;
    }
  }

  __clzmsd() {
    return JSBI.__clz30(this[this.length - 1]);
  }

  static __absoluteAdd(x, y, resultSign) {
    if (x.length < y.length) return JSBI.__absoluteAdd(y, x, resultSign);
    if (x.length === 0) return x;
    if (y.length === 0) return x.sign === resultSign ? x : JSBI.unaryMinus(x);
    let resultLength = x.length;
    if (x.__clzmsd() === 0 || (y.length === x.length && y.__clzmsd() === 0)) {
      resultLength++;
    }
    const result = new JSBI(resultLength, resultSign);
    let carry = 0;
    let i = 0;
    for (; i < y.length; i++) {
      const r = x.__digit(i) + y.__digit(i) + carry;
      carry = r >>> 30;
      result.__setDigit(i, r & 0x3FFFFFFF);
    }
    for (; i < x.length; i++) {
      const r = x.__digit(i) + carry;
      carry = r >>> 30;
      result.__setDigit(i, r & 0x3FFFFFFF);
    }
    if (i < result.length) {
      result.__setDigit(i, carry);
    }
    return result.__trim();
  }

  static __absoluteSub(x, y, resultSign) {
    if (x.length === 0) return x;
    if (y.length === 0) return x.sign === resultSign ? x : JSBI.unaryMinus(x);
    const result = new JSBI(x.length, resultSign);
    let borrow = 0;
    let i = 0;
    for (; i < y.length; i++) {
      const r = x.__digit(i) - y.__digit(i) - borrow;
      borrow = (r >>> 30) & 1;
      result.__setDigit(i, r & 0x3FFFFFFF);
    }
    for (; i < x.length; i++) {
      const r = x.__digit(i) - borrow;
      borrow = (r >>> 30) & 1;
      result.__setDigit(i, r & 0x3FFFFFFF);
    }
    return result.__trim();
  }

  static __absoluteAddOne(x, sign, result = null) {
    const inputLength = x.length;
    if (result === null) {
      result = new JSBI(inputLength, sign);
    } else {
      result.sign = sign;
    }
    let carry = 1;
    for (let i = 0; i < inputLength; i++) {
      const r = x.__digit(i) + carry;
      carry = r >>> 30;
      result.__setDigit(i, r & 0x3FFFFFFF);
    }
    if (carry !== 0) {
      result.__setDigitGrow(inputLength, 1);
    }
    return result;
  }

  static __absoluteSubOne(x, resultLength) {
    const length = x.length;
    resultLength = resultLength || length;
    const result = new JSBI(resultLength, false);
    let borrow = 1;
    for (let i = 0; i < length; i++) {
      const r = x.__digit(i) - borrow;
      borrow = (r >>> 30) & 1;
      result.__setDigit(i, r & 0x3FFFFFFF);
    }
    if (borrow !== 0) throw new Error('implementation bug');
    for (let i = length; i < resultLength; i++) {
      result.__setDigit(i, 0);
    }
    return result;
  }

  static __absoluteAnd(x, y, result = null) {
    let xLength = x.length;
    let yLength = y.length;
    let numPairs = yLength;
    if (xLength < yLength) {
      numPairs = xLength;
      const tmp = x;
      const tmpLength = xLength;
      x = y;
      xLength = yLength;
      y = tmp;
      yLength = tmpLength;
    }
    let resultLength = numPairs;
    if (result === null) {
      result = new JSBI(resultLength, false);
    } else {
      resultLength = result.length;
    }
    let i = 0;
    for (; i < numPairs; i++) {
      result.__setDigit(i, x.__digit(i) & y.__digit(i));
    }
    for (; i < resultLength; i++) {
      result.__setDigit(i, 0);
    }
    return result;
  }

  static __absoluteAndNot(x, y, result = null) {
    const xLength = x.length;
    const yLength = y.length;
    let numPairs = yLength;
    if (xLength < yLength) {
      numPairs = xLength;
    }
    let resultLength = xLength;
    if (result === null) {
      result = new JSBI(resultLength, false);
    } else {
      resultLength = result.length;
    }
    let i = 0;
    for (; i < numPairs; i++) {
      result.__setDigit(i, x.__digit(i) & ~y.__digit(i));
    }
    for (; i < xLength; i++) {
      result.__setDigit(i, x.__digit(i));
    }
    for (; i < resultLength; i++) {
      result.__setDigit(i, 0);
    }
    return result;
  }

  static __absoluteOr(x, y, result = null) {
    let xLength = x.length;
    let yLength = y.length;
    let numPairs = yLength;
    if (xLength < yLength) {
      numPairs = xLength;
      const tmp = x;
      const tmpLength = xLength;
      x = y;
      xLength = yLength;
      y = tmp;
      yLength = tmpLength;
    }
    let resultLength = xLength;
    if (result === null) {
      result = new JSBI(resultLength, false);
    } else {
      resultLength = result.length;
    }
    let i = 0;
    for (; i < numPairs; i++) {
      result.__setDigit(i, x.__digit(i) | y.__digit(i));
    }
    for (; i < xLength; i++) {
      result.__setDigit(i, x.__digit(i));
    }
    for (; i < resultLength; i++) {
      result.__setDigit(i, 0);
    }
    return result;
  }

  static __absoluteXor(x, y, result = null) {
    let xLength = x.length;
    let yLength = y.length;
    let numPairs = yLength;
    if (xLength < yLength) {
      numPairs = xLength;
      const tmp = x;
      const tmpLength = xLength;
      x = y;
      xLength = yLength;
      y = tmp;
      yLength = tmpLength;
    }
    let resultLength = xLength;
    if (result === null) {
      result = new JSBI(resultLength, false);
    } else {
      resultLength = result.length;
    }
    let i = 0;
    for (; i < numPairs; i++) {
      result.__setDigit(i, x.__digit(i) ^ y.__digit(i));
    }
    for (; i < xLength; i++) {
      result.__setDigit(i, x.__digit(i));
    }
    for (; i < resultLength; i++) {
      result.__setDigit(i, 0);
    }
    return result;
  }

  static __absoluteCompare(x, y) {
    const diff = x.length - y.length;
    if (diff !== 0) return diff;
    let i = x.length - 1;
    while (i >= 0 && x.__digit(i) === y.__digit(i)) i--;
    if (i < 0) return 0;
    return x.__unsignedDigit(i) > y.__unsignedDigit(i) ? 1 : -1;
  }

  static __multiplyAccumulate(multiplicand, multiplier, accumulator,
      accumulatorIndex) {
    if (multiplier === 0) return;
    const m2Low = multiplier & 0x7FFF;
    const m2High = multiplier >>> 15;
    let carry = 0;
    let high = 0;
    for (let i = 0; i < multiplicand.length; i++, accumulatorIndex++) {
      let acc = accumulator.__digit(accumulatorIndex);
      const m1 = multiplicand.__digit(i);
      const m1Low = m1 & 0x7FFF;
      const m1High = m1 >>> 15;
      const rLow = JSBI.__imul(m1Low, m2Low);
      const rMid1 = JSBI.__imul(m1Low, m2High);
      const rMid2 = JSBI.__imul(m1High, m2Low);
      const rHigh = JSBI.__imul(m1High, m2High);
      acc += high + rLow + carry;
      carry = acc >>> 30;
      acc &= 0x3FFFFFFF;
      acc += ((rMid1 & 0x7FFF) << 15) + ((rMid2 & 0x7FFF) << 15);
      carry += acc >>> 30;
      high = rHigh + (rMid1 >>> 15) + (rMid2 >>> 15);
      accumulator.__setDigit(accumulatorIndex, acc & 0x3FFFFFFF);
    }
    for (; carry !== 0 || high !== 0; accumulatorIndex++) {
      let acc = accumulator.__digit(accumulatorIndex);
      acc += carry + high;
      high = 0;
      carry = acc >>> 30;
      accumulator.__setDigit(accumulatorIndex, acc & 0x3FFFFFFF);
    }
  }

  static __internalMultiplyAdd(source, factor, summand, n, result) {
    let carry = summand;
    let high = 0;
    for (let i = 0; i < n; i++) {
      const digit = source.__digit(i);
      const rx = JSBI.__imul(digit & 0x7FFF, factor);
      const ry = JSBI.__imul(digit >>> 15, factor);
      const r = rx + ((ry & 0x7FFF) << 15) + high + carry;
      carry = r >>> 30;
      high = ry >>> 15;
      result.__setDigit(i, r & 0x3FFFFFFF);
    }
    if (result.length > n) {
      result.__setDigit(n++, carry + high);
      while (n < result.length) {
        result.__setDigit(n++, 0);
      }
    } else {
      if (carry + high !== 0) throw new Error('implementation bug');
    }
  }

  __inplaceMultiplyAdd(multiplier, summand, length) {
    if (length > this.length) length = this.length;
    const mLow = multiplier & 0x7FFF;
    const mHigh = multiplier >>> 15;
    let carry = 0;
    let high = summand;
    for (let i = 0; i < length; i++) {
      const d = this.__digit(i);
      const dLow = d & 0x7FFF;
      const dHigh = d >>> 15;
      const pLow = JSBI.__imul(dLow, mLow);
      const pMid1 = JSBI.__imul(dLow, mHigh);
      const pMid2 = JSBI.__imul(dHigh, mLow);
      const pHigh = JSBI.__imul(dHigh, mHigh);
      let result = high + pLow + carry;
      carry = result >>> 30;
      result &= 0x3FFFFFFF;
      result += ((pMid1 & 0x7FFF) << 15) + ((pMid2 & 0x7FFF) << 15);
      carry += result >>> 30;
      high = pHigh + (pMid1 >>> 15) + (pMid2 >>> 15);
      this.__setDigit(i, result & 0x3FFFFFFF);
    }
    if (carry !== 0 || high !== 0) {
      throw new Error('implementation bug');
    }
  }

  static __absoluteDivSmall(x, divisor, quotient) {
    if (quotient === null) quotient = new JSBI(x.length, false);
    let remainder = 0;
    for (let i = x.length * 2 - 1; i >= 0; i -= 2) {
      let input = ((remainder << 15) | x.__halfDigit(i)) >>> 0;
      const upperHalf = (input / divisor) | 0;
      remainder = (input % divisor) | 0;
      input = ((remainder << 15) | x.__halfDigit(i - 1)) >>> 0;
      const lowerHalf = (input / divisor) | 0;
      remainder = (input % divisor) | 0;
      quotient.__setDigit(i >>> 1, (upperHalf << 15) | lowerHalf);
    }
    return quotient;
  }

  static __absoluteModSmall(x, divisor) {
    let remainder = 0;
    for (let i = x.length * 2 - 1; i >= 0; i--) {
      const input = ((remainder << 15) | x.__halfDigit(i)) >>> 0;
      remainder = (input % divisor) | 0;
    }
    return remainder;
  }

  static __absoluteDivLarge(dividend, divisor, wantQuotient, wantRemainder) {
    const n = divisor.__halfDigitLength();
    const n2 = divisor.length;
    const m = dividend.__halfDigitLength() - n;
    let q = null;
    if (wantQuotient) {
      q = new JSBI((m + 2) >>> 1, false);
      q.__initializeDigits();
    }
    const qhatv = new JSBI((n + 2) >>> 1, false);
    qhatv.__initializeDigits();
    // D1.
    const shift = JSBI.__clz15(divisor.__halfDigit(n - 1));
    if (shift > 0) {
      divisor = JSBI.__specialLeftShift(divisor, shift, 0 /* add no digits*/);
    }
    const u = JSBI.__specialLeftShift(dividend, shift, 1 /* add one digit */);
    // D2.
    const vn1 = divisor.__halfDigit(n - 1);
    let halfDigitBuffer = 0;
    for (let j = m; j >= 0; j--) {
      // D3.
      let qhat = 0x7FFF;
      const ujn = u.__halfDigit(j + n);
      if (ujn !== vn1) {
        const input = ((ujn << 15) | u.__halfDigit(j + n - 1)) >>> 0;
        qhat = (input / vn1) | 0;
        let rhat = (input % vn1) | 0;
        const vn2 = divisor.__halfDigit(n - 2);
        const ujn2 = u.__halfDigit(j + n - 2);
        while ((JSBI.__imul(qhat, vn2) >>> 0) > (((rhat << 16) | ujn2) >>> 0)) {
          qhat--;
          rhat += vn1;
          if (rhat > 0x7FFF) break;
        }
      }
      // D4.
      JSBI.__internalMultiplyAdd(divisor, qhat, 0, n2, qhatv);
      let c = u.__inplaceSub(qhatv, j, n + 1);
      if (c !== 0) {
        c = u.__inplaceAdd(divisor, j, n);
        u.__setHalfDigit(j + n, (u.__halfDigit(j + n) + c) & 0x7FFF);
        qhat--;
      }
      if (wantQuotient) {
        if (j & 1) {
          halfDigitBuffer = qhat << 15;
        } else {
          q.__setDigit(j >>> 1, halfDigitBuffer | qhat);
        }
      }
    }
    if (wantRemainder) {
      u.__inplaceRightShift(shift);
      if (wantQuotient) {
        return {quotient: q, remainder: u};
      }
      return u;
    }
    if (wantQuotient) return q;
  }

  static __clz15(value) {
    return JSBI.__clz30(value) - 15;
  }

  // TODO: work on full digits, like __inplaceSub?
  __inplaceAdd(summand, startIndex, halfDigits) {
    let carry = 0;
    for (let i = 0; i < halfDigits; i++) {
      const sum = this.__halfDigit(startIndex + i) +
                summand.__halfDigit(i) +
                carry;
      carry = sum >>> 15;
      this.__setHalfDigit(startIndex + i, sum & 0x7FFF);
    }
    return carry;
  }

  __inplaceSub(subtrahend, startIndex, halfDigits) {
    const fullSteps = (halfDigits - 1) >>> 1;
    let borrow = 0;
    if (startIndex & 1) {
      // this:   [..][..][..]
      // subtr.:   [..][..]
      startIndex >>= 1;
      let current = this.__digit(startIndex);
      let r0 = current & 0x7FFF;
      let i = 0;
      for (; i < fullSteps; i++) {
        const sub = subtrahend.__digit(i);
        const r15 = (current >>> 15) - (sub & 0x7FFF) - borrow;
        borrow = (r15 >>> 15) & 1;
        this.__setDigit(startIndex + i, ((r15 & 0x7FFF) << 15) | (r0 & 0x7FFF));
        current = this.__digit(startIndex + i + 1);
        r0 = (current & 0x7FFF) - (sub >>> 15) - borrow;
        borrow = (r0 >>> 15) & 1;
      }
      // Unrolling the last iteration gives a 5% performance benefit!
      const sub = subtrahend.__digit(i);
      const r15 = (current >>> 15) - (sub & 0x7FFF) - borrow;
      borrow = (r15 >>> 15) & 1;
      this.__setDigit(startIndex + i, ((r15 & 0x7FFF) << 15) | (r0 & 0x7FFF));
      const subTop = sub >>> 15;
      if (startIndex + i + 1 >= this.length) {
        throw new RangeError('out of bounds');
      }
      if ((halfDigits & 1) === 0) {
        current = this.__digit(startIndex + i + 1);
        r0 = (current & 0x7FFF) - subTop - borrow;
        borrow = (r0 >>> 15) & 1;
        this.__setDigit(startIndex + subtrahend.length,
            (current & 0x3FFF8000) | (r0 & 0x7FFF));
      }
    } else {
      startIndex >>= 1;
      let i = 0;
      for (; i < subtrahend.length - 1; i++) {
        const current = this.__digit(startIndex + i);
        const sub = subtrahend.__digit(i);
        const r0 = (current & 0x7FFF) - (sub & 0x7FFF) - borrow;
        borrow = (r0 >>> 15) & 1;
        const r15 = (current >>> 15) - (sub >>> 15) - borrow;
        borrow = (r15 >>> 15) & 1;
        this.__setDigit(startIndex + i, ((r15 & 0x7FFF) << 15) | (r0 & 0x7FFF));
      }
      const current = this.__digit(startIndex + i);
      const sub = subtrahend.__digit(i);
      const r0 = (current & 0x7FFF) - (sub & 0x7FFF) - borrow;
      borrow = (r0 >>> 15) & 1;
      let r15 = 0;
      if ((halfDigits & 1) === 0) {
        r15 = (current >>> 15) - (sub >>> 15) - borrow;
        borrow = (r15 >>> 15) & 1;
      }
      this.__setDigit(startIndex + i, ((r15 & 0x7FFF) << 15) | (r0 & 0x7FFF));
    }
    return borrow;
  }

  __inplaceRightShift(shift) {
    if (shift === 0) return;
    let carry = this.__digit(0) >>> shift;
    const last = this.length - 1;
    for (let i = 0; i < last; i++) {
      const d = this.__digit(i + 1);
      this.__setDigit(i, ((d << (30 - shift)) & 0x3FFFFFFF) | carry);
      carry = d >>> shift;
    }
    this.__setDigit(last, carry);
  }

  static __specialLeftShift(x, shift, addDigit) {
    const n = x.length;
    const resultLength = n + addDigit;
    const result = new JSBI(resultLength, false);
    if (shift === 0) {
      for (let i = 0; i < n; i++) result.__setDigit(i, x.__digit(i));
      if (addDigit > 0) result.__setDigit(n, 0);
      return result;
    }
    let carry = 0;
    for (let i = 0; i < n; i++) {
      const d = x.__digit(i);
      result.__setDigit(i, ((d << shift) & 0x3FFFFFFF) | carry);
      carry = d >>> (30 - shift);
    }
    if (addDigit > 0) {
      result.__setDigit(n, carry);
    }
    return result;
  }

  static __leftShiftByAbsolute(x, y) {
    const shift = JSBI.__toShiftAmount(y);
    if (shift < 0) throw new RangeError('BigInt too big');
    const digitShift = (shift / 30) | 0;
    const bitsShift = shift % 30;
    const length = x.length;
    const grow = bitsShift !== 0 &&
                 (x.__digit(length - 1) >>> (30 - bitsShift)) !== 0;
    const resultLength = length + digitShift + (grow ? 1 : 0);
    const result = new JSBI(resultLength, x.sign);
    if (bitsShift === 0) {
      let i = 0;
      for (; i < digitShift; i++) result.__setDigit(i, 0);
      for (; i < resultLength; i++) {
        result.__setDigit(i, x.__digit(i - digitShift));
      }
    } else {
      let carry = 0;
      for (let i = 0; i < digitShift; i++) result.__setDigit(i, 0);
      for (let i = 0; i < length; i++) {
        const d = x.__digit(i);
        result.__setDigit(
            i + digitShift, ((d << bitsShift) & 0x3FFFFFFF) | carry);
        carry = d >>> (30 - bitsShift);
      }
      if (grow) {
        result.__setDigit(length + digitShift, carry);
      } else {
        if (carry !== 0) throw new Error('implementation bug');
      }
    }
    return result.__trim();
  }

  static __rightShiftByAbsolute(x, y) {
    const length = x.length;
    const sign = x.sign;
    const shift = JSBI.__toShiftAmount(y);
    if (shift < 0) return JSBI.__rightShiftByMaximum(sign);
    const digitShift = (shift / 30) | 0;
    const bitsShift = shift % 30;
    let resultLength = length - digitShift;
    if (resultLength <= 0) return JSBI.__rightShiftByMaximum(sign);
    // For negative numbers, round down if any bit was shifted out (so that
    // e.g. -5n >> 1n == -3n and not -2n). Check now whether this will happen
    // and whether itc an cause overflow into a new digit. If we allocate the
    // result large enough up front, it avoids having to do grow it later.
    let mustRoundDown = false;
    if (sign) {
      const mask = (1 << bitsShift) - 1;
      if ((x.__digit(digitShift) & mask) !== 0) {
        mustRoundDown = true;
      } else {
        for (let i = 0; i < digitShift; i++) {
          if (x.__digit(i) !== 0) {
            mustRoundDown = true;
            break;
          }
        }
      }
    }
    // If bitsShift is non-zero, it frees up bits, preventing overflow.
    if (mustRoundDown && bitsShift === 0) {
      // Overflow cannot happen if the most significant digit has unset bits.
      const msd = x.__digit(length - 1);
      const roundingCanOverflow = ~msd === 0;
      if (roundingCanOverflow) resultLength++;
    }
    let result = new JSBI(resultLength, sign);
    if (bitsShift === 0) {
      // Zero out any overflow digit (see "roundingCanOverflow" above).
      result.__setDigit(resultLength - 1, 0);
      for (let i = digitShift; i < length; i++) {
        result.__setDigit(i - digitShift, x.__digit(i));
      }
    } else {
      let carry = x.__digit(digitShift) >>> bitsShift;
      const last = length - digitShift - 1;
      for (let i = 0; i < last; i++) {
        const d = x.__digit(i + digitShift + 1);
        result.__setDigit(i, ((d << (30 - bitsShift)) & 0x3FFFFFFF) | carry);
        carry = d >>> bitsShift;
      }
      result.__setDigit(last, carry);
    }
    if (mustRoundDown) {
      // Since the result is negative, rounding down means adding one to its
      // absolute value. This cannot overflow.
      result = JSBI.__absoluteAddOne(result, true, result);
    }
    return result.__trim();
  }

  static __rightShiftByMaximum(sign) {
    if (sign) {
      return JSBI.__oneDigit(1, true);
    }
    return JSBI.__zero();
  }

  static __toShiftAmount(x) {
    if (x.length > 1) return -1;
    const value = x.__unsignedDigit(0);
    if (value > JSBI.__kMaxLengthBits) return -1;
    return value;
  }

  static __toPrimitive(obj, hint='default') {
    if (typeof obj !== 'object') return obj;
    if (obj.constructor === JSBI) return obj;
    const exoticToPrim = obj[Symbol.toPrimitive];
    if (exoticToPrim) {
      const primitive = exoticToPrim(hint);
      if (typeof primitive !== 'object') return primitive;
      throw new TypeError('Cannot convert object to primitive value');
    }
    const valueOf = obj.valueOf;
    if (valueOf) {
      const primitive = valueOf.call(obj);
      if (typeof primitive !== 'object') return primitive;
    }
    const toString = obj.toString;
    if (toString) {
      const primitive = toString.call(obj);
      if (typeof primitive !== 'object') return primitive;
    }
    throw new TypeError('Cannot convert object to primitive value');
  }

  static __toNumeric(value) {
    if (JSBI.__isBigInt(value)) return value;
    return +value;
  }

  static __isBigInt(value) {
    return typeof value === 'object' && value !== null &&
           value.constructor === JSBI;
  }

  static __truncateToNBits(n, x) {
    const neededDigits = ((n + 29) / 30) | 0;
    const result = new JSBI(neededDigits, x.sign);
    const last = neededDigits - 1;
    for (let i = 0; i < last; i++) {
      result.__setDigit(i, x.__digit(i));
    }
    let msd = x.__digit(last);
    if ((n % 30) !== 0) {
      const drop = 32 - (n % 30);
      msd = (msd << drop) >>> drop;
    }
    result.__setDigit(last, msd);
    return result.__trim();
  }

  static __truncateAndSubFromPowerOfTwo(n, x, resultSign) {
    const neededDigits = ((n + 29) / 30) | 0;
    const result = new JSBI(neededDigits, resultSign);
    let i = 0;
    const last = neededDigits - 1;
    let borrow = 0;
    const limit = Math.min(last, x.length);
    for (; i < limit; i++) {
      const r = 0 - x.__digit(i) - borrow;
      borrow = (r >>> 30) & 1;
      result.__setDigit(i, r & 0x3FFFFFFF);
    }
    for (; i < last; i++) {
      result.__setDigit(i, (-borrow & 0x3FFFFFFF) | 0);
    }
    let msd = last < x.length ? x.__digit(last) : 0;
    const msdBitsConsumed = n % 30;
    let resultMsd;
    if (msdBitsConsumed === 0) {
      resultMsd = 0 - msd - borrow;
      resultMsd &= 0x3FFFFFFF;
    } else {
      const drop = 32 - msdBitsConsumed;
      msd = (msd << drop) >>> drop;
      const minuendMsd = 1 << (32 - drop);
      resultMsd = minuendMsd - msd - borrow;
      resultMsd &= (minuendMsd - 1);
    }
    result.__setDigit(last, resultMsd);
    return result.__trim();
  }

  // Digit helpers.
  __digit(i) {
    return this[i];
  }
  __unsignedDigit(i) {
    return this[i] >>> 0;
  }
  __setDigit(i, digit) {
    this[i] = digit | 0;
  }
  __setDigitGrow(i, digit) {
    this[i] = digit | 0;
  }
  __halfDigitLength() {
    const len = this.length;
    if (this.__unsignedDigit(len - 1) <= 0x7FFF) return len * 2 - 1;
    return len*2;
  }
  __halfDigit(i) {
    return (this[i >>> 1] >>> ((i & 1) * 15)) & 0x7FFF;
  }
  __setHalfDigit(i, value) {
    const digitIndex = i >>> 1;
    const previous = this.__digit(digitIndex);
    const updated = (i & 1) ? (previous & 0x7FFF) | (value << 15)
                            : (previous & 0x3FFF8000) | (value & 0x7FFF);
    this.__setDigit(digitIndex, updated);
  }

  static __digitPow(base, exponent) {
    let result = 1;
    while (exponent > 0) {
      if (exponent & 1) result *= base;
      exponent >>>= 1;
      base *= base;
    }
    return result;
  }
}

JSBI.__kMaxLength = 1 << 25;
JSBI.__kMaxLengthBits = JSBI.__kMaxLength << 5;
// Lookup table for the maximum number of bits required per character of a
// base-N string representation of a number. To increase accuracy, the array
// value is the actual value multiplied by 32. To generate this table:
//
// for (let i = 0; i <= 36; i++) {
//   console.log(Math.ceil(Math.log2(i) * 32) + ',');
// }
JSBI.__kMaxBitsPerChar = [
  0, 0, 32, 51, 64, 75, 83, 90, 96, // 0..8
  102, 107, 111, 115, 119, 122, 126, 128, // 9..16
  131, 134, 136, 139, 141, 143, 145, 147, // 17..24
  149, 151, 153, 154, 156, 158, 159, 160, // 25..32
  162, 163, 165, 166, // 33..36
];
JSBI.__kBitsPerCharTableShift = 5;
JSBI.__kBitsPerCharTableMultiplier = 1 << JSBI.__kBitsPerCharTableShift;
JSBI.__kConversionChars = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');
JSBI.__kBitConversionBuffer = new ArrayBuffer(8);
JSBI.__kBitConversionDouble = new Float64Array(JSBI.__kBitConversionBuffer);
JSBI.__kBitConversionInts = new Int32Array(JSBI.__kBitConversionBuffer);

// For IE11 compatibility.
// Note that the custom replacements are tailored for JSBI's needs, and as
// such are not reusable as general-purpose polyfills.
JSBI.__clz30 = Math.clz32 ? function(x) {
  return Math.clz32(x) - 2;
} : function(x) {
  if (x === 0) return 30;
  return 29 - (Math.log(x >>> 0) / Math.LN2 | 0) | 0;
};
JSBI.__imul = Math.imul || function(a, b) {
  return (a * b) | 0;
};

export default JSBI;
