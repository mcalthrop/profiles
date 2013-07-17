/* global angular */

/**
 * @ngdoc module
 * @name HomeComponentsModule
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