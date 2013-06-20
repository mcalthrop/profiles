/* global angular */

/* Services */

angular.module(
        'ProfilesServices',
        [
            'ngResource'
        ]
    ).factory(
    'ProfilesDataService',
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
    }).factory(
    'ProfilesWrapperService',
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

angular.module(
        'MenuServices',
        [
            'ngResource'
        ]
    ).factory(
    'MenuDataService',
    function ($resource) {
        return $resource(
            'svc/menu/data.json',
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