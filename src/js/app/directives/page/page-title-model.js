/* global angular */

/**
 * @ngdoc module
 * @name PageTitleModelModule
 * @description
 *
 * Contains PageTitleModel.
 *
 */

/**
 * @ngdoc object
 * @name PageTitleModel
 * @function
 * @description
 *
 * This is the model for the page title.
 *
 */

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
            /**
             * @ngdoc method
             * @name PageTitleModel#setTitle
             * @methodOf PageTitleModel
             * @description
             *
             * Setter for the page title on the model.
             *
             * @param {String} newTitle The new page title to set.
             * @returns {void}
             *
             */
            setTitle: function (newTitle) {
                _title = newTitle;
            },
            /**
             * @ngdoc method
             * @name PageTitleModel#getParagraphs
             * @methodOf PageTitleModel
             * @description
             *
             * Getter for the page title on the model.
             *
             * @returns {String}
             *
             */
            getTitle: function () {
                return _title;
            }
        };
    }
);

/* EOF */