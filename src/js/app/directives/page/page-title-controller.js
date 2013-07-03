/* global angular */

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