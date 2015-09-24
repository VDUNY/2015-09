/// <binding ProjectOpened='watch:javascript' />
module.exports = function(grunt) {
    grunt.initConfig({
        browserify: {
            'www/scripts/browserifyd.js': ['www/scripts/index.js']
        },
        watch: {
            javascript: {
                files: 'www/scripts/index.js',
                tasks: ['browserify']
            }
        }

    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    
};