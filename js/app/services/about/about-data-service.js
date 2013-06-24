/* global define */

define(
    [
        'angular'
    ],
    function AboutDataService(angular) {
        'use strict';

        return angular.module(
                'AboutDataService',
                [
                    'ngResource'
                ]
            ).factory(
            'AboutDataService',
            function ($resource) {
                return $resource(
                    'svc/about/about-data.json',
                    {},
                    {
                        query: {
                            method: 'GET'
                        }
                    }
                );
            }
        );
    }
);

/* EOF */