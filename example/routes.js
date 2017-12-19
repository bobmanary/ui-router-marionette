/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
window.App.module("Example", function(Example, App, Backbone, Marionette, $, _) {

  const { ClientListView, ClientListController } = require('./components/client_list');
  const { ClientOverviewView, ClientOverviewController } = require('./components/client_overview');
  const { ClientContactView, ClientContactController } = require('./components/client_contact');
  const { ClientPlaceholderView } = require('./components/client_placeholder');
  const { ClientContainerView } = require('./components/client_container');
  const { RootLayout } = require('./components/root');

  const { ClientModel, ClientCollection } = require('./models');

  const registry = App.router.stateRegistry;


  registry.register({
    name: "app",
    abstract: true,
    views: {
      '': {
        view: RootLayout
      }
    },
    resolve: {
      clients() { return (new ClientCollection).fetch(); }
    },
    onEnter() { return console.log('onEnter: app'); }
  });


  registry.register({
    name: "app.clients",
    url: "clients",
    views: {
      "clientList@app": {
        view: ClientListView,
        controller: ClientListController
      },
      "clientInfo@app": {
        view: ClientPlaceholderView
      }
    }
  });


  registry.register({
    name: "app.clients.client",
    url: "/client/:id",
    abstract: true,
    resolve: {
      client: ['$stateParams', function($stateParams) {
        const model = new ClientModel({id: $stateParams.id});
        return model.fetch().then(() => model);
      }
      ]
    },
    views: {
      'clientInfo@app': {
        view: ClientContainerView
      }
    }
  });


  registry.register({
    name: "app.clients.client.overview",
    url: "",
    view: ClientOverviewView,
    controller: ClientOverviewController,
    onEnter() { return console.log('onEnter: app.client.overview'); }
  });


  return registry.register({
    name: "app.clients.client.contact",
    url: "/contact",
    resolve: {
      clientPhoneNumbers: ['client', client => client.getPhoneNumbers()]
    },
    view: ClientContactView,
    controller: ClientContactController,
    onEnter() { return console.log('onEnter: app.client.contact'); }
  });
});
