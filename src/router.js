{ UIRouter } = require('ui-router-core')
{ mnViewsBuilder, MnViewConfig } = require('./state_views_builder')
{ hashLocationPlugin, servicesPlugin } = require('ui-router-core/lib/vanilla')
{ UIViewMarionette } = require('./uiview')

getStateHookBuilder = require('./hook_builder')

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
    @stateRegistry.decorator("onExit", getStateHookBuilder("onExit"))
    @stateRegistry.decorator("onRetain", getStateHookBuilder("onRetain"))
    @stateRegistry.decorator("onEnter", getStateHookBuilder("onEnter"))
    routerInstance = @

  # shortcut for adding a new state definition
  addState: (def) ->
    @stateRegistry.register(def)
    return @


  # start listening for router events. Takes a Marionette region to use as the
  # root container (and can even share this region with Marionette routes using
  # beforeBackboneRoute below!)
  start: (@rootRegion) ->
    throw new Error("Router was already started") if @_started

    @rootRegion.uiView = new UIViewMarionette(@, null, @rootRegion, "")
    @rootRegion.uiView.register()

    @urlMatcherFactory.$get()
    @urlService.listen()
    @urlService.sync()
    @_started = true
    return @


  # Allows the application to run a synchronous or async callback before
  # processing a Backbone/Marionette route. Intended to provide a way to wait
  # for ui-router to enter an empty "inactive" state before the Backbone or
  # Marionette routers start inserting things into the DOM.
  # Replaces Backbone.Router.route, so could potentially conflict if used with
  # something like backbone.routefilter which also wraps the same function.
  # Should be fine in that specific case if called after routefilter has already
  # patched it.
  # Call order:
  # - load routefilter or other addons that modify Backbone.Router.prototype.route
  # - initialize marionette app and main content region
  # - register beforeBackboneRoute callback
  # - register backbone, marionette and ui-router routes
  # - tell your routers to start
  # Must be called before backbone/marionette routes are defined to have any
  # effect.
  # Example:
  #   uiRouter.beforeBackboneRoute(function(route, name, routeParams, $state){
  #     return $state.go("inactiveRouterState")
  #   })
  #   uiRouter.addState({name: "inactiveRouterState"})
  beforeBackboneRoute: (beforeRouteCallback) ->
    return if typeof beforeRouteCallback isnt 'function'
    originalRoute = Backbone.Router::route
    uiRouter = @

    Backbone.Router::route = (route, name, originalCallback) ->
      bbRouter = @
      wrappedCallback = (routeParams...) ->
        result = beforeRouteCallback.call(uiRouter, route, name, routeParams, uiRouter.stateService)
        if _.isFunction result?.then
          # if it looks like a promise, wait for promise to resolve before
          # processing route
          result.then ->
            originalCallback.apply(bbRouter, routeParams)
        else
          # if it doesn't look like a promise, just run normally.
          originalCallback.apply(bbRouter, routeParams)

      return originalRoute.call(bbRouter, route, name, wrappedCallback)


exports.UIViewMarionette = UIViewMarionette
exports.Router = UIRouterMarionette
