angular.module 'pounce'
  .controller 'LoginController', ($scope) ->
    'ngInject'
    vm = this

    $scope.$on('auth:login-error', (event, reason) ->
      console.log "Caught login error!", reason
      vm.error = reason.errors[0]
    )

    console.log "In LoginController with vm: ", vm