angular.module 'pounce'
  .controller 'ClientController', ($timeout, webDevTec, toastr, messagesService, $stateParams) ->
    'ngInject'
    vm = this

    vm.clients = []
    vm.classAnimation = ''
    vm.messages = messagesService.all(clientId: $stateParams.clientId)
    console.log "In ClientController with vm: ", vm
