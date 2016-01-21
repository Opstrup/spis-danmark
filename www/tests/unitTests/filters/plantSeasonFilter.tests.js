/**
 * Created by Opstrup on 13/01/2016.
 */

'use strict';

describe('season filter tests', function () {

    var $filter, plant, mockMixedPlantArray, mockPlantArraySummer ,mockPlantArrayWinter, mockPlantArraySpring, mockPlantArrayAutumn;

    beforeEach(function () {
        module('spis-danmark');

        inject(function (_$filter_) {
            $filter = _$filter_;
        });

        mockMixedPlantArray = [
            {
                getSeason: ['spring', 'summer']
            }, {
                getSeason: ['spring', 'summer', 'autumn']
            }, {
                getSeason: ['spring', 'autumn']
            }, {
                getSeason: ['spring', 'summer', 'autumn', 'winter']
            }
        ];

        mockPlantArraySummer = [
            {
                getSeason: ['summer']
            }, {
                getSeason: ['summer']
            }, {
                getSeason: ['summer']
            }
        ];

        mockPlantArraySpring = [
            {
                getSeason: ['spring']
            }, {
                getSeason: ['spring']
            }, {
                getSeason: ['spring']
            }
        ];

        mockPlantArrayWinter = [
            {
                getSeason: ['winter']
            }, {
                getSeason: ['winter']
            }, {
                getSeason: ['winter']
            }
        ];

        mockPlantArrayAutumn = [
            {
                getSeason: ['autumn']
            }, {
                getSeason: ['autumn']
            }, {
                getSeason: ['autumn']
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

        var spring = false;
        var summer = false;
        var autumn = false;
        var winter = false;

        // Act.
        var result = $filter('plantSeasonFilter')(plant, spring, summer, autumn, winter);

        // Assert.
        expect(result).toEqual([]);
    });

    it('should return a plant when spring is true and a plant got spring season', function () {
        // Arrange.
        var plant = mockMixedPlantArray;

        var spring = true;
        var summer = false;
        var autumn = false;
        var winter = false;

        // Act.
        var result = $filter('plantSeasonFilter')(plant, spring, summer, autumn, winter);

        // Assert.
        expect(result).toEqual(mockMixedPlantArray);
    });

    it('should return a plant when summer is true and a plant got summer season', function () {
        // Arrange.
        var plant = mockMixedPlantArray;

        var spring = false;
        var summer = true;
        var autumn = false;
        var winter = false;

        // Act.
        var result = $filter('plantSeasonFilter')(plant, spring, summer, autumn, winter);

        // Assert.
        expect(result).toBeDefined();
    });

    it('should NOT return a plant when autumn is true and plant does not have autumn', function () {
        // Arrange.
        var plant = mockPlantArraySpring;

        var spring = false;
        var summer = false;
        var autumn = true;
        var winter = false;

        // Act.
        var result = $filter('plantSeasonFilter')(plant, spring, summer, autumn, winter);

        // Assert.
        expect(result).toEqual([]);
    });

    it('should NOT return a plant when winter is true and plant does not have winter', function () {
        // Arrange.
        var plant = mockPlantArrayAutumn;

        var spring = false;
        var summer = false;
        var autumn = false;
        var winter = true;

        // Act.
        var result = $filter('plantSeasonFilter')(plant, spring, summer, autumn, winter);

        // Assert.
        expect(result).toEqual([]);
    });

    it('should return an array of plants when autumn is true and a plant got autumn season', function () {
        // Arrange.
        var plant = mockMixedPlantArray;

        var spring = false;
        var summer = false;
        var autumn = true;
        var winter = false;

        // Act.
        var result = $filter('plantSeasonFilter')(plant, spring, summer, autumn, winter);

        // Assert.
        expect(Array.isArray(result)).toEqual(true);
        expect(result.length).toEqual(3);
    });

    it('should return an array of plants, when a plant got one of the seasons', function () {
        // Arrange.
        var plant = mockMixedPlantArray;

        var spring = true;
        var summer = false;
        var autumn = false;
        var winter = true;

        // Act.
        var result = $filter('plantSeasonFilter')(plant, spring, summer, autumn, winter);

        // Assert.
        expect(Array.isArray(result)).toEqual(true);
        expect(result.length).toEqual(4);
    });

    it('should return a plant, when a plant got one of the seasons', function () {
        // Arrange.
        var plant = mockMixedPlantArray;

        var spring = false;
        var summer = false;
        var autumn = false;
        var winter = true;

        // Act.
        var result = $filter('plantSeasonFilter')(plant, spring, summer, autumn, winter);

        // Assert.
        expect(Array.isArray(result)).toEqual(true);
        expect(result.length).toEqual(1);
    });

    it('should array of plants width correct number of plants 0', function () {
        // Arrange.

        var spring = true;
        var summer = false;
        var autumn = false;
        var winter = true;

        // Act.
        var result = $filter('plantSeasonFilter')(mockMixedPlantArray, spring, summer, autumn, winter);

        // removing undefended from array
        result = cleanArrayHelper(result);

        // Assert.
        expect(result.length).toEqual(4);
    });

    it('should array of plants with correct number of plants 1', function () {
        // Arrange.

        var spring = false;
        var summer = false;
        var autumn = false;
        var winter = true;

        // Act.
        var result = $filter('plantSeasonFilter')(mockMixedPlantArray, spring, summer, autumn, winter);

        // removing undefended from array
        result = cleanArrayHelper(result);

        // Assert.
        expect(result.length).toEqual(1);
    });

    it('should array of plants with correct number of plants 2', function () {
        // Arrange.

        var spring = false;
        var summer = false;
        var autumn = true;
        var winter = true;

        // Act.
        var result = $filter('plantSeasonFilter')(mockMixedPlantArray, spring, summer, autumn, winter);

        // removing undefended from array
        result = cleanArrayHelper(result);

        // Assert.
        expect(result.length).toEqual(3);
    });
});