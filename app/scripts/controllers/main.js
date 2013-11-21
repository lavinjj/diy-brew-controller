'use strict';

angular.module('diyBrewControllerApp')
  .controller('MainCtrl', function ($scope, ControllerApi) {
        $scope.sensorData = null;

        $scope.updateCurrentTemp = function() {
            ControllerApi.getStatus().then(function(response){
                $scope.sensorData = response.data;
            });
        };

        $scope.init = function() {
            ControllerApi.getStatus().then(function(response){
                $scope.sensorData = response.data;
            });
        };

        $scope.init();
  });
