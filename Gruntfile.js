module.exports = function(grunt) {

  'use strict';

  // Grunt project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    clean: [
      'climacons/svg',
      'climacons/svg-css'
    ],

    cssmin: {
      combine: {
        files: {
          'css/animated-climacons.min.css': ['css/animated-climacons.css']
        }
      }
    },

    copy: {
      main: {
        expand: true,
        cwd: 'climacons/src/',
        src: '**',
        dest: 'climacons/',
        filter: 'isFile'
        // src: 'climacons/src/*',
        // dest: 'climacons/'
      }
    },

    'regex-replace': {
      dist: {
        src: ['climacons/svg/**/*.svg'],
        actions: [{
            name: 'remove style',
            search: '<style(.|\n|\r)*<\/style>',
            replace: '',
            flags: 'gmi'
          },
        ]
      }
    },

    htmlmin: {
      options: {
        caseSensitive: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        removeComments: true,
        removeCommentsFromCDATA: true,
        removeEmptyAttributes: true
      },
      svg: {
        files: [{
          expand: true,
            cwd: 'climacons/src/svg',
            src: '**/*.svg',
            dest: 'climacons/svg'
        }]
      },
      svgCss: {
        files: [{
          expand: true,
            cwd: 'climacons/src/svg-css',
            src: '**/*.svg',
            dest: 'climacons/svg-css'
        }]
      },
    }
  });


  // Load the plugins.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-regex-replace');


  // Custom tasks.
  grunt.registerTask('default', ['clean', 'minify']);
  grunt.registerTask('remove-css', ['regex-replace']);   // remove SVG of all inline CSS
  grunt.registerTask('minify', ['copy']);
  // Enable this task instead of the copy once the issue https://github.com/kangax/html-minifier/issues/228 is solved.
  // grunt.registerTask('minify', ['htmlmin']);             // minify SVG files
};