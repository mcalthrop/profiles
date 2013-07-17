/* global angular */

/**
 * @ngdoc module
 * @name AboutComponentsModule
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