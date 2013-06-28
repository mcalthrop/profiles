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
        // TODO: mock what to do when query() is called

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

    it('should call data service', function () {
        expect(mockAboutDataService.query).toHaveBeenCalled();
    });

    it('should call wrapper service', function () {
        expect(mockAboutWrapperService.query).toHaveBeenCalled();
    });

    // TODO: more tests - need to make sure correct values have been set on models
});

/* EOF */