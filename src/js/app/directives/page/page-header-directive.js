/* global define */

define(
    [
        'angular'
    ],
    function PageHeaderDirective(angular) {
        'use strict';

        return angular.module('PageHeaderDirective', [])
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
            }
        );
    }
);

/* EOF */