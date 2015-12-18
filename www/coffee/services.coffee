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

.service('ShowingsService', () ->
	upcoming: (params) ->
		console.log "Made it into the ShowingsService"
		[
			{
				showingTime: moment().startOf('hour').add(22, 'hours').toISOString()
				mlsId: 123412312
				address:
					crossStreet: '456 Cross Rd'
					streetName: 'Main St.'
					postalCode: 80226
					city: 'Lakewood'
					streetNumber: 123
					full: '123 Main St.'
					state: 'CO'
				listPrice: 349900
				listDate: moment().subtract(4, 'days').toISOString()
				mls:
					status: 'Active'
					daysOnMarket: 4
				photos: ['img/house1_outside.jpeg', 'img/house1_kitchen.jpeg', 'img/house1_bedroom.jpeg', 'img/house1_patio.jpeg']
				property: 
					yearBuilt: 2007
					garageSpaces: 2
					area: 2200
					lotSize: '3/4 - 1 Acre'
					bathsFull: 2
					bathsHalf: 1
					bedrooms: 3
					stories: 2
					fireplaces: 1
					heating: 'Central System, Forced Air, Gas'
			},
			{
				showingTime: moment().startOf('hour').add(23, 'hours').toISOString()
				mlsId: 543623424
				address:
					crossStreet: '789 Bent St'
					streetName: 'Market St.'
					postalCode: 80246
					city: 'Lakewood'
					streetNumber: 8367
					full: '8367 Market St.'
					state: 'CO'
				listPrice: 408999
				listDate: moment().subtract(4, 'days').toISOString()
				mls:
					status: 'Active'
					daysOnMarket: 4
				photos: ['img/house2_outside.jpeg', 'img/house2_kitchen.jpeg', 'img/house2_bedroom.jpeg', 'img/house2_patio.jpeg']
				property: 
					yearBuilt: 2004
					garageSpaces: 2
					area: 3400
					lotSize: '3/4 - 1 Acre'
					bathsFull: 3
					bathsHalf: 1
					bedrooms: 4
					stories: 2
					fireplaces: 1
					heating: 'Central System, Forced Air, Gas'
			},
			{
				showingTime: moment().startOf('hour').add(24, 'hours').toISOString()
				mlsId: 234572547
				address:
					crossStreet: '346 Curved Ave'
					streetName: 'Applegate Ave.'
					postalCode: 80226
					city: 'Lakewood'
					streetNumber: 375
					full: '375 Applegate Ave.'
					state: 'CO'
				listPrice: 567000
				listDate: moment().subtract(10, 'days').toISOString()
				mls:
					status: 'Active'
					daysOnMarket: 4
				photos: ['img/house3_outside.jpeg', 'img/house3_kitchen.jpeg', 'img/house3_bedroom.jpeg', 'img/house3_patio.jpeg']
				property: 
					yearBuilt: 2010
					garageSpaces: 2
					area: 3125
					lotSize: '3/4 - 1 Acre'
					bathsFull: 3
					bathsHalf: 1
					bedrooms: 3
					stories: 2
					fireplaces: 1
					heating: 'Central System, Forced Air, Gas'
			},
			{
				showingTime: moment().startOf('hour').add(25, 'hours').toISOString()
				mlsId: 987247223
				address:
					crossStreet: '908 Straight St.'
					streetName: 'Winding Rd.'
					postalCode: 80264
					city: 'Lakewood'
					streetNumber: 624
					full: '624 Winding Rd.'
					state: 'CO'
				listPrice: 435000
				listDate: moment().subtract(3, 'days').toISOString()
				mls:
					status: 'Active'
					daysOnMarket: 4
				photos: ['img/house4_outside.jpeg', 'img/house4_kitchen.jpeg', 'img/house4_bedroom.jpeg', 'img/house4_patio.jpeg']
				property: 
					yearBuilt: 2009
					garageSpaces: 2
					area: 3605
					lotSize: '3/4 - 1 Acre'
					bathsFull: 3
					bathsHalf: 1
					bedrooms: 4
					stories: 2
					fireplaces: 1
					heating: 'Central System, Forced Air, Gas'
			}
		]

	previous: (params) ->
		console.log "Getting previous showings"
		[
			{
				showingTime: moment().startOf('hour').subtract(26, 'hours').toISOString()
				mlsId: 123412312
				address:
					crossStreet: '456 Cross Rd'
					streetName: 'Lincoln Ave.'
					postalCode: 80226
					city: 'Lakewood'
					streetNumber: 8746
					full: '8746 Lincoln Ave'
					state: 'CO'
				listPrice: 349900
				listDate: moment().subtract(15, 'days').toISOString()
				mls:
					status: 'Active'
					daysOnMarket: 4
				photos: ['img/previous1_outside.jpeg', 'img/previous1_kitchen.jpeg', 'img/previous1_bedroom.jpeg', 'img/previous1_patio.jpeg']
				property: 
					yearBuilt: 2007
					garageSpaces: 2
					area: 2200
					lotSize: '3/4 - 1 Acre'
					bathsFull: 2
					bathsHalf: 1
					bedrooms: 3
					stories: 2
					fireplaces: 1
					heating: 'Central System, Forced Air, Gas'
			},
			{
				showingTime: moment().startOf('hour').subtract(27, 'hours').toISOString()
				mlsId: 543623424
				address:
					crossStreet: '789 Bent St'
					streetName: 'Washington Pkwy'
					postalCode: 80246
					city: 'Lakewood'
					streetNumber: 3380
					full: '3380 Washington Pkwy'
					state: 'CO'
				listPrice: 408999
				listDate: moment().subtract(18, 'days').toISOString()
				mls:
					status: 'Active'
					daysOnMarket: 4
				photos: ['img/previous2_outside.jpeg', 'img/previous2_kitchen.jpeg', 'img/previous2_bedroom.jpeg', 'img/previous2_patio.jpeg']
				property: 
					yearBuilt: 2004
					garageSpaces: 2
					area: 3400
					lotSize: '3/4 - 1 Acre'
					bathsFull: 3
					bathsHalf: 1
					bedrooms: 4
					stories: 2
					fireplaces: 1
					heating: 'Central System, Forced Air, Gas'
			},
			{
				showingTime: moment().startOf('hour').subtract(28, 'hours').toISOString()
				mlsId: 234572547
				address:
					crossStreet: '346 Curved Ave'
					streetName: 'Jefferson Ave.'
					postalCode: 80226
					city: 'Lakewood'
					streetNumber: 1776
					full: '1776 Jefferson Ave.'
					state: 'CO'
				listPrice: 567000
				listDate: moment().subtract(12, 'days').toISOString()
				mls:
					status: 'Active'
					daysOnMarket: 4
				photos: ['img/previous3_outside.jpeg', 'img/previous3_kitchen.jpeg', 'img/previous3_bedroom.jpeg', 'img/previous3_patio.jpeg']
				property: 
					yearBuilt: 2010
					garageSpaces: 2
					area: 3125
					lotSize: '3/4 - 1 Acre'
					bathsFull: 3
					bathsHalf: 1
					bedrooms: 3
					stories: 2
					fireplaces: 1
					heating: 'Central System, Forced Air, Gas'
			}
		]
)

.service('RelationshipsService', () ->
	all: () ->
		[
	    {
	      id: 1
	      clients: [
	        {
	          id: 1
	          firstName: "Stephanie"
	          lastName: "Folsom"
	        }
	        {
	          id: 2
	          firstName: "Steven"
	          lastName: "Folsom"
	        }
	      ]
	      last_message_time: "2015-10-25T22:34:51+00:00"
	      next_showing_time: "2015-10-25T22:34:51+00:00"
	    },
	    {
	      id: 2
	      clients: [
	        {
	          id: 3
	          firstName: "Erik"
	          lastName: "Polk"
	        }
	        {
	          id: 4
	          firstName: "Beth"
	          lastName: "Polk"
	        }
	      ]
	      last_message_time: "2015-10-25T22:34:51+00:00"
	      next_showing_time: "2015-10-25T22:34:51+00:00"
	    },
	    {
	      id: 3
	      clients: [
	        {
	          id: 5
	          firstName: "Carrie"
	          lastName: "Stevenson"
	        }
	        {
	          id: 6
	          firstName: "Andy"
	          lastName: "Stevenson"
	        }
	      ]
	      last_message_time: "2015-10-25T22:34:51+00:00"
	      next_showing_time: "2015-10-25T22:34:51+00:00"
	    }
	  ]
)