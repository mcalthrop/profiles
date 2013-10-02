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
                src: ['src/js/app/**/*.js'],
                dest: 'js/app/<%= pkg.name %>.js'
            },
            dev: {
                src: ['<%= concat.options.src %>'],
                dest: '<%= env.dev.dest %>/<%= concat.options.dest %>'
            },
            prod: {
                src: ['<%= concat.options.src %>'],
                dest: '<%= env.prod.dest %>/<%= concat.options.dest %>'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd HH:MM") %> */\n',
                report: 'min',
                dest: 'js/app/<%= pkg.name %>.min.js'
            },
            dev: {
                src: ['<%= concat.dev.dest %>'],
                dest: '<%= env.dev.dest %>/<%= uglify.options.dest %>',
                options: {
                    beautify: {
                        width: 80,
                        beautify: true
                    },
                    preserveComments: true,
                    mangle: false,
                    compress: false
                }
            },
            prod: {
                src: ['<%= concat.prod.dest %>'],
                dest: '<%= env.prod.dest %>/<%= uglify.options.dest %>',
                options: {
                    // Mangling currently produces a JS error, so disable it for the moment
                    // TODO: fix AngularJS error that causes uglify mangling to produce JS error
                    mangle: false
                }
            }
        },
        less: {
            options: {
                paths: ["src/css"],
                src: 'src/css/main.less'
            },
            dev: {
                src: '<%= less.options.src %>',
                dest: '<%= env.dev.dest %>/css/main.css'
            },
            prod: {
                options: {
                    yuicompress: true
                },
                src: '<%= less.options.src %>',
                dest: '<%= env.prod.dest %>/css/main.css'
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
                    'js/lib/**',
                    'css/lib/**',
                    'img/**',
                    '**/*.html',
                    '**/.htaccess',
                    'svc/**'
                ]
            },
            dev: {
                expand: true,
                cwd: 'src',
                src: '<%= copy.options.src %>',
                dest: '<%= env.dev.dest %>',
                filter: 'isFile'
            },
            prod: {
                expand: true,
                cwd: 'src',
                src: '<%= copy.options.src %>',
                dest: '<%= env.prod.dest %>',
                filter: 'isFile'
            }
        },
        template: {
            options: {
                src: 'src/index.html'
            },
            dev: {
                src: '<%= template.options.src %>',
                dest: '<%= env.dev.dest %>',
                env: '<%= env.dev.name %>',
                debugjs: true,
                mainjs: '<%= concat.options.dest %>'    // for dev, use the non-uglified version
            },
            prod: {
                src: '<%= template.options.src %>',
                dest: '<%= env.prod.dest %>',
                env: '<%= env.prod.name %>',
                debugjs: false,
                mainjs: '<%= uglify.options.dest %>'    // and for prod, the uglified version
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