'use strict';

angular.module('djxDashApp')
    .directive('jasonWidget', function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
            },
            templateUrl: 'partials/jason-widget.html'
        };
    });
