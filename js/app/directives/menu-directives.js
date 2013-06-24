/* global define */

define(
    [
        'angular'
    ],
    function MenuDirectives(angular) {
        'use strict';

        return angular.module(
            'MenuDirectives',
            [
                'MenuMainDirective'
            ]
        );
    }
);

/* EOF */