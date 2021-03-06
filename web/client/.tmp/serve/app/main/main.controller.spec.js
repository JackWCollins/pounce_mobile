(function() {
  describe('controllers', function() {
    var vm;
    vm = void 0;
    beforeEach(module('pounce'));
    beforeEach(inject(function($controller, webDevTec, toastr) {
      spyOn(webDevTec, 'getTec').and.returnValue([{}, {}, {}, {}, {}]);
      spyOn(toastr, 'info').and.callThrough();
      return vm = $controller('MainController');
    }));
    it('should have a timestamp creation date', function() {
      return expect(vm.creationDate).toEqual(jasmine.any(Number));
    });
    it('should define animate class after delaying timeout ', inject(function($timeout) {
      $timeout.flush();
      return expect(vm.classAnimation).toEqual('rubberBand');
    }));
    it('should show a Toastr info and stop animation when invoke showToastr()', inject(function(toastr) {
      vm.showToastr();
      expect(toastr.info).toHaveBeenCalled();
      return expect(vm.classAnimation).toEqual('');
    }));
    return it('should define more than 5 awesome things', function() {
      expect(angular.isArray(vm.awesomeThings)).toBeTruthy();
      return expect(vm.awesomeThings.length === 5).toBeTruthy();
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4vbWFpbi5jb250cm9sbGVyLnNwZWMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsUUFBQSxDQUFTLGFBQVQsRUFBd0IsU0FBQTtBQUN0QixRQUFBO0lBQUEsRUFBQSxHQUFLO0lBRUwsVUFBQSxDQUFXLE1BQUEsQ0FBTyxRQUFQLENBQVg7SUFFQSxVQUFBLENBQVcsTUFBQSxDQUFPLFNBQUMsV0FBRCxFQUFjLFNBQWQsRUFBeUIsTUFBekI7TUFDaEIsS0FBQSxDQUFNLFNBQU4sRUFBaUIsUUFBakIsQ0FBMEIsQ0FBQyxHQUFHLENBQUMsV0FBL0IsQ0FBMkMsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLENBQTNDO01BQ0EsS0FBQSxDQUFNLE1BQU4sRUFBYyxNQUFkLENBQXFCLENBQUMsR0FBRyxDQUFDLFdBQTFCLENBQUE7YUFDQSxFQUFBLEdBQUssV0FBQSxDQUFZLGdCQUFaO0lBSFcsQ0FBUCxDQUFYO0lBS0EsRUFBQSxDQUFHLHVDQUFILEVBQTRDLFNBQUE7YUFDMUMsTUFBQSxDQUFPLEVBQUUsQ0FBQyxZQUFWLENBQXVCLENBQUMsT0FBeEIsQ0FBZ0MsT0FBTyxDQUFDLEdBQVIsQ0FBWSxNQUFaLENBQWhDO0lBRDBDLENBQTVDO0lBR0EsRUFBQSxDQUFHLHFEQUFILEVBQTBELE1BQUEsQ0FBTyxTQUFDLFFBQUQ7TUFDL0QsUUFBUSxDQUFDLEtBQVQsQ0FBQTthQUNBLE1BQUEsQ0FBTyxFQUFFLENBQUMsY0FBVixDQUF5QixDQUFDLE9BQTFCLENBQWtDLFlBQWxDO0lBRitELENBQVAsQ0FBMUQ7SUFJQSxFQUFBLENBQUcsdUVBQUgsRUFBNEUsTUFBQSxDQUFPLFNBQUMsTUFBRDtNQUNqRixFQUFFLENBQUMsVUFBSCxDQUFBO01BQ0EsTUFBQSxDQUFPLE1BQU0sQ0FBQyxJQUFkLENBQW1CLENBQUMsZ0JBQXBCLENBQUE7YUFDQSxNQUFBLENBQU8sRUFBRSxDQUFDLGNBQVYsQ0FBeUIsQ0FBQyxPQUExQixDQUFrQyxFQUFsQztJQUhpRixDQUFQLENBQTVFO1dBS0EsRUFBQSxDQUFHLDBDQUFILEVBQStDLFNBQUE7TUFDN0MsTUFBQSxDQUFPLE9BQU8sQ0FBQyxPQUFSLENBQWdCLEVBQUUsQ0FBQyxhQUFuQixDQUFQLENBQXlDLENBQUMsVUFBMUMsQ0FBQTthQUNBLE1BQUEsQ0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDLE1BQWpCLEtBQTJCLENBQWxDLENBQW9DLENBQUMsVUFBckMsQ0FBQTtJQUY2QyxDQUEvQztFQXRCc0IsQ0FBeEI7QUFBQSIsImZpbGUiOiJtYWluL21haW4uY29udHJvbGxlci5zcGVjLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiZGVzY3JpYmUgJ2NvbnRyb2xsZXJzJywgKCkgLT5cbiAgdm0gPSB1bmRlZmluZWRcblxuICBiZWZvcmVFYWNoIG1vZHVsZSAncG91bmNlJ1xuXG4gIGJlZm9yZUVhY2ggaW5qZWN0ICgkY29udHJvbGxlciwgd2ViRGV2VGVjLCB0b2FzdHIpIC0+XG4gICAgc3B5T24od2ViRGV2VGVjLCAnZ2V0VGVjJykuYW5kLnJldHVyblZhbHVlIFt7fSwge30sIHt9LCB7fSwge31dXG4gICAgc3B5T24odG9hc3RyLCAnaW5mbycpLmFuZC5jYWxsVGhyb3VnaCgpXG4gICAgdm0gPSAkY29udHJvbGxlciAnTWFpbkNvbnRyb2xsZXInXG5cbiAgaXQgJ3Nob3VsZCBoYXZlIGEgdGltZXN0YW1wIGNyZWF0aW9uIGRhdGUnLCAoKSAtPlxuICAgIGV4cGVjdCh2bS5jcmVhdGlvbkRhdGUpLnRvRXF1YWwgamFzbWluZS5hbnkgTnVtYmVyXG5cbiAgaXQgJ3Nob3VsZCBkZWZpbmUgYW5pbWF0ZSBjbGFzcyBhZnRlciBkZWxheWluZyB0aW1lb3V0ICcsIGluamVjdCAoJHRpbWVvdXQpIC0+XG4gICAgJHRpbWVvdXQuZmx1c2goKVxuICAgIGV4cGVjdCh2bS5jbGFzc0FuaW1hdGlvbikudG9FcXVhbCAncnViYmVyQmFuZCdcblxuICBpdCAnc2hvdWxkIHNob3cgYSBUb2FzdHIgaW5mbyBhbmQgc3RvcCBhbmltYXRpb24gd2hlbiBpbnZva2Ugc2hvd1RvYXN0cigpJywgaW5qZWN0ICh0b2FzdHIpIC0+XG4gICAgdm0uc2hvd1RvYXN0cigpXG4gICAgZXhwZWN0KHRvYXN0ci5pbmZvKS50b0hhdmVCZWVuQ2FsbGVkKClcbiAgICBleHBlY3Qodm0uY2xhc3NBbmltYXRpb24pLnRvRXF1YWwgJydcblxuICBpdCAnc2hvdWxkIGRlZmluZSBtb3JlIHRoYW4gNSBhd2Vzb21lIHRoaW5ncycsICgpIC0+XG4gICAgZXhwZWN0KGFuZ3VsYXIuaXNBcnJheSh2bS5hd2Vzb21lVGhpbmdzKSkudG9CZVRydXRoeSgpXG4gICAgZXhwZWN0KHZtLmF3ZXNvbWVUaGluZ3MubGVuZ3RoID09IDUpLnRvQmVUcnV0aHkoKVxuIl19
