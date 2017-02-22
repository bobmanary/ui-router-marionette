Marionette = require('backbone.marionette')

{ UIRouterMarionette } = require('../src/index')

App = new Marionette.Application
Marionette.Behaviors.behaviorsLookup = ->
  # Import Marionette behaviors for UI-Router state links and active state
  { UISref, UISrefActive } = require('../src/index')
  return { UISref, UISrefActive }

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

module.exports = App
