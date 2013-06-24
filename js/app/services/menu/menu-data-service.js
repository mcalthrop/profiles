/* global define */

define(
    [
        'angular'
    ],
    function MenuDataService(angular) {
        'use strict';

        return angular.module(
                'MenuDataService',
                [
                    'ngResource'
                ]
            ).factory(
            'MenuDataService',
            function ($resource) {
                return $resource(
                    'svc/menu/menu-data.json',
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