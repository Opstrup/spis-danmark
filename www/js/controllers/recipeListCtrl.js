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
                $scope.dummyRecipes = [
                    {
                        title : 'Hummer med fyld',
                        cookTime : 50,
                        photo : 'img/recipes/recipe01.jpg',
                        stars : {
                                    0 : 1,
                                    1 : 1,
                                    2 : 0,
                                    3 : 0,
                                    4 : 0
                                }
                    },
                    {
                        title : 'Laks med friske kartofler',
                        cookTime : 20,
                        photo : 'img/recipes/recipe02.jpg',
                        stars : {
                                    0 : 1,
                                    1 : 1,
                                    2 : 1,
                                    3 : 1,
                                    4 : 0
                                }
                    },
                    {
                        title : 'Omelet med grøntsager',
                        cookTime : 45,
                        photo : 'img/recipes/recipe03.jpg',
                        stars : {
                                    0 : 1,
                                    1 : 1,
                                    2 : 1,
                                    3 : 0.5,
                                    4 : 0
                                }
                    },
                    {
                        title : 'Tomatsuppe med brød',
                        cookTime : 30,
                        photo : 'img/recipes/recipe04.jpg',
                        stars : {
                                    0 : 1,
                                    1 : 0.5,
                                    2 : 0,
                                    3 : 0,
                                    4 : 0
                                }
                    },
                    {
                        title : 'Risotto med friske svampe',
                        cookTime : 15,
                        photo : 'img/recipes/recipe05.jpg',
                        stars : {
                                    0 : 1,
                                    1 : 0,
                                    2 : 0,
                                    3 : 0,
                                    4 : 0
                                }
                    }
                ]
            };

            $scope.init();

        }]);