angular.module('pounce', [
  'ionic'
  'pounce.controllers'
  'pounce.services'
  'pounce.filters'
])

.run(($ionicPlatform) ->
  $ionicPlatform.ready ->

    # Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    # for form inputs)
    if window.cordova and window.cordova.plugins.Keyboard
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar true

    # org.apache.cordova.statusbar required
    StatusBar.styleDefault() if window.StatusBar
)

.config ($stateProvider, $urlRouterProvider) ->
  $stateProvider
    .state('login', 
      url: '/login' 
      templateUrl: 'templates/login.html'
      controller: 'LoginCtrl'
    )
    .state('relationship',
      url: '/relationships/:relationshipId'
      abstract: true
      templateUrl: 'templates/relationship.html'
    )
    .state('relationship.messages',
      url: '/messages'
      views: 
        'relationship-messages':
          templateUrl: 'templates/messages/index.html'
          controller: 'RelationshipMessagesCtrl'
    )
    .state('relationship.showings',
      url: '/showings'
      views:
        'relationship-showings':
          templateUrl: 'templates/showings/actions.html'
          controller: 'RelationshipShowingsCtrl'
    )
    .state('relationship.upcoming-showings',
      url: '/upcoming'
      views:
        'relationship-showings':
          templateUrl: 'templates/showings/upcoming.html'
          controller: 'UpcomingShowingsCtrl'
    )

  # if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise '/login'
