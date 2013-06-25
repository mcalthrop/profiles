/* global define */

define(
    [
        'angular'
    ],
    function MenuComponents(angular) {
        'use strict';

        return angular.module(
            'MenuComponents',
            [
                'MenuMainController',
                'MenuDataService',
                'MenuMainModel'
            ]
        );
    }
);

/* EOF */