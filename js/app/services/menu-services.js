/* global define */

define(
    [
        'angular'
    ],
    function MenuServices(angular) {
        'use strict';

        return angular.module(
                'MenuServices',
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