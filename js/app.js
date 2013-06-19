/* global angular */

angular.module(
        'MainApp',
        [
            'AppControllers',
            'ProfilesServices',
            'AboutServices'
        ]
    ).config(
        [
            '$routeProvider',
            function ($routeProvider) {
                $routeProvider.when(
                    '/profiles',
                    {
                        templateUrl: 'partials/profiles/index.html',
                        controller: 'ProfilesController'
                    }
                ).when(
                    '/about',
                    {
                        templateUrl: 'partials/about/index.html',
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

/* EOF */