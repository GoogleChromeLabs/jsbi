# JSBI — pure-JavaScript BigInts

JSBI is a pure-JavaScript implementation of [the official ECMAScript BigInt proposal](https://tc39.github.io/proposal-bigint/), which is on track to become a part of the JavaScript language in the near future.

## Installation

```sh
npm install jsbi --save
```

## Usage

```js
import JSBI from './jsbi.mjs';
const JSBigInt = JSBI.BigInt;

const max = JSBigInt(Number.MAX_SAFE_INTEGER);
// → 9007199254740991
const other = JSBigInt('2');
const result = max.add(other);
// → 9007199254740993
```

Refer to the detailed instructions below for more information.

## Why?

[Native BigInts are already shipping](https://developers.google.com/web/updates/2018/05/bigint) in modern Chromium-based browsers (at the time of this writing, Google Chrome 67+, Opera 54+) and the latest Node.js builds ([v10.4](https://nodejs.org/en/download/releases/) and later), and they are expected to come to other browsers in the future — which means you can't use them yet if you want your code to run everywhere.

To use BigInts in your code today, you need a library. But there’s a difficulty: the BigInt proposal changes the behavior of operators (like `+`, `>=`, etc.) to work on BigInts. These changes are impossible to polyfill directly; and they are also making it infeasible (in most cases) to transpile BigInt code to fallback code using Babel or similar tools. The reason is that such a transpilation would have to replace every single operator in the program with a call to some function that performs type checks on its inputs, which would incur an unacceptable performance penalty.

The solution is to do it the other way round: write code using a library’s syntax, and translate it to native BigInt code when available. JSBI is designed for exactly this purpose: it provides a BigInt “polyfill” implementation that behaves exactly like the upcoming native BigInts, but with a syntax that you can ship on all browsers, today.

Its advantages over other, existing big-integer libraries are:

- it behaves exactly like native BigInts will when they become available, so to migrate to those, you can mechanically update your code’s syntax; no re-thinking of its logic will be required. (There is no tool for this migration yet, but it should be easy to build one. Help welcome.)
- strong focus on performance. On average, JSBI is performance-competitive with the native implementation that Google Chrome is currently shipping.

## How?

Except for mechanical differences in syntax, you use JSBI-BigInts just [like you would use native BigInts](https://developers.google.com/web/updates/2018/05/bigint). Some things even look exactly the same, after you import `const BigInt = JSBI.BigInt`:

| Operation            | native BigInts      | JSBI                 |
| -------------------- | ------------------- | ------------------- |
| Creation from String | `a = BigInt('456')` | `a = BigInt('456')` |
| Creation from Number | `a = BigInt(789)`   | `a = BigInt(789)`   |
| Conversion to String | `a.toString(radix)` | `a.toString(radix)` |
| Conversion to Number | `Number(a)`         | `a.toNumber()`      |

Most operators are replaced by method calls:

| Operation                   | native BigInts | JSBI                       |
| --------------------------- | -------------- | ------------------------- |
| Addition                    | `c = a + b`    | `c = a.add(b)`            |
| Subtraction                 | `c = a - b`    | `c = a.subtract(b)`       |
| Multiplication              | `c = a * b`    | `c = a.multiply(b)`       |
| Division                    | `c = a / b`    | `c = a.divide(b)`         |
| Modulus                     | `c = a % b`    | `c = a.remainder(b)`      |
| Exponentiation              | `c = a ** b`   | `c = a.exponentiate(b)`   |
| Negation                    | `b = -a`       | `b = a.unaryMinus()`      |
| Bitwise negation            | `b = ~a`       | `b = a.bitwiseNot()`      |
| Left shifting               | `c = a << b`   | `c = a.leftShift(b)`      |
| Right shifting              | `c = a >> b`   | `c = signedRightShift(b)` |
| Bitwise “and”               | `c = a & b`    | `c = a.bitwiseAnd(b)`     |
| Bitwise “or”                | `c = a | b`    | `c = a.bitwiseOr(b)`      |
| Bitwise “xor”               | `c = a ^ b`    | `c = a.bitwiseXor(b)`     |
| Comparison to other BigInts | `a === b`      | `a.equal(b)`              |
|                             | `a < b`        | `a.lessThan(b)`           |
|                             | `a <= b`       | `a.lessThanOrEqual(b)`    |
|                             | `a > b`        | `a.greaterThan(b)`        |
|                             | `a >= b`       | `a.greaterThanOrEqual(b)` |

The functions above operate only on BigInts. (They don’t perform type checks in the current implementation, because such checks are a waste of time when we assume that you know what you’re doing. Don’t try to call them with other inputs, or you’ll get “interesting” failures!)

Some operations are particularly interesting when you give them inputs of mixed types, e.g. comparing a BigInt to a Number, or concatenating a string with a BigInt. In order to be symmetric (rather than having to be called on a BigInt as the left-hand side), they are implemented as static functions whose behavior imitates the respective native operands:

| Operation                       | native BigInts | JSBI             |
| ------------------------------- | -------------- | ---------------- |
| Abstract equality comparison    | `x == y`       | `JSBI.EQ(x, y)`  |
| Generic “less than”             | `x < y`        | `JSBI.LT(x, y)`  |
| Generic “less than or equal”    | `x <= y`       | `JSBI.LE(x, y)`  |
| Generic “greater than”          | `x > y`        | `JSBI.GT(x, y)`  |
| Generic “greater than or equal” | `x >= y`       | `JSBI.GE(x, y)`  |
| Generic addition                | `x + y`        | `JSBI.ADD(x, y)` |

The variable names `x` and `y` here indicate that the variables can refer to anything, for example: `JSBI.GT(101.5, BigInt('100'))` or `str = JSBI.ADD('result: ', BigInt('0x2A'))`.

Unfortunately, there are also a few things that are not supported at all:

| Unsupported operation | native BigInts | JSBI            |
| --------------------- | -------------- | --------------- |
| literals              | `a = 123n;`    | N/A ☹           |
| increment             | `a++`          | N/A ☹           |
|                       | `a + 1n`       | `a.increment()` |
| decrement             | `a--`          | N/A ☹           |
|                       | `a - 1n`       | `a.decrement()` |

It is impossible to replicate the behavior of the native `++` and `--` operators with methods on objects. Consider this example using native BigInts:

```js
let a = 100n;
const b = a;
a++;
console.log(a); // 101
console.log(b); // 100
```

A BigInt library has two choices: an `a.increment()` method can either modify the object, or leave the object as it is and just return the incremented value. If it modifies the object, then the `console.log(a)` statement would print the same value as the native implementation, but the `console.log(b)` statement would not (it would also print the incremented value). If it leaves the object as-is, then `b` is correctly not mutated, but to see the effect on `a`, one has to write `a = a.increment()`. JSBI makes the latter choice. Thus, the complete equivalent JSBI code is:

```js
let a = JSBI.BigInt('100');
const b = a;
a = a.increment();
console.log(a); // 101
console.log(b); // 100
```

## When?

Now! The JSBI library is ready for use today. To use it in your code, simply include it, and (optionally, for convenience) define `const BigInt = JSBI.BigInt`.

If you want, you can also instruct it to use the native BigInt implementation as its backend when it can: `JSBI.useNativeBigIntsIfAvailable()` swaps out the custom backend for redirects to the current environment’s native implementation. Currently this makes some operations faster and some slower, so there’s no strong reason either way, but it can be interesting for testing. **Important**: If you do this, do it _before_ any `const BigInt = JSBI.BigInt` assignment!

Plans for the future include:

- [issue #1](https://github.com/GoogleChromeLabs/jsbi/issues/1): introduce shorthands for operations (e.g. `exp` for `exponentiate`, and so on). The current method names follow the spec proposal. (If you have suggestions for naming schemes, please speak up!)
- [issue #2](https://github.com/GoogleChromeLabs/jsbi/issues/2):create a tool to translate code using JSBI syntax to native BigInt syntax. (If you’d like to help, please speak up!)
- [issue #3](https://github.com/GoogleChromeLabs/jsbi/issues/3):the current implementation has been tested quite well, but even more rigorous testing is always possible. (Should you find any bugs, please report them!)
- [issue #4](https://github.com/GoogleChromeLabs/jsbi/issues/4): investigate the feasibility of polyfilling `BigInt64Array`/`BigUint64Array` and the `DataView.{get,set}Big{Int,Uint}64` functions.

A more vague plan is to use the JSBI library (or an extension to it) as a staging ground for additional BigInt-related functionality. The official proposal is intentionally somewhat minimal, and leaves further “library functions” for follow-up proposals. Examples are a combined `exp`+`mod` function, and bit manipulation functions.

## Development

1. Clone this repository and `cd` into the local directory.

1. Use the Node.js version specified in `.nvmrc`:

     ```sh
     nvm use
     ```

1. Install development dependencies:

    ```sh
    npm install
    ```

1. Run the tests:

    ```sh
    npm test
    ```

    See `npm run` for the list of commands.
