/**
 * Created by Opstrup on 26/04/2016.
 */
angular.module('spis-danmark')

    .directive('backImg', function(){
        return function(scope, element, attrs){
            var url = attrs.backImg;
            console.log(url);
            element.css({
                'background-image': 'url(' + url +')',
                'background-size' : 'cover'
            });
        };
    });