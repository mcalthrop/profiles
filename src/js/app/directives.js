/* global angular */

/**
 * @ngdoc overview
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