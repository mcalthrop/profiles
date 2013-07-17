/* global angular */

/**
 * @ngdoc module
 * @name AppDirectivesModule
 * @requires PageDirectivesModule
 * @requires MenuDirectivesModule
 * @description
 *
 * Load all directives for the application.
 *
 */

angular.module(
    'AppDirectivesModule',
    [
        'PageDirectivesModule',
        'MenuDirectivesModule'
    ]
);

/* EOF */