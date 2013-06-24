/* global define */

define(
    [
        'angular'
    ],
    function ProfilesControllers(angular) {
        'use strict';

        return angular.module('ProfilesControllers', [])
            .controller(
                'ProfilesController',
                [
                    '$scope',
                    'ProfilesDataService',
                    'ProfilesWrapperService',
                    'ProfilesPageModel',
                    function ($scope, ProfilesDataService, ProfilesWrapperService, ProfilesPageModel) {
                        ProfilesPageModel.id = "profiles";
                        ProfilesDataService.query(
                            function (data) {
                                // if the alt-text for the image is blank, set it to the first + last name
                                // and if the title text is not set, set it to the alt text
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
                                ProfilesPageModel.profiles = data;
                            }
                        );
                        ProfilesWrapperService.query(
                            function (data) {
                                ProfilesPageModel.title = data.title;
                                ProfilesPageModel.header = data.header;
                            }
                        );

                        $scope.pageModel = ProfilesPageModel;
                    }
                ]
            );
    }
);

/* EOF */