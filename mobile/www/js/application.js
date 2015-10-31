angular.module('pounce', ['ionic', 'pounce.controllers']).run(function($ionicPlatform) {
  return $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      return StatusBar.styleDefault();
    }
  });
}).config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  }).state('app.relationships', {
    url: '/relationships',
    views: {
      menuContent: {
        templateUrl: 'templates/relationships.html',
        controller: 'RelationshipsCtrl'
      }
    }
  }).state('app.relationship', {
    url: '/relationships/:relationshipId',
    views: {
      menuContent: {
        templateUrl: '/templates/relationship.html',
        controller: 'RelationshipCtrl'
      }
    }
  }).state('app.search', {
    url: '/search',
    views: {
      menuContent: {
        templateUrl: 'templates/search.html'
      }
    }
  }).state('app.browse', {
    url: '/browse',
    views: {
      menuContent: {
        templateUrl: 'templates/browse.html'
      }
    }
  }).state('app.playlists', {
    url: '/playlists',
    views: {
      menuContent: {
        templateUrl: 'templates/playlists.html',
        controller: 'PlaylistsCtrl'
      }
    }
  }).state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      menuContent: {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  return $urlRouterProvider.otherwise('/app/relationships');
});

angular.module('pounce.controllers', []).controller('RelationshipsCtrl', function($scope) {
  return $scope.relationships = [
    {
      id: 1,
      clients: [
        {
          id: 1,
          first_name: "Stephanie",
          last_name: "Folsom"
        }, {
          id: 2,
          first_name: "Steven",
          last_name: "Folsom"
        }
      ],
      last_message_time: "2015-10-25T22:34:51+00:00",
      next_showing_time: "2015-10-25T22:34:51+00:00"
    }, {
      id: 2,
      clients: [
        {
          id: 3,
          first_name: "Erik",
          last_name: "Polk"
        }, {
          id: 4,
          first_name: "Beth",
          last_name: "Polk"
        }
      ],
      last_message_time: "2015-10-25T22:34:51+00:00",
      next_showing_time: "2015-10-25T22:34:51+00:00"
    }, {
      id: 3,
      clients: [
        {
          id: 5,
          first_name: "Carrie",
          last_name: "Stevenson"
        }, {
          id: 6,
          first_name: "Andy",
          last_name: "Stevenson"
        }
      ],
      last_message_time: "2015-10-25T22:34:51+00:00",
      next_showing_time: "2015-10-25T22:34:51+00:00"
    }
  ];
}).controller('RelationshipMessagesCtrl', function($scope, $stateParams) {
  return console.log("RelationshipMessagesCtrl");
}).controller('RelationshipShowingsCtrl', function($scope, $stateParams) {
  return console.log("RelationshipShowingsCtrl");
}).controller('RelationshipCtrl', function($scope, $stateParams) {
  console.log("Single Relationship Ctrl");
  $scope.messages = [
    {
      id: 1,
      author: 'Adam Agent',
      sent_at: '3 min ago',
      body: 'Hey @Ben, I just scheduled some showings for us this Saturday. I think we will have some great places to look at! See you at 1 PM on Saturday.'
    }, {
      id: 1,
      author: 'Ben Howard',
      sent_at: '1 hour ago',
      body: '@Adam, can we see some more places this Saturday? I was really a fan of the brick house we saw last weekend.'
    }
  ];
  return console.log("Messages: ", $scope.messages);
}).controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  $scope.loginData = {};
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    return $scope.modal = modal;
  });
  $scope.closeLogin = function() {
    return $scope.modal.hide();
  };
  $scope.login = function() {
    return $scope.modal.show();
  };
  return $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
    return $timeout((function() {
      return $scope.closeLogin();
    }), 1000);
  };
}).controller('PlaylistsCtrl', function($scope) {
  return $scope.playlists = [
    {
      title: 'Reggaecoffee',
      id: 1
    }, {
      title: 'Chill',
      id: 2
    }, {
      title: 'Dubstep',
      id: 3
    }, {
      title: 'Indie',
      id: 4
    }, {
      title: 'Rap',
      id: 5
    }, {
      title: 'Cowbell',
      id: 6
    }
  ];
}).controller('PlaylistCtrl', function($scope, $stateParams) {});
