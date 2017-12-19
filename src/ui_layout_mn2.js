/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS203: Remove `|| {}` from converted for-own loops
 * DS206: Consider reworking classes to avoid initClass
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
let UILayoutMn2;
import { UIViewMarionette } from './uiview';
import { Router } from './router';
import Mn from 'backbone.marionette';
// A layout view for Marionette 2.x apps.
// When the regions are created they also get registered as UIViews.
export default (UILayoutMn2 = (function() {
  UILayoutMn2 = class UILayoutMn2 extends Mn.LayoutView {
    static initClass() {
  
      this.prototype.regions =
        // Register the first element with a ui-view attribute as the
        // default region and UIView.
        {"$default": "[ui-view]"};
    }
    constructor() {
      super(...arguments);

      this.on("attach", this.onAttachUI);

      this.on("before:destroy", this.onBeforeDestroyUI);
    }

    onAttachUI(me, parentRegion) {
      this.parent = parentRegion;
      for (let regionName of Object.keys(this.regions || {})) {
        const region = this.regions[regionName];
        this[regionName].uiView = new UIViewMarionette(Router.getInstance(), this, this[regionName], regionName);
        this[regionName].uiView.register();
      }
    }

    onBeforeDestroyUI() {
      return this.parent = null;
    }
  };
  UILayoutMn2.initClass();
  return UILayoutMn2;
})());
