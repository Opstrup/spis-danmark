/**
 * Created by Opstrup on 27/12/2015.
 */

'use strict';

angular.module('spis-danmark')

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('tab.plantPhoto', {
                url: '/plant-photo',
                views: {
                    'tab-plantList' : {
                        templateUrl: 'templates/plantPhotoTemplate.html',
                        controller: 'PlantPhotoCtrl',
                    }
                },
                params: {
                    data: null
                }
            });
    }])

    .controller('PlantPhotoCtrl', [
        '$scope',
        'plantFactory',
        '$stateParams',
        'navigationServices',
        '$ionicSlideBoxDelegate',
        function (
            $scope,
            plantFactory,
            $stateParams,
            navigationServices,
            $ionicSlideBoxDelegate) {

            $scope.init = function() {
                $scope.plant = plantFactory.getPlantWithID($stateParams.data);
            };

            $scope.navSlide = function(index) {
                $ionicSlideBoxDelegate.slide(index, 500);
            };

            $scope.showPlantDetailView = function(plantID) {
                navigationServices.navigate('tab.plantDetail', { data:plantID },'right');
            };

            $scope.init();

        }]);