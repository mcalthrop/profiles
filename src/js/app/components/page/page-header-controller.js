/* global define */

define(
    [
        'angular'
    ],
    function PageHeaderController(angular) {
        'use strict';

        return angular.module('PageHeaderController', [])
            .controller(
                'PageHeaderController',
                [
                    '$scope',
                    'PageHeaderModel',
                    function ($scope, PageHeaderModel) {
                        $scope.pageHeaderModel = PageHeaderModel;
                    }
                ]
            );
    }
);

/* EOF */