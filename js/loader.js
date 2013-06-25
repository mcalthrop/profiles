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

        'js/app/components',
        'js/app/components/about-components',
        'js/app/components/about/about-controller',
        'js/app/components/about/about-data-service',
        'js/app/components/about/about-wrapper-service',
        'js/app/components/about/about-model',

        'js/app/components/menu-components',
        'js/app/components/menu/menu-main-controller',
        'js/app/components/menu/menu-data-service',
        'js/app/components/menu/menu-main-model',

        'js/app/components/page-components',
        'js/app/components/page/page-header-controller',
        'js/app/components/page/page-footer-controller',
        'js/app/components/page/page-header-model',
        'js/app/components/page/page-footer-model',

        'js/app/components/profiles-components',
        'js/app/components/profiles/profiles-controller',
        'js/app/components/profiles/profiles-model',
        'js/app/components/profiles/profiles-data-service',
        'js/app/components/profiles/profiles-wrapper-service',

        'js/app/filters',

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
