id = 0
Marionette = require('backbone.marionette/lib/backbone.marionette')
{ ResolveContext } = require('ui-router-core')

# Marionette.Region::initialize = (options) ->
  # If Marionette provided a way to use custom region classes on a per-layout
  # basis I could register UIViews here but I don't want to do it globally
  # and attempt to register regions that aren't being managed by ui-router.


exports.UIViewMarionette = class UIViewMarionette extends Marionette.Object

  initialize: (@router, mnLayout, @mnRegion, mnRegionName) ->
    @viewConfig = null
    @listenTo mnLayout, "before:destroy", @destroy

    name = mnRegionName || '$default'

    rootContext = @router.stateRegistry.root()
    parentContext = mnLayout?.parent?.uiView?.viewConfig?.viewDecl?.$context
    parentFqn = mnLayout?.parent?.uiView?.activeUIView?.fqn
    @activeUIView =
      $type: 'backbone'
      id: id++
      name: name
      fqn: if parentFqn then "#{parentFqn}.#{name}" else name
      creationContext: parentContext || rootContext
      configUpdated: (config) =>
        return if not config?
        return console.error("bad config type '#{config.viewDecl.$type}'") if config.viewDecl.$type isnt 'backbone'
        @updateView(config)
      config: undefined

  register: ->
    @deregister = @router.viewService.registerUIView(@activeUIView)
    @updateView()

  updateView: (newConfig) ->
    return if @viewConfig == newConfig
    @viewConfig = newConfig
    if newConfig?.viewDecl?.component?
      @mnRegion.show (new newConfig.viewDecl.component(resolves: @getResolves newConfig)).getView()

  getResolves: (config) ->
    # map all resolved objects (plus stateparams and $transition$)
    # to a plain object to pass to the component controller
    context = new ResolveContext(config.path)
    resolves = {}
    keys = _.filter context.getTokens(), (token) -> typeof token is 'string'
    resolves[key] = context.getResolvable(key).data for key in keys

    return resolves

  onBeforeDestroy: ->
    @deregister?()
