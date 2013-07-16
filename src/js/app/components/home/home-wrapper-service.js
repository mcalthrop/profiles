/* global angular */

/**
 * @ngdoc module
 * @name HomeWrapperServiceModule
 * @requires ngResource
 * @description
 *
 * Contains the home wrapper service.
 *
 */

/**
 * @ngdoc service
 * @name HomeWrapperService
 * @requires $resource
 * @description
 *
 * Service to get the wrapper for the home page.
 *
 */

angular.module(
        'HomeWrapperServiceModule',
        [
            'ngResource'
        ]
    )
    .factory(
    'HomeWrapperService',
    function ($resource) {
        return $resource(
            'svc/home/home-wrapper.json',
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