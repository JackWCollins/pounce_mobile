angular.module 'pounce'
  .filter('relationshipName', () ->
    (relationship) ->
      if relationship.users.length == 2
        relationship.users[0].firstName + ' and ' + relationship.users[1].firstName
      else if relationship.users.length == 1
        relationship.users[0].firstName
  )