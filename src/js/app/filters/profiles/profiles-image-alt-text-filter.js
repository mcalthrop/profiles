/* global angular */

angular.module(
        'ProfilesImageAltTextFilterModule',
        [
        ]
    ).filter(
    'ProfilesImageAltText',
    function () {
        /**
         * If the alt-text for the image is non-blank, it is always returned.
         * If the alt-text for the image is blank, set return value to first name + space + last name.
         * If either first or last name is blank, return just the non-blank value
         *      (no leading or trailing space).
         * If all params are blank, return empty string.
         */
        return function (altTextDefault, nameFirst, nameLast) {
            var altText = '';

            if (altTextDefault) {
                altText = altTextDefault;
            } else {
                if (nameFirst) {
                    altText = nameFirst;
                }
                if (nameLast) {
                    if (altText) {
                        altText += ' ';
                    }
                    altText += nameLast;
                }
            }

            return altText;
        };
    }
);

/* EOF */