(function() {
  angular.module('pounce').service('webDevTec', function() {
    'ngInject';
    var data, getTec;
    data = [
      {
        'title': 'AngularJS',
        'url': 'https://angularjs.org/',
        'description': 'HTML enhanced for web apps!',
        'logo': 'angular.png'
      }, {
        'title': 'BrowserSync',
        'url': 'http://browsersync.io/',
        'description': 'Time-saving synchronised browser testing.',
        'logo': 'browsersync.png'
      }, {
        'title': 'GulpJS',
        'url': 'http://gulpjs.com/',
        'description': 'The streaming build system.',
        'logo': 'gulp.png'
      }, {
        'title': 'Jasmine',
        'url': 'http://jasmine.github.io/',
        'description': 'Behavior-Driven JavaScript.',
        'logo': 'jasmine.png'
      }, {
        'title': 'Karma',
        'url': 'http://karma-runner.github.io/',
        'description': 'Spectacular Test Runner for JavaScript.',
        'logo': 'karma.png'
      }, {
        'title': 'Protractor',
        'url': 'https://github.com/angular/protractor',
        'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
        'logo': 'protractor.png'
      }, {
        'title': 'Angular Material Design',
        'url': 'https://material.angularjs.org/#/',
        'description': 'The Angular reference implementation of the Google\'s Material Design specification.',
        'logo': 'angular-material.png'
      }, {
        'title': 'Sass (Ruby)',
        'url': 'http://sass-lang.com/',
        'description': 'Original Syntactically Awesome StyleSheets implemented in Ruby',
        'logo': 'ruby-sass.png'
      }, {
        'title': 'CoffeeScript',
        'url': 'http://coffeescript.org/',
        'description': 'CoffeeScript, \'a little language that compiles into JavaScript\'.',
        'logo': 'coffeescript.png'
      }, {
        'key': 'haml',
        'title': 'HAML',
        'url': 'http://haml.info/',
        'description': 'Beautiful, DRY, well-indented, clear markup: templating haiku.',
        'logo': 'haml.png'
      }
    ];
    getTec = function() {
      return data;
    };
    this.getTec = getTec;
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvd2ViRGV2VGVjL3dlYkRldlRlYy5zZXJ2aWNlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsUUFBZixDQUNFLENBQUMsT0FESCxDQUNXLFdBRFgsRUFDd0IsU0FBQTtJQUNwQjtBQUFBLFFBQUE7SUFDQSxJQUFBLEdBQU87TUFDTDtRQUNFLE9BQUEsRUFBUyxXQURYO1FBRUUsS0FBQSxFQUFPLHdCQUZUO1FBR0UsYUFBQSxFQUFlLDZCQUhqQjtRQUlFLE1BQUEsRUFBUSxhQUpWO09BREssRUFPTDtRQUNFLE9BQUEsRUFBUyxhQURYO1FBRUUsS0FBQSxFQUFPLHdCQUZUO1FBR0UsYUFBQSxFQUFlLDJDQUhqQjtRQUlFLE1BQUEsRUFBUSxpQkFKVjtPQVBLLEVBYUw7UUFDRSxPQUFBLEVBQVMsUUFEWDtRQUVFLEtBQUEsRUFBTyxvQkFGVDtRQUdFLGFBQUEsRUFBZSw2QkFIakI7UUFJRSxNQUFBLEVBQVEsVUFKVjtPQWJLLEVBbUJMO1FBQ0UsT0FBQSxFQUFTLFNBRFg7UUFFRSxLQUFBLEVBQU8sMkJBRlQ7UUFHRSxhQUFBLEVBQWUsNkJBSGpCO1FBSUUsTUFBQSxFQUFRLGFBSlY7T0FuQkssRUF5Qkw7UUFDRSxPQUFBLEVBQVMsT0FEWDtRQUVFLEtBQUEsRUFBTyxnQ0FGVDtRQUdFLGFBQUEsRUFBZSx5Q0FIakI7UUFJRSxNQUFBLEVBQVEsV0FKVjtPQXpCSyxFQStCTDtRQUNFLE9BQUEsRUFBUyxZQURYO1FBRUUsS0FBQSxFQUFPLHVDQUZUO1FBR0UsYUFBQSxFQUFlLG1GQUhqQjtRQUlFLE1BQUEsRUFBUSxnQkFKVjtPQS9CSyxFQXFDTDtRQUNFLE9BQUEsRUFBUyx5QkFEWDtRQUVFLEtBQUEsRUFBTyxtQ0FGVDtRQUdFLGFBQUEsRUFBZSxzRkFIakI7UUFJRSxNQUFBLEVBQVEsc0JBSlY7T0FyQ0ssRUEyQ0w7UUFDRSxPQUFBLEVBQVMsYUFEWDtRQUVFLEtBQUEsRUFBTyx1QkFGVDtRQUdFLGFBQUEsRUFBZSxnRUFIakI7UUFJRSxNQUFBLEVBQVEsZUFKVjtPQTNDSyxFQWlETDtRQUNFLE9BQUEsRUFBUyxjQURYO1FBRUUsS0FBQSxFQUFPLDBCQUZUO1FBR0UsYUFBQSxFQUFlLG9FQUhqQjtRQUlFLE1BQUEsRUFBUSxrQkFKVjtPQWpESyxFQXVETDtRQUNFLEtBQUEsRUFBTyxNQURUO1FBRUUsT0FBQSxFQUFTLE1BRlg7UUFHRSxLQUFBLEVBQU8sbUJBSFQ7UUFJRSxhQUFBLEVBQWUsZ0VBSmpCO1FBS0UsTUFBQSxFQUFRLFVBTFY7T0F2REs7O0lBZ0VQLE1BQUEsR0FBUyxTQUFBO2FBQ1A7SUFETztJQUdULElBQUMsQ0FBQSxNQUFELEdBQVU7RUFyRVUsQ0FEeEI7QUFBQSIsImZpbGUiOiJjb21wb25lbnRzL3dlYkRldlRlYy93ZWJEZXZUZWMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdwb3VuY2UnXG4gIC5zZXJ2aWNlICd3ZWJEZXZUZWMnLCAoKSAtPlxuICAgICduZ0luamVjdCdcbiAgICBkYXRhID0gW1xuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnQW5ndWxhckpTJyxcbiAgICAgICAgJ3VybCc6ICdodHRwczovL2FuZ3VsYXJqcy5vcmcvJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ0hUTUwgZW5oYW5jZWQgZm9yIHdlYiBhcHBzIScsXG4gICAgICAgICdsb2dvJzogJ2FuZ3VsYXIucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0Jyb3dzZXJTeW5jJyxcbiAgICAgICAgJ3VybCc6ICdodHRwOi8vYnJvd3NlcnN5bmMuaW8vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RpbWUtc2F2aW5nIHN5bmNocm9uaXNlZCBicm93c2VyIHRlc3RpbmcuJyxcbiAgICAgICAgJ2xvZ28nOiAnYnJvd3NlcnN5bmMucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0d1bHBKUycsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2d1bHBqcy5jb20vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RoZSBzdHJlYW1pbmcgYnVpbGQgc3lzdGVtLicsXG4gICAgICAgICdsb2dvJzogJ2d1bHAucG5nJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RpdGxlJzogJ0phc21pbmUnLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9qYXNtaW5lLmdpdGh1Yi5pby8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQmVoYXZpb3ItRHJpdmVuIEphdmFTY3JpcHQuJyxcbiAgICAgICAgJ2xvZ28nOiAnamFzbWluZS5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnS2FybWEnLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9rYXJtYS1ydW5uZXIuZ2l0aHViLmlvLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdTcGVjdGFjdWxhciBUZXN0IFJ1bm5lciBmb3IgSmF2YVNjcmlwdC4nLFxuICAgICAgICAnbG9nbyc6ICdrYXJtYS5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAndGl0bGUnOiAnUHJvdHJhY3RvcicsXG4gICAgICAgICd1cmwnOiAnaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvcHJvdHJhY3RvcicsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdFbmQgdG8gZW5kIHRlc3QgZnJhbWV3b3JrIGZvciBBbmd1bGFySlMgYXBwbGljYXRpb25zIGJ1aWx0IG9uIHRvcCBvZiBXZWJEcml2ZXJKUy4nLFxuICAgICAgICAnbG9nbyc6ICdwcm90cmFjdG9yLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdBbmd1bGFyIE1hdGVyaWFsIERlc2lnbicsXG4gICAgICAgICd1cmwnOiAnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyanMub3JnLyMvJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ1RoZSBBbmd1bGFyIHJlZmVyZW5jZSBpbXBsZW1lbnRhdGlvbiBvZiB0aGUgR29vZ2xlXFwncyBNYXRlcmlhbCBEZXNpZ24gc3BlY2lmaWNhdGlvbi4nLFxuICAgICAgICAnbG9nbyc6ICdhbmd1bGFyLW1hdGVyaWFsLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdTYXNzIChSdWJ5KScsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL3Nhc3MtbGFuZy5jb20vJyxcbiAgICAgICAgJ2Rlc2NyaXB0aW9uJzogJ09yaWdpbmFsIFN5bnRhY3RpY2FsbHkgQXdlc29tZSBTdHlsZVNoZWV0cyBpbXBsZW1lbnRlZCBpbiBSdWJ5JyxcbiAgICAgICAgJ2xvZ28nOiAncnVieS1zYXNzLnBuZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0aXRsZSc6ICdDb2ZmZWVTY3JpcHQnLFxuICAgICAgICAndXJsJzogJ2h0dHA6Ly9jb2ZmZWVzY3JpcHQub3JnLycsXG4gICAgICAgICdkZXNjcmlwdGlvbic6ICdDb2ZmZWVTY3JpcHQsIFxcJ2EgbGl0dGxlIGxhbmd1YWdlIHRoYXQgY29tcGlsZXMgaW50byBKYXZhU2NyaXB0XFwnLicsXG4gICAgICAgICdsb2dvJzogJ2NvZmZlZXNjcmlwdC5wbmcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAna2V5JzogJ2hhbWwnLFxuICAgICAgICAndGl0bGUnOiAnSEFNTCcsXG4gICAgICAgICd1cmwnOiAnaHR0cDovL2hhbWwuaW5mby8nLFxuICAgICAgICAnZGVzY3JpcHRpb24nOiAnQmVhdXRpZnVsLCBEUlksIHdlbGwtaW5kZW50ZWQsIGNsZWFyIG1hcmt1cDogdGVtcGxhdGluZyBoYWlrdS4nLFxuICAgICAgICAnbG9nbyc6ICdoYW1sLnBuZydcbiAgICAgIH1cbiAgICBdXG5cbiAgICBnZXRUZWMgPSAtPlxuICAgICAgZGF0YVxuXG4gICAgQGdldFRlYyA9IGdldFRlY1xuICAgIHJldHVyblxuIl19
