/* global define */

define(
    [
        'angular'
    ],
    function PageDirectives(angular) {
        'use strict';

        return angular.module(
            'PageDirectives',
            [
                'PageHeaderDirective',
                'PageFooterDirective'
            ]
        );
    }
);

/* EOF */