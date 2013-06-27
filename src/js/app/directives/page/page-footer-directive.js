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
            templateUrl: 'js/app/directives/page/pr-page-footer.html',
            link: function () {
            }
        };
    }
);

/* EOF */