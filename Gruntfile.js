module.exports = function (grunt) {

  grunt.initConfig({

    jshint: {
        files: ['*.js', 'js/script.js'],
        options: {
            globals:{
                jQuery: true
            }
        }
    }

    ////// Katherine above Brayden below

  });

  ////// load tasks above register tasks below

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('checkJS', ['jshint']);

};
