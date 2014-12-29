module.exports = function(grunt, done) {
    var current = grunt.config('shipit.options.deployTo') + '/current';
    grunt.shipit.remote('cd ' + current + ' && touch sham', done);
}