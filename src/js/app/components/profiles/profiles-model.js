/* global angular */

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