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
                    'ngResource'
                ]
            ).factory(
            'AboutWrapperService',
            function ($resource) {
                return $resource(
                    'svc/about/about-wrapper.json',
                    {},
                    {
                        query: {
                            method: 'GET'
                        }
                    }
                );
            }).factory(
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