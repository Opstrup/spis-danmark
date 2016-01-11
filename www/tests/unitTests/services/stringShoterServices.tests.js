/**
 * Created by Opstrup on 28/12/2015.
 */
/**
 * Created by Opstrup on 11/12/2015.
 */
/**
 * Created by Opstrup on 06/12/2015.
 */

'use strict';

describe('Shorting strings', function () {

    describe('shorting different string lengths', function () {

        var UUT;

        beforeEach(module('spis-danmark'));

        beforeEach(function() {
            inject(function($injector) {
                UUT = $injector.get('stringShorterServices');
            });

        });

        function countWordsHelper(string) {
            return string.split(" ").length;
        }

        it('stringShorterServices should be defined', function () {
            expect(UUT).toBeDefined();
        });

        it('countWordsHelper func should work', function () {
            var numOfWords = countWordsHelper('This is a test string');
            expect(numOfWords).toEqual(5);
        });

        it('countWordsHelper func should work widt all strings', function () {
            var numOfWords = countWordsHelper('This is a longer test string');
            expect(numOfWords).toEqual(6);
        });

        it('countWordsHelper func should work widt all strings', function () {
            var numOfWords = countWordsHelper('This is an even longer test string');
            expect(numOfWords).toEqual(7);
        });

        it('stringShorterServices should return a string', function () {
            expect(typeof UUT.shortString('test string', 1)).toEqual('string');
        });

        it('stringShorterServices should return correct string length', function () {
            var string = UUT.shortString('test string', 1);
            expect(countWordsHelper(string)).toEqual(1);
        });

        it('stringShorterServices should return correct string length', function () {
            var string = UUT.shortString('This is an even longer test string', 3);
            expect(countWordsHelper(string)).toEqual(3);
        });
    });
});
