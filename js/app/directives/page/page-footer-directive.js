/* global define */

define(
    [
        'angular'
    ],
    function PageFooterDirective(angular) {
        'use strict';

        return angular.module('PageFooterDirective', [])
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
    }
);

/* EOF */