/* global angular */

angular.module(
        'PageHeaderDirectiveModule',
        [
        ]
    )
    .directive(
    'prPageHeader',
    function factory() {
        return {
            restrict: 'E',
            scope: true,
            templateUrl: 'js/app/directives/page/page-header-view.html',
            link: function () {
            }
        };
    }
);

/* EOF */