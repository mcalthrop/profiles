/* global define */

define(
    [
        'angular'
    ],
    function AppDirectives(angular) {
        'use strict';

        return angular.module(
            'AppDirectives',
            [
                'PageDirectives',
                'MenuDirectives'
            ]
        );
    }
);

/* EOF */