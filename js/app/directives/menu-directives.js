/* global define */

define(
    [
        'angular'
    ],
    function MenuDirectives(angular) {
        'use strict';

        return angular.module('MenuDirectives', [])
            .directive(
            'mainMenu',
            function factory() {
                return {
                    restrict: 'E',
                    scope: true,
                    templateUrl: 'inc/directives/main-menu.html',
                    link: function () {
                    }
                };
            }
        );
    }
);

/* EOF */