/* global angular */

/**
 * @ngdoc module
 * @name ProfilesFiltersModule
 * @requires ProfilesImageAltTextFilterModule
 * @description
 *
 * Loads all filters modules.
 *
 */

angular.module(
    'ProfilesFiltersModule',
    [
        'ProfilesImageAltTextFilterModule'
    ]
);

/* EOF */