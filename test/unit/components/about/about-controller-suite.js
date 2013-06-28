/* global describe, beforeEach, module, inject, jasmine, it, expect */

describe('Testing AboutController:', function () {
    'use strict';

    var $controller,
        $scope,
        $httpBackend,
        controllerToTest,
        mockAboutDataService,
        mockAboutDataJson,
        mockAboutWrapperService,
        mockAboutModel,
        mockPageHeaderModel;

    beforeEach(module('AboutControllerModule', 'MockAboutDataJsonModule'));

    beforeEach(inject(function (_$controller_, _$rootScope_, _$httpBackend_, _MockAboutDataJson_) {
        $controller = _$controller_;

        $scope = _$rootScope_.$new();

        mockAboutDataJson = _MockAboutDataJson_;

        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('svc/about/about-data.json').respond(mockAboutDataJson);

        mockAboutDataService = jasmine.createSpyObj('mockAboutDataService', ['query']);
        mockAboutDataService.query.andCallFake(function (fn) {
            fn(mockAboutDataJson);
        });

        mockAboutWrapperService = jasmine.createSpyObj('mockAboutWrapperService', ['query']);

        mockAboutModel = jasmine.createSpyObj('mockAboutModel', ['setParagraphs', 'getParagraphs']);

        controllerToTest = $controller('AboutController', {
            $scope: $scope,
            AboutDataService: mockAboutDataService,
            AboutWrapperService: mockAboutWrapperService,
            AboutModel: mockAboutModel,
            PageHeaderModel: mockPageHeaderModel
        });
    }));

    describe('About data:', function () {

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

        it('should set aboutModel correctly on controller', function () {
            expect($scope.aboutModel).toBe(mockAboutModel);
        });

    });

    // TODO: complete tests for About Wrapper data
});

/* EOF */