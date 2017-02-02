@App.module "Example", (Example, App, Backbone, Marionette, $, _) ->

  ClientListComponent = require('./components/client_list')
  ClientComponent = require('./components/client')
  ClientContactComponent = require('./components/client_contact')
  RootComponent = require('./components/root')

  { ClientModel, ClientCollection } = require('./models')
  registry = App.router.stateRegistry

  registry.register
    name: "app"
    abstract: true
    views:
      '':
        component: RootComponent
    resolve:
      clients: -> new ClientCollection().fetch()
    onEnter: -> console.log 'onEnter: app'


  registry.register
    name: "app.client"
    abstract: true
    resolve:
      client: ['$stateParams', ($stateParams) ->
        model = new ClientModel(id: $stateParams.id)
        model.fetch().then -> model
      ]
    url: "client/:id"
    views:
      "clientList@app": component: ClientListComponent


  registry.register
    name: "app.client.overview",
    url: ""
    views:
      "clientInfo@app": component: ClientComponent
    onEnter: -> console.log 'onEnter: app.client.overview'


  registry.register
    name: "app.client.contact",
    url: "/contact"
    resolve:
      clientPhoneNumbers: ['client', (client) -> client.getPhoneNumbers()]
    views:
      "clientInfo@app": component: ClientContactComponent
    onEnter: -> console.log 'onEnter: app.client.contact'
