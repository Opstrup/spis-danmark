/**
 * Created by Opstrup on 13/12/2015.
 */
'use strict';

angular.module('spis-danmark')

    .factory('Plant', [
        function() {

            function Plant(id, name, nameLatin, description, history, application, habitat, season, photo, color, size) {
                this._id = id;
                this._name = name;
                this._nameLatin = nameLatin;
                this._description = description;
                this._history = history;
                this._application = application;
                this._habitat = habitat;
                this._season = season;
                this._photo = photo;
                this._color = color;
                this._size = size;
            }

            Plant.prototype = {
                /*Getters for plant class*/
                get getID() {
                    return this._id;
                },
                get getName() {
                    return this._name;
                },
                get getNameLatin() {
                    return this._nameLatin;
                },
                get getDescription() {
                    return this._description;
                },
                get getHistory() {
                    return this._history;
                },
                get getApplication() {
                    return this._application;
                },
                get getHabitat() {
                    return this._habitat;
                },
                get getSeason() {
                    return this._season;
                },
                get getPhoto() {
                    return this._photo;
                },
                get getColor() {
                    return this._color;
                },
                get getSize() {
                    return this._size;
                }
            };

            return ( Plant );

        }]);