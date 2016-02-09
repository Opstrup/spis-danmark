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
                },
                habitat: {
                    farmland: true,
                    wetland: true,
                    forest: true,
                    moor: true,
                    coast: true
                }
            };


            $scope.plant = {
                plantName: ''
            };

            $scope.init = function () {
                $scope.showSeasons = false;
                $scope.showHabitats = false;
                $scope.showColors = false;

                $scope.seasonArrow = 'ion-ios-arrow-right';
                $scope.habitatArrow = 'ion-ios-arrow-right';
                $scope.colorArrow = 'ion-ios-arrow-right';
            };

            $scope.toggleSeasons = function () {
                if ($scope.showSeasons)
                {
                    $scope.showSeasons = false;
                    $scope.seasonArrow = 'ion-ios-arrow-right';
                }
                else
                {
                    $scope.showSeasons = true;
                    $scope.seasonArrow = 'ion-ios-arrow-down';
                }
            };

            $scope.toggleHabitats = function () {
                if ($scope.showHabitats)
                {
                    $scope.showHabitats = false;
                    $scope.habitatArrow = 'ion-ios-arrow-right';
                }
                else
                {
                    $scope.showHabitats = true;
                    $scope.habitatArrow = 'ion-ios-arrow-down';
                }
            };

            $scope.toggleColors = function () {
                if ($scope.showColors)
                {
                    $scope.showColors = false;
                    $scope.colorArrow = 'ion-ios-arrow-right';
                }
                else
                {
                    $scope.showColors = true;
                    $scope.colorArrow = 'ion-ios-arrow-down';
                }
            };

            $scope.filterList = function () {
                _plantArray = plantFactory.getPlantArray();
                _plantArray = $filter('filter')(_plantArray, $scope.filter.name);
                _plantArray = $filter('plantHabitatFilter')(_plantArray, $scope.filter.habitat.farmland, $scope.filter.habitat.wetland, $scope.filter.habitat.forest, $scope.filter.habitat.moor, $scope.filter.habitat.coast);
                $rootScope.plantArray = $filter('plantSeasonFilter')(_plantArray, $scope.filter.season.spring, $scope.filter.season.summer, $scope.filter.season.autumn, $scope.filter.season.winter);
            };

            $scope.init();
        }]);