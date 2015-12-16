(function() {
  angular.module('pounce').controller('ClientController', function($timeout, webDevTec, toastr, messageService, $stateParams) {
    'ngInject';
    var i, results, vm;
    vm = this;
    vm.clients = [];
    vm.showingCount = (function() {
      results = [];
      for (i = 1; i <= 50; i++){ results.push(i); }
      return results;
    }).apply(this);
    vm.messages = messageService.all({
      clientId: $stateParams.clientId
    });
    return console.log("In ClientController with vm: ", vm);
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2xpZW50cy9jbGllbnRfZGV0YWlsLmNvbnRyb2xsZXIuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxRQUFmLENBQ0UsQ0FBQyxVQURILENBQ2Msa0JBRGQsRUFDa0MsU0FBQyxRQUFELEVBQVcsU0FBWCxFQUFzQixNQUF0QixFQUE4QixjQUE5QixFQUE4QyxZQUE5QztJQUM5QjtBQUFBLFFBQUE7SUFDQSxFQUFBLEdBQUs7SUFFTCxFQUFFLENBQUMsT0FBSCxHQUFhO0lBQ2IsRUFBRSxDQUFDLFlBQUgsR0FBa0I7Ozs7O0lBQ2xCLEVBQUUsQ0FBQyxRQUFILEdBQWMsY0FBYyxDQUFDLEdBQWYsQ0FBbUI7TUFBQSxRQUFBLEVBQVUsWUFBWSxDQUFDLFFBQXZCO0tBQW5CO1dBQ2QsT0FBTyxDQUFDLEdBQVIsQ0FBWSwrQkFBWixFQUE2QyxFQUE3QztFQVA4QixDQURsQztBQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvY2xpZW50cy9jbGllbnRfZGV0YWlsLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAncG91bmNlJ1xuICAuY29udHJvbGxlciAnQ2xpZW50Q29udHJvbGxlcicsICgkdGltZW91dCwgd2ViRGV2VGVjLCB0b2FzdHIsIG1lc3NhZ2VTZXJ2aWNlLCAkc3RhdGVQYXJhbXMpIC0+XG4gICAgJ25nSW5qZWN0J1xuICAgIHZtID0gdGhpc1xuXG4gICAgdm0uY2xpZW50cyA9IFtdXG4gICAgdm0uc2hvd2luZ0NvdW50ID0gWzEuLjUwXVxuICAgIHZtLm1lc3NhZ2VzID0gbWVzc2FnZVNlcnZpY2UuYWxsKGNsaWVudElkOiAkc3RhdGVQYXJhbXMuY2xpZW50SWQpXG4gICAgY29uc29sZS5sb2cgXCJJbiBDbGllbnRDb250cm9sbGVyIHdpdGggdm06IFwiLCB2bVxuIl19
