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
      $("#test").hide();
      // $("div").animate({
      //   width: 'toggle'
      // });
    }
  }
});

myApp.directive('animateDirective', function($parse){
  return {
    restrict: "E",
    replace: true,
    transclude: false,
    compile: function (element, attrs) {
      $(".trigger").click(function(){
          $(".gg").animate({
              width: 'toggle'
          }, 1000);
      });
    }
  }
});
