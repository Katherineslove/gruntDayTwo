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
    },

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
    },
    watch:{
      sass:{
        files: ['scss/*.scss'],
        tasks:['sass', 'csslint', 'cssmin']
      },
      jsval:{
        files: ['js/*.js'],
        tasks: ['jshint', 'uglify']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  grunt.loadNpmTasks('grunt-contrib-watch');
  ////// load tasks above register tasks below
  grunt.registerTask('checkCSS', ['csslint']);
  grunt.registerTask('runCSS', ['csslint','cssmin']);
  grunt.registerTask('default', ['watch'])
  grunt.registerTask('checkJS', ['jshint', 'uglify']);


};
