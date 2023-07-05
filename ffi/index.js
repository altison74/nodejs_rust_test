'use strict';

const ffi = require('ffi-napi');
const path = require('path');

const pathToLib = path.join(__dirname, 'target/release/libfibonacci');

const { fibonacci } = ffi.Library(pathToLib, {
    'fibonacci': [ 'int64', [ 'int64' ] ]
});

console.log('Fibonacci number 45 has value:', fibonacci(45));









