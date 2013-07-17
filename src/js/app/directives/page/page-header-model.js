/* global angular */

/**
 * @ngdoc module
 * @name PageHeaderModelModule
 * @description
 *
 * Contains model for the page header.
 *
 */

/**
 * @ngdoc object
 * @name PageHeaderModel
 * @function
 * @description
 *
 * This is the model for the page header.
 *
 */

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
            /**
             * @ngdoc method
             * @name PageHeaderModel#setTitle
             * @methodOf PageHeaderModel
             * @description
             *
             * Setter for the title in the page header.
             *
             * @param {String} newTitle The new value for the page header title.
             * @returns {void}
             *
             */
            setTitle: function (newTitle) {
                _title = newTitle;
            },
            /**
             * @ngdoc method
             * @name PageHeaderModel#getTitle
             * @methodOf PageHeaderModel
             * @description
             *
             * Getter for the title in the page header.
             *
             * @returns {String}
             *
             */
            getTitle: function () {
                return _title;
            },
            /**
             * @ngdoc method
             * @name PageHeaderModel#setParagraphs
             * @methodOf PageHeaderModel
             * @description
             *
             * Setter for the paragraphs in the page header.
             *
             * @param {Array} newParagraphs The new value for the page header paragraphs.
             * @returns {void}
             *
             */
            setParagraphs: function (newParagraphs) {
                _paragraphs = newParagraphs;
            },
            /**
             * @ngdoc method
             * @name PageHeaderModel#getParagraphs
             * @methodOf PageHeaderModel
             * @description
             *
             * Getter for the paragraphs in the page header.
             *
             * @returns {String}
             *
             */
            getParagraphs: function () {
                return _paragraphs;
            }
        };
    }
);

/* EOF */