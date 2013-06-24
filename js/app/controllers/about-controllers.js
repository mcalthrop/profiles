/* global define */

define(
    [
        'angular'
    ],
    function AboutControllers(angular) {
        'use strict';

        return angular.module('AboutControllers', [])
            .controller(
                'AboutController',
                [
                    '$scope',
                    'AboutDataService',
                    'AboutWrapperService',
                    function ($scope, AboutDataService, AboutWrapperService) {
                        $scope.pageModel = {};
                        $scope.pageModel.id = "about";
                        AboutDataService.query(function (data) {
                            $scope.pageModel.paragraphs = data.paragraphs;
                        });
                        AboutWrapperService.query(function (data) {
                            $scope.pageModel.title = data.title;
                            $scope.pageModel.header = data.header;
                        });
                    }
                ]
            );
    }
);

/* EOF */