# grunt-cssnano [![Build Status](https://travis-ci.org/sindresorhus/grunt-cssnano.svg?branch=master)](https://travis-ci.org/sindresorhus/grunt-cssnano)

> Minify CSS using [`cssnano`](https://github.com/ben-eb/cssnano)

*Issues with the output should be reported on the `cssnano` [issue tracker](https://github.com/ben-eb/cssnano/issues).*


## Install

```
$ npm install --save-dev grunt-cssnano
```


## Usage

```js
require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
	cssnano: {
		options: {
			sourcemap: true
		},
		dist: {
			files: {
				'dist/app.css': 'src/app.css'
			}
		}
	}
});

grunt.registerTask('default', ['cssnano']);
```


## Options

See the `cssnano` [options](https://github.com/ben-eb/cssnano#options).


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
