angular.module('pounce', ['ionic', 'pounce.controllers', 'pounce.services']).run(function($ionicPlatform) {
  return $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      return StatusBar.styleDefault();
    }
  });
}).config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  }).state('relationship', {
    url: '/relationships/:relationshipId',
    abstract: true,
    templateUrl: 'templates/relationship.html'
  }).state('relationship.messages', {
    url: '/messages',
    views: {
      'relationship-messages': {
        templateUrl: 'templates/relationship_messages.html',
        controller: 'RelationshipMessagesCtrl'
      }
    }
  }).state('relationship.showings', {
    url: '/showings',
    views: {
      'relationship-showings': {
        templateUrl: 'templates/relationship_showings.html',
        controller: 'RelationshipShowingsCtrl'
      }
    }
  });
  return $urlRouterProvider.otherwise('/login');
});

angular.module('pounce.controllers', []).controller('RelationshipsCtrl', function($scope) {
  return $scope.relationships = [
    {
      id: 1,
      clients: [
        {
          id: 1,
          firstName: "Stephanie",
          lastName: "Folsom"
        }, {
          id: 2,
          firstName: "Steven",
          lastName: "Folsom"
        }
      ],
      last_message_time: "2015-10-25T22:34:51+00:00",
      next_showing_time: "2015-10-25T22:34:51+00:00"
    }, {
      id: 2,
      clients: [
        {
          id: 3,
          firstName: "Erik",
          lastName: "Polk"
        }, {
          id: 4,
          firstName: "Beth",
          lastName: "Polk"
        }
      ],
      last_message_time: "2015-10-25T22:34:51+00:00",
      next_showing_time: "2015-10-25T22:34:51+00:00"
    }, {
      id: 3,
      clients: [
        {
          id: 5,
          firstName: "Carrie",
          lastName: "Stevenson"
        }, {
          id: 6,
          firstName: "Andy",
          lastName: "Stevenson"
        }
      ],
      last_message_time: "2015-10-25T22:34:51+00:00",
      next_showing_time: "2015-10-25T22:34:51+00:00"
    }
  ];
}).controller('RelationshipMessagesCtrl', function($scope, $stateParams, MessagesService) {
  var getRecentMessages;
  console.log("RelationshipMessagesCtrl");
  getRecentMessages = function() {
    $scope.messages = MessagesService.all({
      id: $stateParams.relationshipId
    });
    return console.log("Messages: ", $scope.messages);
  };
  return getRecentMessages();
}).controller('RelationshipShowingsCtrl', function($scope, $stateParams) {
  return console.log("RelationshipShowingsCtrl");
}).controller('RelationshipCtrl', function($scope, $stateParams) {
  console.log("Single Relationship Ctrl");
  return $scope.relationship = {
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
  };
}).controller('LoginCtrl', function($scope) {
  return console.log("In the Login Ctrl");
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

angular.module('pounce.services', []).service('MessagesService', function() {
  return {
    all: function(params) {
      console.log("In MessagesService with params: ", params.id);
      if (params.id === '1') {
        return [
          {
            id: 1,
            author: 'Adam Agent',
            sent_at: '3 min ago',
            body: 'Hey @Stephanie, I just scheduled some showings for us this Saturday. I think we will have some great places to look at! See you at 1 PM on Saturday.'
          }, {
            id: 2,
            author: 'Stephanie Folsom',
            sent_at: '1 hour ago',
            body: '@Adam, can we see some more places this Saturday? I was really a fan of the brick house we saw last weekend.'
          }
        ];
      } else if (params.id === '2') {
        return [
          {
            id: 3,
            author: 'Adam Agent',
            sent_at: '20 min ago',
            body: '@Erik, I had a great conversation with your lender today.'
          }, {
            id: 4,
            author: 'Erik Polk',
            sent_at: '3 hours ago',
            body: '@Adam, can we see some more places this Saturday? I was really a fan of the brick house we saw last weekend.'
          }
        ];
      } else if (params.id === '3') {
        return [
          {
            id: 5,
            author: 'Adam Agent',
            sent_at: '3 min ago',
            body: '@Carrie, I set up some great looking showings for us this Saturday!'
          }, {
            id: 6,
            author: 'Carrie Stevenson',
            sent_at: '1 hour ago',
            body: '@Adam, can we see some more places this Saturday? I was really a fan of the brick house we saw last weekend.'
          }
        ];
      }
    }
  };
});
