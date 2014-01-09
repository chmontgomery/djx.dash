'use strict';

angular.module('djxDashApp')
  .controller('MainCtrl', function ($scope) {
    $scope.widgets = [
        "partials/conrad-widget.html", "partials/jason-widget.html", "partials/conrad-widget.html"
    ];
  });
