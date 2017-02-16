@App.module "Example", (Example, App, Backbone, Marionette, $, _) ->

  UILayoutMn2 = require('../../router/ui_layout_mn2')

  exports.ClientListView = class ClientListView extends Marionette.ItemView
    behaviors:
      UISref: {}
      UISrefActive: {}
    initialize: (options) ->
      console.log 'ClientListView', arguments
      @collection = options.resolved.clients
    template: require('./templates/client_list')
    serializeData: ->
      _.extend super,
        params: (p) ->
          try
            return JSON.stringify(p)
          return '{}'



  exports.ClientListController = class ClientListController extends Marionette.Object
    initialize: ->
      console.log 'ClientListController', arguments

