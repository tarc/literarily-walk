angular.module('LiterarilyWalk', [
  'ngRoute',
  'mobile-angular-ui',
  'LiterarilyWalk.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});