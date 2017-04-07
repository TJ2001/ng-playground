angular
  .module('sprout', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('welcome', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'

      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
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
