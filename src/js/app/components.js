/* global angular */

/**
 * @ngdoc overview
 * @name AppComponentsModule
 * @requires HomeComponentsModule
 * @requires ProfilesComponentsModule
 * @requires ResourcesComponentsModule
 * @requires AboutComponentsModule
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