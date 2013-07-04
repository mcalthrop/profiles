/* global angular */

angular.module(
        'ResourcesWrapperServiceModule',
        [
            'ngResource'
        ]
    )
    .factory(
    'ResourcesWrapperService',
    function ($resource) {
        return $resource(
            'svc/resources/resources-wrapper.json',
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
