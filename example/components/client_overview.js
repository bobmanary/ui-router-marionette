// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS206: Consider reworking classes to avoid initClass
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
let defaultExport = {};
window.App.module("Example", function(Example, App, Backbone, Marionette, $, _) {

  let ClientOverviewController, ClientOverviewView;
  const { UILayoutMn2 } = require('../../src/index');

  defaultExport.ClientOverviewView = (ClientOverviewView = (function() {
    ClientOverviewView = class ClientOverviewView extends Marionette.ItemView {
      static initClass() {
        this.prototype.template = require('./templates/client_overview');
      }
      initialize() {
        return console.log('ClientOverviewView', arguments);
      }
      serializeData() {
        return this.options.resolved.client.toJSON();
      }
    };
    ClientOverviewView.initClass();
    return ClientOverviewView;
  })());



  return defaultExport.ClientOverviewController = (ClientOverviewController = class ClientOverviewController extends Marionette.Object {
    initialize({ view }) {
      this.view = view;
      return console.log('ClientOverviewController', arguments);
    }

    onViewDestroyed() {
      return console.log("ClientOverviewController's view was destroyed");
    }

    onBeforeDestroy() {
      return console.log("ClientOverviewController is being destroyed");
    }
  });
});
export default defaultExport;
