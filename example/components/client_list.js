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

  let ClientListController, ClientListView;
  const { UILayoutMn2 } = require('../../src/index');

  defaultExport.ClientListView = (ClientListView = (function() {
    ClientListView = class ClientListView extends Marionette.ItemView {
      static initClass() {
        this.prototype.behaviors = {
          UISref: {},
          UISrefActive: {}
        };
        this.prototype.template = require('./templates/client_list');
      }
      initialize(options) {
        console.log('ClientListView', arguments);
        return this.collection = options.resolved.clients;
      }
      serializeData() {
        return _.extend(super.serializeData(...arguments), {
          params(p) {
            try {
              return JSON.stringify(p);
            } catch (error) {}
            return '{}';
          }
        }
        );
      }
    };
    ClientListView.initClass();
    return ClientListView;
  })());



  return defaultExport.ClientListController = (ClientListController = class ClientListController extends Marionette.Object {
    initialize() {
      return console.log('ClientListController', arguments);
    }
  });
});
export default defaultExport;

