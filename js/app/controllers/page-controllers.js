/* global define */

define(
    [
        'angular'
    ],
    function PageControllers(angular) {
        'use strict';

        return angular.module(
            'PageControllers',
            [
                'PageHeaderController',
                'PageFooterController'
            ]
        ) ;
    }
);

/* EOF */