window.App.module "Example", (Example, App, Backbone, Marionette, $, _) ->

  { UILayoutMn2 } = require('../../src/index')

  exports.ClientContainerView = class ClientContainerView extends UILayoutMn2
    regions:
      '$default': '[ui-view]'
    behaviors:
      UISref: {}
      UISrefActive: {activeClasses: 'state-is-active'} # apply custom css class for active states

    template: require('./templates/client_container')
    initialize: (options) ->
      @model = options.resolved.client
    serializeData: ->
      _.extend super,
        params: (p) ->
          try
            return JSON.stringify(p)
          return '{}'
