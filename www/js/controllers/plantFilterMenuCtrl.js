/**
 * Created by Opstrup on 12/01/2016.
 */

angular.module('spis-danmark')

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('tab.plantFilterMenu', {
                url: '/plantFilterMenu',
                abstract: true,
                views: {
                    'tab-plantList': {
                        templateUrl: 'templates/plantFilterMenuTemplate.html',
                        controller: 'PlantFilterMenuCtrl'
                    }
                }
            });
    }])

    .controller('PlantFilterMenuCtrl', [
        '$scope',
        '$filter',
        '$rootScope',
        'plantFactory',
        function ($scope,
                  $filter,
                  $rootScope,
                  plantFactory) {

            $scope.season = {
                spring: true,
                summer: true,
                autumn: true,
                winter: true
            };

            $scope.plantName = '';

            $scope.init = function () {

            };

            $scope.test = function () {
                _plantArray = plantFactory.getPlantArray();
                $rootScope.plantArray = $filter('plantSeasonFilter')(_plantArray, $scope.season.spring, $scope.season.summer, $scope.season.autumn, $scope.season.winter);
            };

            $scope.searchByName = function () {

            };

            $scope.init();
        }]);