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

  let RootLayout;
  const { UILayoutMn2 } = require('../../src/index');

  return defaultExport.RootLayout = (RootLayout = (function() {
    RootLayout = class RootLayout extends UILayoutMn2 {
      static initClass() {
        this.prototype.template = require('./templates/root');
        this.prototype.regions = {
          'clientInfo': '[ui-view=clientInfo]',
          'clientList': '[ui-view=clientList]'
        };
      }
      initialize() {
        return console.log('RootLayout', arguments);
      }
    };
    RootLayout.initClass();
    return RootLayout;
  })());
});
export default defaultExport;
