# try-thread-sleep

Use thread-sleep if native compilation succeeded, otherwise it's a noop

[![Build Status](https://img.shields.io/travis/ForbesLindesay/try-thread-sleep/master.svg)](https://travis-ci.org/ForbesLindesay/try-thread-sleep)
[![Dependency Status](https://img.shields.io/gemnasium/ForbesLindesay/try-thread-sleep.svg)](https://gemnasium.com/ForbesLindesay/try-thread-sleep)
[![NPM version](https://img.shields.io/npm/v/try-thread-sleep.svg)](https://www.npmjs.org/package/try-thread-sleep)

## Installation

    npm install try-thread-sleep

## Usage

```js
var sleep = require('try-thread-sleep');

if (!sleep.native) {
  console.warn('native thread-sleep was not available');
}

// this next line will take roughly 1 second if native compilation succeeded,
// otherwise it will be almost instant.
sleep(1000);
```

## License

  MIT
