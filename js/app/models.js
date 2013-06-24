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
                'PageModels',
                'ProfilesModels',
                'AboutModels',
                'MenuModels'
            ]
        );
    }
);

/* EOF */