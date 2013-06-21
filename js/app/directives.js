/* global define */

define(
    [
        'angular'
    ],
    function Directives(angular) {
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