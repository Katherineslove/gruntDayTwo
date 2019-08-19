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

  });

  ////// load tasks above register tasks below

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify-es');

  grunt.registerTask('checkJS', ['jshint', 'uglify']);

};
