/* global define */

define(
    [
        'angular'
    ],
    function MenuDirectives(angular) {
        'use strict';

        return angular.module('MenuDirectives', [])
            .directive(
            'prMenuMain',
            function factory() {
                return {
                    restrict: 'E',
                    scope: true,
                    templateUrl: 'js/app/directives/menu/pr-menu-main.html',
                    link: function () {
                    }
                };
            }
        );
    }
);

/* EOF */