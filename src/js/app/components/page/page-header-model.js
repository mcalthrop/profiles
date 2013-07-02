/* global angular */

angular.module(
        'PageHeaderModelModule',
        [
        ]
    )
    .factory(
    'PageHeaderModel',
    function () {
        var _title = '',
            _paragraphs = [];

        return {
            setTitle: function (newTitle) {
                _title = newTitle;
            },
            getTitle: function () {
                return _title;
            },
            setParagraphs: function (newParagraphs) {
                _paragraphs = newParagraphs;
            },
            getParagraphs: function () {
                return _paragraphs;
            }
        };
    }
);

/* EOF */