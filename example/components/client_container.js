/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS206: Consider reworking classes to avoid initClass
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
let defaultExport = {};
window.App.module("Example", function(Example, App, Backbone, Marionette, $, _) {

  let ClientContainerView;
  const { UILayoutMn2 } = require('../../src/index');

  return defaultExport.ClientContainerView = (ClientContainerView = (function() {
    ClientContainerView = class ClientContainerView extends UILayoutMn2 {
      static initClass() {
        this.prototype.regions =
          {'$default': '[ui-view]'};
        this.prototype.behaviors = {
          UISref: {},
          UISrefActive: {activeClasses: 'state-is-active'} // apply custom css class for active states
        };
  
        this.prototype.template = require('./templates/client_container');
      }
      initialize(options) {
        return this.model = options.resolved.client;
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
    ClientContainerView.initClass();
    return ClientContainerView;
  })());
});
export default defaultExport;
