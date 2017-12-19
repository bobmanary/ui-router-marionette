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

  let ClientPlaceholderView;
  const { UILayoutMn2 } = require('../../src/index');

  return defaultExport.ClientPlaceholderView = (ClientPlaceholderView = (function() {
    ClientPlaceholderView = class ClientPlaceholderView extends Marionette.ItemView {
      static initClass() {
        this.prototype.template = require('./templates/client_placeholder');
      }
      initialize() {
        return console.log('ClientPlaceholderView', arguments);
      }
    };
    ClientPlaceholderView.initClass();
    return ClientPlaceholderView;
  })());
});
export default defaultExport;
