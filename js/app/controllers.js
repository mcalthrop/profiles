/* global angular */

/* Controllers */

angular.module('AppControllers', [])
    .controller(
        'ProfilesController',
        [
            '$scope',
            'ProfilesDataService',
            'ProfilesWrapperService',
            function ($scope, ProfilesDataService, ProfilesWrapperService) {
                $scope.page = {};
                $scope.page.id = "profiles";
                ProfilesDataService.query(
                    function (data) {
                        $scope.page.profiles = data;
                    }
                );
                ProfilesWrapperService.query(
                    function (data) {
                        $scope.page.title = data.title;
                        $scope.page.header = data.header;
                    }
                );
            }
        ]
    )
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
    )
    .controller(
        'MenuController',
        [
            '$scope',
            'MenuDataService',
            function ($scope, MenuDataService) {
                $scope.menu = {};
                MenuDataService.query(function (data) {
                    $scope.menu.main = data.main;
                });
            }
        ]
    );

/* EOF */