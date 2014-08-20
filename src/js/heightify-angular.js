'use strict';

angular.module('App.Common.Heightify', [])
    .directive('heightify', [ '$timeout', function ($timeout) {
        return {
            restrict: 'AE',
            scope: {
                images: '@'
            },
            link: function (scope, element) {
                $timeout(function () {
                    Heightify.make(angular.element('> *', element), scope.images === 'true');
                });
            }
        };
    }]);