'use strict';

angular.module('djxDashApp')
    .directive('conradWidget', function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
            },
            templateUrl: 'partials/conrad-widget.html'
        };
    });
