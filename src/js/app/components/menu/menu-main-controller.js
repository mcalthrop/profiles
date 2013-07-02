/* global angular */

angular.module(
        'MenuMainControllerModule',
        [
        ]
    )
    .controller(
        'MenuMainController',
        [
            '$scope',
            'MenuDataService',
            'MenuMainModel',
            function ($scope, MenuDataService, MenuMainModel) {
                $scope.menuMainModel = MenuMainModel;

                MenuDataService.query(function (data) {
                    MenuMainModel.menuItems = data.main;
                });
            }
        ]
    );

/* EOF */