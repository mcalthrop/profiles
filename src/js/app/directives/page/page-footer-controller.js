/* global angular */

/**
 * @ngdoc module
 * @name PageFooterControllerModule
 * @description
 *
 * Contains page footer controller.
 *
 */

/**
 * @ngdoc controller
 * @name PageFooterController
 * @requires $scope
 * @requires PageFooterModel
 * @description
 *
 * Set the value of the model on the controller.
 *
 */

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