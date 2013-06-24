/* global define */

define(
    [
        'angular'
    ],
    function PageControllers(angular) {
        'use strict';

        return angular.module('PageControllers', [])
            .controller(
                'PageHeaderController',
                [
                    '$scope',
                    'PageHeaderModel',
                    function ($scope, PageHeaderModel) {
                        $scope.pageHeaderModel = PageHeaderModel;
                    }
                ]
            )
            .controller(
                'PageFooterController',
                [
                    '$scope',
                    'PageFooterModel',
                    function ($scope, PageFooterModel) {
                        $scope.pageFooterModel = PageFooterModel;
                    }
                ]
            );
    }
);

/* EOF */