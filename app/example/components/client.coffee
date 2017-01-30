@App.module "Example", (Example, App, Backbone, Marionette, $, _) ->

  UILayoutMn2 = require('../../router/ui_layout_mn2')

  class ClientView extends Marionette.ItemView
    template: require('./templates/client')
    serializeData: ->
      @options.resolves.client.toJSON()



  module.exports = class ClientComponent extends Marionette.Object
    view: ClientView
    initialize: (options) ->
      console.log('client contact component', arguments)

    getView: ->
      @_view or= new @view _.extend {}, @options, controller: @
