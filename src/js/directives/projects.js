var myApp = angular.module('sprout');

myApp.directive('marginSlide', function($parse){
  return {
    restrict: "E",
    replace: true,
    transclude: false,
    compile: function (element, attrs) {

      $(".project-back").click(function(){
          $(".shade").animate({
              width: 'toggle'
          }, 800);
          $(".cover").animate({
              width: 'toggle'
          }, 800);
      });
      $(".project-back2").click(function(){
          $(".shade2").animate({
              width: 'toggle'
          }, 800);
          $(".cover2").animate({
              width: 'toggle'
          }, 800);
      });
      $(".project-back3").click(function(){
          $(".shade3").animate({
              width: 'toggle'
          }, 800);
          $(".cover3").animate({
              width: 'toggle'
          }, 800);
      });
}}});
