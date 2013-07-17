/* global angular */

/**
 * @ngdoc module
 * @name PageTitleControllerModule
 * @description
 *
 * Contains page title controller.
 *
 */

/**
 * @ngdoc controller
 * @name PageTitleController
 * @requires $scope
 * @requires PageTitleModel
 * @description
 *
 * Set the value of the model on the controller.
 *
 */

angular.module(
        'PageTitleControllerModule',
        [
        ]
    )
    .controller(
        'PageTitleController',
        [
            '$scope',
            'PageTitleModel',
            function ($scope, PageTitleModel) {
                $scope.pageTitleModel = PageTitleModel;
            }
        ]
    );

/* EOF */