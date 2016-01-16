/**
 * Created by Opstrup on 13/12/2015.
 */
'use strict';

angular.module('spis-danmark')

    .filter('plantSeasonFilter', [
        function () {
            return function (plantArray, spring, summer, autumn, winter) {
                var result = new Array();

                if (!spring && !summer && !autumn && !winter)
                    return result;

                angular.forEach(plantArray, function (plant) {
                    var hasBeenPushed = false;

                    if (spring && plant.getSeason.indexOf('spring') > -1 && !hasBeenPushed) {
                        result.push(plant);
                        hasBeenPushed = true;
                    }

                    if (summer && plant.getSeason.indexOf('summer') > -1 && !hasBeenPushed) {
                        result.push(plant);
                        hasBeenPushed = true;
                    }

                    if (autumn && plant.getSeason.indexOf('autumn') > -1 && !hasBeenPushed) {
                        result.push(plant);
                        hasBeenPushed = true;
                    }

                    if (winter && plant.getSeason.indexOf('winter') > -1 && !hasBeenPushed) {
                        result.push(plant);
                        hasBeenPushed = true;
                    }
                });

                return result;
            }

        }]);