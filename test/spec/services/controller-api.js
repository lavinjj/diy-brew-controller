'use strict';

describe('Service: ControllerApi', function () {

    // load the service's module
    beforeEach(module('diyBrewControllerApp'));

    // instantiate service
    var ControllerApi;
    var $httpBackend;

    beforeEach(inject(function (_$httpBackend_, _ControllerApi_) {
        ControllerApi = _ControllerApi_;
        $httpBackend = _$httpBackend_;
    }));

    it('should GET controller settings from the server', function () {
        $httpBackend.expectGET('/API/Settings/').respond(200, {"netbiosName": "DIYController", "minutesBetweenNTPUpdate": "600000", "ntpServerName": "pool.ntp.org", "historyFilename": "temperatures.txt", "timeZoneOffset": "0", "temperatureOffset": "10", "minutesBetweenReadings": "600000", "enableDHCP": "true", "staticIPAddress": "0.0.0.0", "subnetMask": "255.255.255.0", "defaultGateway": "0.0.0.0", "primaryDNSAddress": "192.168.1.1", "secondaryDNSAddress": "0.0.0.0", "voltageReference": "3.3", "padResistance": "10000", "resistanceRT": "10000", "coefficientA": "0.003354016", "coefficientB": "0.0002744032", "coefficientC": "0.000003666944", "coefficientD": "0.0000001375492", "kpValue": "400", "kiValue": "435.56", "kdValue": "0"});

        var settings = ControllerApi.getSettings();

        $httpBackend.flush();

        expect(settings).not.toBe(null);
    });

    it('should POST setting updates to the server', function () {
        var settings = {"netbiosName": "DIYController", "minutesBetweenNTPUpdate": "600000", "ntpServerName": "pool.ntp.org", "historyFilename": "temperatures.txt", "timeZoneOffset": "0", "temperatureOffset": "10", "minutesBetweenReadings": "600000", "enableDHCP": "true", "staticIPAddress": "0.0.0.0", "subnetMask": "255.255.255.0", "defaultGateway": "0.0.0.0", "primaryDNSAddress": "192.168.1.1", "secondaryDNSAddress": "0.0.0.0", "voltageReference": "3.3", "padResistance": "10000", "resistanceRT": "10000", "coefficientA": "0.003354016", "coefficientB": "0.0002744032", "coefficientC": "0.000003666944", "coefficientD": "0.0000001375492", "kpValue": "400", "kiValue": "435.56", "kdValue": "0"};

        $httpBackend.expectPOST('/API/Settings/', settings).respond(201, '');

        ControllerApi.updateSettings(settings);

        $httpBackend.flush();

    });

    it('should GET controller status from the server', function() {
        $httpBackend.expectGET('/API/Status/').respond(200, {"timeOfReading": "211\/29\/2011 04:09:31", "temperatureCelsius": "21.174", "temperatureFahrenheit": "70.112", "isHeating": "True", "pidOutput": "50", "setTemperature": "154.0", "currentMashStep": "0", "currentMashTemp": "154", "currentMashTime": "10"});

        var status = ControllerApi.getStatus();

        $httpBackend.flush();

        expect(status).not.toBe(null);
    });

    it('should POST the set temperature to the server', function () {
        var settings = {targetTemperature: 150.0};

        $httpBackend.expectPOST('/API/Temperature/', settings).respond(201, '');

        ControllerApi.updateTargetTemperature(settings);

        $httpBackend.flush();

    });

    it('should GET mash profile from the server', function () {
        $httpBackend.expectGET('/API/MashProfile/').respond(200, [{mashTemperature: 120, mashStepLength:20},{mashTemperature: 135, mashStepLength:20},{mashTemperature: 154, mashStepLength:60},{mashTemperature: 170, mashStepLength:20}]);

        var profile = ControllerApi.getMashProfile();

        $httpBackend.flush();

        expect(profile).not.toBe(null);
    });

    it('should POST setting updates to the server', function () {
        var profile = [{mashTemperature: 120, mashStepLength:20},{mashTemperature: 135, mashStepLength:20},{mashTemperature: 154, mashStepLength:60},{mashTemperature: 170, mashStepLength:20}];

        $httpBackend.expectPOST('/API/MashProfile/', profile).respond(201, '');

        ControllerApi.updateMashProfile(profile);

        $httpBackend.flush();

    });

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
});
