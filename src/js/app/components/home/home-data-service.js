/* global angular */

/**
 * @ngdoc module
 * @name HomeDataServiceModule
 * @requires ngResource
 * @description
 *
 * Define the home data service.
 *
 */

/**
 * @ngdoc service
 * @name HomeDataService
 * @requires $resource
 * @description
 *
 * Service to get the data for the home page.
 *
 */

angular.module(
        'HomeDataServiceModule',
        [
            'ngResource'
        ]
    )
    .factory(
    'HomeDataService',
    function ($resource) {
        return $resource(
            'svc/home/home-data.json',
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