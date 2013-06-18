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
            'svc/profiles.json',
            {},
            {
                query: {
                    method: 'GET',
                    isArray: true
                }
            }
        );
    }
);

/* EOF */