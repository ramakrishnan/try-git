module.exports = function (grunt) {
    return {
        logger: grunt.option('loglevel') || 'debug'
    };
}