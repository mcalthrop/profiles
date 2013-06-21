/* global define */

define(
    [
        'angular'
    ],
    function Services(angular) {
        'use strict';

        return angular.module(
            'AppServices',
            [
                'ProfilesServices',
                'AboutServices',
                'MenuServices'
            ]
        );
    }
);

/* EOF */