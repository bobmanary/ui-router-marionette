@App.module "Example", (Example, App, Backbone, Marionette, $, _) ->

  UILayoutMn2 = require('../../router/ui_layout_mn2')

  exports.ClientOverviewView = class ClientOverviewView extends Marionette.ItemView
    initialize: ->
      console.log 'ClientOverviewView', arguments
    template: require('./templates/client_overview')
    serializeData: ->
      @options.resolved.client.toJSON()



  exports.ClientOverviewController = class ClientOverviewController extends Marionette.Object
    initialize: ({ @view }) ->
      console.log 'ClientOverviewController', arguments

    onViewDestroyed: ->
      console.log "ClientOverviewController's view was destroyed"

    onBeforeDestroy: ->
      console.log "ClientOverviewController is being destroyed"
