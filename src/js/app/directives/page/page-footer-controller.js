/* global angular */

angular.module(
        'PageFooterControllerModule',
        [
        ]
    )
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

/* EOF */