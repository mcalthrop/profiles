/* global angular */

angular.module('PageFooterController', [])
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