#!/usr/bin/env node

require = require('esm')(module /*, options*/ );

const {
  decimalToRoman
} = require('../src');

const yargs = require('yargs');

const options = yargs
  .usage("Usage: -n <number>")
  .option("n", {
    alias: "number",
    describe: "Decimal number representation",
    type: "number",
    demandOption: true
  })
  .argv;

const roman = decimalToRoman(options.number);
console.log(roman);