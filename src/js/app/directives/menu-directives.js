/* global angular */

/**
 * @ngdoc overview
 * @name PageDirectivesModule
 * @requires MenuMainDirectiveModule
 * @requires MenuMainControllerModule
 * @requires MenuMainModelModule
 * @description
 *
 * Loads all menu-related modules.
 *
 */

angular.module(
    'MenuDirectivesModule',
    [
        'MenuMainDirectiveModule',
        'MenuMainControllerModule',
        'MenuMainModelModule'
    ]
);

/* EOF */