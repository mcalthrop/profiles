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
        'js/app/controllers/page/page-header-controller',
        'js/app/controllers/page/page-footer-controller',
        'js/app/controllers/profiles-controllers',
        'js/app/controllers/profiles/profiles-controller',
        'js/app/controllers/about-controllers',
        'js/app/controllers/about/about-controller',
        'js/app/controllers/menu-controllers',
        'js/app/controllers/menu/menu-main-controller',
        'js/app/models',
        'js/app/models/page-models',
        'js/app/models/page/page-header-model',
        'js/app/models/page/page-footer-model',
        'js/app/models/profiles-models',
        'js/app/models/profiles/profiles-model',
        'js/app/models/about-models',
        'js/app/models/about/about-model',
        'js/app/models/menu-models',
        'js/app/models/menu/menu-main-model',
        'js/app/filters',
        'js/app/services',
        'js/app/services/profiles-services',
        'js/app/services/profiles/profiles-data-service',
        'js/app/services/profiles/profiles-wrapper-service',
        'js/app/services/about-services',
        'js/app/services/about/about-data-service',
        'js/app/services/about/about-wrapper-service',
        'js/app/services/menu-services',
        'js/app/services/menu/menu-data-service',
        'js/app/directives',
        'js/app/directives/page-directives',
        'js/app/directives/page/page-header-directive',
        'js/app/directives/page/page-footer-directive',
        'js/app/directives/menu-directives',
        'js/app/directives/menu/menu-main-directive'
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
