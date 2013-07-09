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
            'MenuMainModel',
            'ProfilesDataService',
            'ProfilesWrapperService',
            'ProfilesModel',
            'PageTitleModel',
            'PageHeaderModel',
            function ($scope, MenuMainModel, ProfilesDataService, ProfilesWrapperService, ProfilesModel, PageTitleModel, PageHeaderModel) {
                $scope.profilesModel = ProfilesModel;

                MenuMainModel.setCurrentMenuItemId(MenuMainModel.PROFILES);

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