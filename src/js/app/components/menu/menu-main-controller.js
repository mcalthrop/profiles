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
                MenuDataService.query(function (data) {
                    MenuMainModel.menuItems = data.main;

                    $scope.menuMainModel = MenuMainModel;
                });
            }
        ]
    );

/* EOF */