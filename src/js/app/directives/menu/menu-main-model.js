/* global angular */

/**
 * NOTE: because the code structure is tightly linked to the menu structure,
 * the menu items are defined here, rather than retrieving them from a service.
 */
angular.module(
        'MenuMainModelModule',
        [
        ]
    )
    .factory(
    'MenuMainModel',
    function () {
        var _HOME = 'home',
            _PROFILES = 'profiles',
            _RESOURCES = 'resources',
            _ABOUT = 'about',
            _currentMenuItemId = _HOME,
            _menuItems = [
                {
                    "id": _HOME,
                    "text": "home",
                    "url": "#/home"
                },
                {
                    "id": _PROFILES,
                    "text": "profiles",
                    "url": "#/profiles"
                },
                {
                    "id": _RESOURCES,
                    "text": "resources",
                    "url": "#/resources"
                },
                {
                    "id": _ABOUT,
                    "text": "about",
                    "url": "#/about"
                }
            ];

        return {
            HOME: _HOME,
            PROFILES: _PROFILES,
            RESOURCES: _RESOURCES,
            ABOUT: _ABOUT,
            getCurrentMenuItemId: function () {
                return _currentMenuItemId;
            },
            setCurrentMenuItemId: function (newCurrentMenuItemId) {
                _currentMenuItemId = newCurrentMenuItemId;
            },
            getMenuItems: function () {
                return _menuItems;
            }
        };
    }
);

/* EOF */