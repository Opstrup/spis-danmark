/**
 * Created by Opstrup on 29/12/2015.
 */
'use strict';

angular.module('spis-danmark')

    .factory('stringShorterServices', [
        function() {

            return {
                shortString: function(string, numberOfWords) {
                    var splitString = string.split(' ');

                    return splitString.slice(0, numberOfWords).join(' ');
                }
            }
        }]);