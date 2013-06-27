/* global angular */

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