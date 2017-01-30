@App.module "Example", (Example, App, Backbone, Marionette, $, _) ->

  ClientListComponent = require('./components/client_list')
  ClientComponent = require('./components/client')
  ClientContactComponent = require('./components/client_contact')
  RootComponent = require('./components/root')

  { ClientModel } = require('./models')

  App.router.stateProvider
  .state "app",
    abstract: true
    views:
      '':
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
    views:
      "clientList@app": component: ClientListComponent


  .state "app.client.overview",
    url: ""
    views:
      "clientInfo@app": component: ClientComponent
    onEnter: -> console.log 'onEnter: app.client.overview'


  .state "app.client.contact",
    url: "/details"
    resolve:
      clientPhoneNumbers: ['client', (client) -> client.getPhoneNumbers()]
    views:
      "clientInfo@app": component: ClientComponent
    onEnter: -> console.log 'onEnter: app.client.contact'
