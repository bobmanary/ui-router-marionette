module.exports = do (Marionette, $) ->
  { UIRouterMarionette } = require('../router')
  App = new Marionette.Application
  Marionette.Behaviors.behaviorsLookup = ->
    # Import Marionette behaviors for state lookup/active state
    UISref: require('../router/marionette/behaviors').UISref

  App.addRegions
    rootRegion: '#root'

  App.on "before:start", ->
    @router = UIRouterMarionette.getInstance()
    require('./routes')

  App.on "start", ->
    @router.start(App.rootRegion)

    @router.trace.enable()
    @router.trace.enable("TRANSITION", "UIVIEW", "VIEWCONFIG")

  return App
