/* global angular */

angular.module(
        'MenuMainModelModule',
        [
        ]
    )
    .factory(
    'MenuMainModel',
    function () {
        var _menuItems = [];

        return {
            setMenuItems: function (newMenuItems) {
                _menuItems = newMenuItems;
            },
            getMenuItems: function () {
                return _menuItems;
            }
        };
    }
);

/* EOF */