/*global module */

module.exports = function (grunt) {

    'use strict';

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        env: {
            dev: {
                name: 'dev',
                dest: 'dist/dev'
            },
            prod: {
                name: 'prod',
                dest: 'dist/prod'
            }
        },
        clean: {
            dev: {
                src: ['<%= env.dev.dest %>']
            },
            prod: {
                src: ['<%= env.prod.dest %>']
            },
            all: {
                src: ['dist']
            }
        },
        concat: {
            options: {
                separator: ';',
                src: ['src/js/app/**/*.js']
            },
            dev: {
                src: ['<%= concat.options.src %>'],
                dest: '<%= env.dev.dest %>/js/<%= pkg.name %>.js'
            },
            prod: {
                src: ['<%= concat.options.src %>'],
                dest: '<%= env.prod.dest %>/js/<%= pkg.name %>.js'
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
                    '<%= env.dev.dest %>/js/<%= pkg.name %>.min.js': ['<%= concat.dev.dest %>']
                }
            },
            prod: {
                files: {
                    '<%= env.prod.dest %>/js/<%= pkg.name %>.min.js': ['<%= concat.prod.dest %>']
                }
            }
        },
        less: {
            options: {
                paths: ["src/css"],
                src: 'src/css/main.less'
            },
            dev: {
                files: {
                    '<%= env.dev.dest %>/css/main.css': '<%= less.options.src %>'
                }
            },
            prod: {
                options: {
                    yuicompress: true
                },
                files: {
                    '<%= env.prod.dest %>/css/main.min.css': '<%= less.options.src %>'
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
            options: {
                src: [
                    'css/lib/**',
                    'img/**',
                    '**/*.html',
                    '**/.htaccess',
                    'svc/**'
                ]
            },
            dev: {
                files: [
                    {
                        expand: true,
                        cwd: 'src',
                        src: '<%= copy.options.src %>',
                        dest: '<%= env.dev.dest %>',
                        filter: 'isFile'
                    }
                ]
            },
            prod: {
                files: [
                    {
                        expand: true,
                        cwd: 'src',
                        src: '<%= copy.options.src %>',
                        dest: '<%= env.prod.dest %>',
                        filter: 'isFile'
                    }
                ]
            }
        },
        template: {
            options: {
                src: 'src/index.html'
            },
            dev: {
                src: '<%= template.options.src %>',
                dest: '<%= env.dev.dest %>/index.html',
                options: {
                    context: {
                        DEBUG: true
                    }
                },
                environment: '<%= env.dev.name %>'
            },
            prod: {
                src: '<%= template.options.src %>',
                dest: '<%= env.prod.dest %>/index.html',
                environment: '<%= env.prod.name %>'
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
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-hustler');
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
            'clean:dev',
            'jshint',
            'less:dev',
            'concat:dev',
            'uglify:dev',
            'copy:dev',
            'template:dev'
        ]
    );

    grunt.registerTask(
        'prod',
        [
            'clean:prod',
            'test',
            'less:prod',
            'concat:prod',
            'uglify:prod',
            'copy:prod',
            'template:prod'
        ]
    );

    grunt.registerTask('default', 'dev');
};

/* EOF */