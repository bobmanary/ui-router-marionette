window.$ = require('jquery')
window._ = require('underscore')
window.Backbone = require('backbone')
require('ui-router-core')

# basic example app
window.App = require('./app')
App.start()