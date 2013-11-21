'use strict';

angular.module('diyBrewControllerApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl'
      })
      .when('/mashprofile', {
        templateUrl: 'views/mashprofile.html',
        controller: 'MashprofileCtrl'
      })
      .when('/probe-settings', {
        templateUrl: 'views/probe-settings.html',
        controller: 'ProbeSettingsCtrl'
      })
      .when('/pid-settings', {
        templateUrl: 'views/pid-settings.html',
        controller: 'PidSettingsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
