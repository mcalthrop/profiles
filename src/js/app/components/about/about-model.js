/* global angular */

angular.module('AboutModel', [])
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