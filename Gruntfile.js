module.exports = function( grunt ){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ['preview/images'],
        copy: {
            dev: {
                files: [{
                    expand: true,
                    cwd: 'site/assets/',
                    src: ['images/**/*'],
                    dest: 'preview/'
                },
                {
                    expand: true,
                    cwd: 'site/assets/',
                    src: ['webfonts/**/*'],
                    dest: 'preview/'
                }]
            }
        },
        concat: {
            dev: {
                options: {
                    separator: ';'
                },
                dist: {
                    src: ['site/assets/javascripts/**/*.js'],
                    dest: 'preview/website.js'
                }
            }
        },
        sass: {
            dev: {
                options: {
                    lineNumbers: true,
                    style: 'expanded'
                },
                files: {
                    'preview/website.css': [
                        'site/assets/stylesheets/website.scss'
                    ]
                }
            }
        },
        watch: {
            images: {
                files: 'site/assets/images/**/*',
                tasks: ['clean','copy']            
            },
            styles: {
                files: 'site/assets/stylesheets/**/*.scss',
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['clean','concat','copy','sass']);

};