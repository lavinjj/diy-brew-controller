'use strict';

angular.module('diyBrewControllerApp')
  .controller('PidSettingsCtrl', function ($scope, ControllerApi) {
        $scope.settings = null;

        $scope.updateSettings = function () {
            ControllerApi.updateSettings($scope.settings);
        };

        $scope.init = function () {
            ControllerApi.getSettings().then(function(response){
                $scope.settings = response.data;
            });
        };

        $scope.init();
    });
