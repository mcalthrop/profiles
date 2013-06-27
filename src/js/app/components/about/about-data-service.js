/* global angular */

angular.module(
        'AboutDataServiceModule',
        [
            'ngResource'
        ]
    )
    .factory(
    'AboutDataService',
    function ($resource) {
        return $resource(
            'svc/about/about-data.json',
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