/* global angular */

/**
 * @ngdoc module
 * @name ProfilesModelModule
 * @description
 *
 * Defines ProfilesModel.
 *
 */

/**
 * @ngdoc object
 * @name ProfilesModel
 * @function
 * @description
 *
 * This is the model for the Profiles page.
 *
 */

angular.module(
        'ProfilesModelModule',
        [
        ]
    )
    .factory(
    'ProfilesModel',
    function () {
        var _profiles = [];

        return {
            /**
             * @ngdoc method
             * @name ProfilesModel#setProfiles
             * @methodOf ProfilesModel
             * @description
             *
             * Setter for the profiles on the model.
             *
             * @param {Array} newProfiles The array of profiles to set.
             * @returns void
             *
             */
            setProfiles: function (newProfiles) {
                _profiles = newProfiles;
            },
            /**
             * @ngdoc method
             * @name ProfilesModel#getProfiles
             * @methodOf ProfilesModel
             * @description
             *
             * Getter for the profiles on the model.
             *
             * @returns {Array}
             *
             */
            getProfiles: function () {
                return _profiles;
            }
        };
    }
);

/* EOF */