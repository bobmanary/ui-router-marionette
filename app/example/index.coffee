module.exports = do (Marionette, $) ->
  { UIRouterMarionette } = require('../router')
  App = new Marionette.Application

  App.addRegions
    rootRegion: '#root'

  App.on "before:start", ->
    @router = new UIRouterMarionette(App.rootRegion)
    require('./routes')

  App.on "start", ->
    @router.start()

  return App
