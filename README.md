# Katas

A bunch of CLIs solving katas:

* [Roman Numerals](http://codingdojo.org/kata/RomanNumerals/)

## Setup

To set yourself up, first make sure you have [npm](https://www.npmjs.com/) and [NodeJS](https://nodejs.org/en/download/) installed.

Then clone this repository and create the CLIs links:

```sh
git clone git@github.com:lucsgiovanne/katas.git
cd katas
npm link
```

## Available CLIs

In the project directory, you can run:

### `roman-to-decimal -n <number>`

Runs the conversion from roman representation to decimal representation.

Doesn't validate the argument and, therefore, may lead to unexpected behavior on invalid numbers (non-valid roman number between I and MMMCMXCIX).

### `decimal-to-roman -n <number>`

Runs the conversion from decimal representation to roman representation.

Doesn't validate the argument and, therefore, may lead to unexpected behavior on invalid numbers (non-valid decimal number between 1 and 3999).

## Tests

### `npm test`

Runs the automated tests.

## About the problems

### Decimal to roman

The convertion from decimal to roman representation follow the algorithm:
* Start with the decimal number and an empty string.
* Iterate over the roman symbols base values in decreasing order (1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1) and in each iteration:
  * Divide the remaining number by the iteration base value.
  * Concatenate the string with the corresponding symbol repeated quotient times
  * Update the number with the remainder.

The algorithm correctness is trivially proven by ensuring, by induction, that the final remainder for any number between 1 and 3999 is 0.

### Roman to decimal

The convertion from roman to decimal representation follow the algorithm:
* Start with the roman number and an accumulator.
* Convert all subtractive notation inside the roman representation to straight summable notation.
* Walks the summable roman notation of the given number accumulating the decimal convertion for each symbol.

The algorithm correctness become a roman representation definitions consequence by proving the subtractive notation removal algorithm, that's trivially done for numbers between I and MMMCMXCIX.


