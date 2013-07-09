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
            'MenuMainModel',
            function ($scope, MenuMainModel) {
                $scope.menuMainModel = MenuMainModel;
            }
        ]
    );

/* EOF */