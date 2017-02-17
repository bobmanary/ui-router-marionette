window.App.module "Example", (Example, App, Backbone, Marionette, $, _) ->

  { UILayoutMn2 } = require('../../src/index')

  exports.ClientPlaceholderView = class ClientPlaceholderView extends Marionette.ItemView
    initialize: ->
      console.log 'ClientPlaceholderView', arguments
    template: require('./templates/client_placeholder')
