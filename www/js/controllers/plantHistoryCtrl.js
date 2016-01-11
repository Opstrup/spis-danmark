/**
 * Created by Opstrup on 30/12/2015.
 */

'use strict';

angular.module('spis-danmark')

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('tab.plantHistory', {
                url: '/plant-history',
                views: {
                    'tab-plantList' : {
                        templateUrl: 'templates/plantHistoryTemplate.html',
                        controller: 'PlantHistoryCtrl',
                    }
                },
                params: {
                    data: null
                }
            });
    }])

    .controller('PlantHistoryCtrl', [
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