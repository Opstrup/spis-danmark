/**
 * Created by Opstrup on 16/12/2015.
 */
'use strict';
angular.module('spis-danmark')

    .service('navigationServices', function($state) {

        this.navigate = function(view, data) {
            $state.go(view, data);
        };
    });
