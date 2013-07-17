/* global angular */

/**
 * @ngdoc module
 * @name PageDirectivesModule
 * @requires PageTitleControllerModule
 * @requires PageTitleModelModule
 * @requires PageHeaderDirectiveModule
 * @requires PageHeaderControllerModule
 * @requires PageHeaderModelModule
 * @requires PageFooterDirectiveModule
 * @requires PageFooterControllerModule
 * @requires PageFooterModelModule
 * @description
 *
 * Loads all page-related modules.
 *
 */

angular.module(
    'PageDirectivesModule',
    [
        'PageTitleControllerModule',
        'PageTitleModelModule',

        'PageHeaderDirectiveModule',
        'PageHeaderControllerModule',
        'PageHeaderModelModule',

        'PageFooterDirectiveModule',
        'PageFooterControllerModule',
        'PageFooterModelModule'
    ]
);

/* EOF */