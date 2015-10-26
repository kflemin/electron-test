var pat = angular.module('pat', [
  'ngAnimate', 'ngResource', 'ngRoute',
  'toastr',
  'ui.router',
  'ui.bootstrap'
]);


pat.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'scripts/base/base.html',
      controller: 'BaseCtrl'
    });

  $urlRouterProvider.otherwise('/');

}]);

pat.run(['$log', '$state', 'toastr', function ($log, $state, toastr) {
   $log.debug('Hello');
}]);

