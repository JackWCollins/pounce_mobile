angular.module 'pounce'
  .controller 'ClientController', ($timeout, webDevTec, toastr) ->
    'ngInject'
    vm = this

    vm.clients = []
    vm.classAnimation = ''
    console.log "In ClientController with vm: ", vm
