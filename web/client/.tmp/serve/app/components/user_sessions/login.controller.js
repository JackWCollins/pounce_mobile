(function() {
  angular.module('pounce').controller('LoginController', function($scope) {
    'ngInject';
    var vm;
    vm = this;
    $scope.$on('auth:login-error', function(event, reason) {
      console.log("Caught login error!", reason);
      return vm.error = reason.errors[0];
    });
    return console.log("In LoginController with vm: ", vm);
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdXNlcl9zZXNzaW9ucy9sb2dpbi5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsUUFBZixDQUNFLENBQUMsVUFESCxDQUNjLGlCQURkLEVBQ2lDLFNBQUMsTUFBRDtJQUM3QjtBQUFBLFFBQUE7SUFDQSxFQUFBLEdBQUs7SUFFTCxNQUFNLENBQUMsR0FBUCxDQUFXLGtCQUFYLEVBQStCLFNBQUMsS0FBRCxFQUFRLE1BQVI7TUFDN0IsT0FBTyxDQUFDLEdBQVIsQ0FBWSxxQkFBWixFQUFtQyxNQUFuQzthQUNBLEVBQUUsQ0FBQyxLQUFILEdBQVcsTUFBTSxDQUFDLE1BQU8sQ0FBQSxDQUFBO0lBRkksQ0FBL0I7V0FLQSxPQUFPLENBQUMsR0FBUixDQUFZLDhCQUFaLEVBQTRDLEVBQTVDO0VBVDZCLENBRGpDO0FBQUEiLCJmaWxlIjoiY29tcG9uZW50cy91c2VyX3Nlc3Npb25zL2xvZ2luLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAncG91bmNlJ1xuICAuY29udHJvbGxlciAnTG9naW5Db250cm9sbGVyJywgKCRzY29wZSkgLT5cbiAgICAnbmdJbmplY3QnXG4gICAgdm0gPSB0aGlzXG5cbiAgICAkc2NvcGUuJG9uKCdhdXRoOmxvZ2luLWVycm9yJywgKGV2ZW50LCByZWFzb24pIC0+XG4gICAgICBjb25zb2xlLmxvZyBcIkNhdWdodCBsb2dpbiBlcnJvciFcIiwgcmVhc29uXG4gICAgICB2bS5lcnJvciA9IHJlYXNvbi5lcnJvcnNbMF1cbiAgICApXG5cbiAgICBjb25zb2xlLmxvZyBcIkluIExvZ2luQ29udHJvbGxlciB3aXRoIHZtOiBcIiwgdm0iXX0=
