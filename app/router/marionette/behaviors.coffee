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
    # Go through all the ui-sref links and turn their ui-sref and HTML-escaped
    # ui-sparams attributes into a functioning app state link
    @ui.sref.each (i, e) ->
      e = $(e)
      state = e.attr('ui-sref')
      try
        params = JSON.parse(e.attr 'ui-sparams')
      url = UIRouterMarionette.getInstance().stateService.href(state, params)

      e.attr('href', url)
