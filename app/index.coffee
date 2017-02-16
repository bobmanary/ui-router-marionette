{
  $q
  UIViewMarionette
  UIRouterMarionette
} = require('./router')

{
  UISref
  UISrefActive
} = require('./router/marionette/behaviors')

UILayoutMn2 = require('./router/ui_layout_mn2')

_.extend exports, {
  UIRouterMarionette
  UISref
  UISrefActive
  UILayoutMn2
  UIViewMarionette
  $q
}
