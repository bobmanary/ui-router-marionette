@App.module "Example", (Example, App, Backbone, Marionette, $, _) ->

  { ClientListView, ClientListController } = require('./components/client_list')
  { ClientOverviewView, ClientOverviewController } = require('./components/client_overview')
  { ClientContactView, ClientContactController } = require('./components/client_contact')
  { ClientPlaceholderView } = require('./components/client_placeholder')
  { ClientContainerView } = require('./components/client_container')
  { RootLayout } = require('./components/root')

  { ClientModel, ClientCollection } = require('./models')

  registry = App.router.stateRegistry


  registry.register
    name: "app"
    abstract: true
    views:
      '':
        view: RootLayout
    resolve:
      clients: -> (new ClientCollection).fetch()
    onEnter: -> console.log 'onEnter: app'


  registry.register
    name: "app.clients"
    url: "clients"
    views:
      "clientList@app":
        view: ClientListView
        controller: ClientListController
      "clientInfo@app":
        view: ClientPlaceholderView


  registry.register
    name: "app.clients.client"
    url: "/client/:id"
    abstract: true
    resolve:
      client: ['$stateParams', ($stateParams) ->
        model = new ClientModel(id: $stateParams.id)
        model.fetch().then -> model
      ]
    views:
      'clientInfo@app':
        view: ClientContainerView


  registry.register
    name: "app.clients.client.overview",
    url: ""
    view: ClientOverviewView
    controller: ClientOverviewController
    onEnter: -> console.log 'onEnter: app.client.overview'


  registry.register
    name: "app.clients.client.contact",
    url: "/contact"
    resolve:
      clientPhoneNumbers: ['client', (client) -> client.getPhoneNumbers()]
    view: ClientContactView
    controller: ClientContactController
    onEnter: -> console.log 'onEnter: app.client.contact'
