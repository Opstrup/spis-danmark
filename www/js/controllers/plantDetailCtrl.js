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
        '$cordovaGeolocation',
        '$ionicPopup',
        'registrationServices',
        function ($scope,
                  plantFactory,
                  $stateParams,
                  navigationServices,
                  stringShorterServices,
                  $ionicActionSheet,
                  $cordovaGeolocation,
                  $ionicPopup,
                  registrationServices) {

            $scope.init = function () {
                // $scope.plant = plantFactory.getPlantWithID($stateParams.data);
                $scope.plant = {
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
                };
                $scope.shortPlantDescription = stringShorterServices.shortString($scope.plant.getDescription, 20);
                $scope.shortHistory = stringShorterServices.shortString($scope.plant.getHistory, 20);
            };

            $scope.showRegisterPlantActionSheet = function () {
                $ionicActionSheet.show({
                    titleText: 'Register plante på nuværende position',
                    buttons: [
                        {text: '<i class="icon ion-ios-location-outline"></i> Register'}
                    ],
                    cancelText: 'Cancel',
                    cancel: function () {
                    },
                    buttonClicked: function (index) {

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

            function registerPlant() {

                $ionicPopup.alert({
                    title: 'Registering af plante',
                    template: $scope.plant.getName + ' er registeret på din nuværende position.'
                });

                /* Getting coordinates for registration */
                var posOptions = {timeout: 10000, enableHighAccuracy: false};
                $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
                    var lat = position.coords.latitude;
                    var long = position.coords.longitude;

                    /* Save coords to db here */
                    console.log('Save info to db');
                    console.log('coords:', lat, long);
                    console.log($scope.plant.getName, $scope.plant.getID);
                    console.log(Date());
                    registrationServices.registerPlant(Date(), lat, long, $scope.plant.getID)
                }, function (err) {
                    // error
                });
            };

            $scope.init();

        }]);