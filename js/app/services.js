/* global define */

define(
    [
        'angular'
    ],
    function AppServices(angular) {
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