window.App.module "Example", (Example, App, Backbone, Marionette, $, _) ->

  { UILayoutMn2 } = require('../../src/index')

  exports.RootLayout = class RootLayout extends UILayoutMn2
    initialize: ->
      console.log 'RootLayout', arguments
    template: require('./templates/root')
    regions:
      'clientInfo': '[ui-view=clientInfo]'
      'clientList': '[ui-view=clientList]'
