/* global angular */

angular.module(
        'AboutModelModule',
        [
        ]
    )
    .factory(
        'AboutModel',
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