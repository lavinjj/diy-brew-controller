'use strict';

describe('Directive: mashstep', function () {

    // load the directive's module
    beforeEach(module('diyBrewControllerApp'));

    var element,
        scope;

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
    }));

    it('should populate the element with the step values', inject(function ($compile) {
        scope.step = {mashTemperature: 120, mashStepLength: 20};
        element = angular.element('<mashstep data-step="step"></mashstep>');
        element = $compile(element)(scope);
        expect(element.html()).toContain('120');
        expect(element.html()).toContain('20');
    }));
});
