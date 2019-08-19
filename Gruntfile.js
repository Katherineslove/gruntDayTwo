module.exports = function (grunt) {

  grunt.initConfig({

    jshint: {
        files: ['js/script.js'],
        options: {
          esversion: 6,
            globals:{
                jQuery: true
            }
        }
    },
    uglify: {
      my_target: {
        files: {
          'js/script.min.js': ['js/script.js']
        }
      }
    }

    ////// Katherine above Brayden below
    csslint: {
      strict: {
        options: {
          quiet: true,
          import: 2
        },
        src: ['css/style.css']
      },
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css/',
          src: ['*.css', '!*.min.css'],
          dest: 'css/',
          ext: '.min.css'
        }]
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  ////// load tasks above register tasks below
  grunt.registerTask('checkCSS', ['csslint']);
  grunt.registerTask('runCSS', ['csslint','cssmin']);

  grunt.registerTask('checkJS', ['jshint', 'uglify']);

};
