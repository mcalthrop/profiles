/* global define */

define(
    [
        'angular'
    ],
    function PageModels(angular) {
        'use strict';

        return angular.module(
            'PageModels',
            [
                'PageHeaderModel',
                'PageFooterModel'
            ]
        );
    }
);

/* EOF */