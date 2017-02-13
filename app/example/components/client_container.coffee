@App.module "Example", (Example, App, Backbone, Marionette, $, _) ->

  UILayoutMn2 = require('../../router/ui_layout_mn2')

  exports.ClientContainerView = class ClientContainerView extends UILayoutMn2
    regions:
      '$default': '[ui-view]'
    behaviors:
      UISref: {}
      UISrefActive: {activeClasses: 'state-is-active'}

    template: require('./templates/client_container')
    initialize: (options) ->
      @model = options.resolved.client
    serializeData: ->
      _.extend super,
        params: (p) ->
          try
            return JSON.stringify(p)
          return '{}'
