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
            setProfiles: function (newProfiles) {
                _profiles = newProfiles;
            },
            getProfiles: function () {
                return _profiles;
            }
        };
    }
);

/* EOF */