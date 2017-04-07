angular.module('sprout')
.controller('AboutCtrl', [
    '$scope',
    function($scope) {
        console.log('Control.');
        $scope.message = 'Control';
    }
]);
