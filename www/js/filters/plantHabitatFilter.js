/**
 * Created by Opstrup on 21/01/2016.
 */
'use strict';

angular.module('spis-danmark')

    .filter('plantHabitatFilter', [
        function () {
            return function (plantArray, farmland, wetland, forest, moor, coast) {
                var result = new Array();

                if (!farmland && !wetland && !forest && !moor && !coast)
                    return result;

                angular.forEach(plantArray, function (plant) {
                    var hasBeenPushed = false;

                    if (farmland && plant.getHabitat.indexOf('farmland') > -1 && !hasBeenPushed) {
                        result.push(plant);
                        hasBeenPushed = true;
                    }

                    if (wetland && plant.getHabitat.indexOf('wetland') > -1 && !hasBeenPushed) {
                        result.push(plant);
                        hasBeenPushed = true;
                    }

                    if (forest && plant.getHabitat.indexOf('forest') > -1 && !hasBeenPushed) {
                        result.push(plant);
                        hasBeenPushed = true;
                    }

                    if (moor && plant.getHabitat.indexOf('moor') > -1 && !hasBeenPushed) {
                        result.push(plant);
                        hasBeenPushed = true;
                    }

                    if (coast && plant.getHabitat.indexOf('coast') > -1 && !hasBeenPushed) {
                        result.push(plant);
                    }
                });

                return result;
            }

        }]);