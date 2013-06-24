/* global define */

define(
    [
        'angular'
    ],
    function MenuDirectives(angular) {
        'use strict';

        return angular.module('MenuDirectives', [])
            .directive(
            'menuMain',
            function factory() {
                return {
                    restrict: 'E',
                    scope: true,
                    templateUrl: 'js/app/directives/menu/menu-main.html',
                    link: function () {
                    }
                };
            }
        );
    }
);

/* EOF */