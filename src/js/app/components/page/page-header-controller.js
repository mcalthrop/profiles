/* global angular */

angular.module(
        'PageHeaderControllerModule',
        [
        ]
    )
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

/* EOF */