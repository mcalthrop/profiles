/* global angular */

angular.module(
        'PageFooterDirectiveModule',
        [
        ]
    )
    .directive(
    'prPageFooter',
    function factory() {
        return {
            restrict: 'E',
            scope: true,
            templateUrl: 'js/app/directives/page/page-footer-view.html',
            link: function () {
            }
        };
    }
);

/* EOF */