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
            'PageHeaderModel',
            function ($scope, AboutDataService, AboutWrapperService, AboutModel, PageHeaderModel) {
                AboutDataService.query(function (data) {
                    AboutModel.setParagraphs(data.paragraphs);

                    $scope.aboutModel = AboutModel;
                });
                AboutWrapperService.query(function (data) {
                    PageHeaderModel.title = data.title;
                    PageHeaderModel.header = data.header;
                });
            }
        ]
    );

/* EOF */