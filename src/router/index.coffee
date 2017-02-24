{ UIRouter, $q } = require('ui-router-core')
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
    @plugin(servicesPlugin)
    @plugin(hashLocationPlugin)

    @stateRegistry.decorator("views", mnViewsBuilder)
    routerInstance = @

  start: (@rootRegion, options) ->
    throw new Error("Router was already started") if @_started

    if options?
      @handleOptions(options)

    @rootRegion.uiView = new UIViewMarionette(@, null, @rootRegion, "")
    @rootRegion.uiView.register()

    @urlMatcherFactory.$get()
    @urlService.listen()
    @urlService.sync()
    @_started = true
    return @

  handleOptions: (options) ->
    if typeof options.onMarionetteRoute is 'function'
      @patchMnRouter(options.onMarionetteRoute)

  patchMnRouter: (onRoute) ->
    oldProcessOnRoute = Marionette.AppRouter::_processOnRoute
    Marionette.AppRouter::_processOnRoute = (routeName, routeArgs) ->
      onRoute.call(@, routeName, routeArgs)
      oldProcessOnRoute.call(@, routeName, routeArgs)


exports.UIViewMarionette = UIViewMarionette
exports.Router = UIRouterMarionette
