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
                    'MenuMainModel',
                    function ($scope, MenuDataService, MenuMainModel) {
                        MenuDataService.query(function (data) {
                            MenuMainModel.menuItems = data.main;

                            $scope.menuMainModel = MenuMainModel;
                        });
                    }
                ]
            );
    }
);

/* EOF */