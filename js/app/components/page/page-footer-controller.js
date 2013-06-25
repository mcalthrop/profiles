/* global define */

define(
    [
        'angular'
    ],
    function PageFooterController(angular) {
        'use strict';

        return angular.module('PageFooterController', [])
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