'use strict';

const construct = require('..');
const assert = require('assert').strict;

assert.strictEqual(construct(), 'Hello from construct');
console.info("construct tests passed");
