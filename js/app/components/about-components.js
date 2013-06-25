/* global define */

define(
    [
        'angular'
    ],
    function AboutComponents(angular) {
        'use strict';

        return angular.module(
            'AboutComponents',
            [
                'AboutController',
                'AboutDataService',
                'AboutWrapperService',
                'AboutModel'
            ]
        );
    }
);

/* EOF */