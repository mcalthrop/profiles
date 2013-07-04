/* global angular */

angular.module(
        'ResourcesModelModule',
        [
        ]
    )
    .factory(
        'ResourcesModel',
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
