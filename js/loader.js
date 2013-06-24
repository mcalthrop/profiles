/* global require */

require.config(
    {
        paths: {
            'angular': 'js/lib/angular/1.0.7/angular',
            'angular-resource': 'js/lib/angular/1.0.7/angular-resource',
            'text': 'js/lib/require/text/2.0.6/text',
            'domReady': 'js/lib/require/domReady/2.0.1/domReady',
            'appMain': 'js/app/main'
        },
        baseUrl: '',
        shim: {
            'angular': {
                'exports': 'angular'
            },
            'angular-resource': {
                deps: [
                    'angular'
                ],
                'exports': 'angular-resource'
            },
            'appMain': {
                'exports': 'appMain'
            },
            'angularMocks': {
                deps: [
                    'angular'
                ],
                'exports': 'angular.mock'
            }
        },
        priority: [
            "angular"
        ]
    }
);

require(
    [
        'angular',
        'domReady',
        'appMain',
        'angular-resource',
        'js/app/controllers',
        'js/app/controllers/page-controllers',
        'js/app/controllers/profiles-controllers',
        'js/app/controllers/about-controllers',
        'js/app/controllers/menu-controllers',
        'js/app/models',
        'js/app/models/page-models',
        'js/app/models/profiles-models',
        'js/app/models/about-models',
        'js/app/models/menu-models',
        'js/app/filters',
        'js/app/services',
        'js/app/services/profiles-services',
        'js/app/services/about-services',
        'js/app/services/menu-services',
        'js/app/directives',
        'js/app/directives/page-directives',
        'js/app/directives/menu-directives'
    ],
    function main(angular, domReady, appMain) {
        'use strict';

        domReady(function onDomReady() {
            var $html = angular.element(document).find('html');

            //angular.bootstrap($html, [app['name']]);
            angular.bootstrap($html, [appMain.name]);
            // Because of RequireJS we need to bootstrap the app manually
            // and Angular Scenario runner won't be able to communicate with our app
            // unless we explicitly mark the container as app holder
            // More info: https://groups.google.com/forum/#!msg/angular/yslVnZh9Yjk/MLi3VGXZLeMJ
            $html.addClass('ng-app');
        });
    }
);
