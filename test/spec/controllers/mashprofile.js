'use strict';

describe('Controller: MashprofileCtrl', function () {

    // load the controller's module
    beforeEach(module('diyBrewControllerApp'));

    var MashprofileCtrl;
    var scope;
    var apiService;

    beforeEach(function () {
        apiService = {
            getSettings: function () {
                return {"netbiosName": "DIYController", "minutesBetweenNTPUpdate": "600000", "ntpServerName": "pool.ntp.org", "historyFilename": "temperatures.txt", "timeZoneOffset": "0", "temperatureOffset": "10", "minutesBetweenReadings": "600000", "enableDHCP": "true", "staticIPAddress": "0.0.0.0", "subnetMask": "255.255.255.0", "defaultGateway": "0.0.0.0", "primaryDNSAddress": "192.168.1.1", "secondaryDNSAddress": "0.0.0.0", "voltageReference": "3.3", "padResistance": "10000", "resistanceRT": "10000", "coefficientA": "0.003354016", "coefficientB": "0.0002744032", "coefficientC": "0.000003666944", "coefficientD": "0.0000001375492", "kpValue": "400", "kiValue": "435.56", "kdValue": "0"};
            },
            updateSettings: function (settings) {
                return;
            },
            getStatus: function () {
                return {"timeOfReading": "11\/29\/2011 04:09:31", "temperatureCelsius": "21.174", "temperatureFahrenheit": "70.112", "isHeating": "True", "pidOutput": "50", "setTemperature": "154.0", "currentMashStep": "0", "currentMashTemp": "154", "currentMashTime": "10"};
            },
            updateTargetTemperature: function (target) {
                return;
            },
            getMashProfile: function () {
                return [
                    {mashTemperature: 120, mashStepLength: 20},
                    {mashTemperature: 135, mashStepLength: 20},
                    {mashTemperature: 154, mashStepLength: 60},
                    {mashTemperature: 170, mashStepLength: 20}
                ];
            },
            updateMashProfile: function (profile) {
                return;
            }
        };
    });

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MashprofileCtrl = $controller('MashprofileCtrl', {
            $scope: scope,
            ControllerApi: apiService
        });
    }));

    it('should request the current mash profile during init', function () {
        spyOn(apiService, 'getMashProfile').andCallThrough();

        scope.init();

        expect(apiService.getMashProfile).toHaveBeenCalled();
    });

    it('should update the current mash profile during init', function () {
        spyOn(apiService, 'updateMashProfile').andCallThrough();

        scope.updateMashProfile();

        expect(apiService.updateMashProfile).toHaveBeenCalled();
    });

    it('should add a mash step when addItem called', function () {
        var original = scope.profileSteps.Length;

        scope.addItem();

        var actual = scope.profileSteps.Length;

        expect(actual).not.toBe(original);
    })
});
