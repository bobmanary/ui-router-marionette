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
  console.log 'stateBuilder', state

  # allowable keys are basically "component" and maybe "bindings" for my plans here
  keys = ['component', 'bindings']

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

  return views



exports.MnViewConfig = class MnViewConfig
  constructor: (@path, @viewDecl) ->
    @loaded = true
    @id = viewConfigId++
    #console.log("mnviewconfig ctor #{@id}", arguments)

  load: ->
    #console.log "mnviewconfig load #{@id}", arguments
    $q = services.$q
    # context = new ResolveContext(@path)

    return $q.when(@)
