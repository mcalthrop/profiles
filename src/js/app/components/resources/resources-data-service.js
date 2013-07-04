/* global angular */

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
