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
                'PageControllers',
                'ProfilesControllers',
                'AboutControllers',
                'MenuControllers'
            ]
        );
    }
);

/* EOF */