'use strict';

angular.module('djxDashApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
        'ui.directives'
    ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
