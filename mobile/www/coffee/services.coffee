angular.module('pounce.services', [])

.service('MessagesService', () ->

	all: (params) ->
		console.log "In MessagesService with params: ", params.id
		if params.id == '1'
			[
		    {
		      id: 1
		      author: 'Adam Agent'
		      sentAt: moment().subtract(5, 'minutes').toISOString()
		      body: 'Hey @Stephanie, I just scheduled some showings for us this Saturday. I think we will have some great places to look at! See you at 1 PM on Saturday.'
		    }
		    {
		      id: 2
		      author: 'Stephanie Folsom'
		      sentAt: moment().subtract(1, 'hours').toISOString()
		      body: '@Adam, can we see some more places this Saturday? I was really a fan of the brick house we saw last weekend.'
		    }
		  ]
		else if params.id == '2'
			[
		    {
		      id: 3
		      author: 'Adam Agent'
		      sentAt: moment().subtract(20, 'minutes').toISOString()
		      body: '@Erik, I had a great conversation with your lender today.'
		    }
		    {
		      id: 4
		      author: 'Erik Polk'
		      sentAt: moment().subtract(3, 'hours').toISOString()
		      body: '@Adam, can we see some more places this Saturday? I was really a fan of the brick house we saw last weekend.'
		    }
		  ]
		else if params.id == '3'
			[
		    {
		      id: 5
		      author: 'Adam Agent'
		      sentAt: moment().subtract(3, 'minutes').toISOString()
		      body: '@Carrie, I set up some great looking showings for us this Saturday!'
		    }
		    {
		      id: 6
		      author: 'Carrie Stevenson'
		      sentAt: moment().subtract(2, 'hours').toISOString()
		      body: '@Adam, can we see some more places this Saturday? I was really a fan of the brick house we saw last weekend.'
		    }
		  ]

)