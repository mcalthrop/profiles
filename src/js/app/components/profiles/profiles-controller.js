/* global angular */

angular.module(
        'ProfilesControllerModule',
        [
        ]
    )
    .controller(
        'ProfilesController',
        [
            '$scope',
            'ProfilesDataService',
            'ProfilesWrapperService',
            'ProfilesModel',
            'PageTitleModel',
            'PageHeaderModel',
            function ($scope, ProfilesDataService, ProfilesWrapperService, ProfilesModel, PageTitleModel, PageHeaderModel) {
                $scope.profilesModel = ProfilesModel;

                ProfilesDataService.query(
                    function (data) {
                        ProfilesModel.setProfiles(data);
                    }
                );
                ProfilesWrapperService.query(
                    function (data) {
                        PageTitleModel.setTitle(data.title);
                        PageHeaderModel.setTitle(data.header.title);
                        PageHeaderModel.setParagraphs(data.header.paragraphs);
                    }
                );
            }
        ]
    );

/* EOF */