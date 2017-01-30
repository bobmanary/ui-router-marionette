{ UIViewMarionette } = require('./uiview')

# A layout view for Marionette 2.x apps.
# When the regions are created they also get registered as UIViews.
module.exports = class UILayoutMn2 extends Marionette.LayoutView
  constructor: ->
    super

    @on "attach", @onAttachUI

    @on "before:destroy", @onBeforeDestroyUI

  regions:
    # Register the first element with a ui-view attribute as the
    # default region and UIView.
    "$default": "[ui-view]"

  onAttachUI: (me, parentRegion) ->
    @parent = parentRegion
    for own regionName, region of @regions
      # Need a proper way to inject the router here
      @[regionName].uiView = new UIViewMarionette App.router, @, @[regionName], regionName
      @[regionName].uiView.register()
    return

  onBeforeDestroyUI: ->
    @parent = null
