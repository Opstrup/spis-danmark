/**
 * Created by Opstrup on 21/01/2016.
 */

'use strict';

describe('habitat filter tests', function () {

    var $filter, plant, mockMixedPlantArray, mockPlantArrayFarmland ,mockPlantArrayWetland, mockPlantArrayForest, mockPlantArrayMoor, mockPlantArrayCoast;

    beforeEach(function () {
        module('spis-danmark');

        inject(function (_$filter_) {
            $filter = _$filter_;
        });

        mockMixedPlantArray = [
            {
                getHabitat: ['farmland', 'forest']
            }, {
                getHabitat: ['farmland', 'moor', 'coast']
            }, {
                getHabitat: ['forest', 'coast']
            }, {
                getHabitat: ['wetland', 'coast', 'forest', 'moor']
            }
        ];

        mockPlantArrayCoast = [
            {
                getHabitat: ['coast']
            },
            {
                getHabitat: ['coast']
            }
        ];

        mockPlantArrayFarmland = [
            {
                getHabitat: ['farmland']
            }, {
                getHabitat: ['farmland']
            }, {
                getHabitat: ['farmland']
            }
        ];

        mockPlantArrayForest = [
            {
                getHabitat: ['forest']
            }, {
                getHabitat: ['forest']
            }, {
                getHabitat: ['forest']
            }
        ];

        mockPlantArrayWetland = [
            {
                getHabitat: ['wetland']
            }, {
                getHabitat: ['wetland']
            }, {
                getHabitat: ['wetland']
            }
        ];

        mockPlantArrayMoor = [
            {
                getHabitat: ['moor']
            }, {
                getHabitat: ['moor']
            }, {
                getHabitat: ['moor']
            }
        ];
    });

    function cleanArrayHelper(plantArray) {
        var result = new Array();

        angular.forEach(plantArray, function (plant) {
            if (plant != undefined)
                result.push(plant);
        });

        return result;
    }

    it('should return empty array', function () {
        // Arrange.
        var plant = mockMixedPlantArray;

        var farmland = false;
        var wetland = false;
        var forest = false;
        var moor = false;
        var coast = false;

        // Act.
        var result = $filter('plantHabitatFilter')(plant, farmland, wetland, forest, moor, coast);

        // Assert.
        expect(result).toEqual([]);
    });

    it('should return empty array when no habitat is found', function () {
        // Arrange.
        var plant = mockPlantArrayCoast;

        var farmland = true;
        var wetland = false;
        var forest = false;
        var moor = false;
        var coast = false;

        // Act.
        var result = $filter('plantHabitatFilter')(plant, farmland, wetland, forest, moor, coast);

        // Assert.
        expect(result).toEqual([]);
    });

    it('should return array with plants when habitat is found 0', function () {
        // Arrange.
        var plant = mockPlantArrayFarmland;

        var farmland = true;
        var wetland = false;
        var forest = false;
        var moor = false;
        var coast = false;

        // Act.
        var result = $filter('plantHabitatFilter')(plant, farmland, wetland, forest, moor, coast);

        // Assert.
        expect(result.length).toEqual(3);
    });

    it('should return array width plants when habitats is found 1', function () {
        // Arrange.
        var plant = mockMixedPlantArray;

        var farmland = true;
        var wetland = true;
        var forest = true;
        var moor = false;
        var coast = false;

        // Act.
        var result = $filter('plantHabitatFilter')(plant, farmland, wetland, forest, moor, coast);

        // Assert.
        expect(result.length).toEqual(4);
    });

    it('should return array width plants when habitats is found 2', function () {
        // Arrange.
        var plant = mockMixedPlantArray;

        var farmland = false;
        var wetland = false;
        var forest = false;
        var moor = false;
        var coast = true;

        // Act.
        var result = $filter('plantHabitatFilter')(plant, farmland, wetland, forest, moor, coast);

        // Assert.
        expect(result.length).toEqual(3);
    });
});