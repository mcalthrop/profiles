/* global angular */

angular.module('AboutControllers', [])
    .controller(
        'AboutController',
        [
            '$scope',
            'AboutDataService',
            'AboutWrapperService',
            function ($scope, AboutDataService, AboutWrapperService) {
                $scope.page = {};
                $scope.page.id = "about";
                AboutDataService.query(function (data) {
                    $scope.page.paragraphs = data.paragraphs;
                });
                AboutWrapperService.query(function (data) {
                    $scope.page.title = data.title;
                    $scope.page.header = data.header;
                });
            }
        ]
    );

/* EOF */