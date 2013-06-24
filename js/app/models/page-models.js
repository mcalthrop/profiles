/* global define */

define(
    [
        'angular'
    ],
    function PageModels(angular) {
        'use strict';

        return angular.module('PageModels', []).factory(
            'PageHeaderModel',
            function () {
                var PageHeaderModel = {};

                // TODO: complete

                return PageHeaderModel;
            }
        ).factory(
            'PageFooterModel',
            function () {
                var PageFooterModel = {};

                // TODO: complete

                return PageFooterModel;
            }
        );
    }
);

/* EOF */