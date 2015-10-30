angular.module('pounce.controllers', [])

.controller('RelationshipsCtrl', ($scope) ->
  $scope.relationships = [
    {
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
    },
    {
      id: 2
      clients: [
        {
          id: 3
          first_name: "Erik"
          last_name: "Polk"
        }
        {
          id: 4
          first_name: "Beth"
          last_name: "Polk"
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
          first_name: "Carrie"
          last_name: "Stevenson"
        }
        {
          id: 6
          first_name: "Andy"
          last_name: "Stevenson"
        }
      ]
      last_message_time: "2015-10-25T22:34:51+00:00"
      next_showing_time: "2015-10-25T22:34:51+00:00"
    }
  ]
)

.controller 'RelationshipMessagesCtrl', ($scope, $stateParams) ->
  console.log "RelationshipMessagesCtrl"

.controller 'RelationshipShowingsCtrl', ($scope, $stateParams) ->
  console.log "RelationshipShowingsCtrl"

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



