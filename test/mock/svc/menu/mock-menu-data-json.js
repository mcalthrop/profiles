/* global angular */

(function (angular) {
    'use strict';

    angular.module(
            'MockMenuDataJsonModule',
            [
            ]
        )
        .value(
        'MockMenuDataJson',
        {
            results: {
                "main": [
                    {
                        "id": "mock.id.1",
                        "text": "mock text 1",
                        "url": "#/mock.url.1"
                    },
                    {
                        "id": "mock.id.2",
                        "text": "mock text 2",
                        "url": "#/mock.url.2"
                    }
                ]
            }
        }
    );
}(angular));

/* EOF */