/* global angular */

/**
 * @ngdoc overview
 * @name ResourcesComponentsModule
 * @requires ResourcesControllerModule
 * @requires ResourcesModelModule
 * @requires ResourcesDataServiceModule
 * @requires ResourcesWrapperServiceModule
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
