/* global define */

define(
    [
        'angular'
    ],
    function MenuControllers(angular) {
        'use strict';

        return angular.module('MenuControllers', [])
            .controller(
                'MenuController',
                [
                    '$scope',
                    'MenuDataService',
                    function ($scope, MenuDataService) {
                        $scope.menuModel = {};
                        MenuDataService.query(function (data) {
                            $scope.menuModel.main = data.main;
                        });
                    }
                ]
            );
    }
);

/* EOF */