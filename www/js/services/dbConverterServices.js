/**
 * Created by Opstrup on 06/12/2015.
 */

"use strict";

angular.module('spis-danmark')

    .factory('dbConverterServices', [
        function(){

            return {
                convertStringToRows: function(tableData) {
                    tableData = tableData.split('$');

                    for(var i = 0; i < tableData.length; i++)
                    {
                        tableData[i] = tableData[i].split(';');
                    }

                    var queryString = tableData.splice(0, 1);
                    var numberOfColumns = tableData.splice(0, 1);

                    var numberOfRows = tableData.length -1;
                    var allRows = new Array();
                    var singleRow = new Array();

                    for(var i = 0; i < numberOfRows; i++)
                    {
                        for(var j = 0; j < numberOfColumns; j++)
                        {
                            singleRow[j] = tableData[i][j].trim();
                        }

                        allRows[i] = angular.copy(singleRow);
                    }

                    allRows.splice(0, 0, queryString[0][0]);

                    return allRows;
                },
                convertStringToTables: function(dataFile) {
                    var queryArray = new Array;

                    dataFile = dataFile.split(';');

                    for(var i = 0; i < dataFile.length -1; i++)
                    {
                        queryArray.push(dataFile[i]);
                    }

                    return queryArray;
                }
            }
    }]);