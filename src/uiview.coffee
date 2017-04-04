id = 0
Mn = require('backbone.marionette')
{ ResolveContext } = require('ui-router-core')



exports.UIViewMarionette = class UIViewMarionette extends Mn.Object
  # Side note:
  # If Marionette provided a way to use custom Region subclasses on a per-View
  # basis I could register ui-views directly in the Region constructor instead
  # of having this separate UIViewMarionette class and a custom
  # LayoutView subclass, but I don't want to do that globally and attempt to
  # register regions that aren't going to be managed by ui-router.

  initialize: (@router, mnLayout, @mnRegion, mnRegionName) ->
    # Leverage Marionette's view lifecycle to know when to unregister
    # the ui-view
    @listenTo mnLayout, "before:destroy", @destroy

    # Except for the top-level region passed to router.start(), a name should
    # always be provided (even if it is '$default')
    name = mnRegionName || '$default'
    # TBH I'm not entirely sure what the context is for.
    parentContext = mnLayout?.parent?.uiView?.activeUIView.config?.viewDecl?.$context
    # nested FQNs will end up as something like
    # '$default.$default.myNamedUIView.$default'
    parentFqn = mnLayout?.parent?.uiView?.activeUIView?.fqn

    @activeUIView =
      $type: 'backbone'
      id: id++
      name: name
      fqn: if parentFqn then "#{parentFqn}.#{name}" else name
      creationContext: parentContext || @router.stateRegistry.root()
      configUpdated: (config) => @onConfigUpdated(config)
      config: undefined

  register: ->
    @deregister = @router.viewService.registerUIView(@activeUIView)

  onConfigUpdated: (newConfig) ->
    # If no config was provided (which happens right after registering this view
    # or or when entering a state that has nothing to put in this slot), we want
    # to make sure that the ui-view element is empty.
    return @clearPreviousConfig() if not newConfig

    # We somehow got a config for a different framework's ui-router integration
    # (I imagine this is mainly an angular 1 to 2 migration thing?)
    return if newConfig.viewDecl.$type isnt 'backbone'

    # Got the currently active view config again.
    return if @activeUIView.config is newConfig

    @updateView(newConfig)

  updateView: (newConfig) ->
    @activeUIView.config = newConfig

    # Create view and controller instances if they were specified in the
    # state config.
    resolved = @getResolved(newConfig)
    view = @getView(newConfig, resolved: resolved)
    controller = @getController(newConfig, resolved: resolved, view: view)

    if view?
      @mnRegion.show view
      if controller?
        controller.triggerMethod("ui:view:show")
        # this could be buggy if user specifies controller without view
        # (zombie controllers)
        @listenToOnce view, "destroy", ->
          controller.destroy()

    state = newConfig.path[newConfig.path.length-1].state.self
    @registerEventCallbacks(state, view, controller)

  getResolved: (config) ->
    # Map all resolved objects (plus $stateParams and $transition$)
    # to a plain object to pass to the view and controller
    context = new ResolveContext(config.path)
    resolved = {}
    keys = _.filter context.getTokens(), (token) -> typeof token is 'string'
    resolved[key] = context.getResolvable(key).data for key in keys

    return resolved

  getView: (config, viewOptions) ->
    if config?.viewDecl?.view?
      view = new config.viewDecl.view(viewOptions)

  getController: (config, controllerOptions) ->
    if config?.viewDecl?.controller?
      return new config.viewDecl.controller(controllerOptions)

  registerEventCallbacks: (state, view, controller) ->
    criteria = {exiting: state.name}
    @registerExitCallback(view, criteria) if view?
    @registerExitCallback(controller, criteria) if controller?

  registerExitCallback: (component, criteria) ->
    # call the view or controller's uiCanExit method to determine if we should
    # leave the current state.
    if typeof component.uiCanExit is 'function'
      deregisterFn = @router.transitionService.onBefore criteria, component.uiCanExit, bind: component
      component.on "destroy", deregisterFn

  clearPreviousConfig: ->
    @mnRegion.empty()
    @activeUIView.view? && @activeUIView.controller?.triggerMethod('view:destroyed')
    @activeUIView.config = undefined

  onBeforeDestroy: ->
    @deregister?()
