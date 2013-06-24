/* global define */

define(
    [
        'angular'
    ],
    function MenuModels(angular) {
        'use strict';

        return angular.module(
            'MenuModels',
            [
                'MenuMainModel'
            ]
        );
    }
);

/* EOF */