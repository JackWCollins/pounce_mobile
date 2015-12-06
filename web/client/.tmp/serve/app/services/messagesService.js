(function() {
  angular.module('pounce').service('messagesService', function() {
    'ngInject';
    var clientMessages1, clientMessages2, clientMessages3;
    console.log("In messagesService");
    clientMessages1 = [
      {
        id: 1,
        title: 'Adam Agent',
        time: moment().subtract(5, 'minutes').toISOString(),
        type: 'message',
        body: 'Hey @Stephanie, I scheduled some showings for us this Saturday. We will have some great places to look at! See you at 1 PM Saturday.'
      }, {
        id: 2,
        title: '#showing',
        time: moment().subtract(10, 'minutes').toISOString(),
        type: 'showing',
        body: '123 Main St., Lakewood - 1:00 PM Saturday by @Adam'
      }, {
        id: 3,
        title: '#showing',
        time: moment().subtract(9, 'minutes').toISOString(),
        type: 'showing',
        body: '8367 Market St., Lakewood - 2:00 PM Saturday by @Adam'
      }, {
        id: 4,
        title: '#showing',
        time: moment().subtract(7, 'minutes').toISOString(),
        type: 'showing',
        body: '375 Applegate Ave., Lakewood - 3:00 PM Saturday by @Adam'
      }, {
        id: 2,
        title: 'Stephanie Folsom',
        time: moment().subtract(1, 'hours').toISOString(),
        type: 'message',
        body: '@Adam, can we see some more places this Saturday? I was really a fan of the brick house we saw last weekend.'
      }
    ];
    clientMessages2 = [];
    clientMessages3 = [];
    return {
      all: function(params) {
        console.log("In messagesService with params: ", params.clientId);
        if (params.clientId === '1') {
          return clientMessages1;
        } else if (params.clientID === '2') {
          return clientMessages2;
        } else {
          return clientMessages3;
        }
      }
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL21lc3NhZ2VzU2VydmljZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLFFBQWYsQ0FDRSxDQUFDLE9BREgsQ0FDVyxpQkFEWCxFQUM4QixTQUFBO0lBQzFCO0FBQUEsUUFBQTtJQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksb0JBQVo7SUFDQSxlQUFBLEdBQWtCO01BQ2Q7UUFDRSxFQUFBLEVBQUksQ0FETjtRQUVFLEtBQUEsRUFBTyxZQUZUO1FBR0UsSUFBQSxFQUFNLE1BQUEsQ0FBQSxDQUFRLENBQUMsUUFBVCxDQUFrQixDQUFsQixFQUFxQixTQUFyQixDQUErQixDQUFDLFdBQWhDLENBQUEsQ0FIUjtRQUlFLElBQUEsRUFBTSxTQUpSO1FBS0UsSUFBQSxFQUFNLHNJQUxSO09BRGMsRUFRZDtRQUNFLEVBQUEsRUFBSSxDQUROO1FBRUUsS0FBQSxFQUFPLFVBRlQ7UUFHRSxJQUFBLEVBQU0sTUFBQSxDQUFBLENBQVEsQ0FBQyxRQUFULENBQWtCLEVBQWxCLEVBQXNCLFNBQXRCLENBQWdDLENBQUMsV0FBakMsQ0FBQSxDQUhSO1FBSUUsSUFBQSxFQUFNLFNBSlI7UUFLRSxJQUFBLEVBQU0sb0RBTFI7T0FSYyxFQWVkO1FBQ0UsRUFBQSxFQUFJLENBRE47UUFFRSxLQUFBLEVBQU8sVUFGVDtRQUdFLElBQUEsRUFBTSxNQUFBLENBQUEsQ0FBUSxDQUFDLFFBQVQsQ0FBa0IsQ0FBbEIsRUFBcUIsU0FBckIsQ0FBK0IsQ0FBQyxXQUFoQyxDQUFBLENBSFI7UUFJRSxJQUFBLEVBQU0sU0FKUjtRQUtFLElBQUEsRUFBTSx1REFMUjtPQWZjLEVBc0JkO1FBQ0UsRUFBQSxFQUFJLENBRE47UUFFRSxLQUFBLEVBQU8sVUFGVDtRQUdFLElBQUEsRUFBTSxNQUFBLENBQUEsQ0FBUSxDQUFDLFFBQVQsQ0FBa0IsQ0FBbEIsRUFBcUIsU0FBckIsQ0FBK0IsQ0FBQyxXQUFoQyxDQUFBLENBSFI7UUFJRSxJQUFBLEVBQU0sU0FKUjtRQUtFLElBQUEsRUFBTSwwREFMUjtPQXRCYyxFQTZCZDtRQUNFLEVBQUEsRUFBSSxDQUROO1FBRUUsS0FBQSxFQUFPLGtCQUZUO1FBR0UsSUFBQSxFQUFNLE1BQUEsQ0FBQSxDQUFRLENBQUMsUUFBVCxDQUFrQixDQUFsQixFQUFxQixPQUFyQixDQUE2QixDQUFDLFdBQTlCLENBQUEsQ0FIUjtRQUlFLElBQUEsRUFBTSxTQUpSO1FBS0UsSUFBQSxFQUFNLDhHQUxSO09BN0JjOztJQXNDbEIsZUFBQSxHQUFrQjtJQUVsQixlQUFBLEdBQWtCO1dBRWxCO01BQUEsR0FBQSxFQUFLLFNBQUMsTUFBRDtRQUNILE9BQU8sQ0FBQyxHQUFSLENBQVksa0NBQVosRUFBZ0QsTUFBTSxDQUFDLFFBQXZEO1FBQ0EsSUFBRyxNQUFNLENBQUMsUUFBUCxLQUFtQixHQUF0QjtpQkFDRSxnQkFERjtTQUFBLE1BRUssSUFBRyxNQUFNLENBQUMsUUFBUCxLQUFtQixHQUF0QjtpQkFDSCxnQkFERztTQUFBLE1BQUE7aUJBR0gsZ0JBSEc7O01BSkYsQ0FBTDs7RUE3QzBCLENBRDlCO0FBQUEiLCJmaWxlIjoic2VydmljZXMvbWVzc2FnZXNTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ3BvdW5jZSdcbiAgLnNlcnZpY2UgJ21lc3NhZ2VzU2VydmljZScsICgpIC0+XG4gICAgJ25nSW5qZWN0J1xuICAgIGNvbnNvbGUubG9nIFwiSW4gbWVzc2FnZXNTZXJ2aWNlXCJcbiAgICBjbGllbnRNZXNzYWdlczEgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMVxuICAgICAgICAgIHRpdGxlOiAnQWRhbSBBZ2VudCdcbiAgICAgICAgICB0aW1lOiBtb21lbnQoKS5zdWJ0cmFjdCg1LCAnbWludXRlcycpLnRvSVNPU3RyaW5nKClcbiAgICAgICAgICB0eXBlOiAnbWVzc2FnZSdcbiAgICAgICAgICBib2R5OiAnSGV5IEBTdGVwaGFuaWUsIEkgc2NoZWR1bGVkIHNvbWUgc2hvd2luZ3MgZm9yIHVzIHRoaXMgU2F0dXJkYXkuIFdlIHdpbGwgaGF2ZSBzb21lIGdyZWF0IHBsYWNlcyB0byBsb29rIGF0ISBTZWUgeW91IGF0IDEgUE0gU2F0dXJkYXkuJ1xuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMlxuICAgICAgICAgIHRpdGxlOiAnI3Nob3dpbmcnXG4gICAgICAgICAgdGltZTogbW9tZW50KCkuc3VidHJhY3QoMTAsICdtaW51dGVzJykudG9JU09TdHJpbmcoKVxuICAgICAgICAgIHR5cGU6ICdzaG93aW5nJ1xuICAgICAgICAgIGJvZHk6ICcxMjMgTWFpbiBTdC4sIExha2V3b29kIC0gMTowMCBQTSBTYXR1cmRheSBieSBAQWRhbSdcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDNcbiAgICAgICAgICB0aXRsZTogJyNzaG93aW5nJ1xuICAgICAgICAgIHRpbWU6IG1vbWVudCgpLnN1YnRyYWN0KDksICdtaW51dGVzJykudG9JU09TdHJpbmcoKVxuICAgICAgICAgIHR5cGU6ICdzaG93aW5nJ1xuICAgICAgICAgIGJvZHk6ICc4MzY3IE1hcmtldCBTdC4sIExha2V3b29kIC0gMjowMCBQTSBTYXR1cmRheSBieSBAQWRhbSdcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDRcbiAgICAgICAgICB0aXRsZTogJyNzaG93aW5nJ1xuICAgICAgICAgIHRpbWU6IG1vbWVudCgpLnN1YnRyYWN0KDcsICdtaW51dGVzJykudG9JU09TdHJpbmcoKVxuICAgICAgICAgIHR5cGU6ICdzaG93aW5nJ1xuICAgICAgICAgIGJvZHk6ICczNzUgQXBwbGVnYXRlIEF2ZS4sIExha2V3b29kIC0gMzowMCBQTSBTYXR1cmRheSBieSBAQWRhbSdcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDJcbiAgICAgICAgICB0aXRsZTogJ1N0ZXBoYW5pZSBGb2xzb20nXG4gICAgICAgICAgdGltZTogbW9tZW50KCkuc3VidHJhY3QoMSwgJ2hvdXJzJykudG9JU09TdHJpbmcoKVxuICAgICAgICAgIHR5cGU6ICdtZXNzYWdlJ1xuICAgICAgICAgIGJvZHk6ICdAQWRhbSwgY2FuIHdlIHNlZSBzb21lIG1vcmUgcGxhY2VzIHRoaXMgU2F0dXJkYXk/IEkgd2FzIHJlYWxseSBhIGZhbiBvZiB0aGUgYnJpY2sgaG91c2Ugd2Ugc2F3IGxhc3Qgd2Vla2VuZC4nXG4gICAgICAgIH1cbiAgICAgIF1cblxuICAgIGNsaWVudE1lc3NhZ2VzMiA9IFtdXG5cbiAgICBjbGllbnRNZXNzYWdlczMgPSBbXVxuXG4gICAgYWxsOiAocGFyYW1zKSAtPlxuICAgICAgY29uc29sZS5sb2cgXCJJbiBtZXNzYWdlc1NlcnZpY2Ugd2l0aCBwYXJhbXM6IFwiLCBwYXJhbXMuY2xpZW50SWRcbiAgICAgIGlmIHBhcmFtcy5jbGllbnRJZCA9PSAnMSdcbiAgICAgICAgY2xpZW50TWVzc2FnZXMxXG4gICAgICBlbHNlIGlmIHBhcmFtcy5jbGllbnRJRCA9PSAnMidcbiAgICAgICAgY2xpZW50TWVzc2FnZXMyXG4gICAgICBlbHNlXG4gICAgICAgIGNsaWVudE1lc3NhZ2VzM1xuXG4iXX0=