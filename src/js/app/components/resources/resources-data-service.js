/* global angular */

/**
 * @ngdoc module
 * @name ResourcesDataServiceModule
 * @requires ngResource
 * @description
 *
 * Define the resources data service.
 *
 */

/**
 * @ngdoc service
 * @name ResourcesDataService
 * @requires $resource
 * @description
 *
 * Service to get the data for the resources page.
 *
 */

angular.module(
        'ResourcesDataServiceModule',
        [
            'ngResource'
        ]
    )
    .factory(
    'ResourcesDataService',
    function ($resource) {
        return $resource(
            'svc/resources/resources-data.json',
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
