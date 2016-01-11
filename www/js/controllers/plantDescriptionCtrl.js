/**
 * Created by Opstrup on 30/12/2015.
 */

'use strict';

angular.module('spis-danmark')

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('tab.plantDescription', {
                url: '/plant-description',
                views: {
                    'tab-plantList' : {
                        templateUrl: 'templates/plantDescriptionTemplate.html',
                        controller: 'PlantDescriptionCtrl',
                    }
                },
                params: {
                    data: null
                }
            });
    }])

    .controller('PlantDescriptionCtrl', [
        '$scope',
        'plantFactory',
        '$stateParams',
        'navigationServices',
        function (
            $scope,
            plantFactory,
            $stateParams,
            navigationServices) {

            $scope.init = function() {
                $scope.plant = plantFactory.getPlantWithID($stateParams.data);
            };

            $scope.showPlantDetailView = function(plantID) {
                navigationServices.navigate('tab.plantDetail', { data:plantID },'right');
            };

            $scope.init();

        }]);