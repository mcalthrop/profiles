/* global angular */

angular.module(
        'MainApp',
        [
            'AppComponentsModule',
            'AppDirectivesModule'
        ]
    ).config(
        [
            '$routeProvider',
            function ($routeProvider) {
                $routeProvider.when(
                    '/profiles',
                    {
                        templateUrl: 'js/app/components/profiles/profiles-main-view.html',
                        controller: 'ProfilesController'
                    }
                ).when(
                    '/about',
                    {
                        templateUrl: 'js/app/components/about/about-main-view.html',
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