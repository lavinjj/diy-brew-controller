'use strict';

angular.module('diyBrewControllerApp')
  .controller('MashprofileCtrl', function ($scope, ControllerApi) {
        $scope.profileSteps = [
            {mashTemperature: 120, mashStepLength: 20},
            {mashTemperature: 135, mashStepLength: 20},
            {mashTemperature: 154, mashStepLength: 60},
            {mashTemperature: 170, mashStepLength: 20}
        ];

        $scope.updateMashProfile = function () {
            ControllerApi.updateMashProfile($scope.profileSteps);
        };

        $scope.addItem = function(){
            if(!$scope.profileSteps){
                $scope.profileSteps = [];
            }

            $scope.profileSteps.push({mashTemperature: 120, mashStepLength: 10})
        };

        $scope.init = function() {
            $scope.profileSteps = ControllerApi.getMashProfile();
            if(!$scope.profileSteps){
                $scope.profileSteps = [];
            }
        };

        // $scope.init();
  });
