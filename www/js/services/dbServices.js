/**
 * Created by Opstrup on 08/12/2015.
 */
'use strict';

angular.module('spis-danmark')

    .factory('dbServices', [
        'dbFileReadServices',
        'dbConverterServices',
        '$cordovaSQLite',
        '$ionicPlatform',
        function (dbFileReadServices,
                  dbConverterServices,
                  $cordovaSQLite,
                  $ionicPlatform) {

            var db;
            var tableList = ['tables.sql'];
            var dataFileList = ['plants_table_data.sql', 'applications_table_data.sql', 'colors_table_data.sql',
                'habitats_table_data.sql', 'photos_table_data.sql', 'plant_applications_table_data.sql',
                'plant_colors_table_data.sql', 'plant_habitats_table_data.sql', 'plant_seasons_table_data.sql',
                'plant_sizes_table_data.sql', 'seasons_table_data.sql', 'sizes_table_data.sql'];

            var createTables = function () {
                angular.forEach(tableList, function (tableQueries) {
                    dbFileReadServices.readDBFile(tableQueries).then(function (dataString) {
                        var numberOfTables = dbConverterServices.convertStringToTables(dataString).length;
                        var count = 0;
                        angular.forEach(dbConverterServices.convertStringToTables(dataString), function (query) {
                            $cordovaSQLite.execute(db, query).then(function (res) {
                                console.log('created table!', res.rows);
                                count++;
                                if (count == numberOfTables) {
                                    populateTables();
                                }
                            }, function (err) {
                                console.error(err);
                            });
                        });
                    });
                });
            };

            var populateTables = function () {
                angular.forEach(dataFileList, function (dataFile) {
                    // Run sql query here
                    dbFileReadServices.readDBFile(dataFile).then(function (dataString) {
                        var data = dbConverterServices.convertStringToRows(dataString);
                        var query = data.splice(0, 1)[0];
                        angular.forEach(data, function (row) {
                            $cordovaSQLite.execute(db, query, row).then(function (res) {
                                console.log('INSERT RECORD', res.rows);
                            }, function (err) {
                                console.error(err, 'cannot insert record into', query);
                            });
                        });
                    });
                });
            };

            return {
                openDB: function () {
                    $ionicPlatform.ready(function () {
                        //db = $cordovaSQLite.openDB({name: 'spis-danmark.db'});
                        db = window.sqlitePlugin.openDatabase({name: 'spis-danmark.db', location: 1})
                    });
                },

                initDB: function () {
                    this.openDB();
                    createTables();
                    //populateTables();
                    window.localStorage['db'] = true;
                },
                addRecord: function (table, data) {
                    // Add a record to the table
                    /*var query = 'INSERT INTO ' + table + ' (id, plant_id, color_id) VALUES (?, ?, ?)';
                     $cordovaSQLite.execute(db, query, data);*/
                },
                removeRecord: function (table, id) {
                    // Remove a record
                },
                getRecord: function (table, id) {
                    var query = 'SELECT * FROM ' + table + ' WHERE id = ?';
                    return $cordovaSQLite.execute(db, query, [id]);
                },
                getRecordsWithPlantId: function (table, id) {
                    var query = 'SELECT * FROM ' + table + ' WHERE plant_id = ?';
                    return $cordovaSQLite.execute(db, query, [id]);
                },
                getAllRecordsForTable: function (table) {
                    var query = 'SELECT * FROM ' + table;
                    return $cordovaSQLite.execute(db, query, []);
                }
            }
        }]);