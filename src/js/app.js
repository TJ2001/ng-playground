angular
  .module('helloWorldApp', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'about.html',
        controller: 'aboutCtrl'
      })
      .state('contact', {
        url: '/contact',
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
