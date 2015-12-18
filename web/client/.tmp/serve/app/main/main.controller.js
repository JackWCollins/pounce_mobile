(function() {
  angular.module('pounce').controller('MainController', function($timeout, webDevTec, toastr, relationshipService, $stateParams) {
    'ngInject';
    var activate, getClients, getWebDevTec, showToastr, vm;
    vm = this;
    console.log("In main controller with stateParams: ", $stateParams);
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
    getClients = function() {
      return vm.clients = relationshipService.all();
    };
    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1447732377382;
    vm.showToastr = showToastr;
    getClients();
    vm.currentClient = {
      id: $stateParams.clientId
    };
    console.log("Current client: ", vm.currentClient);
    activate();
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4vbWFpbi5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsUUFBZixDQUNFLENBQUMsVUFESCxDQUNjLGdCQURkLEVBQ2dDLFNBQUMsUUFBRCxFQUFXLFNBQVgsRUFBc0IsTUFBdEIsRUFBOEIsbUJBQTlCLEVBQW1ELFlBQW5EO0lBQzVCO0FBQUEsUUFBQTtJQUNBLEVBQUEsR0FBSztJQUVMLE9BQU8sQ0FBQyxHQUFSLENBQVksdUNBQVosRUFBcUQsWUFBckQ7SUFFQSxRQUFBLEdBQVcsU0FBQTtNQUNULFlBQUEsQ0FBQTtNQUNBLFFBQUEsQ0FBUyxDQUFDLFNBQUE7UUFDUixFQUFFLENBQUMsY0FBSCxHQUFvQjtNQURaLENBQUQsQ0FBVCxFQUdHLElBSEg7SUFGUztJQVFYLFVBQUEsR0FBYSxTQUFBO01BQ1gsTUFBTSxDQUFDLElBQVAsQ0FBWSxrSEFBWjtNQUNBLEVBQUUsQ0FBQyxjQUFILEdBQW9CO0lBRlQ7SUFLYixZQUFBLEdBQWUsU0FBQTtNQUNiLEVBQUUsQ0FBQyxhQUFILEdBQW1CLFNBQVMsQ0FBQyxNQUFWLENBQUE7TUFDbkIsT0FBTyxDQUFDLE9BQVIsQ0FBZ0IsRUFBRSxDQUFDLGFBQW5CLEVBQWtDLFNBQUMsWUFBRDtRQUNoQyxZQUFZLENBQUMsSUFBYixHQUFvQixJQUFJLENBQUMsTUFBTCxDQUFBO01BRFksQ0FBbEM7SUFGYTtJQU9mLFVBQUEsR0FBYSxTQUFBO2FBQ1gsRUFBRSxDQUFDLE9BQUgsR0FBYSxtQkFBbUIsQ0FBQyxHQUFwQixDQUFBO0lBREY7SUFHYixFQUFFLENBQUMsYUFBSCxHQUFtQjtJQUNuQixFQUFFLENBQUMsY0FBSCxHQUFvQjtJQUNwQixFQUFFLENBQUMsWUFBSCxHQUFrQjtJQUNsQixFQUFFLENBQUMsVUFBSCxHQUFnQjtJQUNoQixVQUFBLENBQUE7SUFDQSxFQUFFLENBQUMsYUFBSCxHQUFtQjtNQUFDLEVBQUEsRUFBSSxZQUFZLENBQUMsUUFBbEI7O0lBQ25CLE9BQU8sQ0FBQyxHQUFSLENBQVksa0JBQVosRUFBZ0MsRUFBRSxDQUFDLGFBQW5DO0lBQ0EsUUFBQSxDQUFBO0VBcEM0QixDQURoQztBQUFBIiwiZmlsZSI6Im1haW4vbWFpbi5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ3BvdW5jZSdcbiAgLmNvbnRyb2xsZXIgJ01haW5Db250cm9sbGVyJywgKCR0aW1lb3V0LCB3ZWJEZXZUZWMsIHRvYXN0ciwgcmVsYXRpb25zaGlwU2VydmljZSwgJHN0YXRlUGFyYW1zKSAtPlxuICAgICduZ0luamVjdCdcbiAgICB2bSA9IHRoaXNcblxuICAgIGNvbnNvbGUubG9nIFwiSW4gbWFpbiBjb250cm9sbGVyIHdpdGggc3RhdGVQYXJhbXM6IFwiLCAkc3RhdGVQYXJhbXNcblxuICAgIGFjdGl2YXRlID0gLT5cbiAgICAgIGdldFdlYkRldlRlYygpXG4gICAgICAkdGltZW91dCAoLT5cbiAgICAgICAgdm0uY2xhc3NBbmltYXRpb24gPSAncnViYmVyQmFuZCdcbiAgICAgICAgcmV0dXJuXG4gICAgICApLCA0MDAwXG4gICAgICByZXR1cm5cblxuICAgIHNob3dUb2FzdHIgPSAtPlxuICAgICAgdG9hc3RyLmluZm8gJ0ZvcmsgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9Td2lpcC9nZW5lcmF0b3ItZ3VscC1hbmd1bGFyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PGI+Z2VuZXJhdG9yLWd1bHAtYW5ndWxhcjwvYj48L2E+J1xuICAgICAgdm0uY2xhc3NBbmltYXRpb24gPSAnJ1xuICAgICAgcmV0dXJuXG5cbiAgICBnZXRXZWJEZXZUZWMgPSAtPlxuICAgICAgdm0uYXdlc29tZVRoaW5ncyA9IHdlYkRldlRlYy5nZXRUZWMoKVxuICAgICAgYW5ndWxhci5mb3JFYWNoIHZtLmF3ZXNvbWVUaGluZ3MsIChhd2Vzb21lVGhpbmcpIC0+XG4gICAgICAgIGF3ZXNvbWVUaGluZy5yYW5rID0gTWF0aC5yYW5kb20oKVxuICAgICAgICByZXR1cm5cbiAgICAgIHJldHVyblxuXG4gICAgZ2V0Q2xpZW50cyA9IC0+XG4gICAgICB2bS5jbGllbnRzID0gcmVsYXRpb25zaGlwU2VydmljZS5hbGwoKVxuXG4gICAgdm0uYXdlc29tZVRoaW5ncyA9IFtdXG4gICAgdm0uY2xhc3NBbmltYXRpb24gPSAnJ1xuICAgIHZtLmNyZWF0aW9uRGF0ZSA9IDE0NDc3MzIzNzczODJcbiAgICB2bS5zaG93VG9hc3RyID0gc2hvd1RvYXN0clxuICAgIGdldENsaWVudHMoKVxuICAgIHZtLmN1cnJlbnRDbGllbnQgPSB7aWQ6ICRzdGF0ZVBhcmFtcy5jbGllbnRJZH0gIyBUaGlzIGRvZXNuJ3Qgd29yayAtIEkgY2FuJ3QgZ2V0IHRoZSBjbGllbnRJZCBmcm9tIHBhcmVudCBzdGF0ZVxuICAgIGNvbnNvbGUubG9nIFwiQ3VycmVudCBjbGllbnQ6IFwiLCB2bS5jdXJyZW50Q2xpZW50XG4gICAgYWN0aXZhdGUoKVxuICAgIHJldHVyblxuIl19
