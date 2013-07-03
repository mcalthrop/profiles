/* global angular */

angular.module(
        'MenuMainDirectiveModule',
        [
        ]
    )
    .directive(
    'prMenuMain',
    function factory() {
        return {
            restrict: 'E',
            scope: true,
            templateUrl: 'js/app/directives/menu/menu-main-view.html',
            link: function () {
            }
        };
    }
);

/* EOF */