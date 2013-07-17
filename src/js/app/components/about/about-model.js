/* global angular */

/**
 * @ngdoc module
 * @name AboutModelModule
 * @description
 *
 * Defines AboutModel.
 *
 */

/**
 * @ngdoc object
 * @name AboutModel
 * @function
 * @description
 *
 * This is the model for the About page.
 *
 */

/**
 * @ngdoc method
 * @name AboutModel#setParagraphs
 * @methodOf AboutModel
 * @description
 *
 * Setter for the paragraphs on the model.
 *
 * @param {Array} newParagraphs The array of paragraphs to set.
 * @returns void
 *
 */

/**
 * @ngdoc method
 * @name AboutModel#getParagraphs
 * @methodOf AboutModel
 * @description
 *
 * Getter for the paragraphs on the model.
 *
 * @returns {Array}
 *
 */

angular.module(
        'AboutModelModule',
        [
        ]
    )
    .factory(
    'AboutModel',
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
);

/* EOF */