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
                    'tab-register' : {
                        templateUrl: 'templates/registerTemplate.html',
                        controller: 'RegisterCtrl'
                    }
                }
            });
    }])

    .controller('RegisterCtrl', [
        '$scope',
        function ($scope) {

            $scope.init = function() {

            };

            $scope.init();

        }]);