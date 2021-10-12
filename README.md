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
