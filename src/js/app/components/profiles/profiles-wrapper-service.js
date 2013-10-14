/* global angular */

/**
 * @ngdoc overview
 * @name ProfilesWrapperServiceModule
 * @requires ngResource
 * @description
 *
 * Contains the profiles wrapper service.
 *
 */

/**
 * @ngdoc service
 * @name ProfilesWrapperService
 * @requires $resource
 * @description
 *
 * Service to get the wrapper for the profiles page.
 *
 */

angular.module(
        'ProfilesWrapperServiceModule',
        [
            'ngResource'
        ]
    )
    .factory(
    'ProfilesWrapperService',
    function ($resource) {
        return $resource(
            'svc/profiles/profiles-wrapper.json',
            {},
            {
                query: {
                    method: 'GET'
                }
            }
        );
    }
);

/* EOF */