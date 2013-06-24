/* global define */

define(
    [
        'angular'
    ],
    function AboutServices(angular) {
        'use strict';

        return angular.module(
            'AboutServices',
            [
                'AboutDataService',
                'AboutWrapperService'
            ]
        );
    }
);

/* EOF */