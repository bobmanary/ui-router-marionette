module.exports = do (Marionette, $) ->
  { UIRouterMarionette } = require('../router')
  App = new Marionette.Application

  App.addRegions
    rootRegion: '#root'

  App.on "before:start", ->
    @router = new UIRouterMarionette(App.rootRegion)

  App.on "start", ->
    require('./routes')

  return App
