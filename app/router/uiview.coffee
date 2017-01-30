id = 0
Marionette = require('backbone.marionette/lib/backbone.marionette')

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
        console.warn('configUpdated', this, arguments)
        return console.warn('no config') if not config?
        return console.warn("bad config type '#{config.viewDecl.$type}'") if config.viewDecl.$type isnt 'backbone'
        console.warn('good config type?')
        @updateView(config)
      config: undefined

    console.log "added fqn #{@activeUIView.fqn}"


  register: ->
    @deregister = @router.viewService.registerUIView(@activeUIView)
    @updateView()

  updateView: (newConfig) ->
    return if @viewConfig == newConfig
    @viewConfig = newConfig
    if newConfig?.viewDecl?.component?
      @mnRegion.show new newConfig.viewDecl.component().getView()

  onBeforeDestroy: ->
    @deregister?()
