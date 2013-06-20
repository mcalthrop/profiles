/* global angular */

angular.module(
        'AboutServices',
        [
            'ngResource'
        ]
    ).factory(
    'AboutWrapperService',
    function ($resource) {
        return $resource(
            'svc/about/wrapper.json',
            {},
            {
                query: {
                    method: 'GET'
                }
            }
        );
    }).factory(
    'AboutDataService',
    function ($resource) {
        return $resource(
            'svc/about/data.json',
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