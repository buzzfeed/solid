// We use Grunt to build our dist files
// commands are run by the makefile
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
          sourceMap: false,
          includePaths: ['_lib']
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
        sourcemap: false
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
      },
      build: {
         options: {
             archive: 'docs/_dist/solid-docs.zip',
             mode: 'zip'
         },
         files: [{
             src: ['**/*'],
             cwd: 'docs/.tmp/_site/',
             expand: true
         }]
      }
    },
    copy: {
      latest: {
        files: [{
          expand: true,
          cwd: 'dist/',
          src: 'solid.<%= pkg.version %>.css',
          dest: 'dist/',
          rename: function(dest, src) {
            src = "solid.latest.css" //always available latest css
            return dest + src;
          }
        }]
      },
      deployDist: {
        files: [{
          expand: true,
          cwd: 'dist/',
          src: ['**'],
          dest: 'docs/.tmp/_deploy/dist/'
        }]
      }
    }
  });

grunt.loadNpmTasks('grunt-sass');
grunt.loadNpmTasks('grunt-cssnano');
grunt.loadNpmTasks('grunt-contrib-compress');
grunt.loadNpmTasks('grunt-contrib-copy');

grunt.registerTask('compile_lib', ['sass:lib']);
grunt.registerTask('minify_lib', ['cssnano:lib']);
grunt.registerTask('latest_solid', ['copy:latest']);
grunt.registerTask('copy_deploy_dist', ['copy:deployDist']);
grunt.registerTask('zip_build', ['compress:build']);
grunt.registerTask('zip_lib', ['compress:lib']);

}
