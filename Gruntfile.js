module.exports = function(grunt) {
  grunt.initConfig({

    karma: {
      options: {
        // point all tasks to karma config file
        configFile: 'spec/karma.conf.js'
      },
      unit: {
        // run tests once instead of continuously
        singleRun: true
      }
    },

  protractor: {
    options: {
      configFile: "node_modules/protractor/example/conf.js", // Default config file
      keepAlive: true, // If false, the grunt process stops when the test fails.
      noColor: false, // If true, protractor will not use colors in its output.
      args: {
        // Arguments passed to the command
      }
    },
    your_target: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
      options: {
        configFile: "spec/e2e/conf.js", // Target-specific config file
        args: {} // Target-specific arguments
      }
    },
  },


})


  // load the Grunt task
  grunt.registerTask('default', ['karma', 'protractor']);
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-karma');
};