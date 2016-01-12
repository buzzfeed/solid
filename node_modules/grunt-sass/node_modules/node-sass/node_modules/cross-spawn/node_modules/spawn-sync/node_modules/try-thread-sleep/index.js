'use strict';

try {
  module.exports = require('thread-sleep');
  module.exports.native = true;
} catch (ex) {
  module.exports = function (milliseconds) {
    var start = Date.now();
    if (milliseconds !== (milliseconds | 0)) {
      throw new TypeError('sleep only accepts an integer number of milliseconds');
    }
    milliseconds = milliseconds | 0;
    if (milliseconds < 0) {
      throw new TypeError('sleep only accepts a positive number of milliseconds');
    }
    var end = Date.now();
    return end - start;
  };
  module.exports.native = false;
}
