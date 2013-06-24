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
                    'AboutModel',
                    'PageHeaderModel',
                    function ($scope, AboutDataService, AboutWrapperService, AboutModel, PageHeaderModel) {
                        AboutDataService.query(function (data) {
                            AboutModel.paragraphs = data.paragraphs;

                            $scope.aboutModel = AboutModel;
                        });
                        AboutWrapperService.query(function (data) {
                            PageHeaderModel.title = data.title;
                            PageHeaderModel.header = data.header;
                        });
                    }
                ]
            );
    }
);

/* EOF */