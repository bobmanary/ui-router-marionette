Mn = require('backbone.marionette')
{ UIRouterMarionette } = require('../index')



exports.UISref = class UISref extends Mn.Behavior
  ui:
    sref: '[ui-sref]'

  events:
    'click @ui.ref': 'onClickLink'

  onClickLink: ->
    # maybe parse and navigate to state if this element was inserted after
    # original attachment (through data binding or whatever)

  onAttach: ->
    @ui.sref.each (i, e) ->
      state = $(e).attr('ui-sref')
      # TODO: figure out how to get/parse url params
      url = UIRouterMarionette.getInstance().stateService.href(state, {id: 1})
      e.href = url
