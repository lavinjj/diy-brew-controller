module.exports = function(app){
    var settings = {"netbiosName": "DIYController", "minutesBetweenNTPUpdate": "600000", "ntpServerName": "pool.ntp.org", "historyFilename": "temperatures.txt", "timeZoneOffset": "0", "temperatureOffset": "10", "minutesBetweenReadings": "600000", "enableDHCP": "true", "staticIPAddress": "0.0.0.0", "subnetMask": "255.255.255.0", "defaultGateway": "0.0.0.0", "primaryDNSAddress": "192.168.1.1", "secondaryDNSAddress": "0.0.0.0", "voltageReference": "3.3", "padResistance": "10000", "resistanceRT": "10000", "coefficientA": "0.003354016", "coefficientB": "0.0002744032", "coefficientC": "0.000003666944", "coefficientD": "0.0000001375492", "kpValue": "400", "kiValue": "435.56", "kdValue": "0"};
    var status = {"timeOfReading": "11\/29\/2011 04:09:31", "temperatureCelsius": "21.174", "temperatureFahrenheit": "70.112", "isHeating": "True", "pidOutput": "50", "setTemperature": "154.0", "currentMashStep": "0", "currentMashTemp": "154", "currentMashTime": "10"};
    var profile = [
        {mashTemperature: 120, mashStepLength: 20},
        {mashTemperature: 135, mashStepLength: 20},
        {mashTemperature: 154, mashStepLength: 60},
        {mashTemperature: 170, mashStepLength: 20}
    ];

    app.get('/API/Settings', function(req, res, next){
        res.send(200, settings);
    });

    app.post('/API/Settings', function(req, res, next){
        res.send(200);
    });

    app.get('/API/Status/', function(req, res, next){
        res.send(200, status);
    });

    app.post('/API/Temperature/', function(req, res, next){
        res.send(200);
    });

    app.get('/API/MashProfile/', function(req, res, next){
        res.send(200, profile);
    });

    app.post('/API/MashProfile/', function(req, res, next){
        res.send(200);
    });
};