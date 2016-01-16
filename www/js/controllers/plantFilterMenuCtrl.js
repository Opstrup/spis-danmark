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
        function ($scope,
                  $filter,
                  $rootScope) {

            $scope.season = {
                spring: true,
                summer: true,
                autumn: true,
                winter: true
            };

            $scope.init = function () {
                $rootScope.plantArray = $filter('plantSeasonFilter')($rootScope.plantArray, $scope.season.spring, $scope.season.summer, $scope.season.autumn, $scope.season.winter);
            };

            $scope.test = function () {
                //console.log('data has changed');
                //console.log($rootScope.plantArray);
            };

            $scope.init();
        }]);