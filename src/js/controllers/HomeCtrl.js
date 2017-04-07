angular.module('sprout')
.controller('HomeCtrl', [
    '$scope',
    function($scope) {
        console.log('Loaded.');
        $scope.message = 'Message';
    }
]);


// var App = angular.module('sprout')
// App.controller('HomeCtrl', [
//     '$scope',
//     function($scope) {
//         console.log('Loaded.');
//         $scope.message = 'Message';
//     }
// ]);
// App.directive('myFirstDirective', function(){
//   return {
//     template: "<h1>Hello from TESTCustom directive</h1>",
//     restrict: "E"
//   }
// });
