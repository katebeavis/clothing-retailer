var app = angular.module('store', ['ngRoute','store',]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'public/partials/store.ejs',
    controller: 'storeController'
  });
}]);
