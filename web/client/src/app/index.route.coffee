angular.module 'pounce'
  .config ($stateProvider, $urlRouterProvider) ->
    'ngInject'
    # $stateProvider
    #   .state 'home',
    #     url: '/'
    #     templateUrl: 'app/main/main.html'
    #     controller: 'MainController'
    #     controllerAs: 'main'
    #   .state 'home.clientDetail',
    #     url: 'clients/:clientId',
    #     templateUrl: 'app/components/clients/client_detail.html'
    #     controller: 'ClientController'
    #     controllerAs: 'clientCtrl'
    #   .state 'login',
    #     url: '/login'
    #     templateUrl: 'app/components/user_sessions/new.html'
    #     controller: 'LoginController'
    #     controllerAs: 'login'

    # $urlRouterProvider.otherwise '/'

    $stateProvider
      .state 'home',
        url: '/'
        templateUrl: 'app/main/main.html'
        controller: 'MainController'
        controllerAs: 'main'
      .state 'home.clientDetail',
        url: 'clients/:clientId',
        views: {
          'activities': {
            templateUrl: 'app/components/clients/client_activities.html'
            controller: 'ClientController'
            controllerAs: 'clientCtrl'
          },
          'messages': {
            templateUrl: 'app/components/clients/client_messages.html'
            controller: 'ClientController'
            controllerAs: 'clientCtrl'
          }
        }
      .state 'login',
        url: '/login'
        templateUrl: 'app/components/user_sessions/new.html'
        controller: 'LoginController'
        controllerAs: 'login'

    $urlRouterProvider.otherwise '/'

    # $stateProvider
    #   .state 'home',
    #     url: '/clients'
    #     views: {
    #       '@' : {
    #         templateUrl: 'app/main/main.html',
    #         controller: 'MainController'
    #       },
    #       'client-list@home' : { templateUrl: 'app/components/clients/client_list.html',},
    #       'activities@home' : { templateUrl: 'app/components/clients/client_activities.html',},
    #       'messages@home' : { templateUrl: 'app/components/clients/client_messages.html',},
    #     },
    #   .state 'home.clientDetail',
    #     url: '/:clientId',
    #     templateUrl: 'app/components/clients/client_detail.html'
    #     controller: 'ClientController'
    #     controllerAs: 'clientCtrl'
    #   # .state 'login',
    #   #   url: '/login'
    #   #   templateUrl: 'app/components/user_sessions/new.html'
    #   #   controller: 'LoginController'
    #   #   controllerAs: 'login'

    # $urlRouterProvider.otherwise '/'
