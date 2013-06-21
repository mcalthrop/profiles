/* global define */

define(
    [
        'angular'
    ],
    function MainApp(angular) {
        'use strict';

        return angular.module(
                'MainApp',
                [
                    'AppControllers',
                    'AppDirectives',
                    'AppServices'
                ]
            ).config(
                [
                    '$routeProvider',
                    function ($routeProvider) {
                        $routeProvider.when(
                            '/profiles',
                            {
                                templateUrl: 'inc/partials/profiles/main.html',
                                controller: 'ProfilesController'
                            }
                        ).when(
                            '/about',
                            {
                                templateUrl: 'inc/partials/about/main.html',
                                controller: 'AboutController'
                            }
                        ).otherwise(
                            {
                                redirectTo: '/profiles'
                            }
                        );
                    }
                ]
            );
    }
);

/* EOF */