(function() {
  angular.module('pounce').directive('acmeMalarkey', function() {
    var MalarkeyController, directive, linkFunc;
    MalarkeyController = function($log, githubContributor) {
      'ngInject';
      var activate, getContributors, vm;
      vm = this;
      activate = function() {
        return getContributors().then(function() {
          $log.info('Activated Contributors View');
        });
      };
      getContributors = function() {
        return githubContributor.getContributors(10).then(function(data) {
          vm.contributors = data;
          return vm.contributors;
        });
      };
      vm.contributors = [];
      activate();
    };
    linkFunc = function(scope, el, attr, vm) {
      var typist, watcher;
      watcher = void 0;
      typist = malarkey(el[0], {
        typeSpeed: 40,
        deleteSpeed: 40,
        pauseDelay: 800,
        loop: true,
        postfix: ' '
      });
      el.addClass('acme-malarkey');
      angular.forEach(scope.extraValues, function(value) {
        typist.type(value).pause()["delete"]();
      });
      watcher = scope.$watch('vm.contributors', function() {
        angular.forEach(vm.contributors, function(contributor) {
          typist.type(contributor.login).pause()["delete"]();
        });
      });
      scope.$on('$destroy', function() {
        watcher();
      });
    };
    return directive = {
      restrict: 'E',
      scope: {
        extraValues: '='
      },
      template: '&nbsp;',
      link: linkFunc,
      controller: MalarkeyController,
      controllerAs: 'vm'
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsUUFBZixDQUNFLENBQUMsU0FESCxDQUNhLGNBRGIsRUFDNkIsU0FBQTtBQUV6QixRQUFBO0lBQUEsa0JBQUEsR0FBcUIsU0FBQyxJQUFELEVBQU8saUJBQVA7TUFDbkI7QUFBQSxVQUFBO01BQ0EsRUFBQSxHQUFLO01BRUwsUUFBQSxHQUFXLFNBQUE7ZUFDVCxlQUFBLENBQUEsQ0FBaUIsQ0FBQyxJQUFsQixDQUF1QixTQUFBO1VBQ3JCLElBQUksQ0FBQyxJQUFMLENBQVUsNkJBQVY7UUFEcUIsQ0FBdkI7TUFEUztNQUtYLGVBQUEsR0FBa0IsU0FBQTtlQUNoQixpQkFBaUIsQ0FBQyxlQUFsQixDQUFrQyxFQUFsQyxDQUFxQyxDQUFDLElBQXRDLENBQTJDLFNBQUMsSUFBRDtVQUN6QyxFQUFFLENBQUMsWUFBSCxHQUFrQjtpQkFDbEIsRUFBRSxDQUFDO1FBRnNDLENBQTNDO01BRGdCO01BS2xCLEVBQUUsQ0FBQyxZQUFILEdBQWtCO01BQ2xCLFFBQUEsQ0FBQTtJQWZtQjtJQWtCckIsUUFBQSxHQUFXLFNBQUMsS0FBRCxFQUFRLEVBQVIsRUFBWSxJQUFaLEVBQWtCLEVBQWxCO0FBQ1QsVUFBQTtNQUFBLE9BQUEsR0FBVTtNQUNWLE1BQUEsR0FBUyxRQUFBLENBQVMsRUFBRyxDQUFBLENBQUEsQ0FBWixFQUNQO1FBQUEsU0FBQSxFQUFXLEVBQVg7UUFDQSxXQUFBLEVBQWEsRUFEYjtRQUVBLFVBQUEsRUFBWSxHQUZaO1FBR0EsSUFBQSxFQUFNLElBSE47UUFJQSxPQUFBLEVBQVMsR0FKVDtPQURPO01BTVQsRUFBRSxDQUFDLFFBQUgsQ0FBWSxlQUFaO01BQ0EsT0FBTyxDQUFDLE9BQVIsQ0FBZ0IsS0FBSyxDQUFDLFdBQXRCLEVBQW1DLFNBQUMsS0FBRDtRQUNqQyxNQUFNLENBQUMsSUFBUCxDQUFZLEtBQVosQ0FBa0IsQ0FBQyxLQUFuQixDQUFBLENBQTBCLENBQUMsUUFBRCxDQUExQixDQUFBO01BRGlDLENBQW5DO01BR0EsT0FBQSxHQUFVLEtBQUssQ0FBQyxNQUFOLENBQWEsaUJBQWIsRUFBZ0MsU0FBQTtRQUN4QyxPQUFPLENBQUMsT0FBUixDQUFnQixFQUFFLENBQUMsWUFBbkIsRUFBaUMsU0FBQyxXQUFEO1VBQy9CLE1BQU0sQ0FBQyxJQUFQLENBQVksV0FBVyxDQUFDLEtBQXhCLENBQThCLENBQUMsS0FBL0IsQ0FBQSxDQUFzQyxDQUFDLFFBQUQsQ0FBdEMsQ0FBQTtRQUQrQixDQUFqQztNQUR3QyxDQUFoQztNQU1WLEtBQUssQ0FBQyxHQUFOLENBQVUsVUFBVixFQUFzQixTQUFBO1FBQ3BCLE9BQUEsQ0FBQTtNQURvQixDQUF0QjtJQWxCUztXQXVCWCxTQUFBLEdBQ0U7TUFBQSxRQUFBLEVBQVUsR0FBVjtNQUNBLEtBQUEsRUFBTztRQUFBLFdBQUEsRUFBYSxHQUFiO09BRFA7TUFFQSxRQUFBLEVBQVUsUUFGVjtNQUdBLElBQUEsRUFBTSxRQUhOO01BSUEsVUFBQSxFQUFZLGtCQUpaO01BS0EsWUFBQSxFQUFjLElBTGQ7O0VBNUN1QixDQUQ3QjtBQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ3BvdW5jZSdcbiAgLmRpcmVjdGl2ZSAnYWNtZU1hbGFya2V5JywgLT5cblxuICAgIE1hbGFya2V5Q29udHJvbGxlciA9ICgkbG9nLCBnaXRodWJDb250cmlidXRvcikgLT5cbiAgICAgICduZ0luamVjdCdcbiAgICAgIHZtID0gdGhpc1xuXG4gICAgICBhY3RpdmF0ZSA9IC0+XG4gICAgICAgIGdldENvbnRyaWJ1dG9ycygpLnRoZW4gLT5cbiAgICAgICAgICAkbG9nLmluZm8gJ0FjdGl2YXRlZCBDb250cmlidXRvcnMgVmlldydcbiAgICAgICAgICByZXR1cm5cblxuICAgICAgZ2V0Q29udHJpYnV0b3JzID0gLT5cbiAgICAgICAgZ2l0aHViQ29udHJpYnV0b3IuZ2V0Q29udHJpYnV0b3JzKDEwKS50aGVuIChkYXRhKSAtPlxuICAgICAgICAgIHZtLmNvbnRyaWJ1dG9ycyA9IGRhdGFcbiAgICAgICAgICB2bS5jb250cmlidXRvcnNcblxuICAgICAgdm0uY29udHJpYnV0b3JzID0gW11cbiAgICAgIGFjdGl2YXRlKClcbiAgICAgIHJldHVyblxuXG4gICAgbGlua0Z1bmMgPSAoc2NvcGUsIGVsLCBhdHRyLCB2bSkgLT5cbiAgICAgIHdhdGNoZXIgPSB1bmRlZmluZWRcbiAgICAgIHR5cGlzdCA9IG1hbGFya2V5KGVsWzBdLFxuICAgICAgICB0eXBlU3BlZWQ6IDQwXG4gICAgICAgIGRlbGV0ZVNwZWVkOiA0MFxuICAgICAgICBwYXVzZURlbGF5OiA4MDBcbiAgICAgICAgbG9vcDogdHJ1ZVxuICAgICAgICBwb3N0Zml4OiAnICcpXG4gICAgICBlbC5hZGRDbGFzcyAnYWNtZS1tYWxhcmtleSdcbiAgICAgIGFuZ3VsYXIuZm9yRWFjaCBzY29wZS5leHRyYVZhbHVlcywgKHZhbHVlKSAtPlxuICAgICAgICB0eXBpc3QudHlwZSh2YWx1ZSkucGF1c2UoKS5kZWxldGUoKVxuICAgICAgICByZXR1cm5cbiAgICAgIHdhdGNoZXIgPSBzY29wZS4kd2F0Y2goJ3ZtLmNvbnRyaWJ1dG9ycycsIC0+XG4gICAgICAgIGFuZ3VsYXIuZm9yRWFjaCB2bS5jb250cmlidXRvcnMsIChjb250cmlidXRvcikgLT5cbiAgICAgICAgICB0eXBpc3QudHlwZShjb250cmlidXRvci5sb2dpbikucGF1c2UoKS5kZWxldGUoKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICByZXR1cm5cbiAgICAgIClcbiAgICAgIHNjb3BlLiRvbiAnJGRlc3Ryb3knLCAtPlxuICAgICAgICB3YXRjaGVyKClcbiAgICAgICAgcmV0dXJuXG4gICAgICByZXR1cm5cblxuICAgIGRpcmVjdGl2ZSA9XG4gICAgICByZXN0cmljdDogJ0UnXG4gICAgICBzY29wZTogZXh0cmFWYWx1ZXM6ICc9J1xuICAgICAgdGVtcGxhdGU6ICcmbmJzcDsnXG4gICAgICBsaW5rOiBsaW5rRnVuY1xuICAgICAgY29udHJvbGxlcjogTWFsYXJrZXlDb250cm9sbGVyXG4gICAgICBjb250cm9sbGVyQXM6ICd2bSdcbiJdfQ==
