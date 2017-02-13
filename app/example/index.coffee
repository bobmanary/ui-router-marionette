module.exports = do (Marionette, $) ->
  { UIRouterMarionette } = require('../router')
  App = new Marionette.Application
  Marionette.Behaviors.behaviorsLookup = ->
    # Import Marionette behaviors for state lookup/active state
    UISref: require('../router/marionette/behaviors').UISref
    UISrefActive: require('../router/marionette/behaviors').UISrefActive

  App.addRegions
    rootRegion: '#root'

  App.on "before:start", ->
    @router = UIRouterMarionette.getInstance()
    require('./routes')
    Visualizer = require('ui-router-visualizer').Visualizer
    @router.plugin(Visualizer)
    @router.trace.enable()
    @router.trace.enable("TRANSITION", "UIVIEW", "VIEWCONFIG")

  App.on "start", ->
    @router.start(App.rootRegion)

  return App
