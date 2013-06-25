/* global define */

define(
    [
        'angular'
    ],
    function ProfilesComponents(angular) {
        'use strict';

        return angular.module(
            'ProfilesComponents',
            [
                'ProfilesController',
                'ProfilesModel',
                'ProfilesDataService',
                'ProfilesWrapperService'
            ]
        );
    }
);

/* EOF */