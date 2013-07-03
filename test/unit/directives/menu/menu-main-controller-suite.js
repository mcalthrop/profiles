/* global describe, describe, beforeEach, module, inject, jasmine, it, expect */

describe('Testing MenuMainController:', function () {
    'use strict';

    var $controller,
        $scope,
        controllerToTest,
        mockMenuDataService,
        mockMenuDataJson,
        mockMenuMainModel;

    beforeEach(module('MenuMainControllerModule', 'MockMenuDataJsonModule'));

    beforeEach(inject(function (_$controller_, _$rootScope_, _MockMenuDataJson_) {
        $controller = _$controller_;

        $scope = _$rootScope_.$new();

        mockMenuDataJson = _MockMenuDataJson_;

        mockMenuDataService = jasmine.createSpyObj('mockMenuDataService', ['query']);
        mockMenuDataService.query.andCallFake(function (fn) {
            fn(mockMenuDataJson);
        });

        mockMenuMainModel = jasmine.createSpyObj('mockMenuMainModel', ['setMenuItems', 'getMenuItems']);

        controllerToTest = $controller('MenuMainController', {
            $scope: $scope,
            MenuDataService: mockMenuDataService,
            MenuMainModel: mockMenuMainModel
        });
    }));

    describe('Menu data:', function () {

        it('should call data service', function () {
            expect(mockMenuDataService.query).toHaveBeenCalled();
        });

        it('should call setParagraphs()', function () {
            expect(mockMenuMainModel.setMenuItems).toHaveBeenCalled();
        });

        it('should call setParagraphs() with correct parameters', function () {
            var mostRecentCallArgs = mockMenuMainModel.setMenuItems.mostRecentCall.args;

            for (var i = 0, len = mockMenuDataJson.length; i < len; i++) {
                expect(mostRecentCallArgs[i]).toEqual(mockMenuDataJson[i]);
            }
        });

        it('should set aboutModel correctly on controller', function () {
            expect($scope.menuMainModel).toBe(mockMenuMainModel);
        });

    });

});

/* EOF */