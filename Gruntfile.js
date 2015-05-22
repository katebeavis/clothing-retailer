module.exports = function(grunt) {
  grunt.initConfig({

    karma: {
      options: {
        configFile: 'test/karma.conf.js'
      },
      unit: {
        singleRun: true
      }
    },

  protractor: {
    options: {
      configFile: "node_modules/protractor/example/conf.js",
      keepAlive: true,
      noColor: false,
      args: {
      }
    },
    your_target: {
      options: {
        configFile: "test/e2e/conf.js",
        args: {}
      }
    },
  },
})

  grunt.registerTask('default', ['karma', 'protractor']);
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-karma');
};