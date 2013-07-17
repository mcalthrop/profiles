/* global angular */

/**
 * @ngdoc module
 * @name AboutComponentsModule
 * @requires AboutControllerModule
 * @requires AboutDataServiceModule
 * @requires AboutWrapperServiceModule
 * @requires AboutModelModule
 * @description
 *
 * Loads all components for the about page.
 *
 */

angular.module(
    'AboutComponentsModule',
    [
        'AboutControllerModule',
        'AboutDataServiceModule',
        'AboutWrapperServiceModule',
        'AboutModelModule'
    ]
);

/* EOF */