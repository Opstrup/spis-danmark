/**
 * Created by Opstrup on 06/12/2015.
 */

'use strict';

describe('dbConverterServices test', function () {

    describe('plants table', function () {

        var UUT;
        var numberOfColumns = 5;
        var numberOfRows = 6;
        var dataStringSQL = "INSERT INTO plants (id, name, name_latin, description, history) VALUES (?, ?, ?, ?, ?)$" +
                            "5$" +
                            "1; Første plante; Latinsk navn; fugiat quo voluptas nulla pariatu.; fugiat quo voluptas nulla pariatu.$" +
                            "2; Anden plante; Latinsk navn; et aut officiis debitis autuptates repudiandae sint et molestiae non recusandae.; fugiat quo voluptas nulla pariatu.$" +
                            "3; Tredje plante; Latinsk navn; et aut officiis debitis autuptates repudiandae sint et molestiae non recusandae.; fugiat quo voluptas nulla pariatu.$" +
                            "4; Fjerde plante; Latinsk navn; et aut officiis debitis autuptates repudiandae sint et molestiae non recusandae.; fugiat quo voluptas nulla pariatu.$" +
                            "5; Femte plante; Latinsk navn; et aut officiis debitis autuptates repudiandae sint et molestiae non recusandae.; fugiat quo voluptas nulla pariatu.$";

        beforeEach(module('spis-danmark'));

        beforeEach(function() {
           inject(function($injector) {
               UUT = $injector.get('dbConverterServices');
           });
        });

        it('dbConverterServices should be defined', function () {
            expect(UUT).toBeDefined();
        });

        it('should return array when convertStringToRows gets called', function () {
            expect(Array.isArray(UUT.convertStringToRows(dataStringSQL))).toEqual(true);
        });

        it('should return correct number of rows (array length == rows)', function () {
            expect(UUT.convertStringToRows(dataStringSQL).length).toEqual(numberOfRows);
        });

        it('should return array with arrays', function () {
            expect(Array.isArray(UUT.convertStringToRows(dataStringSQL)[1])).toEqual(true);
        });

        it('should return correct number of columns', function () {
            expect(UUT.convertStringToRows(dataStringSQL)[1].length).toEqual(numberOfColumns);
        });

        it('should return correct data for each row', function () {
            expect(UUT.convertStringToRows(dataStringSQL)[1][0]).toEqual('1');
        });

        it('should return the query as first place in array', function () {
            expect(UUT.convertStringToRows(dataStringSQL)[0]).toEqual('INSERT INTO plants (id, name, name_latin, description, history) VALUES (?, ?, ?, ?, ?)');
        });
    });

    describe('photos table', function () {

        var UUT;
        var numberOfColumns = 3;
        var numberOfRows = 9;
        var dataStringSQL = "INSERT INTO photos (id, plant_id, photo_url) VALUES (?, ?, ?)$" +
                            "3$" +
                            "1; 1; PlantPictures/1/0-plant-1.jpeg$" +
                            "2; 1; PlantPictures/1/1-plant-1.jpeg$" +
                            "3; 1; PlantPictures/1/2-plant-1.jpeg$" +
                            "4; 1; PlantPictures/1/3-plant-1.jpeg$" +
                            "5; 2; PlantPictures/2/0-plant-2.jpeg$" +
                            "6; 2; PlantPictures/2/1-plant-2.jpeg$" +
                            "7; 2; PlantPictures/2/2-plant-2.jpeg$" +
                            "8; 2; PlantPictures/2/3-plant-2.jpeg$";

        beforeEach(module('spis-danmark'));

        beforeEach(function() {
            inject(function($injector) {
                UUT = $injector.get('dbConverterServices');
            });
        });

        it('dbConverterServices should be defined', function () {
            expect(UUT).toBeDefined();
        });

        it('should return array when convertStringToRows gets called', function () {
            expect(Array.isArray(UUT.convertStringToRows(dataStringSQL))).toEqual(true);
        });

        it('should return correct number of rows (array length == rows)', function () {
            expect(UUT.convertStringToRows(dataStringSQL).length).toEqual(numberOfRows);
        });

        it('should return array with arrays', function () {
            expect(Array.isArray(UUT.convertStringToRows(dataStringSQL)[1])).toEqual(true);
        });

        it('should return correct number of columns', function () {
            expect(UUT.convertStringToRows(dataStringSQL)[1].length).toEqual(numberOfColumns);
        });

        it('should return correct data for each row', function () {
            expect(UUT.convertStringToRows(dataStringSQL)[1][0]).toEqual('1');
        });

        it('should return the query as first place in array', function () {
            expect(UUT.convertStringToRows(dataStringSQL)[0]).toEqual('INSERT INTO photos (id, plant_id, photo_url) VALUES (?, ?, ?)');
        });
    });

    describe('plant_colors table', function () {

        var UUT;
        var numberOfColumns = 3;
        var numberOfRows = 10;
        var dataStringSQL = "INSERT INTO plant_colors (id, plant_id, color_id) VALUES (?, ?, ?)$" +
                            "3$"+
                            "1; 1; 1$ 2; 1; 2$ 3; 1; 5$ 4; 1; 6$ 5; 2; 1$" +
                            "6; 2; 2$ 7; 2; 7$ 8; 2; 6$ 9; 2; 8$";

        beforeEach(module('spis-danmark'));

        beforeEach(function() {
        inject(function($injector) {
        UUT = $injector.get('dbConverterServices');
        });
        });

        it('dbConverterServices should be defined', function () {
        expect(UUT).toBeDefined();
        });

        it('should return array when convertStringToRows gets called', function () {
        expect(Array.isArray(UUT.convertStringToRows(dataStringSQL))).toEqual(true);
        });

        it('should return correct number of rows (array length == rows)', function () {
        expect(UUT.convertStringToRows(dataStringSQL).length).toEqual(numberOfRows);
        });

        it('should return array with arrays', function () {
        expect(Array.isArray(UUT.convertStringToRows(dataStringSQL)[1])).toEqual(true);
        });

        it('should return correct number of columns', function () {
        expect(UUT.convertStringToRows(dataStringSQL)[1].length).toEqual(numberOfColumns);
        });

        it('should return correct data for each row', function () {
        expect(UUT.convertStringToRows(dataStringSQL)[1][0]).toEqual('1');
        });

        it('should return the query as first place in array', function () {
            expect(UUT.convertStringToRows(dataStringSQL)[0]).toEqual('INSERT INTO plant_colors (id, plant_id, color_id) VALUES (?, ?, ?)');
        });
    });
});

describe('convertStringToTables tests', function() {
    var UUT;
    var numberOfTables = 5;
    var dataFile =  'CREATE TABLE IF NOT EXISTS plants (id integer, name text, name_latin text);' +
                    'CREATE TABLE IF NOT EXISTS photos (id integer, plant_id integer, photo_url text);' +
                    'CREATE TABLE IF NOT EXISTS applications (id integer, application text);' +
                    'CREATE TABLE IF NOT EXISTS plant_applications (id integer, plant_id integer, application_id integer);' +
                    'CREATE TABLE IF NOT EXISTS colors (id integer, color text);';

    beforeEach(module('spis-danmark'));

    beforeEach(function() {
        inject(function($injector) {
            UUT = $injector.get('dbConverterServices');
        });
    });

    it('dbConverterServices should be defined', function () {
        expect(UUT).toBeDefined();
    });

    it('should return the correct number of tables', function() {
       expect(UUT.convertStringToTables(dataFile).length).toEqual(numberOfTables);
    });

    it('should return array with queries (strings)', function() {
        var firstQuery = 'CREATE TABLE IF NOT EXISTS plants (id integer, name text, name_latin text)';
        expect(typeof UUT.convertStringToTables(dataFile)[0]).toEqual(typeof firstQuery);
    });

    it('should return correct data queries', function() {
        var firstQuery = 'CREATE TABLE IF NOT EXISTS plants (id integer, name text, name_latin text)';
        expect(UUT.convertStringToTables(dataFile)[0]).toEqual(firstQuery);
    });

    it('should return correct data queries index 1 of array', function() {
        var secondQuery = 'CREATE TABLE IF NOT EXISTS photos (id integer, plant_id integer, photo_url text)';
        expect(UUT.convertStringToTables(dataFile)[1]).toEqual(secondQuery);
    });

    it('should return correct data queries index 2 of array', function() {
        var secondQuery = 'CREATE TABLE IF NOT EXISTS applications (id integer, application text)';
        expect(UUT.convertStringToTables(dataFile)[2]).toEqual(secondQuery);
    });

    it('should return correct data queries index 3 of array', function() {
        var secondQuery = 'CREATE TABLE IF NOT EXISTS plant_applications (id integer, plant_id integer, application_id integer)';
        expect(UUT.convertStringToTables(dataFile)[3]).toEqual(secondQuery);
    });

    it('should return correct data queries index 4 of array', function() {
        var secondQuery = 'CREATE TABLE IF NOT EXISTS colors (id integer, color text)';
        expect(UUT.convertStringToTables(dataFile)[4]).toEqual(secondQuery);
    });
});

