/* global angular */

angular.module(
        'MainApp',
        [
            'AppControllers',
            'AppDirectives',
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
                        templateUrl: 'partials/profiles/main.html',
                        controller: 'ProfilesController'
                    }
                ).when(
                    '/about',
                    {
                        templateUrl: 'partials/about/main.html',
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