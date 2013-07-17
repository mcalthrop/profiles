/* global angular */

/**
 * @ngdoc module
 * @name PageHeaderControllerModule
 * @description
 *
 * Contains page header controller.
 *
 */

/**
 * @ngdoc controller
 * @name PageHeaderController
 * @requires $scope
 * @requires PageHeaderModel
 * @description
 *
 * Set the value of the model on the controller.
 *
 */

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