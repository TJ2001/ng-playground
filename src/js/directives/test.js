var myApp = angular.module('helloWorldApp');

myApp.directive('myFirstDirective', function(){
  return {
    template: "<h1>Hello from TESTCustom directive</h1>",
    restrict: "E"
  }
});
