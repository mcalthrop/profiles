/* global angular */

/**
 * @ngdoc module
 * @name MenuMainModelModule
 * @description
 *
 * Contains model for the main menu.
 *
 */

/**
 * @ngdoc object
 * @name MenuMainModel
 * @function
 * @description
 *
 * This is the model for the main menu.
 *
 * @note Because the code structure is tightly linked to the menu structure,
 * the menu items are defined here, rather than retrieving them from a service.
 *
 */

/**
 * @ngdoc method
 * @name MenuMainModel#getCurrentMenuItemId
 * @methodOf MenuMainModel
 * @description
 *
 * Getter for the current menu item id.
 *
 * @returns {String}
 *
 */

/**
 * @ngdoc method
 * @name MenuMainModel#setCurrentMenuItemId
 * @methodOf MenuMainModel
 * @description
 *
 * Setter for the current menu item id.
 *
 * @param {String} newCurrentMenuItemId The new value for current menu item id.
 *      Must be one of the constants provided on this object.
 * @returns {void}
 *
 */

/**
 * @ngdoc method
 * @name MenuMainModel#getMenuItems
 * @methodOf MenuMainModel
 * @description
 *
 * Getter for the array of menu items.
 *
 * @returns {Array}
 *
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