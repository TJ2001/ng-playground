var app = angular.module('sprout', []);

app.directive('testDirective', function() {
  return {
      restrict: 'AE',
      replace: 'true',
      template: '<h3>Hello World!!</h3>'
  };
});
