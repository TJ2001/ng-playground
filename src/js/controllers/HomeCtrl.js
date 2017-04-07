var myApp = angular.module('helloWorldApp')
myApp.controller('HomeCtrl', [
    '$scope',
    function($scope) {
        console.log('Loaded.');
        $scope.message = 'Message';
    }
]);

myApp.directive('myFirstDirective', function(){
  return {
    template: "<h1>Hello from Custom directive</h1>",
    restrict: "E"
  }
});
