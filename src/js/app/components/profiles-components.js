/* global angular */

/**
 * @ngdoc module
 * @name ProfilesComponentsModule
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