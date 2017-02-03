@App.module "Example", (Example, App, Backbone, Marionette, $, _) ->

  UILayoutMn2 = require('../../router/ui_layout_mn2')

  exports.ClientPlaceholderView = class ClientPlaceholderView extends Marionette.ItemView
    initialize: ->
      console.log 'ClientPlaceholderView', arguments
    template: require('./templates/client_placeholder')
