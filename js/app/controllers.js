/* global define */

define(
    [
        'angular'
    ],
    function controllers(angular) {
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