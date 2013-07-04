/* global angular */

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