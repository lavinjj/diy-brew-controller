'use strict';

describe('Directive: mashstep', function () {

    // load the directive's module
    beforeEach(module('diyBrewControllerApp'));

    var element,
        scope;

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
        scope.step = {mashTemperature: 120, mashStepLength: 20};
    }));

    it('should populate the element with the step values', inject(function ($compile) {
        element = angular.element('<mashstep step="{step}"></mashstep>');
        element = $compile(element)(scope);
        expect(element.text()).toContain('120');
        expect(element.text()).toContain('20');
    }));
});
