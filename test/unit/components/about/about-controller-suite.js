/* global describe, beforeEach, module, inject, jasmine, it, expect */

describe('Testing AboutController:', function () {
    'use strict';

    var controllerToTest,
        scope,
        mockAboutDataService,
        mockAboutWrapperService,
        mockAboutModel,
        mockPageHeaderModel;

    beforeEach(module('AboutControllerModule'));

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        // TODO: is this the way to do it? ie, mock all the injected parameters?
        mockAboutDataService = jasmine.createSpyObj('mockAboutDataService', ['query']);
        mockAboutWrapperService = jasmine.createSpyObj('mockAboutWrapperService', ['query']);
        mockAboutModel = jasmine.createSpyObj('mockAboutModel', ['setParagraphs', 'getParagraphs']);
        controllerToTest = $controller('AboutController', {
            $scope: scope,
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