/**
 * Created by Opstrup on 13/02/2016.
 */
'use strict';
angular.module('spis-danmark')

    .factory('registrationServices', [
        'dbServices',
        function(dbServices) {

            return{
                registerPlant: function(date, lat, long, plantId) {
                    var query = 'INSERT INTO registrations (timestamp, lat, long) VALUES (?, ?, ?)';
                    var data = [date, lat, long];
                    dbServices.addRecord(query, data).then(function (res) {
                        console.log('INSERT RECORD', res.rows);
                    });
                }
            }

        }]);