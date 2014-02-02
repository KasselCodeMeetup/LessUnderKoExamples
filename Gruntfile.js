module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
      less: {
          development:{
              options: {
                  cleancss: false,
              },
              files: {
                  "lessExamples/style.css": "lessExamples/style.less"
              }
          }
      },
      watch: {
          files: "lessExamples/style.less",
          tasks: ["less"]
      }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task(s).
  grunt.registerTask('default', ['watch']);
};