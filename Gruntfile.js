/*global module */

module.exports = function (grunt) {

    'use strict';

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            dev: {
                src: ['src/js/app/**/*.js'],
                dest: 'dist/dev/js/<%= pkg.name %>.js'
            },
            prod: {
                src: ['src/js/app/**/*.js'],
                dest: 'dist/prod/js/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd HH:MM") %> */\n'
            },
            dev: {
                options: {
                    beautify: {
                        width: 80,
                        beautify: true
                    }
                },
                files: {
                    'dist/dev/js/<%= pkg.name %>.min.js': ['<%= concat.dev.dest %>']
                }
            },
            prod: {
                files: {
                    'dist/prod/js/<%= pkg.name %>.min.js': ['<%= concat.prod.dest %>']
                }
            }
        },
        less: {
            options: {
                paths: ["src/css"]
            },
            dev: {
                files: {
                    "dist/dev/css/main.css": "src/css/main.less"
                }
            },
            prod: {
                options: {
                    yuicompress: true
                },
                files: {
                    "dist/prod/css/main.min.css": "src/css/main.less"
                }
            }
        },
        karma: {
            unit: {
                configFile: 'config/karma.conf.js',
                singleRun: true
            }
        },
        jshint: {
            files: [
                'Gruntfile.js',
                'src/js/app/**/*.js',
                'test/unit/**/*.js'
            ],
            options: {
                globals: {
                    console: true
                }
            }
        },
        copy: {
            dev: {
                files: [
                    {
                        expand: true,
                        cwd: 'src',
                        src: [
                            'css/lib/**',
                            'img/**',
                            '**/*.html',
                            '**/.htaccess',
                            'svc/**'
                        ],
                        dest: 'dist/dev',
                        filter: 'isFile'
                    }
                ]
            },
            prod: {
                files: [
                    {
                        expand: true,
                        cwd: 'src',
                        src: [
                            'css/lib/**',
                            'img/**',
                            '**/*.html',
                            '**/.htaccess',
                            'svc/**'
                        ],
                        dest: 'dist/prod',
                        filter: 'isFile'
                    }
                ]
            }
        },
        watch: {
            files: [
                '<%= jshint.files %>',
                '<%= less.files %>'
            ],
            tasks: [
                'jshint',
                'karma'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask(
        'test',
        [
            'jshint',
            'karma'
        ]
    );

    grunt.registerTask(
        'dev',
        [
            'test',
            'less:dev',
            'concat:dev',
            'uglify:dev',
            'copy:dev'
        ]
    );

    grunt.registerTask(
        'prod',
        [
            'test',
            'less:prod',
            'concat:prod',
            'uglify:prod',
            'copy:prod'
        ]
    );

    grunt.registerTask('default', 'dev');
};

/* EOF */