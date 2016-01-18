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


            $scope.filter = {
                name: '',
                season: {
                    spring: true,
                    summer: true,
                    autumn: true,
                    winter: true
                }
            };


            $scope.plant = {
                plantName: ''
            };

            $scope.init = function () {

            };

            $scope.filterList = function () {
                _plantArray = plantFactory.getPlantArray();
                _plantArray = $filter('filter')(_plantArray, $scope.filter.name);
                $rootScope.plantArray = $filter('plantSeasonFilter')(_plantArray, $scope.filter.season.spring, $scope.filter.season.summer, $scope.filter.season.autumn, $scope.filter.season.winter);
            };

            $scope.test = function () {
                _plantArray = plantFactory.getPlantArray();
                $rootScope.plantArray = $filter('plantSeasonFilter')(_plantArray, $scope.filter.season.spring, $scope.filter.season.summer, $scope.filter.season.autumn, $scope.filter.season.winter);
            };

            $scope.searchByName = function () {
                _plantArray = plantFactory.getPlantArray();
                console.log($scope.plant.plantName);
                $rootScope.plantArray = $filter('filter')(_plantArray, $scope.filter.name);
            };

            $scope.init();
        }]);