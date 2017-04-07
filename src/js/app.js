angular
  .module('helloWorldApp', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('welcome', {
        url: '/',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'

      })
      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .state('code', {
        url: '/code',
        templateUrl: 'views/code.html',
        controller: 'CodeCtrl'
      })
  }])


// var app = angular.module('helloWorldApp', ["ngRoute"]);
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
