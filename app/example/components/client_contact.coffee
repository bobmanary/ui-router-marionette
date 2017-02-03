@App.module "Example", (Example, App, Backbone, Marionette, $, _) ->

  UILayoutMn2 = require('../../router/ui_layout_mn2')



  class ClientContactRowView extends Marionette.ItemView
    template: require('./templates/client_contact_row')



  exports.ClientContactView = class ClientContactView extends Marionette.CollectionView
    childView: ClientContactRowView
    initialize: (options) ->
      @collection = options.resolved.clientPhoneNumbers
      console.log 'ClientContactView', arguments



  exports.ClientContactController = class ClientContactController extends Marionette.Object
    initialize: ({ view })->
      console.log 'ClientContactController', arguments
      @listenTo view, 'destroy', ->
        console.log "ClientContactController's view was destroyed"
