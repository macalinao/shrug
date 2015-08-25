#!/usr/bin/env node
var innerShrug = process.argv.slice(2).length ? process.argv.slice(2)[0] : null;
console.log(require('../shrug')(innerShrug));
