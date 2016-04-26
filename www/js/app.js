// Ionic Starter App


angular.module('spis-danmark', [
        'ionic','ionic.service.core',
        'ngCordova'
    ])

    .run(function ($ionicPlatform, $cordovaSQLite, dbFileReadServices, dbServices) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
            // Check if running on mobile environment
            document.addEventListener("deviceready", function() {
                if (window.cordova) {
                    if (window.localStorage['db'])
                    {
                        dbServices.openDB();
                        console.log('opening db');
                    }
                    else
                    {
                        dbServices.initDB();
                        console.log('init db');
                    }
                }
            }, false);
        });
    })

    .config(['$urlRouterProvider', '$ionicConfigProvider', '$stateProvider', function ($urlRouterProvider, $ionicConfigProvider, $stateProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

        // setup an abstract state for the tabs directive
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            });

        $ionicConfigProvider.tabs.position('bottom');
        $urlRouterProvider.otherwise('/tab/plantFilterMenu/plant-list');
    }]);
