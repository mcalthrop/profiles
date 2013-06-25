/* global define */

define(
    [
        'angular'
    ],
    function PageComponents(angular) {
        'use strict';

        return angular.module(
            'PageComponents',
            [
                'PageHeaderController',
                'PageFooterController',
                'PageHeaderModel',
                'PageFooterModel'
            ]
        );
    }
);

/* EOF */