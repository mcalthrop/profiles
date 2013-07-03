/* global describe, it, expect, beforeEach, inject, module, spyOn */

describe('Testing MenuMainModel:', function () {
    'use strict';

    var modelToTest,
        testMenuMainItems1 = [
            {
                "id": "id1",
                "text": "text1",
                "url": "#/id1"
            },
            {
                "id": "id2",
                "text": "text2",
                "url": "#/id2"
            }
        ],
        testMenuMainItems2 = [
            {
                "id": "id1.2",
                "text": "text1.2",
                "url": "#/id1.2"
            },
            {
                "id": "id2.2",
                "text": "text2.2",
                "url": "#/id2.2"
            },
            {
                "id": "id3.2",
                "text": "text3.2",
                "url": "#/id3.2"
            }
        ];

    beforeEach(module('MenuMainModelModule'));

    beforeEach(inject(function (MenuMainModel) {
        modelToTest = MenuMainModel;
    }));

    describe('menu items setter', function () {

        it('is passed correct value', function () {
            spyOn(modelToTest, 'setMenuItems');
            modelToTest.setMenuItems(testMenuMainItems1);
            expect(modelToTest.setMenuItems).toHaveBeenCalledWith(testMenuMainItems1);
        });

        it('should get the correct number of menu items', function () {
            spyOn(modelToTest, 'setMenuItems');
            modelToTest.setMenuItems(testMenuMainItems1);
            expect(modelToTest.setMenuItems.mostRecentCall.args[0].length).toEqual(testMenuMainItems1.length);
        });

    });

    describe('menu items getter', function () {

        it('should return empty array when no setter called', function () {
            expect(modelToTest.getMenuItems()).toEqual([]);
        });

        it('should return parameters set', function () {
            modelToTest.setMenuItems(testMenuMainItems1);
            expect(modelToTest.getMenuItems()).toEqual(testMenuMainItems1);
        });

        it('should return most recent parameters set', function () {
            modelToTest.setMenuItems(testMenuMainItems1);
            modelToTest.setMenuItems(testMenuMainItems2);
            expect(modelToTest.getMenuItems()).toEqual(testMenuMainItems2);
        });

    });

});

/* EOF */