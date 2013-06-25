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
                    'AppComponents',
                    'AppDirectives'
                ]
            ).config(
                [
                    '$routeProvider',
                    function ($routeProvider) {
                        $routeProvider.when(
                            '/profiles',
                            {
                                templateUrl: 'js/app/components/profiles/profiles-main.html',
                                controller: 'ProfilesController'
                            }
                        ).when(
                            '/about',
                            {
                                templateUrl: 'js/app/components/about/about-main.html',
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