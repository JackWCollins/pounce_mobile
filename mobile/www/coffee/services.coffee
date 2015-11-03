angular.module('pounce.services', [])

.service('MessagesService', () ->

	all: (params) ->
		console.log "In MessagesService with params: ", params.id
		if params.id == '1'
			[
		    {
		      id: 1
		      author: 'Adam Agent'
		      sent_at: '3 min ago'
		      body: 'Hey @Stephanie, I just scheduled some showings for us this Saturday. I think we will have some great places to look at! See you at 1 PM on Saturday.'
		    }
		    {
		      id: 2
		      author: 'Stephanie Folsom'
		      sent_at: '1 hour ago'
		      body: '@Adam, can we see some more places this Saturday? I was really a fan of the brick house we saw last weekend.'
		    }
		  ]
		else if params.id == '2'
			[
		    {
		      id: 3
		      author: 'Adam Agent'
		      sent_at: '20 min ago'
		      body: '@Erik, I had a great conversation with your lender today.'
		    }
		    {
		      id: 4
		      author: 'Erik Polk'
		      sent_at: '3 hours ago'
		      body: '@Adam, can we see some more places this Saturday? I was really a fan of the brick house we saw last weekend.'
		    }
		  ]
		else if params.id == '3'
			[
		    {
		      id: 5
		      author: 'Adam Agent'
		      sent_at: '3 min ago'
		      body: '@Carrie, I set up some great looking showings for us this Saturday!'
		    }
		    {
		      id: 6
		      author: 'Carrie Stevenson'
		      sent_at: '1 hour ago'
		      body: '@Adam, can we see some more places this Saturday? I was really a fan of the brick house we saw last weekend.'
		    }
		  ]

)