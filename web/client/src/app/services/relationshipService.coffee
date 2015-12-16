angular.module 'pounce'
  .service 'relationshipService', () ->
    'ngInject'
    console.log "In relationshipService"

    relationships = [
      {
        id:1
        users: [
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
      }
      {
        id:2
        users: [
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
      }
      {
        id:3
        users: [
          {
            id: 5
            firstName: "Carrie"
            lastName: "Stevenson"
          }
          {
            id: 6
            firstName: "Andy"
            lastName: "Polk"
          }
        ]
      }
      {
        id:4
        users: [
          {
            id: 7
            firstName: "Cathy"
            lastName: "Mills"
          }
          {
            id: 8
            firstName: "Jim"
            lastName: "Mills"
          }
        ]
      }
      {
        id:5
        users: [
          {
            id: 9
            firstName: "Donnie"
            lastName: "Rhine"
          }
          {
            id: 10
            firstName: "Debra"
            lastName: "Rhine"
          }
        ]
      }
      {
        id:6
        users: [
          {
            id: 11
            firstName: "Edward"
            lastName: "Sheckler"
          }
          {
            id: 12
            firstName: "Sheila"
            lastName: "Sheckler"
          }
        ]
      }
      {
        id:3
        users: [
          {
            id: 13
            firstName: "Jeff"
            lastName: "Curtis"
          }
        ]
      }
      {
        id:7
        users: [
          {
            id: 14
            firstName: "Danial"
            lastName: "Hammons"
          }
          {
            id: 15
            firstName: "Karin"
            latName: "Hammons"
          }
        ]
      }
      {
        id:8
        users: [
          {
            id: 16
            firstName: "Cynthia"
            lastName: "Parker"
          }
          {
            id: 17
            firstName: "Mark"
            lastName: "Parker"
          }
        ]
      }
      {
        id:9
        users: [
          {
            id: 18
            firstName: "Anna"
            lastName: "Bedwell"
          }
        ]
      }
      {
        id:10
        users: [
          {
            id: 19
            firstName: "John"
            lastName: "Jones"
          }
          {
            id: 20
            firstName: "Jane"
            lastName: "Jones"
          }
        ]
      }
      {
        id:11
        users: [
          {
            id: 21
            firstName: "Gloria"
            lastName: "Sisson"
          }
          {
            id: 22
            firstName: "Glen"
            lastName: "Sisson"
          }
        ]
      }
    ]

    all: (params) ->
      relationships

