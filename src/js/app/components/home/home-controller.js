/* global angular */

angular.module(
        'HomeControllerModule',
        [
        ]
    )
    .controller(
        'HomeController',
        [
            '$scope',
            'HomeDataService',
            'HomeWrapperService',
            'HomeModel',
            'PageTitleModel',
            'PageHeaderModel',
            function ($scope, HomeDataService, HomeWrapperService, HomeModel, PageTitleModel, PageHeaderModel) {
                $scope.homeModel = HomeModel;

                HomeDataService.query(function (data) {
                    HomeModel.setParagraphs(data.paragraphs);
                });

                HomeWrapperService.query(function (data) {
                    PageTitleModel.setTitle(data.title);
                    PageHeaderModel.setTitle(data.header.title);
                    PageHeaderModel.setParagraphs(data.header.paragraphs);
                });
            }
        ]
    );

/* EOF */