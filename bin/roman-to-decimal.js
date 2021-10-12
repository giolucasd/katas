#!/usr/bin/env node

require = require('esm')(module /*, options*/ );

const {
  romanToDecimal
} = require('../src');

const yargs = require('yargs');

const options = yargs
  .usage("Usage: -n <number>")
  .option("n", {
    alias: "number",
    describe: "Roman number representation",
    type: "string",
    demandOption: true
  })
  .argv;

const decimal = romanToDecimal(options.number);
console.log(decimal);