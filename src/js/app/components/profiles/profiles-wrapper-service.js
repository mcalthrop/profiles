/* global angular */

angular.module(
        'ProfilesWrapperServiceModule',
        [
            'ngResource'
        ]
    )
    .factory(
    'ProfilesWrapperService',
    function ($resource) {
        return $resource(
            'svc/profiles/profiles-wrapper.json',
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