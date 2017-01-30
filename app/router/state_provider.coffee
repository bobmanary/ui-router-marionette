#StateRegistry = require('node_modules/ui-router-core/state/stateRegistry')

StateRegistry = require('ui-router-core').StateRegistry



module.exports = class StateProvider
  constructor: (@stateRegistry, @stateService) ->


  state: (name, definition) ->
    if _.isObject name
      definition = name
    else
      definition.name = name

    @stateRegistry.register definition
    @
