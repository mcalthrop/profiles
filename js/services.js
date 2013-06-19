/* global angular */

/* Services */

angular.module(
        'ProfilesServices',
        [
            'ngResource'
        ]
    ).factory(
    'ProfilesService',
    function ($resource) {
        return $resource(
            'svc/profiles/data.json',
            {},
            {
                query: {
                    method: 'GET',
                    isArray: true
                }
            }
        );
    }
).factory(
    'PageWrapperService',
    function ($resource) {
        return $resource(
            'svc/profiles/wrapper.json',
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