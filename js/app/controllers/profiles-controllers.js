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
                    function ($scope, ProfilesDataService, ProfilesWrapperService) {
                        $scope.pageModel = {};
                        $scope.pageModel.id = "profiles";
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
                                $scope.pageModel.profiles = data;
                            }
                        );
                        ProfilesWrapperService.query(
                            function (data) {
                                $scope.pageModel.title = data.title;
                                $scope.pageModel.header = data.header;
                            }
                        );
                    }
                ]
            );
    }
);

/* EOF */