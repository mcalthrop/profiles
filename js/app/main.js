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
                    'AppModels',
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
                                templateUrl: 'js/app/views/profiles/profiles-main.html',
                                controller: 'ProfilesController'
                            }
                        ).when(
                            '/about',
                            {
                                templateUrl: 'js/app/views/about/about-main.html',
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