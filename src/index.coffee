_ = require('underscore')
{
  $q
  UIViewMarionette
  Router
} = require('./router')

{
  UISref
  UISrefActive
} = require('./marionette/behaviors')

UILayoutMn2 = require('./ui_layout_mn2')


_.extend exports, {
  Router
  UISref
  UISrefActive
  UILayoutMn2
  UIViewMarionette
  $q
}
