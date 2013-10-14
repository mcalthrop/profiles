/* global angular */

/**
 * @ngdoc overview
 * @name ProfilesComponentsModule
 * @requires ProfilesControllerModule
 * @requires ProfilesModelModule
 * @requires ProfilesDataServiceModule
 * @requires ProfilesWrapperServiceModule
 * @description
 *
 * Loads all components for the profiles page.
 *
 */

angular.module(
    'ProfilesComponentsModule',
    [
        'ProfilesControllerModule',
        'ProfilesModelModule',
        'ProfilesDataServiceModule',
        'ProfilesWrapperServiceModule'
    ]
);

/* EOF */