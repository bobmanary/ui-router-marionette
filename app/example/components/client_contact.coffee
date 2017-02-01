@App.module "Example", (Example, App, Backbone, Marionette, $, _) ->

  UILayoutMn2 = require('../../router/ui_layout_mn2')



  class Layout extends Marionette.ItemView
    behaviors:
      UISref: {}
    template: require('./templates/client_contact')
    serializeData: ->
      _.extend @options.resolves.client.toJSON(),
        items: @options.resolves.clientPhoneNumbers.toJSON()
        params: (p) ->
          try
            return JSON.stringify(p)
          return '{}'



  module.exports = class ClientContactComponent extends Marionette.Object
    view: Layout

    getView: ->
      @_view or= new @view _.extend {}, @options, controller: @
