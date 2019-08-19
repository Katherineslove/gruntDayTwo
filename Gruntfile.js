module.exports = function (grunt) {

  grunt.initConfig({

    ////// Katherine above Brayden below
    csslint: {
      strict: {
    options: {
      import: 2
    },
    src: ['css/style.css']
  },
    }
  });
  grunt.loadNpmTasks('grunt-contrib-csslint');
  ////// load tasks above register tasks below
  grunt.registerTask('checkCSS', ['csslint'])
};
