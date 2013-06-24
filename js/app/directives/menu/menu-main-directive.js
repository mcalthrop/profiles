/* global define */

define(
    [
        'angular'
    ],
    function MenuMainDirective(angular) {
        'use strict';

        return angular.module('MenuMainDirective', [])
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