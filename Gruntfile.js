module.exports = function (grunt) {

  grunt.initConfig({

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
  ////// load tasks above register tasks below
  grunt.registerTask('checkCSS', ['csslint']);
  grunt.registerTask('runCSS', ['csslint','cssmin']);

};
