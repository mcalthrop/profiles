/* global angular, ProfilesController */

angular.module(
        'ProfilesModule',
        [
            'ProfilesServices'
        ]
    ).config(
        [
            '$routeProvider',
            function ($routeProvider) {
                $routeProvider.when(
                    '/profiles',
                    {
                        templateUrl: 'partials/profiles/index.html',
                        controller: ProfilesController
                    }
                ).otherwise(
                    {
                        redirectTo: '/profiles'
                    }
                );
            }
        ]
    );

/* EOF */