angular.module('pounce.filters', [])

.filter 'relativeTime', () ->
	(time) ->
		m = moment(time)
		if m.isValid()
			m.fromNow()
		else
			time