var myApp = angular.module('sprout');

myApp.directive('marginSlide', function($parse){
  return {
    restrict: "E",
    replace: true,
    transclude: false,
    compile: function (element, attrs) {

      $(".back2").hover(function(){
          $(".shade").animate({
              width: 'toggle'
          }, 1000, 'easeInOutQuad');

      });

}}});
