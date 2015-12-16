angular.module 'pounce'
  .controller 'ClientController', ($timeout, webDevTec, toastr, messageService, $stateParams) ->
    'ngInject'
    vm = this

    vm.clients = []
    vm.showingCount = [1..50]
    vm.messages = messageService.all(clientId: $stateParams.clientId)
    console.log "In ClientController with vm: ", vm
