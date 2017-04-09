angular
  .module('sprout', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('welcome', {
        url: '/',
        templateUrl: 'views/landing.html',
        controller: 'LandingCtrl',
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .state('code', {
        url: '/code',
        templateUrl: 'views/code.html',
        controller: 'CodeCtrl'
      })
  }])


// var app = angular.module('sprout', ["ngRoute"]);
// app.config(function($routeProvider) {
//     $routeProvider
//     .when("/", {
//         templateUrl: 'views/code.html',
//         controller: 'CodeCtrl'
//     })
//     .when("/home", {
//         templateUrl: 'views/home.html',
//         controller: 'HomeCtrl'
//     })
// });
