/* global define */

define(
    [
        'angular'
    ],
    function AppModels(angular) {
        'use strict';

        return angular.module(
            'AppModels',
            [
                'ProfilesModels',
                'AboutModels',
                'MenuModels'
            ]
        );
    }
);

/* EOF */