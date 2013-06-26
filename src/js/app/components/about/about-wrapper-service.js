/* global angular */

angular.module(
        'AboutWrapperService',
        [
            'ngResource'
        ]
    ).factory(
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