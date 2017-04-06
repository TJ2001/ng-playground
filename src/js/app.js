// angular.module('helloWorldApp', [
//   'ngRoute'
// ])
// .config([
//   '$routeProvider',
//   function($routeProvider) {
//     $routeProvider
//       .when('/', {
//         templateUrl: 'views/code.html',
//         controller: 'CodeCtrl'
//       });
//   }
// ]);

var app = angular.module('helloWorldApp', ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: 'views/code.html',
        controller: 'CodeCtrl'
    })
    .when("/home", {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
    })
});
