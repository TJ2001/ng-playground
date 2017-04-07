var myApp = angular.module('sprout');

myApp.directive('myFirstDirective', function(){
  return {
    template: "<h1>Hello from TESTCustom directive</h1>",
    restrict: "E"
  }
});

myApp.directive('jqueryDirective', function($parse){
  return {
    restrict: "E",
    replace: true,
    transclude: false,
    compile: function (element, attrs) {
      $("#test").hide()
    }
  }
});
