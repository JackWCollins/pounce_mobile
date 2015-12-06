
/*
@todo Complete the test
This example is not perfect.
The `link` function is not tested.
(malarkey usage, addClass, $watch, $destroy)
 */

(function() {
  describe('directive malarkey', function() {
    var element, vm;
    vm = void 0;
    element = element;
    beforeEach(module('pounce'));
    beforeEach(inject(function($compile, $rootScope, githubContributor, $q) {
      spyOn(githubContributor, 'getContributors').and.callFake(function() {
        return $q.when([{}, {}, {}, {}, {}, {}]);
      });
      element = angular.element('<acme-malarkey extra-values="[\'Poney\', \'Monkey\']"></acme-malarkey>');
      $compile(element)($rootScope.$new());
      $rootScope.$digest();
      return vm = element.isolateScope().vm;
    }));
    it('should be compiled', function() {
      return expect(element.html()).not.toEqual(null);
    });
    it('should have isolate scope object with instanciate members', function() {
      expect(vm).toEqual(jasmine.any(Object));
      expect(vm.contributors).toEqual(jasmine.any(Array));
      return expect(vm.contributors.length).toEqual(6);
    });
    return it('should log a info', inject(function($log) {
      return expect($log.info.logs).toEqual(jasmine.stringMatching('Activated Contributors View'));
    }));
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLnNwZWMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7OztBQUFBO0VBTUEsUUFBQSxDQUFTLG9CQUFULEVBQStCLFNBQUE7QUFDN0IsUUFBQTtJQUFBLEVBQUEsR0FBSztJQUNMLE9BQUEsR0FBVTtJQUVWLFVBQUEsQ0FBVyxNQUFBLENBQU8sUUFBUCxDQUFYO0lBRUEsVUFBQSxDQUFXLE1BQUEsQ0FBTyxTQUFDLFFBQUQsRUFBVyxVQUFYLEVBQXVCLGlCQUF2QixFQUEwQyxFQUExQztNQUNoQixLQUFBLENBQU0saUJBQU4sRUFBeUIsaUJBQXpCLENBQTJDLENBQUMsR0FBRyxDQUFDLFFBQWhELENBQXlELFNBQUE7ZUFDdkQsRUFBRSxDQUFDLElBQUgsQ0FBUSxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxFQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUIsRUFBckIsQ0FBUjtNQUR1RCxDQUF6RDtNQUdBLE9BQUEsR0FBVSxPQUFPLENBQUMsT0FBUixDQUFnQix3RUFBaEI7TUFFVixRQUFBLENBQVMsT0FBVCxDQUFBLENBQWtCLFVBQVUsQ0FBQyxJQUFYLENBQUEsQ0FBbEI7TUFDQSxVQUFVLENBQUMsT0FBWCxDQUFBO2FBQ0EsRUFBQSxHQUFLLE9BQU8sQ0FBQyxZQUFSLENBQUEsQ0FBc0IsQ0FBQztJQVJaLENBQVAsQ0FBWDtJQVVBLEVBQUEsQ0FBRyxvQkFBSCxFQUF5QixTQUFBO2FBQ3ZCLE1BQUEsQ0FBTyxPQUFPLENBQUMsSUFBUixDQUFBLENBQVAsQ0FBc0IsQ0FBQyxHQUFHLENBQUMsT0FBM0IsQ0FBbUMsSUFBbkM7SUFEdUIsQ0FBekI7SUFHQSxFQUFBLENBQUcsMkRBQUgsRUFBZ0UsU0FBQTtNQUM5RCxNQUFBLENBQU8sRUFBUCxDQUFVLENBQUMsT0FBWCxDQUFtQixPQUFPLENBQUMsR0FBUixDQUFZLE1BQVosQ0FBbkI7TUFFQSxNQUFBLENBQU8sRUFBRSxDQUFDLFlBQVYsQ0FBdUIsQ0FBQyxPQUF4QixDQUFnQyxPQUFPLENBQUMsR0FBUixDQUFZLEtBQVosQ0FBaEM7YUFDQSxNQUFBLENBQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxNQUF2QixDQUE4QixDQUFDLE9BQS9CLENBQXVDLENBQXZDO0lBSjhELENBQWhFO1dBTUEsRUFBQSxDQUFHLG1CQUFILEVBQXdCLE1BQUEsQ0FBTyxTQUFDLElBQUQ7YUFDN0IsTUFBQSxDQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBakIsQ0FBc0IsQ0FBQyxPQUF2QixDQUErQixPQUFPLENBQUMsY0FBUixDQUF1Qiw2QkFBdkIsQ0FBL0I7SUFENkIsQ0FBUCxDQUF4QjtFQXpCNkIsQ0FBL0I7QUFOQSIsImZpbGUiOiJjb21wb25lbnRzL21hbGFya2V5L21hbGFya2V5LmRpcmVjdGl2ZS5zcGVjLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiIyMjXG5AdG9kbyBDb21wbGV0ZSB0aGUgdGVzdFxuVGhpcyBleGFtcGxlIGlzIG5vdCBwZXJmZWN0LlxuVGhlIGBsaW5rYCBmdW5jdGlvbiBpcyBub3QgdGVzdGVkLlxuKG1hbGFya2V5IHVzYWdlLCBhZGRDbGFzcywgJHdhdGNoLCAkZGVzdHJveSlcbiMjI1xuZGVzY3JpYmUgJ2RpcmVjdGl2ZSBtYWxhcmtleScsICgpIC0+XG4gIHZtID0gdW5kZWZpbmVkXG4gIGVsZW1lbnQgPSBlbGVtZW50XG5cbiAgYmVmb3JlRWFjaCBtb2R1bGUgJ3BvdW5jZSdcblxuICBiZWZvcmVFYWNoIGluamVjdCAoJGNvbXBpbGUsICRyb290U2NvcGUsIGdpdGh1YkNvbnRyaWJ1dG9yLCAkcSkgLT5cbiAgICBzcHlPbihnaXRodWJDb250cmlidXRvciwgJ2dldENvbnRyaWJ1dG9ycycpLmFuZC5jYWxsRmFrZSAoKSAtPlxuICAgICAgJHEud2hlbiBbe30sIHt9LCB7fSwge30sIHt9LCB7fV1cblxuICAgIGVsZW1lbnQgPSBhbmd1bGFyLmVsZW1lbnQgJzxhY21lLW1hbGFya2V5IGV4dHJhLXZhbHVlcz1cIltcXCdQb25leVxcJywgXFwnTW9ua2V5XFwnXVwiPjwvYWNtZS1tYWxhcmtleT4nXG5cbiAgICAkY29tcGlsZShlbGVtZW50KSAkcm9vdFNjb3BlLiRuZXcoKVxuICAgICRyb290U2NvcGUuJGRpZ2VzdCgpXG4gICAgdm0gPSBlbGVtZW50Lmlzb2xhdGVTY29wZSgpLnZtXG5cbiAgaXQgJ3Nob3VsZCBiZSBjb21waWxlZCcsICgpIC0+XG4gICAgZXhwZWN0KGVsZW1lbnQuaHRtbCgpKS5ub3QudG9FcXVhbCBudWxsXG5cbiAgaXQgJ3Nob3VsZCBoYXZlIGlzb2xhdGUgc2NvcGUgb2JqZWN0IHdpdGggaW5zdGFuY2lhdGUgbWVtYmVycycsICgpIC0+XG4gICAgZXhwZWN0KHZtKS50b0VxdWFsIGphc21pbmUuYW55IE9iamVjdFxuXG4gICAgZXhwZWN0KHZtLmNvbnRyaWJ1dG9ycykudG9FcXVhbCBqYXNtaW5lLmFueSBBcnJheVxuICAgIGV4cGVjdCh2bS5jb250cmlidXRvcnMubGVuZ3RoKS50b0VxdWFsIDZcblxuICBpdCAnc2hvdWxkIGxvZyBhIGluZm8nLCBpbmplY3QgKCRsb2cpIC0+XG4gICAgZXhwZWN0KCRsb2cuaW5mby5sb2dzKS50b0VxdWFsIGphc21pbmUuc3RyaW5nTWF0Y2hpbmcgJ0FjdGl2YXRlZCBDb250cmlidXRvcnMgVmlldydcbiJdfQ==
