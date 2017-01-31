{ UIRouter, $q } = require('ui-router-core')
StateProvider = require('./state_provider')
{ mnViewsBuilder, MnViewConfig } = require('./state_views_builder')
{ hashLocationPlugin, servicesPlugin } = require('ui-router-core/lib/vanilla')
{ UIViewMarionette } = require('./uiview')

routerInstance = null

viewConfigFactory = (node, config) ->
  new MnViewConfig(node, config)


class UIRouterMarionette extends UIRouter
  @getInstance: ->
    routerInstance or= new @

  constructor: ->
    super
    @_started = false
    @viewService._pluginapi._viewConfigFactory('backbone', viewConfigFactory)
    @stateProvider = new StateProvider(@stateRegistry, @stateService)
    @plugin(servicesPlugin)
    @plugin(hashLocationPlugin)

    @stateRegistry.decorator("views", mnViewsBuilder)
    routerInstance = @

  start: (@rootRegion) ->
    throw new Error("Router was already started") if @_started

    @rootRegion.uiView = new UIViewMarionette(@, null, @rootRegion, "")
    @rootRegion.uiView.register()

    @urlMatcherFactory.$get()
    @urlRouter.listen()
    @urlRouter.sync()
    @_started = true
    return @


_.extend exports, { UIViewMarionette, UIRouterMarionette }
