/* global angular */

angular.module(
        'PageTitleModelModule',
        [
        ]
    )
    .factory(
    'PageTitleModel',
    function () {
        var _title = '';

        return {
            setTitle: function (newTitle) {
                _title = newTitle;
            },
            getTitle: function () {
                return _title;
            }
        };
    }
);

/* EOF */