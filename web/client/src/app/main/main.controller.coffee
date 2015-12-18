angular.module 'pounce'
  .controller 'MainController', ($timeout, webDevTec, toastr, relationshipService, $stateParams) ->
    'ngInject'
    vm = this

    console.log "In main controller with stateParams: ", $stateParams

    activate = ->
      getWebDevTec()
      $timeout (->
        vm.classAnimation = 'rubberBand'
        return
      ), 4000
      return

    showToastr = ->
      toastr.info 'Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'
      vm.classAnimation = ''
      return

    getWebDevTec = ->
      vm.awesomeThings = webDevTec.getTec()
      angular.forEach vm.awesomeThings, (awesomeThing) ->
        awesomeThing.rank = Math.random()
        return
      return

    getClients = ->
      vm.clients = relationshipService.all()

    vm.awesomeThings = []
    vm.classAnimation = ''
    vm.creationDate = 1447732377382
    vm.showToastr = showToastr
    getClients()
    vm.currentClient = {id: $stateParams.clientId} # This doesn't work - I can't get the clientId from parent state
    console.log "Current client: ", vm.currentClient
    activate()
    return
