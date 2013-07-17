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
            setParagraphs: function (newParagraphs) {
                _paragraphs = newParagraphs;
            },
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
            getParagraphs: function () {
                return _paragraphs;
            }
        };
    }
);

/* EOF */