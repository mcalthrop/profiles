/* global define */

define(
    [
        'angular'
    ],
    function AppComponents(angular) {
        'use strict';

        return angular.module(
            'AppComponents',
            [
                'AboutComponents',
                'MenuComponents',
                'PageComponents',
                'ProfilesComponents'
            ]
        );
    }
);

/* EOF */