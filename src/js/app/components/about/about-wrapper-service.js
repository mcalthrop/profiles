/* global angular */

/**
 * @ngdoc module
 * @name AboutWrapperServiceModule
 * @requires ngResource
 * @description
 *
 * Contains the about wrapper service.
 *
 */

/**
 * @ngdoc service
 * @name AboutWrapperService
 * @requires $resource
 * @description
 *
 * Service to get the wrapper for the about page.
 *
 */

angular.module(
        'AboutWrapperServiceModule',
        [
            'ngResource'
        ]
    )
    .factory(
    'AboutWrapperService',
    function ($resource) {
        return $resource(
            'svc/about/about-wrapper.json',
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