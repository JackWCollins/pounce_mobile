angular.module 'pounce'
  .run ($log, $rootScope) ->
    'ngInject'
    $rootScope.$on("$stateChangeError", console.log.bind(console))
    $log.debug 'runBlock end'
