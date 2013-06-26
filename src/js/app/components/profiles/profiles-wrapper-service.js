/* global angular */

angular.module(
        'ProfilesWrapperService',
        [
            'ngResource'
        ]
    ).factory(
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