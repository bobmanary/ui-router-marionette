# state->view logic specific to backbone (marionette)
# ref: ui-router-ng1/statebuilders/views.ts

# guess there's some missing magic here

{ services, ViewService, ResolveContext, Resolvable } = require('ui-router-core')
# AppLayout = require('javascripts/lib/views/layout')
viewConfigId = 0

hasAnyKey = (keys, obj) ->
  # unused, copied from ui-router for ng1
  _.reduce keys, ((memo, key) -> memo or obj[key]?), false



exports.mnViewsBuilder = (state) ->
  return if not state.parent

  keys = ['view', 'controller']

  views = {}
  viewsObject = state.views or {$default: _.pick(state, keys)}

  _.each viewsObject, (config, name) ->
    name = name or '$default'

    config.resolveAs = config.resolveAs or '$resolve'
    config.$type = 'backbone'
    config.$context = state
    config.$name = name

    normalized = ViewService.normalizeUIViewTarget config.$context, config.$name
    config.$uiViewName = normalized.uiViewName
    config.$uiViewContextAnchor = normalized.uiViewContextAnchor
    views[name] = config

    for key in keys
      if config.hasOwnProperty(key) and not config[key]?
        # this could probably go through ui-router's logging/tracing service
        console.warn("ui-router state: #{state.name} - null or undefined value for '#{key}' in '#{config.$name}'")

  return views



exports.MnViewConfig = class MnViewConfig
  constructor: (@path, @viewDecl) ->
    @loaded = true
    @$id = viewConfigId++

  load: ->
    services.$q.when(@)
