'use strict';

angular.module('diyBrewControllerApp')
  .factory('ControllerApi', function ControllerApi($http) {
        var getSettings = function () {
            return $http({method: 'GET', url: '/API/Settings/'});
        };

        var updateSettings = function(settings){
            return $http({method: 'POST', url: '/API/Settings/', data: settings});
        };

        var getStatus = function(){
            return $http({method: 'GET', url: '/API/Status/'});
        };

        var updateTargetTemperature = function(target){
            return $http({method: 'POST', url: '/API/Temperature/', data: target});
        };

        var getMashProfile = function() {
            return $http({method: 'GET', url: '/API/MashProfile/'});
        };

        var updateMashProfile = function(profile){
            return $http({method: 'POST', url: '/API/MashProfile/', data: profile});
        };

        return {
            getSettings:  getSettings,
            updateSettings: updateSettings,
            getStatus: getStatus,
            updateTargetTemperature: updateTargetTemperature,
            getMashProfile: getMashProfile,
            updateMashProfile: updateMashProfile
        }
    });
