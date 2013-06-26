/* global angular */

angular.module('PageHeaderController', [])
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