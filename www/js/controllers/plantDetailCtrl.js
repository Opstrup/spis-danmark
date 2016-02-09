/**
 * Created by Opstrup on 15/12/2015.
 */
'use strict';

angular.module('spis-danmark')

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('tab.plantDetail', {
                url: '/plant-detail',
                views: {
                    'tab-plantList': {
                        templateUrl: 'templates/plantDetailTemplate.html',
                        controller: 'PlantDetailCtrl',
                    }
                },
                params: {
                    data: null
                }
            });
    }])

    .controller('PlantDetailCtrl', [
        '$scope',
        'plantFactory',
        '$stateParams',
        'navigationServices',
        'stringShorterServices',
        '$ionicActionSheet',
        function ($scope,
                  plantFactory,
                  $stateParams,
                  navigationServices,
                  stringShorterServices,
                  $ionicActionSheet) {

            $scope.init = function () {
                $scope.plant = plantFactory.getPlantWithID($stateParams.data);
                $scope.shortPlantDescription = stringShorterServices.shortString($scope.plant.getDescription, 20);
                $scope.shortHistory = stringShorterServices.shortString($scope.plant.getHistory, 20);
            };

            $scope.showRegisterPlantActionSheet = function () {

                $ionicActionSheet.show({
                    titleText: 'Register plante på nuværende position',
                    buttons: [
                        { text: '<i class="icon ion-ios-location-outline"></i> Register' }
                    ],
                    //destructiveText: 'Delete',
                    cancelText: 'Cancel',
                    cancel: function() {

                    },
                    buttonClicked: function(index) {

                        if (index == 0) {
                            registerPlant();
                        }

                        return true;
                    }
                });
            };

            $scope.seasonPhotos = {
                spring: 'img/seasons/spring.png',
                summer: 'img/seasons/summer.png',
                autumn: 'img/seasons/autumn.png',
                winter: 'img/seasons/winter.png'
            };

            $scope.habitatPhotos = {
                coast: 'img/habitats/coast.png',
                farmland: 'img/habitats/farmland.png',
                forest: 'img/habitats/forest.png',
                moor: 'img/habitats/moor.png',
                wetland: 'img/habitats/wetland.png'
            };

            $scope.showPlantListView = function () {
                navigationServices.navigate('tab.plantFilterMenu.plantList', '', 'right');
            };

            $scope.showPlantPhotos = function (plantID) {
                navigationServices.navigate('tab.plantPhoto', {data: plantID}, 'left');
            };

            $scope.showPlantDescriptionView = function (plantID) {
                navigationServices.navigate('tab.plantDescription', {data: plantID}, 'left');
            };

            $scope.showPlantHistoryView = function (plantID) {
                navigationServices.navigate('tab.plantHistory', {data: plantID}, 'left');
            };

            function registerPlant () {
                console.log('register plant');
            };

            $scope.init();

        }]);