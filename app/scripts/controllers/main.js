'use strict';

angular.module('diyBrewControllerApp')
  .controller('MainCtrl', function ($scope, ControllerApi) {
        $scope.sensorData = null;

        $scope.updateCurrentTemp = function() {
            $scope.sensorData =ControllerApi.getStatus();
        };

        $scope.init = function() {
            $scope.sensorData =ControllerApi.getStatus();
        };

        $scope.init();
  });
