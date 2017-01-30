{ UIRouter, $q } = require('ui-router-core')
StateProvider = require('./state_provider')
{ mnViewsBuilder, MnViewConfig } = require('./state_views_builder')
{ hashLocationPlugin, servicesPlugin } = require('ui-router-core/lib/vanilla')
{ UIViewMarionette } = require('./uiview')



viewConfigFactory = (node, config) ->
  new MnViewConfig(node, config)



class UIRouterMarionette extends UIRouter
  constructor: (@rootRegion) ->
    super
    @viewService._pluginapi._viewConfigFactory('backbone', viewConfigFactory)
    @stateProvider = new StateProvider(@stateRegistry, @stateService)
    @plugin(servicesPlugin)
    @plugin(hashLocationPlugin)

    @stateRegistry.decorator("views", mnViewsBuilder)


    @rootRegion.uiView = @rootUIView = new UIViewMarionette(@, null, @rootRegion, "")
    @rootUIView.register()

  start: ->
    @urlMatcherFactory.$get()
    @urlRouter.listen()
    @urlRouter.sync()



_.extend exports, { UIViewMarionette, UIRouterMarionette }
