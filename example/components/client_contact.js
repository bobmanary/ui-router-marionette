/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS206: Consider reworking classes to avoid initClass
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
let defaultExport = {};
window.App.module("Example", function(Example, App, Backbone, Marionette, $, _) {

  let ClientContactController, ClientContactView;
  const { UILayoutMn2 } = require('../../src/index');



  class ClientContactRowView extends Marionette.ItemView {
    static initClass() {
      this.prototype.template = require('./templates/client_contact_row');
    }
  }
  ClientContactRowView.initClass();



  defaultExport.ClientContactView = (ClientContactView = (function() {
    ClientContactView = class ClientContactView extends Marionette.CollectionView {
      static initClass() {
        this.prototype.childView = ClientContactRowView;
      }
      initialize(options) {
        this.collection = options.resolved.clientPhoneNumbers;
        return console.log('ClientContactView', arguments);
      }
    };
    ClientContactView.initClass();
    return ClientContactView;
  })());



  return defaultExport.ClientContactController = (ClientContactController = class ClientContactController extends Marionette.Object {
    initialize({ view }){
      console.log('ClientContactController', arguments);
      return this.listenTo(view, 'destroy', () => console.log("ClientContactController's view was destroyed"));
    }
  });
});
export default defaultExport;
