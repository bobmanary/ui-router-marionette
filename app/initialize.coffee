# Why did I try to do this without Bower again?
window.$ = require('jquery/dist/jquery')
window._ = require('underscore/underscore')
window.Backbone = require('backbone/backbone')
require('backbone.babysitter/lib/backbone.babysitter.js')
require('backbone.wreqr/lib/backbone.wreqr.js')
window.Marionette = require('backbone.marionette/lib/backbone.marionette')
require('ui-router-core/lib/index.js')


# marionette ui-router integration
require('./router')


# (broken) basic example app
window.App = require('./example')
App.start()
