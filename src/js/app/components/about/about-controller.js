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
            'MenuMainModel',
            'AboutDataService',
            'AboutWrapperService',
            'AboutModel',
            'PageTitleModel',
            'PageHeaderModel',
            function ($scope, MenuMainModel, AboutDataService, AboutWrapperService, AboutModel, PageTitleModel, PageHeaderModel) {
                $scope.aboutModel = AboutModel;

                MenuMainModel.setCurrentMenuItemId(MenuMainModel.ABOUT);

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