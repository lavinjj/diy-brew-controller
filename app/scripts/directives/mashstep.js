'use strict';

angular.module('diyBrewControllerApp')
  .directive('mashstep', function () {
    return {
      templateUrl: 'views/mashstep.html',
      restrict: 'EA',
      scope: {
          step: '@'
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
