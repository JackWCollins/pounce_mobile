angular.module 'pounce'
  .config ($stateProvider, $urlRouterProvider) ->
    'ngInject'
    $stateProvider
      .state 'home',
        url: '/'
        templateUrl: 'app/main/main.html'
        controller: 'MainController'
        controllerAs: 'main'
      .state 'home.clientDetail',
        url: 'clients/:clientId',
        templateUrl: 'app/components/clients/client_detail.html'
        controller: 'ClientController'
        controllerAs: 'clientCtrl'

    $urlRouterProvider.otherwise '/'
