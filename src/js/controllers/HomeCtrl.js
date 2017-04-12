angular.module('sprout')
.controller('HomeCtrl', [
    '$scope', '$location',
    function($scope, $location) {
        $scope.message = 'Message';
        $scope.isActive = function(route) {
            return route === $location.path();
        }
        console.log($location.path());
    }
]);
