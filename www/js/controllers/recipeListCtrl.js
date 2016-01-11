/**
 * Created by Opstrup on 08/01/2016.
 */
'use strict';

angular.module('spis-danmark')

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('tab.recipeList', {
                url: '/recipe-list',
                views: {
                    'tab-recipeList' : {
                        templateUrl: 'templates/recipeListTemplate.html',
                        controller: 'RecipeListCtrl'
                    }
                }
            });
    }])

    .controller('RecipeListCtrl', [
        '$scope',
        function ($scope) {

            $scope.init = function() {
                console.log('Recipe List Ctrl');
            };

            $scope.init();

        }]);