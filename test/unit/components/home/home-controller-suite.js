/* global describe, beforeEach, module, inject, jasmine, it, expect */

describe('Testing HomeController:', function () {
    'use strict';

    var $controller,
        $scope,
        controllerToTest,
        mockHomeDataService,
        mockHomeDataJson,
        mockHomeWrapperService,
        mockHomeWrapperJson,
        mockHomeModel,
        mockPageTitleModel,
        mockPageHeaderModel;

    beforeEach(module('HomeControllerModule', 'MockHomeDataJsonModule', 'MockHomeWrapperJsonModule'));

    beforeEach(inject(function (_$controller_, _$rootScope_, _MockHomeDataJson_, _MockHomeWrapperJson_) {
        $controller = _$controller_;

        $scope = _$rootScope_.$new();

        mockHomeDataJson = _MockHomeDataJson_;
        mockHomeDataService = jasmine.createSpyObj('mockHomeDataService', ['query']);
        mockHomeDataService.query.andCallFake(function (fn) {
            fn(mockHomeDataJson);
        });

        mockHomeWrapperJson = _MockHomeWrapperJson_;
        mockHomeWrapperService = jasmine.createSpyObj('mockHomeWrapperService', ['query']);
        mockHomeWrapperService.query.andCallFake(function (fn) {
            fn(mockHomeWrapperJson);
        });

        mockHomeModel = jasmine.createSpyObj(
            'mockHomeModel',
            ['setParagraphs', 'getParagraphs']
        );
        mockPageTitleModel = jasmine.createSpyObj(
            'mockPageTitleModel',
            ['setTitle', 'getTitle']
        );
        mockPageHeaderModel = jasmine.createSpyObj(
            'mockPageHeaderModel',
            ['setTitle', 'getTitle', 'setParagraphs', 'getParagraphs']
        );

        controllerToTest = $controller('HomeController', {
            $scope: $scope,
            HomeDataService: mockHomeDataService,
            HomeWrapperService: mockHomeWrapperService,
            HomeModel: mockHomeModel,
            PageTitleModel: mockPageTitleModel,
            PageHeaderModel: mockPageHeaderModel
        });
    }));

    it('should set homeModel correctly on $scope', function () {
        expect($scope.homeModel).toBe(mockHomeModel);
    });

    describe('Home data service:', function () {

        it('should call data service', function () {
            expect(mockHomeDataService.query).toHaveBeenCalled();
        });

        it('should call setParagraphs()', function () {
            expect(mockHomeModel.setParagraphs).toHaveBeenCalled();
        });

        it('should call setParagraphs() with correct parameters', function () {
            var mostRecentCallArgs = mockHomeModel.setParagraphs.mostRecentCall.args;

            for (var i = 0, len = mockHomeDataJson.length; i < len; i++) {
                expect(mostRecentCallArgs[i]).toEqual(mockHomeDataJson[i]);
            }
        });

    });

    describe('Home wrapper service:', function () {

        it('should call wrapper service', function () {
            expect(mockHomeWrapperService.query).toHaveBeenCalled();
        });

        it('should call setTitle() on page title model', function () {
            expect(mockPageTitleModel.setTitle).toHaveBeenCalled();
        });

        it('should call setTitle() on page header model', function () {
            expect(mockPageHeaderModel.setTitle).toHaveBeenCalled();
        });

        it('should call setParagraphs() on page header model', function () {
            expect(mockPageHeaderModel.setParagraphs).toHaveBeenCalled();
        });

    });
});

/* EOF */