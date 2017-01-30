@App.module "Example", (Example, App, Backbone, Marionette, $, _) ->

  ClientComponent = require('./components/client')
  ClientContactComponent = require('./components/client_contact')
  RootComponent = require('./components/root')

  { ClientModel } = require('./models')

  App.router.stateProvider
  .state "app",
    url: ""
    abstract: true
    component: RootComponent
    onEnter: -> console.log 'onEnter: app'


  .state "app.client",
    abstract: true
    resolve:
      client: ['$stateParams', ($stateParams) ->
        model = new ClientModel(id: $stateParams.id)
        model.fetch().then -> model
      ]
    url: "client/:id"


  .state "app.client.overview",
    url: ""
    views:
      "@app.client": component: ClientComponent
    onEnter: -> console.log 'onEnter: app.client.overview'


  .state "app.client.contact",
    url: "/details"
    resolve:
      clientPhoneNumbers: ['client', (client) -> client.getPhoneNumbers()]
    views:
      "@app.client": component: ClientComponent
    onEnter: -> console.log 'onEnter: app.client.contact'
