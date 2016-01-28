angular.module('aliado').controller('AliadoController', function($scope) {

    $scope.total = 0;

    $scope.incrementa = function() {
      $scope.total++;
    };
});
