angular.module('views', [
  'ui.router', 
  ])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('main', {
        url: '/',
        views: {
          '': {
            templateUrl: '/views/main.html'
          },
          'body@main': {
            templateUrl: '/views/main-body.html'
          }
        }
      })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }]);