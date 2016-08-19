angular.module('views', ['ui-router',])
.config(['$stateProvider', '$urlRouterProvider','$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
  $urlRouterProvider.otherwise('/');
  //differnt page states
  $stateProvider
    .state('main', {
      url: '/',
      views: {
        '':{
          templateUrl: 'views/main.html'
          },
        'body@main': {
          templateUrl: 'views/main-body.html'
          }
      }
    })
    .state('death', {
      url: '/death',
      views: {
        '':{
          templateUrl: '/views/death.html'
          },
        'body@death': {
          templateUrl: '/views/death-body.html'
          }
      }
    })

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}]);
