module.exports = function (grunt) {
    var shipIt = require('./grunt_tasks/config/ship-it');
    var bunyan = require('./grunt_tasks/config/bunyan');
    var startApp = require('./grunt_tasks/tasks/start');
    console.log(bunyan(grunt));
    console.log(shipIt);
    grunt.initConfig({
        shipit: shipIt
    });
    grunt.loadNpmTasks('grunt-shipit');
    console.log();

    grunt.registerTask('start', function() {
        var done = this.async();
        startApp(grunt, done);
    })
}
