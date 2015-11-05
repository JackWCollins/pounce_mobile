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

.controller 'RelationshipMessagesCtrl', ($scope, $stateParams, MessagesService) ->
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
    newMessage.sentAt = moment().toISOString()
    newMessage.author = 'Adam Agent'
    $scope.messages.push newMessage
    $scope.newMessage = ''

.controller 'RelationshipShowingsCtrl', ($scope, $stateParams) ->
  console.log "RelationshipShowingsCtrl"

.controller 'RelationshipCtrl', ($scope, $stateParams) ->
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

.controller 'LoginCtrl', ($scope) ->
  console.log "In the Login Ctrl"

.controller('AppCtrl', ($scope, $ionicModal, $timeout) ->
  # Form data for the login modal
  $scope.loginData = {}

  # Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', scope: $scope).then (modal) ->
    $scope.modal = modal
 
  # Triggered in the login modal to close it
  $scope.closeLogin = ->
    $scope.modal.hide()

  # Open the login modal
  $scope.login = ->
    $scope.modal.show()

  # Perform the login action when the user submits the login form
  $scope.doLogin = ->
    console.log 'Doing login', $scope.loginData
    # Simulate a login delay. Remove this and replace with your login
    # code if using a login system
    $timeout (-> $scope.closeLogin()), 1000
)

.controller('PlaylistsCtrl', ($scope) ->
  $scope.playlists = [
    {
      title: 'Reggaecoffee'
      id: 1
    }
    {
      title: 'Chill'
      id: 2
    }
    {
      title: 'Dubstep'
      id: 3
    }
    {
      title: 'Indie'
      id: 4
    }
    {
      title: 'Rap'
      id: 5
    }
    {
      title: 'Cowbell'
      id: 6
    }
  ]
)

.controller 'PlaylistCtrl', ($scope, $stateParams) ->



