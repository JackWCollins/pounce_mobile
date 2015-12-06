(function() {
  angular.module('pounce').directive('acmeNavbar', function() {
    var NavbarController, directive;
    NavbarController = function(moment) {
      'ngInject';
      var vm;
      vm = this;
      vm.relativeDate = moment(vm.creationDate).fromNow();
    };
    return directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
        creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2YmFyL25hdmJhci5kaXJlY3RpdmUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxRQUFmLENBQ0UsQ0FBQyxTQURILENBQ2EsWUFEYixFQUMyQixTQUFBO0FBRXZCLFFBQUE7SUFBQSxnQkFBQSxHQUFtQixTQUFDLE1BQUQ7TUFDakI7QUFBQSxVQUFBO01BQ0EsRUFBQSxHQUFLO01BRUwsRUFBRSxDQUFDLFlBQUgsR0FBa0IsTUFBQSxDQUFPLEVBQUUsQ0FBQyxZQUFWLENBQXVCLENBQUMsT0FBeEIsQ0FBQTtJQUpEO1dBT25CLFNBQUEsR0FDRTtNQUFBLFFBQUEsRUFBVSxHQUFWO01BQ0EsV0FBQSxFQUFhLG1DQURiO01BRUEsS0FBQSxFQUFPO1FBQUEsWUFBQSxFQUFjLEdBQWQ7T0FGUDtNQUdBLFVBQUEsRUFBWSxnQkFIWjtNQUlBLFlBQUEsRUFBYyxJQUpkO01BS0EsZ0JBQUEsRUFBa0IsSUFMbEI7O0VBVnFCLENBRDNCO0FBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdwb3VuY2UnXG4gIC5kaXJlY3RpdmUgJ2FjbWVOYXZiYXInLCAtPlxuXG4gICAgTmF2YmFyQ29udHJvbGxlciA9IChtb21lbnQpIC0+XG4gICAgICAnbmdJbmplY3QnXG4gICAgICB2bSA9IHRoaXNcbiAgICAgICMgXCJ2bS5jcmVhdGlvblwiIGlzIGF2YWlibGUgYnkgZGlyZWN0aXZlIG9wdGlvbiBcImJpbmRUb0NvbnRyb2xsZXI6IHRydWVcIlxuICAgICAgdm0ucmVsYXRpdmVEYXRlID0gbW9tZW50KHZtLmNyZWF0aW9uRGF0ZSkuZnJvbU5vdygpXG4gICAgICByZXR1cm5cblxuICAgIGRpcmVjdGl2ZSA9XG4gICAgICByZXN0cmljdDogJ0UnXG4gICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuaHRtbCdcbiAgICAgIHNjb3BlOiBjcmVhdGlvbkRhdGU6ICc9J1xuICAgICAgY29udHJvbGxlcjogTmF2YmFyQ29udHJvbGxlclxuICAgICAgY29udHJvbGxlckFzOiAndm0nXG4gICAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlXG4iXX0=
