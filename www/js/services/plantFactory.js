/**
 * Created by Opstrup on 11/12/2015.
 */
'use strict';

angular.module('spis-danmark')

    .factory('plantFactory', [
        'Plant',
        'dbServices',
        function (Plant,
                  dbServices) {
            var _plantArray = new Array();
            var _mockPlantArray = {
                plant0: {
                    getID: 1,
                    getName: 'Første plante',
                    getNameLatin: 'Latinsk navn',
                    getHistory: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
                    getDescription: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
                    getPhoto: {
                        0: 'img/PlantPictures/1/0-plant-1.jpeg',
                        1: 'img/PlantPictures/1/1-plant-1.jpeg',
                        2: 'img/PlantPictures/1/2-plant-1.jpeg',
                        3: 'img/PlantPictures/1/3-plant-1.jpeg'
                    },
                    getApplication: {},
                    getHabitat: ['coast', 'farmland', 'forest'],
                    getSeason: ['spring', 'summer'],
                    getColor: {
                        0: 'red',
                        1: 'white',
                        2: 'green'
                    },
                    getSize: {}
                },
                plant1: {
                    getID: 2,
                    getName: 'Anden plante',
                    getNameLatin: 'Latinsk navn',
                    getHistory: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
                    getDescription: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
                    getPhoto: {
                        0: 'img/PlantPictures/2/0-plant-2.jpeg',
                        1: 'img/PlantPictures/2/1-plant-2.jpeg',
                        2: 'img/PlantPictures/2/2-plant-2.jpeg',
                        3: 'img/PlantPictures/2/3-plant-2.jpeg'
                    },
                    getApplication: {},
                    getHabitat: ['moor', 'wetland'],
                    getSeason: ['spring', 'summer', 'autumn'],
                    getColor: {
                        0: 'green',
                        1: 'brown',
                        2: 'orange'
                    },
                    getSize: {}
                },
                plant2: {
                    getID: 3,
                    getName: 'Tredje plante',
                    getNameLatin: 'Latinsk navn',
                    getHistory: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
                    getDescription: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
                    getPhoto: {
                        0: 'img/PlantPictures/1/2-plant-1.jpeg',
                        1: 'img/PlantPictures/1/1-plant-1.jpeg',
                        2: 'img/PlantPictures/1/0-plant-1.jpeg',
                        3: 'img/PlantPictures/1/3-plant-1.jpeg'
                    },
                    getApplication: {},
                    getHabitat: ['farmland', 'forest', 'moor'],
                    getSeason: ['spring', 'autumn'],
                    getColor: {
                        0: 'blue',
                        1: 'white',
                        2: 'green',
                        3: 'black'
                    },
                    getSize: {}
                },
                plant3: {
                    getID: 4,
                    getName: 'Fjerde plante',
                    getNameLatin: 'Latinsk navn',
                    getHistory: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
                    getDescription: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
                    getPhoto: {
                        0: 'img/PlantPictures/2/3-plant-2.jpeg',
                        1: 'img/PlantPictures/2/1-plant-2.jpeg',
                        2: 'img/PlantPictures/2/2-plant-2.jpeg',
                        3: 'img/PlantPictures/2/0-plant-2.jpeg'
                    },
                    getApplication: {},
                    getHabitat: ['coast', 'moor', 'wetland'],
                    getSeason: ['spring', 'summer', 'autumn', 'winter'],
                    getColor: {
                        0: 'red',
                        1: 'white',
                        2: 'purple',
                        3: 'orange',
                        4: 'yellow'
                    },
                    getSize: {}
                }
            };

            var setAttribueForPlant = function (helperTable, plantID, attributeTable, attributeArray, attribute) {
                dbServices.getRecordsWithPlantId(helperTable, plantID).then(function (res) {
                    if (res.rows.length > 0) {
                        for (var i = 0; i < res.rows.length; i++) {
                            dbServices.getRecord(attributeTable, res.rows.item(i)[attribute + '_id']).then(function (value) {
                                attributeArray.push(value.rows.item(0)[attribute]);
                            });
                        }
                    }
                }, function (err) {
                    console.error(err);
                });
            };

            var setPhotosForPlant = function (plantID, attributeArray, attribute) {
                dbServices.getRecordsWithPlantId('photos', plantID).then(function (res) {
                    if (res.rows.length > 0) {
                        for (var i = 0; i < res.rows.length; i++) {
                            attributeArray.push(res.rows.item(i)[attribute]);
                        }
                    }
                }, function (err) {
                    console.error(err);
                });
            };

            var createPlant = function (plantData) {
                var applications = new Array();
                var habitats = new Array();
                var seasons = new Array();
                var photos = new Array();
                var colors = new Array();
                var sizes = new Array();

                setAttribueForPlant('plant_applications', plantData.id, 'applications', applications, 'application');
                setAttribueForPlant('plant_habitats', plantData.id, 'habitats', habitats, 'habitat');
                setAttribueForPlant('plant_seasons', plantData.id, 'seasons', seasons, 'season');
                setPhotosForPlant(plantData.id, photos, 'photo_url');
                setAttribueForPlant('plant_colors', plantData.id, 'colors', colors, 'color');
                setAttribueForPlant('plant_sizes', plantData.id, 'sizes', sizes, 'size');

                return new Plant(plantData.id,
                    plantData.name,
                    plantData.name_latin,
                    plantData.description,
                    plantData.history,
                    applications,
                    habitats,
                    seasons,
                    photos,
                    colors,
                    sizes);
            };

            var createPlantArray = function () {
                //Create and return array of all the plants in the system.
                    var plantArray = new Array();
                    try {
                        dbServices.getAllRecordsForTable('plants').then(function (res) {
                            if (res.rows.length > 0) {
                                for (var i = 0; i < res.rows.length; i++) {
                                    var plantData = res.rows.item(i);
                                    plantArray.push(createPlant(plantData));
                                }
                            }
                        }, function (err) {
                            console.error('Cannot create plant array before the table is created', err);
                        });
                    }
                    catch (err) {
                        console.error(err.message);
                    }

                    return plantArray;
            };

            return {

                getPlantWithID: function (plantID) {
                    var resultPlant = null;

                    if (!window.cordova) {
                        angular.forEach(_mockPlantArray, function (plant) {
                            if (plant.getID == plantID) {
                                resultPlant = plant;
                            }
                        });
                    }

                    angular.forEach(_plantArray, function (plant) {
                        if (plant.getID == plantID) {
                            resultPlant = plant;
                        }
                    });

                    return resultPlant;
                },

                getPlantArray: function () {

                    if (!window.cordova)
                        return _mockPlantArray;

                    if (_plantArray.length == 0) {
                        dbServices.openDB();
                        _plantArray = createPlantArray();
                    }

                    return _plantArray;
                }
            }

        }]);