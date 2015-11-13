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
    newMessage.sentAt = moment().local().toISOString()
    newMessage.author = 'Adam Agent'
    $scope.messages.push newMessage
    $scope.newMessage = ''
    console.log "Messages after adding: ", $scope.messages
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

.controller('AddShowingCtrl', ($scope, ShowingsService) ->
  console.log "In add showing controller"

  # moment JS calculations to get the seconds since midnight
  # since ionic-timepicker needs that for some reason

  secondsSinceMidnightDate = ((new Date()).getHours() * 60 * 60)
  midnightToday = moment().clone().local().startOf('day')
  startOfNextHour = moment().clone().local().startOf('hour').add(1, 'hour')
  $scope.secondsSinceMidnight = startOfNextHour.diff(midnightToday, 'seconds')

  $scope.newShowing = {
    date: new Date()
    time: startOfNextHour.toISOString()
  }

  $scope.newShowingListing = ShowingsService.upcoming()[0]

  console.log "utc offset", moment().local().utcOffset() / 60

  datePickerCallback = (date) ->
    console.log "In datePickerCallback with date: ", date
    $scope.newShowing.date = date

  timePickerCallback = (secondsSinceMidnight) ->
    newTime = moment().local().startOf('day').add(secondsSinceMidnight, 'seconds')
    $scope.newShowing.time = newTime.toISOString()

  $scope.datepickerObject = {
    titleLabel: 'Showing Date'
    todayLabel: 'Today'
    closeLabel: 'Close'
    setLabel: 'Set'
    setButtonType : 'button-balanced'
    todayButtonType : 'button-stable'
    closeButtonType : 'button-stable'
    inputDate: new Date()
    mondayFirst: false
    templateType: 'modal'
    showTodayButton: 'true'
    modalHeaderColor: 'bar-balanced'
    modalFooterColor: 'bar-balanced'
    from: new Date(2012, 8, 2)
    to: new Date(2018, 8, 25)
    callback: (value) ->
      datePickerCallback(value)
    dateFormat: 'MM-DD-YYYY'
    closeOnSelect: false
  }

  $scope.timePickerObject = {
    inputEpochTime: $scope.secondsSinceMidnight
    format: 12
    titleLabel: 'Showing Time'
    setButtonType: 'button-balanced'
    closeButtonType: 'button-stable'
    callback: (secondsSinceMidnight) ->
      timePickerCallback(secondsSinceMidnight)
  }
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

