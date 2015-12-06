(function() {
  angular.module('pounce').run(function($log, $rootScope, $location) {
    'ngInject';
    $rootScope.$on("$stateChangeError", console.log.bind(console));
    $log.debug('runBlock end');
    return $rootScope.$on('auth:login-success', function() {
      return $location.path('/');
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnJ1bi5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLFFBQWYsQ0FDRSxDQUFDLEdBREgsQ0FDTyxTQUFDLElBQUQsRUFBTyxVQUFQLEVBQW1CLFNBQW5CO0lBQ0g7SUFDQSxVQUFVLENBQUMsR0FBWCxDQUFlLG1CQUFmLEVBQW9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBWixDQUFpQixPQUFqQixDQUFwQztJQUNBLElBQUksQ0FBQyxLQUFMLENBQVcsY0FBWDtXQUVBLFVBQVUsQ0FBQyxHQUFYLENBQWUsb0JBQWYsRUFBcUMsU0FBQTthQUNwQyxTQUFTLENBQUMsSUFBVixDQUFlLEdBQWY7SUFEb0MsQ0FBckM7RUFMRyxDQURQO0FBQUEiLCJmaWxlIjoiaW5kZXgucnVuLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ3BvdW5jZSdcbiAgLnJ1biAoJGxvZywgJHJvb3RTY29wZSwgJGxvY2F0aW9uKSAtPlxuICAgICduZ0luamVjdCdcbiAgICAkcm9vdFNjb3BlLiRvbihcIiRzdGF0ZUNoYW5nZUVycm9yXCIsIGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSkpXG4gICAgJGxvZy5kZWJ1ZyAncnVuQmxvY2sgZW5kJ1xuXG4gICAgJHJvb3RTY29wZS4kb24oJ2F1dGg6bG9naW4tc3VjY2VzcycsICgpIC0+XG4gICAgXHQkbG9jYXRpb24ucGF0aCgnLycpXG4gICAgKVxuIl19
