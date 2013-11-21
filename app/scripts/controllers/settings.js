'use strict';

angular.module('diyBrewControllerApp')
    .controller('SettingsCtrl', function ($scope, ControllerApi) {
        $scope.settings = null;

        $scope.updateSettings = function () {
            ControllerApi.updateSettings($scope.settings);
        };

        $scope.init = function () {
            $scope.settings = ControllerApi.getSettings();
        };

        $scope.init();
    });
