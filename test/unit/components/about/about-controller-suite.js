/* global describe, beforeEach, module, inject, jasmine, it, expect */

describe('Testing AboutController:', function () {
    'use strict';

    var $controller,
        $scope,
        controllerToTest,
        mockAboutDataService,
        mockAboutDataJson,
        mockAboutWrapperService,
        mockAboutWrapperJson,
        mockAboutModel,
        mockPageTitleModel,
        mockPageHeaderModel;

    beforeEach(module('AboutControllerModule', 'MockAboutDataJsonModule', 'MockAboutWrapperJsonModule'));

    beforeEach(inject(function (_$controller_, _$rootScope_, _MockAboutDataJson_, _MockAboutWrapperJson_) {
        $controller = _$controller_;

        $scope = _$rootScope_.$new();

        mockAboutDataJson = _MockAboutDataJson_;
        mockAboutDataService = jasmine.createSpyObj('mockAboutDataService', ['query']);
        mockAboutDataService.query.andCallFake(function (fn) {
            fn(mockAboutDataJson);
        });

        mockAboutWrapperJson = _MockAboutWrapperJson_;
        mockAboutWrapperService = jasmine.createSpyObj('mockAboutWrapperService', ['query']);
        mockAboutWrapperService.query.andCallFake(function (fn) {
            fn(mockAboutWrapperJson);
        });

        mockAboutModel = jasmine.createSpyObj(
            'mockAboutModel',
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

        controllerToTest = $controller('AboutController', {
            $scope: $scope,
            AboutDataService: mockAboutDataService,
            AboutWrapperService: mockAboutWrapperService,
            AboutModel: mockAboutModel,
            PageTitleModel: mockPageTitleModel,
            PageHeaderModel: mockPageHeaderModel
        });
    }));

    it('should set aboutModel correctly on $scope', function () {
        expect($scope.aboutModel).toBe(mockAboutModel);
    });

    describe('About data service:', function () {

        it('should call data service', function () {
            expect(mockAboutDataService.query).toHaveBeenCalled();
        });

        it('should call setParagraphs()', function () {
            expect(mockAboutModel.setParagraphs).toHaveBeenCalled();
        });

        it('should call setParagraphs() with correct parameters', function () {
            var mostRecentCallArgs = mockAboutModel.setParagraphs.mostRecentCall.args;

            for (var i = 0, len = mockAboutDataJson.length; i < len; i++) {
                expect(mostRecentCallArgs[i]).toEqual(mockAboutDataJson[i]);
            }
        });

    });

    describe('About wrapper service:', function () {

        it('should call wrapper service', function () {
            expect(mockAboutWrapperService.query).toHaveBeenCalled();
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