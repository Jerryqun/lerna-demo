'use strict';

const moduleB = require('..');
const assert = require('assert').strict;

const dayjs = require('dayjs');
console.log('dayjs-b: ', dayjs().date());

assert.strictEqual(moduleB(), 'Hello from moduleB');
console.info('moduleB tests passed');
