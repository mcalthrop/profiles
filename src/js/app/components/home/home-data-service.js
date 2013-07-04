/* global angular */

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