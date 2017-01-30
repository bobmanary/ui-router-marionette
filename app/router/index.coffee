{ UIRouter, $q } = require('ui-router-core')
StateProvider = require('./state_provider')
{ mnViewsBuilder, MnViewConfig } = require('./state_view_builder')
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

    @urlMatcherFactory.$get()
    @urlRouter.listen()
    @urlRouter.sync()

    @rootUIView = new UIViewMarionette(@, null, @rootRegion, "")
    @rootUIView.register()



_.extend exports, { UIViewMarionette, UIRouterMarionette }
