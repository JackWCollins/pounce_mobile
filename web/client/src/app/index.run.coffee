angular.module 'pounce'
  .run ($log, $rootScope, $location) ->
    'ngInject'
    $rootScope.$on("$stateChangeError", console.log.bind(console))
    $log.debug 'runBlock end'

    $rootScope.$on('auth:login-success', () ->
      $location.path('/')
    )
