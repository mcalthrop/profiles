/* global angular */

angular.module(
        'HomeModelModule',
        [
        ]
    )
    .factory(
        'HomeModel',
        [
            function () {
                var _paragraphs = [];

                return {
                    setParagraphs: function (newParagraphs) {
                        _paragraphs = newParagraphs;
                    },
                    getParagraphs: function () {
                        return _paragraphs;
                    }
                };
            }
        ]
    );

/* EOF */