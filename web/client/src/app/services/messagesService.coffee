angular.module 'pounce'
  .service 'messagesService', () ->
    'ngInject'
    console.log "In messagesService"
    clientMessages1 = [
        {
          id: 1
          title: 'Adam Agent'
          time: moment().subtract(5, 'minutes').toISOString()
          type: 'message'
          body: 'Hey @Stephanie, I scheduled some showings for us this Saturday. We will have some great places to look at! See you at 1 PM Saturday.'
        }
        {
          id: 2
          title: '#showing'
          time: moment().subtract(10, 'minutes').toISOString()
          type: 'showing'
          body: '123 Main St., Lakewood - 1:00 PM Saturday by @Adam'
        }
        {
          id: 3
          title: '#showing'
          time: moment().subtract(9, 'minutes').toISOString()
          type: 'showing'
          body: '8367 Market St., Lakewood - 2:00 PM Saturday by @Adam'
        }
        {
          id: 4
          title: '#showing'
          time: moment().subtract(7, 'minutes').toISOString()
          type: 'showing'
          body: '375 Applegate Ave., Lakewood - 3:00 PM Saturday by @Adam'
        }
        {
          id: 2
          title: 'Stephanie Folsom'
          time: moment().subtract(1, 'hours').toISOString()
          type: 'message'
          body: '@Adam, can we see some more places this Saturday? I was really a fan of the brick house we saw last weekend.'
        }
      ]

    clientMessages2 = []

    clientMessages3 = []

    all: (params) ->
      console.log "In messagesService with params: ", params.clientId
      if params.clientId == '1'
        clientMessages1
      else if params.clientID == '2'
        clientMessages2
      else
        clientMessages3

