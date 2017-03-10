Mn = require('backbone.marionette')
{ Router } = require('../router')


# A helper behavior for linking to states with or without state parameters.
# Element attributes:
#   ui-sref="app.state.substate"
#   ui-sparams='{"client_id": 5}' - optional if state doesn't need params or
#                                   you're linking to a sibling/child state
#                                   with the same parameters.
#                                   The value should be HTML-encoded JSON.
#                                   A template helper method is helpful here.
# Behavior options: none
#
exports.UISref = class UISref extends Mn.Behavior
  ui:
    sref: '[ui-sref]'

  events:
    'click @ui.ref': 'onClickLink'

  onClickLink: ->
    # maybe parse and navigate to state if this element was inserted after
    # original dom insertion (through data binding or whatever)

  onAttach: ->
    # Go through all the ui-sref links and turn their ui-sref and HTML-escaped
    # ui-sparams attributes into a functioning app state link
    router = Router.getInstance()
    @ui.sref.each (i, e) ->
      e = $(e)
      state = e.attr('ui-sref')
      try
        params = JSON.parse(e.attr 'ui-sparams')
      url = router.stateService.href(state, params)

      e.attr('href', url)

      # prevent the url from changing before state transition happens
      e.click (event) ->
        button = event.which
        # ignore if this isn't a regular left click (enter key appears to be
        # treated as a regular left click)
        return if button > 1 || event.shiftKey || event.metaKey || event.altKey || event.ctrlKey || e.attr('target')
        router.stateService.go(state, params)
        event.preventDefault()


# A behavior to toggle CSS classes on an element when a particular state
# (with or without specific state parameters) is active.
# Targets elements with a ui-sref-active attribute.
# ui-sref-active can optionally have a value selecting the specific state
# you want to watch for. If no value is provided, it will look to the state
# referenced by ui-sref.
# To help with lists that point at the same state with different state params,
# the behavior will also compare the contents of ui-sparams, if present.
# The default class is 'ui-state-active' but this can be customized in the
# behavior options:
# class MyView extends Marionette.ItemView
#   behaviors:
#     UISref: {}
#     UISrefActive: {activeClasses: 'state-is-active', applyToRoot: true, rootStateModelAttribute: 'state'}
#
# Behavior options:
# - activeClasses   - string. List of css classes to apply to elements when their
#                     state is active.
#
# - applyToRoot     - boolean. Toggle applying active classes to the
#                     root element. If you're using this option you also
#                     likely want to set modelStateField. State params are not
#                     currently supported for root elements with this option.
#
# - modelStateField - string. If the parent view has a backbone model,
#                     look at this field on that model to determine
#                     which state to compare against.
#                     eg:
#                     class MyView extends Marionette.ItemView
#                       behaviors:
#                         UISrefActive: {
#                           applyToRoot: true,
#                           modelStateField: "active_state"
#                         }
#                     ...
#                     navItem = new NavbarItemModel({
#                     state: "app.clients.details",
#                        name: "Details"
#                     })
#                     view = new MyView({model: navItem})
#
exports.UISrefActive = class UISrefActive extends Mn.Behavior
  ui:
    active: '[ui-sref-active]'

  defaults:
    activeClasses: 'ui-state-active'
    applyToRoot: false
    modelStateField: 'state'

  initialize: ->
    @router = Router.getInstance()
    @deregister = @router.transitionService.onSuccess {}, (transition) => @onStateChange()

  onRender: ->
    @onStateChange()

  onStateChange: ->
    if @getOption('applyToRoot')
      # state params are not supported on the view root element
      compareState = @view.model?.get(@getOption('modelStateField'))
      if compareState?
        classFn = if @router.stateService.includes(compareState) then 'addClass' else 'removeClass'
        @$el[classFn](@options.activeClasses)

    @ui.active.each (i, el) =>
      $el = $(el)
      params = $el.attr('ui-sparams')
      if params
        params = JSON.parse(params)
      compareState = $el.attr('ui-sref-active') || $el.attr('ui-sref') # fall back to the state in ui-sref if the ui-sref-active attribute is present but empty
      classFn = if @router.stateService.includes(compareState, params) then 'addClass' else 'removeClass'
      $el[classFn](@options.activeClasses)

  onBeforeDestroy: ->
    @deregister()

  removeListeners: ->
    @ui.active.off('ui:state:change')
