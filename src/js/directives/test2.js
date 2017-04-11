var myApp = angular.module('sprout');

myApp.directive('marginSlide', function($parse){
  return {
    restrict: "E",
    replace: true,
    transclude: false,
    compile: function (element, attrs) {

      $(".project-back").hover(function(){
          $(".shade").animate({
              width: 'toggle'
          }, 800, 'easeInOutQuad');
      });
      $(".project-back2").hover(function(){
          $(".shade2").animate({
              width: 'toggle'
          }, 800, 'easeInOutQuad');
      });
      $(".project-back3").hover(function(){
          $(".shade3").animate({
              width: 'toggle'
          }, 800, 'easeInOutQuad');
      });
}}});
