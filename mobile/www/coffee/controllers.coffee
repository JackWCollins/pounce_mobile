angular.module('pounce.controllers', [])

.controller('RelationshipsCtrl', ($scope) ->
  $scope.relationships = [
    {
      id: 1
      clients: [
        {
          id: 1
          firstName: "Stephanie"
          lastName: "Folsom"
        }
        {
          id: 2
          firstName: "Steven"
          lastName: "Folsom"
        }
      ]
      last_message_time: "2015-10-25T22:34:51+00:00"
      next_showing_time: "2015-10-25T22:34:51+00:00"
    },
    {
      id: 2
      clients: [
        {
          id: 3
          firstName: "Erik"
          lastName: "Polk"
        }
        {
          id: 4
          firstName: "Beth"
          lastName: "Polk"
        }
      ]
      last_message_time: "2015-10-25T22:34:51+00:00"
      next_showing_time: "2015-10-25T22:34:51+00:00"
    },
    {
      id: 3
      clients: [
        {
          id: 5
          firstName: "Carrie"
          lastName: "Stevenson"
        }
        {
          id: 6
          firstName: "Andy"
          lastName: "Stevenson"
        }
      ]
      last_message_time: "2015-10-25T22:34:51+00:00"
      next_showing_time: "2015-10-25T22:34:51+00:00"
    }
  ]
)

.controller('RelationshipMessagesCtrl', ($scope, $stateParams, MessagesService) ->
  console.log "RelationshipMessagesCtrl"

  $scope.newMessage = ''

  getRecentMessages = () ->
    $scope.messages = MessagesService.all(id: $stateParams.relationshipId)
    console.log "Messages: ", $scope.messages

  getRecentMessages()

  $scope.addMessage = () ->
    newMessage = {}
    newMessage.body = $scope.newMessage
    newMessage.id = 12
    newMessage.sentAt = moment().toISOString
    newMessage.author = 'Adam Agent'
    $scope.messages.push newMessage
    $scope.newMessage = ''
)

.controller('RelationshipShowingsCtrl', ($scope, $stateParams) ->
  console.log "RelationshipShowingsCtrl"
)

.controller('UpcomingShowingsCtrl', ($scope, ShowingsService) ->
  console.log "Upcoming Controller"

  getUpcomingShowings = () ->
    $scope.upcomingShowings = ShowingsService.upcoming()
    console.log "Upcoming Showings: ", $scope.upcomingShowings

  getUpcomingShowings()
)

.controller('RelationshipCtrl', ($scope, $stateParams) ->
  console.log "Single Relationship Ctrl"
  $scope.relationship = {
    id: 1
    clients: [
      {
        id: 1
        first_name: "Stephanie"
        last_name: "Folsom"
      }
      {
        id: 2
        first_name: "Steven"
        last_name: "Folsom"
      }
    ]
    last_message_time: "2015-10-25T22:34:51+00:00"
    next_showing_time: "2015-10-25T22:34:51+00:00"
  }
)

.controller('LoginCtrl', ($scope) ->
  console.log "In the Login Ctrl"
)

