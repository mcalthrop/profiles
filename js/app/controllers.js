/* global define */

define(
    [
        'angular'
    ],
    function AppControllers(angular) {
        'use strict';

        return angular.module(
            'AppControllers',
            [
                'ProfilesControllers',
                'AboutControllers',
                'MenuControllers'
            ]
        );
    }
);

/* EOF */