'use strict';

const render = require('..');
const assert = require('assert').strict;

assert.strictEqual(render(), 'Hello from render');
console.info("render tests passed");
