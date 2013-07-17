/* global angular */

/**
 * @ngdoc module
 * @name ResourcesComponentsModule
 * @description
 *
 * Loads all components for the resources page.
 *
 */

angular.module(
    'ResourcesComponentsModule',
    [
        'ResourcesControllerModule',
        'ResourcesModelModule',
        'ResourcesDataServiceModule',
        'ResourcesWrapperServiceModule'
    ]
);

/* EOF */
