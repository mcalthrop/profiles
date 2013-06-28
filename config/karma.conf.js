/* global module, REQUIRE, REQUIRE_ADAPTER, JASMINE, JASMINE_ADAPTER, LOG_DEBUG */
/**
 * karma configuration
 */

// base path, that will be used to resolve files and exclude
basePath = '../';

// list of files / patterns to load in the browser
files = [
    JASMINE,
    JASMINE_ADAPTER,

    'src/js/lib/angular/1.1.0/angular.js',
    'src/js/lib/angular/1.1.0/angular-resource.js',

    'test/lib/angular/1.1.0/angular-mocks.js',

    'src/js/app/components/*/*.js',
    'src/js/app/directives/*/*.js',

    'test/mock/**/mock-*.js',
    'test/unit/**/*-suite.js'
];

// list of files to exclude
exclude = [];

// use dolts reporter, as travis terminal does not support escaping sequences
// possible values: 'dots', 'progress', 'junit', 'teamcity'
// CLI --reporters progress
reporters = ['junit', 'dots'];

junitReporter = {
    // will be resolved to basePath (in the same way as files/exclude patterns)
    outputFile: 'test/results/unit-test-results.xml',
    suite: 'unit'
};

// web server port
// CLI --port 9876
port = 9876;

// cli runner port
// CLI --runner-port 9100
runnerPort = 9100;

// enable / disable colors in the output (reporters and logs)
// CLI --colors --no-colors
colors = true;

// level of logging
// possible values: karma.LOG_DISABLE || karma.LOG_ERROR || karma.LOG_WARN || karma.LOG_INFO || karma.LOG_DEBUG
// CLI --log-level debug
//logLevel = karma.LOG_INFO;
logLevel = LOG_DEBUG;

// enable / disable watching file and executing tests whenever any file changes
// CLI --auto-watch --no-auto-watch
autoWatch = false;

// Start these browsers; currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
// CLI --browsers Chrome,Firefox,Safari
browsers = ['Safari', 'Chrome', 'Firefox'];

// If browser does not capture in given timeout [ms], kill it
// CLI --capture-timeout 5000
captureTimeout = 60000;

// Auto run tests on start (when browsers are captured) and exit
// CLI --single-run --no-single-run
singleRun = false;

// report which specs are slower than 500ms
// CLI --report-slower-than 500
reportSlowerThan = 500;

// compile coffee scripts
preprocessors = {
    '**/*.coffee': 'coffee'
};

plugins = [
    'karma-jasmine',
    'karma-chrome-launcher',
    'karma-firefox-launcher',
    'karma-junit-reporter'
];

/* EOF */