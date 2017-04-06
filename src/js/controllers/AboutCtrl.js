angular.module('helloWorldApp')
.controller('AboutCtrl', [
    '$scope',
    function($scope) {
        console.log('Control.');
        $scope.message = 'Control';
    }
]);
