/* global angular */

angular.module('PageDirectives', [])
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
    }
);

/* EOF */