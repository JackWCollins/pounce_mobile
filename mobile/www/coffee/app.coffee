angular.module('pounce', [
  'ionic'
  'pounce.controllers'
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
    .state('app',
      url: '/app'
      abstract: true
      templateUrl: 'templates/menu.html'
      controller: 'AppCtrl'
    )

    .state('app.relationships',
      url: '/relationships',
      views:
        menuContent:
          templateUrl: 'templates/relationships.html'
          controller: 'RelationshipsCtrl'
    )
    .state('app.relationship',
      url: '/relationships/:relationshipId',
      views:
        menuContent:
          templateUrl: '/templates/relationship.html'
          controller: 'RelationshipCtrl'
    )

    .state('app.search',
      url: '/search',
      views:
        menuContent:
          templateUrl: 'templates/search.html'
    )

    .state('app.browse',
      url: '/browse',
      views:
        menuContent:
          templateUrl: 'templates/browse.html'
    )

    .state('app.playlists',
      url: '/playlists',
      views:
        menuContent:
          templateUrl: 'templates/playlists.html'
          controller: 'PlaylistsCtrl'
    )

    .state('app.single',
      url: '/playlists/:playlistId'
      views:
        menuContent:
          templateUrl: 'templates/playlist.html'
          controller: 'PlaylistCtrl'
    )

  # if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise '/app/relationships'
