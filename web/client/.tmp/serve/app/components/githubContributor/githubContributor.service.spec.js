(function() {
  describe('service githubContributor', function() {
    beforeEach(module('pounce'));
    it('should be registered', inject(function(githubContributor) {
      return expect(githubContributor).not.toEqual(null);
    }));
    describe('apiHost variable', function() {
      return it('should exist', inject(function(githubContributor) {
        return expect(githubContributor.apiHost).not.toEqual(null);
      }));
    });
    return describe('getContributors function', function() {
      it('should exist', inject(function(githubContributor) {
        return expect(githubContributor.getContributors).not.toEqual(null);
      }));
      it('should return data', inject(function(githubContributor, $httpBackend) {
        var data;
        $httpBackend.when('GET', githubContributor.apiHost + '/contributors?per_page=1').respond(200, [
          {
            pprt: 'value'
          }
        ]);
        data = void 0;
        githubContributor.getContributors(1).then(function(fetchedData) {
          return data = fetchedData;
        });
        $httpBackend.flush();
        expect(data).toEqual(jasmine.any(Array));
        expect(data.length === 1).toBeTruthy();
        return expect(data[0]).toEqual(jasmine.any(Object));
      }));
      it('should define a limit per page as default value', inject(function(githubContributor, $httpBackend) {
        var data;
        $httpBackend.when('GET', githubContributor.apiHost + '/contributors?per_page=30').respond(200, new Array(30));
        data = void 0;
        githubContributor.getContributors().then(function(fetchedData) {
          return data = fetchedData;
        });
        $httpBackend.flush();
        expect(data).toEqual(jasmine.any(Array));
        return expect(data.length === 30).toBeTruthy();
      }));
      return it('should log a error', inject(function(githubContributor, $httpBackend, $log) {
        $httpBackend.when('GET', githubContributor.apiHost + '/contributors?per_page=1').respond(500);
        githubContributor.getContributors(1);
        $httpBackend.flush();
        return expect($log.error.logs).toEqual(jasmine.stringMatching('XHR Failed for'));
      }));
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ2l0aHViQ29udHJpYnV0b3IvZ2l0aHViQ29udHJpYnV0b3Iuc2VydmljZS5zcGVjLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLFFBQUEsQ0FBUywyQkFBVCxFQUFzQyxTQUFBO0lBRXBDLFVBQUEsQ0FBVyxNQUFBLENBQU8sUUFBUCxDQUFYO0lBRUEsRUFBQSxDQUFHLHNCQUFILEVBQTJCLE1BQUEsQ0FBTyxTQUFDLGlCQUFEO2FBQ2hDLE1BQUEsQ0FBTyxpQkFBUCxDQUF5QixDQUFDLEdBQUcsQ0FBQyxPQUE5QixDQUFzQyxJQUF0QztJQURnQyxDQUFQLENBQTNCO0lBR0EsUUFBQSxDQUFTLGtCQUFULEVBQTZCLFNBQUE7YUFDM0IsRUFBQSxDQUFHLGNBQUgsRUFBbUIsTUFBQSxDQUFPLFNBQUMsaUJBQUQ7ZUFDeEIsTUFBQSxDQUFPLGlCQUFpQixDQUFDLE9BQXpCLENBQWlDLENBQUMsR0FBRyxDQUFDLE9BQXRDLENBQThDLElBQTlDO01BRHdCLENBQVAsQ0FBbkI7SUFEMkIsQ0FBN0I7V0FJQSxRQUFBLENBQVMsMEJBQVQsRUFBcUMsU0FBQTtNQUNuQyxFQUFBLENBQUcsY0FBSCxFQUFtQixNQUFBLENBQU8sU0FBQyxpQkFBRDtlQUN4QixNQUFBLENBQU8saUJBQWlCLENBQUMsZUFBekIsQ0FBeUMsQ0FBQyxHQUFHLENBQUMsT0FBOUMsQ0FBc0QsSUFBdEQ7TUFEd0IsQ0FBUCxDQUFuQjtNQUdBLEVBQUEsQ0FBRyxvQkFBSCxFQUF5QixNQUFBLENBQU8sU0FBQyxpQkFBRCxFQUFvQixZQUFwQjtBQUM5QixZQUFBO1FBQUEsWUFBWSxDQUFDLElBQWIsQ0FBa0IsS0FBbEIsRUFBMEIsaUJBQWlCLENBQUMsT0FBbEIsR0FBNEIsMEJBQXRELENBQWlGLENBQUMsT0FBbEYsQ0FBMEYsR0FBMUYsRUFBK0Y7VUFBQztZQUFDLElBQUEsRUFBTSxPQUFQO1dBQUQ7U0FBL0Y7UUFDQSxJQUFBLEdBQU87UUFDUCxpQkFBaUIsQ0FBQyxlQUFsQixDQUFrQyxDQUFsQyxDQUFvQyxDQUFDLElBQXJDLENBQTBDLFNBQUMsV0FBRDtpQkFDeEMsSUFBQSxHQUFPO1FBRGlDLENBQTFDO1FBRUEsWUFBWSxDQUFDLEtBQWIsQ0FBQTtRQUNBLE1BQUEsQ0FBTyxJQUFQLENBQVksQ0FBQyxPQUFiLENBQXFCLE9BQU8sQ0FBQyxHQUFSLENBQVksS0FBWixDQUFyQjtRQUNBLE1BQUEsQ0FBTyxJQUFJLENBQUMsTUFBTCxLQUFlLENBQXRCLENBQXdCLENBQUMsVUFBekIsQ0FBQTtlQUNBLE1BQUEsQ0FBTyxJQUFLLENBQUEsQ0FBQSxDQUFaLENBQWUsQ0FBQyxPQUFoQixDQUF3QixPQUFPLENBQUMsR0FBUixDQUFZLE1BQVosQ0FBeEI7TUFSOEIsQ0FBUCxDQUF6QjtNQVVBLEVBQUEsQ0FBRyxpREFBSCxFQUFzRCxNQUFBLENBQU8sU0FBQyxpQkFBRCxFQUFvQixZQUFwQjtBQUMzRCxZQUFBO1FBQUEsWUFBWSxDQUFDLElBQWIsQ0FBa0IsS0FBbEIsRUFBMEIsaUJBQWlCLENBQUMsT0FBbEIsR0FBNEIsMkJBQXRELENBQWtGLENBQUMsT0FBbkYsQ0FBMkYsR0FBM0YsRUFBb0csSUFBQSxLQUFBLENBQU0sRUFBTixDQUFwRztRQUNBLElBQUEsR0FBTztRQUNQLGlCQUFpQixDQUFDLGVBQWxCLENBQUEsQ0FBbUMsQ0FBQyxJQUFwQyxDQUF5QyxTQUFDLFdBQUQ7aUJBQ3ZDLElBQUEsR0FBTztRQURnQyxDQUF6QztRQUVBLFlBQVksQ0FBQyxLQUFiLENBQUE7UUFDQSxNQUFBLENBQU8sSUFBUCxDQUFZLENBQUMsT0FBYixDQUFxQixPQUFPLENBQUMsR0FBUixDQUFZLEtBQVosQ0FBckI7ZUFDQSxNQUFBLENBQU8sSUFBSSxDQUFDLE1BQUwsS0FBZSxFQUF0QixDQUF5QixDQUFDLFVBQTFCLENBQUE7TUFQMkQsQ0FBUCxDQUF0RDthQVNBLEVBQUEsQ0FBRyxvQkFBSCxFQUF5QixNQUFBLENBQU8sU0FBQyxpQkFBRCxFQUFvQixZQUFwQixFQUFrQyxJQUFsQztRQUM5QixZQUFZLENBQUMsSUFBYixDQUFrQixLQUFsQixFQUEwQixpQkFBaUIsQ0FBQyxPQUFsQixHQUE0QiwwQkFBdEQsQ0FBaUYsQ0FBQyxPQUFsRixDQUEwRixHQUExRjtRQUNBLGlCQUFpQixDQUFDLGVBQWxCLENBQWtDLENBQWxDO1FBQ0EsWUFBWSxDQUFDLEtBQWIsQ0FBQTtlQUNBLE1BQUEsQ0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQWxCLENBQXVCLENBQUMsT0FBeEIsQ0FBZ0MsT0FBTyxDQUFDLGNBQVIsQ0FBdUIsZ0JBQXZCLENBQWhDO01BSjhCLENBQVAsQ0FBekI7SUF2Qm1DLENBQXJDO0VBWG9DLENBQXRDO0FBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9naXRodWJDb250cmlidXRvci9naXRodWJDb250cmlidXRvci5zZXJ2aWNlLnNwZWMuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJkZXNjcmliZSAnc2VydmljZSBnaXRodWJDb250cmlidXRvcicsICgpIC0+XG5cbiAgYmVmb3JlRWFjaCBtb2R1bGUgJ3BvdW5jZSdcblxuICBpdCAnc2hvdWxkIGJlIHJlZ2lzdGVyZWQnLCBpbmplY3QgKGdpdGh1YkNvbnRyaWJ1dG9yKSAtPlxuICAgIGV4cGVjdChnaXRodWJDb250cmlidXRvcikubm90LnRvRXF1YWwgbnVsbFxuXG4gIGRlc2NyaWJlICdhcGlIb3N0IHZhcmlhYmxlJywgKCkgLT5cbiAgICBpdCAnc2hvdWxkIGV4aXN0JywgaW5qZWN0IChnaXRodWJDb250cmlidXRvcikgLT5cbiAgICAgIGV4cGVjdChnaXRodWJDb250cmlidXRvci5hcGlIb3N0KS5ub3QudG9FcXVhbCBudWxsXG5cbiAgZGVzY3JpYmUgJ2dldENvbnRyaWJ1dG9ycyBmdW5jdGlvbicsICgpIC0+XG4gICAgaXQgJ3Nob3VsZCBleGlzdCcsIGluamVjdCAoZ2l0aHViQ29udHJpYnV0b3IpIC0+XG4gICAgICBleHBlY3QoZ2l0aHViQ29udHJpYnV0b3IuZ2V0Q29udHJpYnV0b3JzKS5ub3QudG9FcXVhbCBudWxsXG5cbiAgICBpdCAnc2hvdWxkIHJldHVybiBkYXRhJywgaW5qZWN0IChnaXRodWJDb250cmlidXRvciwgJGh0dHBCYWNrZW5kKSAtPlxuICAgICAgJGh0dHBCYWNrZW5kLndoZW4oJ0dFVCcsICBnaXRodWJDb250cmlidXRvci5hcGlIb3N0ICsgJy9jb250cmlidXRvcnM/cGVyX3BhZ2U9MScpLnJlc3BvbmQgMjAwLCBbe3BwcnQ6ICd2YWx1ZSd9XVxuICAgICAgZGF0YSA9IHVuZGVmaW5lZFxuICAgICAgZ2l0aHViQ29udHJpYnV0b3IuZ2V0Q29udHJpYnV0b3JzKDEpLnRoZW4gKGZldGNoZWREYXRhKSAtPlxuICAgICAgICBkYXRhID0gZmV0Y2hlZERhdGFcbiAgICAgICRodHRwQmFja2VuZC5mbHVzaCgpXG4gICAgICBleHBlY3QoZGF0YSkudG9FcXVhbCBqYXNtaW5lLmFueSBBcnJheVxuICAgICAgZXhwZWN0KGRhdGEubGVuZ3RoID09IDEpLnRvQmVUcnV0aHkoKVxuICAgICAgZXhwZWN0KGRhdGFbMF0pLnRvRXF1YWwgamFzbWluZS5hbnkgT2JqZWN0XG5cbiAgICBpdCAnc2hvdWxkIGRlZmluZSBhIGxpbWl0IHBlciBwYWdlIGFzIGRlZmF1bHQgdmFsdWUnLCBpbmplY3QgKGdpdGh1YkNvbnRyaWJ1dG9yLCAkaHR0cEJhY2tlbmQpIC0+XG4gICAgICAkaHR0cEJhY2tlbmQud2hlbignR0VUJywgIGdpdGh1YkNvbnRyaWJ1dG9yLmFwaUhvc3QgKyAnL2NvbnRyaWJ1dG9ycz9wZXJfcGFnZT0zMCcpLnJlc3BvbmQgMjAwLCBuZXcgQXJyYXkoMzApXG4gICAgICBkYXRhID0gdW5kZWZpbmVkXG4gICAgICBnaXRodWJDb250cmlidXRvci5nZXRDb250cmlidXRvcnMoKS50aGVuIChmZXRjaGVkRGF0YSkgLT5cbiAgICAgICAgZGF0YSA9IGZldGNoZWREYXRhXG4gICAgICAkaHR0cEJhY2tlbmQuZmx1c2goKVxuICAgICAgZXhwZWN0KGRhdGEpLnRvRXF1YWwgamFzbWluZS5hbnkgQXJyYXlcbiAgICAgIGV4cGVjdChkYXRhLmxlbmd0aCA9PSAzMCkudG9CZVRydXRoeSgpXG5cbiAgICBpdCAnc2hvdWxkIGxvZyBhIGVycm9yJywgaW5qZWN0IChnaXRodWJDb250cmlidXRvciwgJGh0dHBCYWNrZW5kLCAkbG9nKSAtPlxuICAgICAgJGh0dHBCYWNrZW5kLndoZW4oJ0dFVCcsICBnaXRodWJDb250cmlidXRvci5hcGlIb3N0ICsgJy9jb250cmlidXRvcnM/cGVyX3BhZ2U9MScpLnJlc3BvbmQgNTAwXG4gICAgICBnaXRodWJDb250cmlidXRvci5nZXRDb250cmlidXRvcnMgMVxuICAgICAgJGh0dHBCYWNrZW5kLmZsdXNoKClcbiAgICAgIGV4cGVjdCgkbG9nLmVycm9yLmxvZ3MpLnRvRXF1YWwgamFzbWluZS5zdHJpbmdNYXRjaGluZyAnWEhSIEZhaWxlZCBmb3InXG4iXX0=
