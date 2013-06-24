/* global define */

define(
    [
        'angular'
    ],
    function PageDirectives(angular) {
        'use strict';

        return angular.module('PageDirectives', [])
            .directive(
            'prPageHeader',
            function factory() {
                return {
                    restrict: 'E',
                    scope: true,
                    templateUrl: 'js/app/directives/page/pr-page-header.html',
                    link: function () {
                    }
                };
            })
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