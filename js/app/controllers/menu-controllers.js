/* global angular */

angular.module('MenuControllers', [])
    .controller(
        'MenuController',
        [
            '$scope',
            'MenuDataService',
            function ($scope, MenuDataService) {
                $scope.menu = {};
                MenuDataService.query(function (data) {
                    $scope.menu.main = data.main;
                });
            }
        ]
    );

/* EOF */