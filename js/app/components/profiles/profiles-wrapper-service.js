/* global define */

define(
    [
        'angular'
    ],
    function ProfilesWrapperService(angular) {
        'use strict';

        return angular.module(
                'ProfilesWrapperService',
                [
                    'ngResource'
                ]
            ).factory(
            'ProfilesWrapperService',
            function ($resource) {
                return $resource(
                    'svc/profiles/profiles-wrapper.json',
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