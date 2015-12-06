(function() {
  angular.module('pounce').controller('MainController', function($timeout, webDevTec, toastr) {
    'ngInject';
    var activate, getWebDevTec, showToastr, vm;
    vm = this;
    activate = function() {
      getWebDevTec();
      $timeout((function() {
        vm.classAnimation = 'rubberBand';
      }), 4000);
    };
    showToastr = function() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    };
    getWebDevTec = function() {
      vm.awesomeThings = webDevTec.getTec();
      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    };
    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1447732377382;
    vm.showToastr = showToastr;
    activate();
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4vbWFpbi5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsUUFBZixDQUNFLENBQUMsVUFESCxDQUNjLGdCQURkLEVBQ2dDLFNBQUMsUUFBRCxFQUFXLFNBQVgsRUFBc0IsTUFBdEI7SUFDNUI7QUFBQSxRQUFBO0lBQ0EsRUFBQSxHQUFLO0lBQ0wsUUFBQSxHQUFXLFNBQUE7TUFDVCxZQUFBLENBQUE7TUFDQSxRQUFBLENBQVMsQ0FBQyxTQUFBO1FBQ1IsRUFBRSxDQUFDLGNBQUgsR0FBb0I7TUFEWixDQUFELENBQVQsRUFHRyxJQUhIO0lBRlM7SUFRWCxVQUFBLEdBQWEsU0FBQTtNQUNYLE1BQU0sQ0FBQyxJQUFQLENBQVksa0hBQVo7TUFDQSxFQUFFLENBQUMsY0FBSCxHQUFvQjtJQUZUO0lBS2IsWUFBQSxHQUFlLFNBQUE7TUFDYixFQUFFLENBQUMsYUFBSCxHQUFtQixTQUFTLENBQUMsTUFBVixDQUFBO01BQ25CLE9BQU8sQ0FBQyxPQUFSLENBQWdCLEVBQUUsQ0FBQyxhQUFuQixFQUFrQyxTQUFDLFlBQUQ7UUFDaEMsWUFBWSxDQUFDLElBQWIsR0FBb0IsSUFBSSxDQUFDLE1BQUwsQ0FBQTtNQURZLENBQWxDO0lBRmE7SUFPZixFQUFFLENBQUMsYUFBSCxHQUFtQjtJQUNuQixFQUFFLENBQUMsY0FBSCxHQUFvQjtJQUNwQixFQUFFLENBQUMsWUFBSCxHQUFrQjtJQUNsQixFQUFFLENBQUMsVUFBSCxHQUFnQjtJQUNoQixRQUFBLENBQUE7RUEzQjRCLENBRGhDO0FBQUEiLCJmaWxlIjoibWFpbi9tYWluLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAncG91bmNlJ1xuICAuY29udHJvbGxlciAnTWFpbkNvbnRyb2xsZXInLCAoJHRpbWVvdXQsIHdlYkRldlRlYywgdG9hc3RyKSAtPlxuICAgICduZ0luamVjdCdcbiAgICB2bSA9IHRoaXNcbiAgICBhY3RpdmF0ZSA9IC0+XG4gICAgICBnZXRXZWJEZXZUZWMoKVxuICAgICAgJHRpbWVvdXQgKC0+XG4gICAgICAgIHZtLmNsYXNzQW5pbWF0aW9uID0gJ3J1YmJlckJhbmQnXG4gICAgICAgIHJldHVyblxuICAgICAgKSwgNDAwMFxuICAgICAgcmV0dXJuXG5cbiAgICBzaG93VG9hc3RyID0gLT5cbiAgICAgIHRvYXN0ci5pbmZvICdGb3JrIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vU3dpaXAvZ2VuZXJhdG9yLWd1bHAtYW5ndWxhclwiIHRhcmdldD1cIl9ibGFua1wiPjxiPmdlbmVyYXRvci1ndWxwLWFuZ3VsYXI8L2I+PC9hPidcbiAgICAgIHZtLmNsYXNzQW5pbWF0aW9uID0gJydcbiAgICAgIHJldHVyblxuXG4gICAgZ2V0V2ViRGV2VGVjID0gLT5cbiAgICAgIHZtLmF3ZXNvbWVUaGluZ3MgPSB3ZWJEZXZUZWMuZ2V0VGVjKClcbiAgICAgIGFuZ3VsYXIuZm9yRWFjaCB2bS5hd2Vzb21lVGhpbmdzLCAoYXdlc29tZVRoaW5nKSAtPlxuICAgICAgICBhd2Vzb21lVGhpbmcucmFuayA9IE1hdGgucmFuZG9tKClcbiAgICAgICAgcmV0dXJuXG4gICAgICByZXR1cm5cblxuICAgIHZtLmF3ZXNvbWVUaGluZ3MgPSBbXVxuICAgIHZtLmNsYXNzQW5pbWF0aW9uID0gJydcbiAgICB2bS5jcmVhdGlvbkRhdGUgPSAxNDQ3NzMyMzc3MzgyXG4gICAgdm0uc2hvd1RvYXN0ciA9IHNob3dUb2FzdHJcbiAgICBhY3RpdmF0ZSgpXG4gICAgcmV0dXJuXG4iXX0=
