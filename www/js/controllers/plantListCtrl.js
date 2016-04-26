/**
 * Created by Opstrup on 11/12/2015.
 */
'use strict';

angular.module('spis-danmark')

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('tab.plantFilterMenu.plantList', {
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
        '$rootScope',
        function ($scope,
                  plantFactory,
                  navigationServices,
                  $timeout,
                  $ionicPlatform,
                  $rootScope) {

            $scope.init = function () {
                // if !database == show spinner 5sec
                /*if (!window.localStorage['db'])
                    waitForPlantsArray();

                $ionicPlatform.ready(function () {
                    // Check if database already is installed
                    if (window.localStorage['db'])
                        $rootScope.plantArray = plantFactory.getPlantArray();
                });*/
                var _mockPlantArray = [
                    {
                        getID: 1,
                        getName: 'Første plante',
                        getNameLatin: 'Latinsk navn',
                        getHistory: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
                        getDescription: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
                        getPhoto: {
                            0: 'img/PlantPictures/1/0-plant-1.jpeg',
                            1: 'img/PlantPictures/1/1-plant-1.jpeg',
                            2: 'img/PlantPictures/1/2-plant-1.jpeg',
                            3: 'img/PlantPictures/1/3-plant-1.jpeg'
                        },
                        getApplication: {},
                        getHabitat: ['coast', 'farmland', 'forest'],
                        getSeason: ['spring', 'summer'],
                        getColor: {
                            0: 'red',
                            1: 'white',
                            2: 'green'
                        },
                        getSize: {}
                    },
                    {
                        getID: 2,
                        getName: 'Anden plante',
                        getNameLatin: 'Latinsk navn',
                        getHistory: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
                        getDescription: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
                        getPhoto: {
                            0: 'img/PlantPictures/2/0-plant-2.jpeg',
                            1: 'img/PlantPictures/2/1-plant-2.jpeg',
                            2: 'img/PlantPictures/2/2-plant-2.jpeg',
                            3: 'img/PlantPictures/2/3-plant-2.jpeg'
                        },
                        getApplication: {},
                        getHabitat: ['moor', 'wetland'],
                        getSeason: ['spring', 'summer', 'autumn'],
                        getColor: {
                            0: 'green',
                            1: 'brown',
                            2: 'orange'
                        },
                        getSize: {}
                    },
                    {
                        getID: 3,
                        getName: 'Tredje plante',
                        getNameLatin: 'Latinsk navn',
                        getHistory: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
                        getDescription: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
                        getPhoto: {
                            0: 'img/PlantPictures/1/2-plant-1.jpeg',
                            1: 'img/PlantPictures/1/1-plant-1.jpeg',
                            2: 'img/PlantPictures/1/0-plant-1.jpeg',
                            3: 'img/PlantPictures/1/3-plant-1.jpeg'
                        },
                        getApplication: {},
                        getHabitat: ['farmland', 'forest', 'moor'],
                        getSeason: ['spring', 'autumn'],
                        getColor: {
                            0: 'blue',
                            1: 'white',
                            2: 'green',
                            3: 'black'
                        },
                        getSize: {}
                    },
                    {
                        getID: 4,
                        getName: 'Fjerde plante',
                        getNameLatin: 'Latinsk navn',
                        getHistory: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
                        getDescription: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
                        getPhoto: {
                            0: 'img/PlantPictures/2/3-plant-2.jpeg',
                            1: 'img/PlantPictures/2/1-plant-2.jpeg',
                            2: 'img/PlantPictures/2/2-plant-2.jpeg',
                            3: 'img/PlantPictures/2/0-plant-2.jpeg'
                        },
                        getApplication: {},
                        getHabitat: ['coast', 'moor', 'wetland'],
                        getSeason: ['spring', 'summer', 'autumn', 'winter'],
                        getColor: {
                            0: 'red',
                            1: 'white',
                            2: 'purple',
                            3: 'orange',
                            4: 'yellow'
                        },
                        getSize: {}
                    },
                    {
                        getID: 5,
                        getName: 'Femte plante',
                        getNameLatin: 'Latinsk navn',
                        getHistory: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
                        getDescription: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
                        getPhoto: {
                            0: 'img/PlantPictures/2/2-plant-2.jpeg',
                            1: 'img/PlantPictures/2/1-plant-2.jpeg',
                            2: 'img/PlantPictures/2/3-plant-2.jpeg',
                            3: 'img/PlantPictures/2/0-plant-2.jpeg'
                        },
                        getApplication: {},
                        getHabitat: ['coast'],
                        getSeason: ['winter'],
                        getColor: {
                            0: 'red',
                            1: 'white',
                            2: 'purple',
                            3: 'orange',
                            4: 'yellow'
                        },
                        getSize: {}
                    },
                    {
                        getID: 6,
                        getName: 'Sjette plante',
                        getNameLatin: 'Latinsk navn',
                        getHistory: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
                        getDescription: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
                        getPhoto: {
                            0: 'img/PlantPictures/2/0-plant-2.jpeg',
                            1: 'img/PlantPictures/2/1-plant-2.jpeg',
                            2: 'img/PlantPictures/2/2-plant-2.jpeg',
                            3: 'img/PlantPictures/2/3-plant-2.jpeg'
                        },
                        getApplication: {},
                        getHabitat: ['wetland'],
                        getSeason: ['autumn'],
                        getColor: {
                            0: 'red',
                            1: 'white',
                            2: 'purple',
                            3: 'orange',
                            4: 'yellow'
                        },
                        getSize: {}
                    }
                ];

                $rootScope.plantArray = _mockPlantArray;
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
                    $rootScope.plantArray = plantFactory.getPlantArray();
                    $scope.showSpinner = false;
                }, milliseconds);
            };

            $scope.init();
        }]);