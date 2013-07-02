/* global angular */

angular.module(
        'AboutControllerModule',
        [
        ]
    )
    .controller(
        'AboutController',
        [
            '$scope',
            'AboutDataService',
            'AboutWrapperService',
            'AboutModel',
            'PageTitleModel',
            'PageHeaderModel',
            function ($scope, AboutDataService, AboutWrapperService, AboutModel, PageTitleModel, PageHeaderModel) {
                $scope.aboutModel = AboutModel;

                AboutDataService.query(function (data) {
                    AboutModel.setParagraphs(data.paragraphs);
                });

                AboutWrapperService.query(function (data) {
                    PageTitleModel.setTitle(data.title);
                    PageHeaderModel.setTitle(data.header.title);
                    PageHeaderModel.setParagraphs(data.header.paragraphs);
                });
            }
        ]
    );

/* EOF */