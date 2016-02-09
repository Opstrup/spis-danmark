/**
 * Created by Opstrup on 07/01/2016.
 */
'use strict';

angular.module('spis-danmark')

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('tab.register', {
                url: '/register',
                views: {
                    'tab-register': {
                        templateUrl: 'templates/registerTemplate.html',
                        controller: 'RegisterCtrl'
                    }
                }
            });
    }])

    .controller('RegisterCtrl', [
        '$scope',
        '$cordovaGeolocation',
        function ($scope,
                  $cordovaGeolocation) {

            $scope.init = function () {
                //Coordinates for Århus
                this.drawMap(56.1780842, 10.1117592, 7);
                this.updateMapCenter();
            };

            $scope.drawMap = function (lat, long, zoom) {
                var myLatlng = new google.maps.LatLng(lat, long);

                var mapOptions = {
                    center: myLatlng,
                    zoom: zoom,
                    zoomControl: false,
                    streetViewControl: false,
                    mapTypeId: google.maps.MapTypeId.HYBRID
                };

                var map = new google.maps.Map(document.getElementById("map"), mapOptions);

                $scope.map = map;
            };

            $scope.updateMapCenter = function () {
                var posOptions = {timeout: 10000, enableHighAccuracy: false};
                $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
                    var lat = position.coords.latitude;
                    var long = position.coords.longitude;

                    $scope.drawMap(lat, long, 18);
                }, function (err) {
                    // error
                });
            };

            $scope.init();

        }]);