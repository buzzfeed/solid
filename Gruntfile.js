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
      tar_docs: {
        options: {
          archive: 'docs/.tmp/solid-docs.<%= pkg.version %>.tar.gz',
          mode: 'tar'
        },
        files: [{
          src: ['**/*'],
          cwd: 'docs/.tmp/_site/',
          expand: true
        }]
      },
      gzip_docs: {
         options: {
           mode: 'gzip'
         },
         files: [{
           src: ['solid-docs.<%= pkg.version %>.tar.gz'],
           cwd: 'docs/.tmp/',
           dest: '.tmp/',
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
          dest: 'docs/.tmp/_site/dist/'
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
grunt.registerTask('compress_release_docs', ['compress:tar_docs', 'compress:gzip_docs']);
grunt.registerTask('zip_lib', ['compress:lib']);

}
