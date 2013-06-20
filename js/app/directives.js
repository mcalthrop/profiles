/* global angular */

angular.module('AppDirectives', [])
    .directive(
    'pageHeader',
    function factory() {
        return {
            restrict: 'E',
            scope: true,
            templateUrl: 'inc/directives/page-header.html',
            link: function () {
            }
        };
    })
    .directive(
    'pageFooter',
    function factory() {
        return {
            restrict: 'E',
            scope: true,
            templateUrl: 'inc/directives/page-footer.html',
            link: function () {
            }
        };
    })
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

/* EOF */