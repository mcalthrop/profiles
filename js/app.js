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
                        templateUrl: 'partials/profiles.html',
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