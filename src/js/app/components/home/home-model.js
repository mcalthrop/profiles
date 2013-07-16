/* global angular */

/**
 * @ngdoc module
 * @name HomeModelModule
 * @description
 *
 * Defines HomeModel.
 *
 */

/**
 * @ngdoc object
 * @name HomeModel
 * @function
 * @description
 *
 * This is the model for the Home page.
 *
 */

/**
 * @ngdoc method
 * @name HomeModel#setParagraphs
 * @methodOf HomeModel
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
 * @name HomeModel#getParagraphs
 * @methodOf HomeModel
 * @description
 *
 * Getter for the paragraphs on the model.
 *
 * @returns {Array}
 *
 */

angular.module(
        'HomeModelModule',
        [
        ]
    )
    .factory(
    'HomeModel',
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