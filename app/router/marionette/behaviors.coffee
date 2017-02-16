Mn = require('backbone.marionette')
{ UIRouterMarionette } = require('../index')


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
    router = UIRouterMarionette.getInstance()
    @ui.sref.each (i, e) ->
      e = $(e)
      state = e.attr('ui-sref')
      try
        params = JSON.parse(e.attr 'ui-sparams')
      url = router.stateService.href(state, params)

      e.attr('href', url)



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
#     UISrefActive: {activeClasses: 'state-is-active'}
#
exports.UISrefActive = class UISrefActive extends Mn.Behavior
  ui:
    active: '[ui-sref-active]'

  defaults:
    activeClasses: 'ui-state-active'

  initialize: ->
    @router = UIRouterMarionette.getInstance()
    @deregister = @router.transitionService.onSuccess {}, (transition) => @onStateChange()

  onRender: ->
    @onStateChange()

  onStateChange: ->
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
