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
                ProfilesDataService.query(
                    function (data) {
                        // if the alt-text for the image is blank, set it to the first + last name
                        // and if the title text is not set, set it to the alt text
                        // TODO: this logic could be separated out into a filter
                        for (var i = 0, len = data.length; i < len; i++) {
                            var profile = data[i];
                            var profileName = profile.name;
                            var profileImage = profile.data.image;

                            if (!profileImage.alt) {
                                profileImage.alt = profileName.first + " " + profileName.last;
                            }
                            if (!profileImage.title) {
                                profileImage.title = profileImage.alt;
                            }
                        }
                        ProfilesModel.profiles = data;

                        $scope.profilesModel = ProfilesModel;
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