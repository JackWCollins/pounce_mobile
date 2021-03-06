angular.module 'pounce'
  .config ($logProvider, toastrConfig, $mdThemingProvider, $authProvider) ->
    'ngInject'
    # Enable log
    $logProvider.debugEnabled true
    # Set options third-party lib
    toastrConfig.allowHtml = true
    toastrConfig.timeOut = 3000
    toastrConfig.positionClass = 'toast-top-right'
    toastrConfig.preventDuplicates = true
    toastrConfig.progressBar = true

    # Angular Material theming

    $mdThemingProvider.theme('default')
      .primaryPalette('green')
      .accentPalette('blue')

    $authProvider.configure(
      apiUrl: '/api/v1'
    )


