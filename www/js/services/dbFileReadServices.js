/**
 * Created by Opstrup on 07/12/2015.
 */
'use strict';

angular.module('spis-danmark')

    .factory('dbFileReadServices', [
        '$cordovaFile',
        function($cordovaFile) {

            return{
                readDBFile: function(fileName) {
                    // read db file and return promise
                    return $cordovaFile.readAsText(cordova.file.applicationDirectory + 'www/database', fileName);
                }
            }

    }]);