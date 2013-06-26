/* global angular */

angular.module(
        'AboutDataService',
        [
            'ngResource'
        ]
    ).factory(
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