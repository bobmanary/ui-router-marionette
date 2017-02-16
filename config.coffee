exports.config =
  server:
    hostname: '0.0.0.0'
  files:
    javascripts:
      joinTo:
        'javascripts/app.js': /^app\//
        'javascripts/vendor.js': /(node_modules)\//
        # 'javascripts/vendor.js': [
        #   'node_modules/jquery/dist/jquery.js'
        #   'node_modules/underscore/underscore.js'
        #   'node_modules/backbone/backbone.js'
        #   'node_modules/backbone.babysitter/lib/backbone.babysitter.js'
        #   'node_modules/backbone.wreqr/lib/backbone.wreqr.js'
        #   'node_modules/backbone.marionette/lib/backbone.marionette.js'
        #   'node_modules/ui-router-core/lib/**/*.js'
        # ]
      #order:
      #  before: [
      #  ]

    stylesheets:
      joinTo:
        'stylesheets/app.css': /^app(\/|\\)stylesheets/
      order:
        before: [
          'bower_components/bootstrap/dist/css/bootstrap.css'
        ]
        after: []

    templates:
      joinTo: 'javascripts/app.js'

  overrides:
    production:
      sourceMaps: true
      conventions:
        assets: null
      files:
        stylesheets:
          joinTo: {}
        templates:
          joinTo: {}
        javascripts:
          entryPoints:
            "app/index.coffee": 'ui-router-marionette.js'
          joinTo:
            'javascripts/app.js': null
            'javascripts/vendor.js': null