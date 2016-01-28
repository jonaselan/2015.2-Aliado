angular.module('aliado', ['ngRoute'])
  .config(function($routeProvider) {

    $routeProvider.when('/aliado', {
      templateUrl: 'partials/aliado.html',
      controller: 'AliadoController'
    });

    $routeProvider.otherwise({redirectTo: '/aliado'});
});
