/* global define */

define(
    [
        'angular'
    ],
    function ProfilesDataService(angular) {
        'use strict';

        return angular.module(
                'ProfilesDataService',
                [
                    'ngResource'
                ]
            ).factory(
            'ProfilesDataService',
            function ($resource) {
                return $resource(
                    'svc/profiles/profiles-data.json',
                    {},
                    {
                        query: {
                            method: 'GET',
                            isArray: true
                        }
                    }
                );
            }
        );
    }
);

/* EOF */