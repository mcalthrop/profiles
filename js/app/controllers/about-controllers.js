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
                    'AboutPageModel',
                    function ($scope, AboutDataService, AboutWrapperService, AboutPageModel) {
                        AboutPageModel.id = "about";
                        AboutDataService.query(function (data) {
                            AboutPageModel.paragraphs = data.paragraphs;
                        });
                        AboutWrapperService.query(function (data) {
                            AboutPageModel.title = data.title;
                            AboutPageModel.header = data.header;
                        });

                        $scope.pageModel = AboutPageModel;
                    }
                ]
            );
    }
);

/* EOF */