/* global angular */

/**
 * @ngdoc module
 * @name AppComponentsModule
 * @description
 *
 * Load all components for the application.
 *
 */

angular.module(
    'AppComponentsModule',
    [
        'HomeComponentsModule',
        'ProfilesComponentsModule',
        'ResourcesComponentsModule',
        'AboutComponentsModule'
    ]
);

/* EOF */