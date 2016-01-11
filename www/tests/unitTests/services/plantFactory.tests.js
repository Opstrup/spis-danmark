/**
 * Created by Opstrup on 11/12/2015.
 */
/**
 * Created by Opstrup on 06/12/2015.
 */

'use strict';

describe('plant class tests', function () {

    describe('creation of plant', function () {

        var UUT, plant;

        beforeEach(module('spis-danmark'));

        beforeEach(function() {
            inject(function($injector) {
                plant = $injector.get('Plant');
            });

            var season = ['summer', 'winter'];
            var application = ['herb', 'thee', 'pot'];
            var habitat = ['farmland', 'wetland'];
            var photo = ['PlantPictures/1/0-plant-1.jpeg', 'PlantPictures/1/1-plant-1.jpeg', 'PlantPictures/1/2-plant-1.jpeg', 'PlantPictures/1/3-plant-1.jpeg'];
            var color = ['red', 'brown', 'green'];
            var size = ['10', '10-25', '25-40'];

            UUT = new plant(1, "test plant name", "test plant latin name", "description of plant", "history of plant", application, habitat, season, photo, color, size);
        });

        it('plantServices should be defined', function () {
            expect(UUT).toBeDefined();
        });

        it('should return id for plant when getter is called', function () {
            expect(UUT.getID).toEqual(1);
        });

        it('should return name for plant when getter is called', function () {
            expect(UUT.getName).toEqual('test plant name');
        });

        it('should return latin name for plant when getter is called', function () {
            expect(UUT.getNameLatin).toEqual('test plant latin name');
        });

        it('should return description for plant when getter is called', function () {
            expect(UUT.getDescription).toEqual('description of plant');
        });

        it('should return history for plant when getter is called', function () {
            expect(UUT.getHistory).toEqual('history of plant');
        });

        it('should return application for plant when getter is called', function () {
            expect(UUT.getApplication[0]).toEqual('herb');
        });

        it('should return application array for plant when getter is called', function () {
            expect(UUT.getApplication).toEqual(['herb', 'thee', 'pot']);
        });

        it('should return habitat array for plant when getter is called', function () {
            expect(UUT.getHabitat).toEqual(['farmland', 'wetland']);
        });

        it('should return season array for plant when getter is called', function () {
            expect(UUT.getSeason).toEqual(['summer', 'winter']);
        });

        it('should return photo array for plant when getter is called', function () {
            expect(UUT.getPhoto).toEqual(['PlantPictures/1/0-plant-1.jpeg', 'PlantPictures/1/1-plant-1.jpeg', 'PlantPictures/1/2-plant-1.jpeg', 'PlantPictures/1/3-plant-1.jpeg']);
        });

        it('should return color array for plant when getter is called', function () {
            expect(UUT.getColor).toEqual(['red', 'brown', 'green']);
        });

        it('should return size array for plant when getter is called', function () {
            expect(UUT.getSize).toEqual(['10', '10-25', '25-40']);
        });
    });
});
