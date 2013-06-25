/* global define */

define(
    [
        'angular'
    ],
    function MenuMainController(angular) {
        'use strict';

        return angular.module('MenuMainController', [])
            .controller(
                'MenuMainController',
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