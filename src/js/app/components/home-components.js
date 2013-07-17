/* global angular */

/**
 * @ngdoc module
 * @name HomeComponentsModule
 * @requires HomeControllerModule
 * @requires HomeModelModule
 * @requires HomeDataServiceModule
 * @requires HomeWrapperServiceModule
 * @description
 *
 * Loads all components for the home page.
 *
 */

angular.module(
    'HomeComponentsModule',
    [
        'HomeControllerModule',
        'HomeModelModule',
        'HomeDataServiceModule',
        'HomeWrapperServiceModule'
    ]
);

/* EOF */