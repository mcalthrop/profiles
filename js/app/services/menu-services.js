/* global define */

define(
    [
        'angular'
    ],
    function MenuServices(angular) {
        'use strict';

        return angular.module(
            'MenuServices',
            [
                'MenuDataService'
            ]
        );
    }
);

/* EOF */