(function() {
  angular.module('pounce').config(function($stateProvider, $urlRouterProvider) {
    'ngInject';
    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    }).state('home.clientDetail', {
      url: 'clients/:clientId',
      templateUrl: 'app/components/clients/client_detail.html',
      controller: 'ClientController',
      controllerAs: 'clientCtrl'
    }).state('login', {
      url: '/login',
      templateUrl: 'app/components/user_sessions/new.html',
      controller: 'LoginController',
      controllerAs: 'login'
    });
    return $urlRouterProvider.otherwise('/');
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnJvdXRlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsUUFBZixDQUNFLENBQUMsTUFESCxDQUNVLFNBQUMsY0FBRCxFQUFpQixrQkFBakI7SUFDTjtJQUNBLGNBQ0UsQ0FBQyxLQURILENBQ1MsTUFEVCxFQUVJO01BQUEsR0FBQSxFQUFLLEdBQUw7TUFDQSxXQUFBLEVBQWEsb0JBRGI7TUFFQSxVQUFBLEVBQVksZ0JBRlo7TUFHQSxZQUFBLEVBQWMsTUFIZDtLQUZKLENBTUUsQ0FBQyxLQU5ILENBTVMsbUJBTlQsRUFPSTtNQUFBLEdBQUEsRUFBSyxtQkFBTDtNQUNBLFdBQUEsRUFBYSwyQ0FEYjtNQUVBLFVBQUEsRUFBWSxrQkFGWjtNQUdBLFlBQUEsRUFBYyxZQUhkO0tBUEosQ0FXRSxDQUFDLEtBWEgsQ0FXUyxPQVhULEVBWUk7TUFBQSxHQUFBLEVBQUssUUFBTDtNQUNBLFdBQUEsRUFBYSx1Q0FEYjtNQUVBLFVBQUEsRUFBWSxpQkFGWjtNQUdBLFlBQUEsRUFBYyxPQUhkO0tBWko7V0FpQkEsa0JBQWtCLENBQUMsU0FBbkIsQ0FBNkIsR0FBN0I7RUFuQk0sQ0FEVjtBQUFBIiwiZmlsZSI6ImluZGV4LnJvdXRlLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ3BvdW5jZSdcbiAgLmNvbmZpZyAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikgLT5cbiAgICAnbmdJbmplY3QnXG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgIC5zdGF0ZSAnaG9tZScsXG4gICAgICAgIHVybDogJy8nXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vbWFpbi5odG1sJ1xuICAgICAgICBjb250cm9sbGVyOiAnTWFpbkNvbnRyb2xsZXInXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ21haW4nXG4gICAgICAuc3RhdGUgJ2hvbWUuY2xpZW50RGV0YWlsJyxcbiAgICAgICAgdXJsOiAnY2xpZW50cy86Y2xpZW50SWQnLFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL2NsaWVudHMvY2xpZW50X2RldGFpbC5odG1sJ1xuICAgICAgICBjb250cm9sbGVyOiAnQ2xpZW50Q29udHJvbGxlcidcbiAgICAgICAgY29udHJvbGxlckFzOiAnY2xpZW50Q3RybCdcbiAgICAgIC5zdGF0ZSAnbG9naW4nLFxuICAgICAgICB1cmw6ICcvbG9naW4nXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvdXNlcl9zZXNzaW9ucy9uZXcuaHRtbCdcbiAgICAgICAgY29udHJvbGxlcjogJ0xvZ2luQ29udHJvbGxlcidcbiAgICAgICAgY29udHJvbGxlckFzOiAnbG9naW4nXG5cbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlICcvJ1xuIl19
