(function () {

  var app = angular.module('ingedex', [
    'ngRoute',
    'angular-md5',
    'ingedex.controllers',
    'ingedex.directives',
    'ingedex.filters',
    'ingedex.services'
    ]);

    app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/ingedex.html',
        controller: 'IngedexController'
      })
       .when('/:type', {
        templateUrl: 'views/ingedex.html',
        controller: 'IngedexController'
      })
      .when('/ingeniero/:name', {
        templateUrl: 'views/ingeniero.html',
        controller: 'IngenieroController',
      })
      .otherwise({
        redirectTo: '/'
      });

  }]);

})();