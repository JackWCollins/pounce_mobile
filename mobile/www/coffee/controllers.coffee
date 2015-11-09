angular.module('pounce.controllers', [])

.controller('RelationshipsCtrl', ($scope, RelationshipsService) ->
  $scope.relationships = RelationshipsService.all()
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

.controller('UpcomingShowingsCtrl', ($scope, ShowingsService, $ionicModal, $ionicSlideBoxDelegate) ->
  console.log "Upcoming Controller"

  getUpcomingShowings = () ->
    $scope.upcomingShowings = ShowingsService.upcoming()
    console.log "Upcoming Showings: ", $scope.upcomingShowings

  getUpcomingShowings()

  $ionicModal.fromTemplateUrl('image_modal.html',
    scope: $scope
    animation: 'slide-in-up').then (modal) ->
      $scope.modal = modal

  $scope.openModal = (showing) ->
    $ionicSlideBoxDelegate.$getByHandle('image-slide-box').slide 0
    $scope.modal.show()
    $scope.currentShowing = showing

  $scope.closeModal = ->
    $scope.modal.hide()

  # Cleanup the modal when we're done with it!
  $scope.$on '$destroy', ->
    $scope.modal.remove()
    $scope.currentShowing = null

  # Called each time the slide changes
  $scope.slideChanged = (index) ->
    $scope.slideIndex = index

)

.controller('PreviousShowingsCtrl', ($scope, ShowingsService, $ionicModal, $ionicSlideBoxDelegate) ->
  console.log "In PreviousShowingsCtrl"

  getPreviousShowings = () ->
    $scope.previousShowings = ShowingsService.previous()
    console.log "Previous Showings: ", $scope.previousShowings

  getPreviousShowings()

  $ionicModal.fromTemplateUrl('image_modal.html',
    scope: $scope
    animation: 'slide-in-up').then (modal) ->
      $scope.modal = modal

  $scope.openModal = (showing) ->
    $ionicSlideBoxDelegate.$getByHandle('image-slide-box').slide 0
    $scope.modal.show()
    $scope.currentShowing = showing

  $scope.closeModal = ->
    $scope.modal.hide()

  # Cleanup the modal when we're done with it!
  $scope.$on '$destroy', ->
    $scope.modal.remove()
    $scope.currentShowing = null

  # Called each time the slide changes
  $scope.slideChanged = (index) ->
    $scope.slideIndex = index
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

