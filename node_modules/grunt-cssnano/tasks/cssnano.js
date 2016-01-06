'use strict';
var cssnano = require('cssnano');

module.exports = function (grunt) {
	grunt.registerMultiTask('cssnano', 'Minify CSS', function () {
		var cb = this.async();
		var opts = this.options();

		Promise.all(this.files.reduce(function (promises, el) {
			var promise = cssnano.process(grunt.file.read(el.src[0]), opts).then(function (result) {
				grunt.file.write(el.dest, result.css);
			});
			promises.push(promise);
			return promises;
		}, [])).then(cb);
	});
};
