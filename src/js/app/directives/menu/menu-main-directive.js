/* global angular */

angular.module('MenuMainDirective', [])
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

/* EOF */