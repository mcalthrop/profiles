/* global angular */

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