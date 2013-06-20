/* global angular */

angular.module(
        'MainApp',
        [
            'AppControllers',
            'AppDirectives',
            'ProfilesServices',
            'AboutServices',
            'MenuServices'
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

/* EOF */