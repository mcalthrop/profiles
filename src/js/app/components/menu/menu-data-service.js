/* global angular */

angular.module(
        'MenuDataServiceModule',
        [
            'ngResource'
        ]
    )
    .factory(
    'MenuDataService',
    function ($resource) {
        return $resource(
            'svc/menu/menu-data.json',
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