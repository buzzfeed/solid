var Promise = require('es6-promise').Promise;

global.window = {
  document: {},
  Function: function(){}
};

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    sass: {
      lib: {
        options: {
          sourceMap: false
        },
        files: [
          {
            expand: true,
            cwd: "_lib/",
            src: ['solid.scss'],
            dest: 'dist',
            ext: '.<%= pkg.version %>.css'
          }
        ]
      }
    },
    cssnano: {
      options: {
        sourcemap: true
      },
      lib: {
        files: {
         'dist/solid.<%= pkg.version %>.min.css' : 'dist/solid.<%= pkg.version %>.css'
        }
      }
    },
    compress: {
      lib: {
         options: {
             archive: 'dist/solid.<%= pkg.version %>.zip',
             mode: 'zip'
         },
         files: [{
             src: ['**/*'],
             cwd: '_lib/',
             expand: true
         }]
      }
    }
  });

grunt.loadNpmTasks('grunt-sass');
grunt.loadNpmTasks('grunt-cssnano');
grunt.loadNpmTasks('grunt-contrib-compress');

grunt.registerTask('compile_lib', ['sass:lib']);
grunt.registerTask('minify_lib', ['cssnano:lib']);
grunt.registerTask('zip_lib', ['compress:lib']);

}
