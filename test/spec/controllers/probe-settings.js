'use strict';

describe('Controller: ProbeSettingsCtrl', function () {

    // load the controller's module
    beforeEach(module('diyBrewControllerApp'));

    var ProbeSettingsCtrl;
    var scope;
    var apiService;
    var q;
    var deferred;
    var settings;
    var status;
    var profiles;

    beforeEach(function () {
        settings = {"netbiosName": "DIYController", "minutesBetweenNTPUpdate": "600000", "ntpServerName": "pool.ntp.org", "historyFilename": "temperatures.txt", "timeZoneOffset": "0", "temperatureOffset": "10", "minutesBetweenReadings": "600000", "enableDHCP": "true", "staticIPAddress": "0.0.0.0", "subnetMask": "255.255.255.0", "defaultGateway": "0.0.0.0", "primaryDNSAddress": "192.168.1.1", "secondaryDNSAddress": "0.0.0.0", "voltageReference": "3.3", "padResistance": "10000", "resistanceRT": "10000", "coefficientA": "0.003354016", "coefficientB": "0.0002744032", "coefficientC": "0.000003666944", "coefficientD": "0.0000001375492", "kpValue": "400", "kiValue": "435.56", "kdValue": "0"};
        status = {"timeOfReading": "11\/29\/2011 04:09:31", "temperatureCelsius": "21.174", "temperatureFahrenheit": "70.112", "isHeating": "True", "pidOutput": "50", "setTemperature": "154.0", "currentMashStep": "0", "currentMashTemp": "154", "currentMashTime": "10"};
        profiles = [{mashTemperature: 120, mashStepLength:20},{mashTemperature: 135, mashStepLength:20},{mashTemperature: 154, mashStepLength:60},{mashTemperature: 170, mashStepLength:20}];

        apiService = {
            getSettings: function () {
                deferred = q.defer();
                return deferred.promise;
            },
            updateSettings: function (settings) {
                return;
            },
            getStatus: function () {
                deferred = q.defer();
                return deferred.promise;
            },
            updateTargetTemperature: function (target) {
                return;
            },
            getMashProfile: function() {
                deferred = q.defer();
                return deferred.promise;
            },
            updateMashProfile: function(profile){
                return;
            }
        };
    });

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope, $q) {
        q = $q;
        scope = $rootScope.$new();
        ProbeSettingsCtrl = $controller('ProbeSettingsCtrl', {
            $scope: scope,
            ControllerApi: apiService
        });
    }));

    it('should request the current settings during init', function () {
        spyOn(apiService, 'getSettings').andCallThrough();

        scope.init();

        deferred.resolve(settings);
        scope.$root.$digest();

        expect(apiService.getSettings).toHaveBeenCalled();
    });

    it('should update the current settings when updateSettings called', function () {
        spyOn(apiService, 'updateSettings').andCallThrough();

        scope.updateSettings();

        expect(apiService.updateSettings).toHaveBeenCalled();
    });
});
