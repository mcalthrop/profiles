/* global angular */

angular.module(
        'ResourcesControllerModule',
        [
        ]
    )
    .controller(
        'ResourcesController',
        [
            '$scope',
            'ResourcesDataService',
            'ResourcesWrapperService',
            'ResourcesModel',
            'PageTitleModel',
            'PageHeaderModel',
            function ($scope, ResourcesDataService, ResourcesWrapperService, ResourcesModel, PageTitleModel, PageHeaderModel) {
                $scope.resourcesModel = ResourcesModel;

                ResourcesDataService.query(function (data) {
                    ResourcesModel.setParagraphs(data.paragraphs);
                });

                ResourcesWrapperService.query(function (data) {
                    PageTitleModel.setTitle(data.title);
                    PageHeaderModel.setTitle(data.header.title);
                    PageHeaderModel.setParagraphs(data.header.paragraphs);
                });
            }
        ]
    );

/* EOF */
