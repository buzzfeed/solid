# thread-sleep

A native module for when you just need node to back off for a few milliseconds.  It effectively pauses the current thread.  It may be woken early if an interupt is fired, so it should work pretty well for busy waiting scenarios where you want to check something every few hunderd milliseconds.

[![Linux and Mac Build Status](https://img.shields.io/travis/ForbesLindesay/thread-sleep/master.svg?label=Linux%20%26%20Mac%20Build)](https://travis-ci.org/ForbesLindesay/thread-sleep)
[![Windows Build Status](https://img.shields.io/appveyor/ci/ForbesLindesay/thread-sleep/master.svg?label=Windows%20Build)](https://ci.appveyor.com/project/ForbesLindesay/thread-sleep)
[![Dependency Status](https://img.shields.io/gemnasium/ForbesLindesay/thread-sleep.svg)](https://gemnasium.com/ForbesLindesay/thread-sleep)
[![NPM version](https://img.shields.io/npm/v/thread-sleep.svg)](https://www.npmjs.org/package/thread-sleep)

## Installation

    npm install thread-sleep

This module uses node-pre-gyp so it should install even without a compiler in most environments.  If you run into any problems, please open an issue with the full npm log, and a description of what operating system you use.

## Usage

```js
var sleep = require('thread-sleep');

var start = Date.now();
var res = sleep(1000);
var end = Date.now();
// res is the actual time that we slept for
console.log(res + ' ~= ' + (end - start) + ' ~= 1000');
// tested on osx and resulted in => 1005 ~= 1010 ~= 1000
```

## License

  MIT
