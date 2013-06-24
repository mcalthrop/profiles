/* global define */

define(
    [
        'angular'
    ],
    function PageDirectives(angular) {
        'use strict';

        return angular.module('PageDirectives', [])
            .directive(
            'pageHeader',
            function factory() {
                return {
                    restrict: 'E',
                    scope: true,
                    templateUrl: 'js/app/directives/page/page-header.html',
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
                    templateUrl: 'js/app/directives/page/page-footer.html',
                    link: function () {
                    }
                };
            }
        );
    }
);

/* EOF */