/**
 * Created by Opstrup on 11/12/2015.
 */
'use strict';

angular.module('spis-danmark')

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('tab.plantList', {
                url: '/plant-list',
                views: {
                    'tab-plantList': {
                        templateUrl: 'templates/plantListTemplate.html',
                        controller: 'PlantListCtrl'
                    }
                }
            });
    }])

    .controller('PlantListCtrl', [
        '$scope',
        'plantFactory',
        'navigationServices',
        '$timeout',
        '$ionicPlatform',
        function ($scope,
                  plantFactory,
                  navigationServices,
                  $timeout,
                  $ionicPlatform) {

            $scope.init = function () {
                console.log('Plant List Ctrl');
                // if !database == show spinner 5sec
                if (!window.localStorage['db'])
                    waitForPlantsArray();

                $ionicPlatform.ready(function () {
                    // Check if database already is installed
                    if (window.localStorage['db'])
                        $scope.plantArray = plantFactory.getPlantArray();
                });
            };

            $scope.showPlantDetailView = function (plantID) {
                navigationServices.navigate('tab.plantDetail', {data: plantID}, 'left');
            };

            function waitForPlantsArray() {
                // Waiting for db to be instantiated
                // Add spinning wheel while plant list gets created
                var milliseconds = 5000;
                $scope.showSpinner = true;
                $timeout(function () {
                    $scope.plantArray = plantFactory.getPlantArray();
                    $scope.showSpinner = false;
                }, milliseconds);
            };

            $scope.init();
        }]);