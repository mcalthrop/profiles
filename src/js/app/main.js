/* global angular */

angular.module(
        'MainApp',
        [
            'AppComponentsModule',
            'AppDirectivesModule',
            'AppFiltersModule',
            'ui.bootstrap'
        ]
    ).config(
        [
            '$routeProvider',
            function ($routeProvider) {
                $routeProvider.when(
                    '/home',
                    {
                        templateUrl: 'js/app/components/home/home-main-view.html',
                        controller: 'HomeController'
                    }
                ).when(
                    '/profiles',
                    {
                        templateUrl: 'js/app/components/profiles/profiles-main-view.html',
                        controller: 'ProfilesController'
                    }
                ).when(
                    '/resources',
                    {
                        templateUrl: 'js/app/components/resources/resources-main-view.html',
                        controller: 'ResourcesController'
                    }
                ).when(
                    '/about',
                    {
                        templateUrl: 'js/app/components/about/about-main-view.html',
                        controller: 'AboutController'
                    }
                ).otherwise(
                    {
                        redirectTo: '/home'
                    }
                );
            }
        ]
    );

/* EOF */