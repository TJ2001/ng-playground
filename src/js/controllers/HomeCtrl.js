angular.module('helloWorldApp')
.controller('HomeCtrl', [
    '$scope',
    function($scope) {
        console.log('Loaded.');
        $scope.message = 'Message';
    }
]);
