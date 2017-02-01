@App.module "Example", (Example, App, Backbone, Marionette, $, _) ->

  UILayoutMn2 = require('../../router/ui_layout_mn2')

  class ClientListView extends Marionette.ItemView
    template: require('./templates/client_list')
    serializeData: ->
      items: @options.resolves.clients.toJSON()


  module.exports = class ClientListComponent extends Marionette.Object
    view: ClientListView

    getView: ->
      @_view or= new @view _.extend {}, @options, controller: @
