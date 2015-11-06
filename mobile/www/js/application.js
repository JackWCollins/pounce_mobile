angular.module('pounce', ['ionic', 'pounce.controllers', 'pounce.services', 'pounce.filters']).run(function($ionicPlatform) {
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
        templateUrl: 'templates/messages/index.html',
        controller: 'RelationshipMessagesCtrl'
      }
    }
  }).state('relationship.showings', {
    url: '/showings',
    views: {
      'relationship-showings': {
        templateUrl: 'templates/showings/actions.html',
        controller: 'RelationshipShowingsCtrl'
      }
    }
  }).state('relationship.upcoming-showings', {
    url: '/upcoming',
    views: {
      'relationship-showings': {
        templateUrl: 'templates/showings/upcoming.html',
        controller: 'UpcomingShowingsCtrl'
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
  $scope.newMessage = '';
  getRecentMessages = function() {
    $scope.messages = MessagesService.all({
      id: $stateParams.relationshipId
    });
    return console.log("Messages: ", $scope.messages);
  };
  getRecentMessages();
  return $scope.addMessage = function() {
    var newMessage;
    newMessage = {};
    newMessage.body = $scope.newMessage;
    newMessage.id = 12;
    newMessage.sentAt = moment().toISOString;
    newMessage.author = 'Adam Agent';
    $scope.messages.push(newMessage);
    return $scope.newMessage = '';
  };
}).controller('RelationshipShowingsCtrl', function($scope, $stateParams) {
  return console.log("RelationshipShowingsCtrl");
}).controller('UpcomingShowingsCtrl', function($scope, ShowingsService) {
  var getUpcomingShowings;
  console.log("Upcoming Controller");
  getUpcomingShowings = function() {
    $scope.upcomingShowings = ShowingsService.upcoming();
    return console.log("Upcoming Showings: ", $scope.upcomingShowings);
  };
  return getUpcomingShowings();
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
});

angular.module('pounce.filters', []).filter('relativeTime', function() {
  return function(time) {
    var m;
    m = moment(time);
    if (m.isValid()) {
      return m.fromNow();
    } else {
      return time;
    }
  };
});

angular.module('pounce.services', []).service('MessagesService', function() {
  return {
    all: function(params) {
      console.log("In MessagesService with params: ", params.id);
      if (params.id === '1') {
        return [
          {
            id: 1,
            author: 'Adam Agent',
            sentAt: moment().subtract(5, 'minutes').toISOString(),
            body: 'Hey @Stephanie, I just scheduled some showings for us this Saturday. I think we will have some great places to look at! See you at 1 PM on Saturday.'
          }, {
            id: 2,
            author: 'Stephanie Folsom',
            sentAt: moment().subtract(1, 'hours').toISOString(),
            body: '@Adam, can we see some more places this Saturday? I was really a fan of the brick house we saw last weekend.'
          }
        ];
      } else if (params.id === '2') {
        return [
          {
            id: 3,
            author: 'Adam Agent',
            sentAt: moment().subtract(20, 'minutes').toISOString(),
            body: '@Erik, I had a great conversation with your lender today.'
          }, {
            id: 4,
            author: 'Erik Polk',
            sentAt: moment().subtract(3, 'hours').toISOString(),
            body: '@Adam, can we see some more places this Saturday? I was really a fan of the brick house we saw last weekend.'
          }
        ];
      } else if (params.id === '3') {
        return [
          {
            id: 5,
            author: 'Adam Agent',
            sentAt: moment().subtract(3, 'minutes').toISOString(),
            body: '@Carrie, I set up some great looking showings for us this Saturday!'
          }, {
            id: 6,
            author: 'Carrie Stevenson',
            sentAt: moment().subtract(2, 'hours').toISOString(),
            body: '@Adam, can we see some more places this Saturday? I was really a fan of the brick house we saw last weekend.'
          }
        ];
      }
    }
  };
}).service('ShowingsService', function() {
  return {
    upcoming: function(params) {
      console.log("Made it into the ShowingsService");
      return [
        {
          showingTime: moment().startOf('hour').add(22, 'hours').toISOString(),
          mlsId: 123412312,
          address: {
            crossStreet: '456 Cross Rd',
            streetName: 'Main St.',
            postalCode: 80226,
            city: 'Lakewood',
            streetNumber: 123,
            full: '123 Main St.',
            state: 'CO'
          },
          listPrice: 349999,
          listDate: moment().subtract(4, 'days').toISOString(),
          mls: {
            status: 'Active',
            daysOnMarket: 4
          },
          photos: ['img/house1_outside.jpeg', 'img/house1_kitchen.jpeg', 'img/house1_bedroom.jpeg', 'img/house1_patio.jpeg'],
          property: {
            yearBuilt: 2007,
            garageSpaces: 2,
            area: 2200,
            lotSize: '3/4 - 1 Acre',
            bathsFull: 2,
            bathsHalf: 1,
            bedrooms: 3,
            stories: 2,
            fireplaces: 1,
            heating: 'Central System, Forced Air, Gas'
          }
        }, {
          showingTime: moment().startOf('hour').add(23, 'hours').toISOString(),
          mlsId: 543623424,
          address: {
            crossStreet: '789 Bent St',
            streetName: 'Market St.',
            postalCode: 80246,
            city: 'Lakewood',
            streetNumber: 8367,
            full: '8367 Market St.',
            state: 'CO'
          },
          listPrice: 408999,
          listDate: moment().subtract(4, 'days').toISOString(),
          mls: {
            status: 'Active',
            daysOnMarket: 4
          },
          photos: ['img/house2_outside.jpeg', 'img/house2_kitchen.jpeg', 'img/house2_bedroom.jpeg', 'img/house2_patio'].jpeg,
          property: {
            yearBuilt: 2004,
            garageSpaces: 2,
            area: 3400,
            lotSize: '3/4 - 1 Acre',
            bathsFull: 3,
            bathsHalf: 1,
            bedrooms: 4,
            stories: 2,
            fireplaces: 1,
            heating: 'Central System, Forced Air, Gas'
          }
        }, {
          showingTime: moment().startOf('hour').add(24, 'hours').toISOString(),
          mlsId: 234572547,
          address: {
            crossStreet: '346 Curved Ave',
            streetName: 'Applegate Ave.',
            postalCode: 80226,
            city: 'Lakewood',
            streetNumber: 375,
            full: '375 Applegate Ave.',
            state: 'CO'
          },
          listPrice: 567000,
          listDate: moment().subtract(4, 'days').toISOString(),
          mls: {
            status: 'Active',
            daysOnMarket: 4
          },
          photos: ['img/house3_outside.jpeg', 'img/house3_kitchen.jpeg', 'img/house3_bedroom.jpeg', 'img/house3_patio'].jpeg,
          property: {
            yearBuilt: 2010,
            garageSpaces: 2,
            area: 3125,
            lotSize: '3/4 - 1 Acre',
            bathsFull: 3,
            bathsHalf: 1,
            bedrooms: 3,
            stories: 2,
            fireplaces: 1,
            heating: 'Central System, Forced Air, Gas'
          }
        }, {
          showingTime: moment().startOf('hour').add(25, 'hours').toISOString(),
          mlsId: 987247223,
          address: {
            crossStreet: '908 Straight St.',
            streetName: 'Winding Rd.',
            postalCode: 80264,
            city: 'Lakewood',
            streetNumber: 624,
            full: '624 Winding Rd.',
            state: 'CO'
          },
          listPrice: 435000,
          listDate: moment().subtract(4, 'days').toISOString(),
          mls: {
            status: 'Active',
            daysOnMarket: 4
          },
          photos: ['img/house4_outside.jpeg', 'img/house4_kitchen.jpeg', 'img/house4_bedroom.jpeg', 'img/house4_patio'].jpeg,
          property: {
            yearBuilt: 2009,
            garageSpaces: 2,
            area: 3605,
            lotSize: '3/4 - 1 Acre',
            bathsFull: 3,
            bathsHalf: 1,
            bedrooms: 4,
            stories: 2,
            fireplaces: 1,
            heating: 'Central System, Forced Air, Gas'
          }
        }
      ];
    }
  };
});
