/* global angular */

angular.module('AppDirectives', [])
    .directive(
    'mainMenu',
    function factory() {
        return {
            restrict: 'E',
            scope: true,
            templateUrl: 'partials/directives/main-menu.html',
            link: function () {
            }
        };
    }
);

/* EOF */