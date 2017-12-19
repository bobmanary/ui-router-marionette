// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
import { UIRouter } from 'ui-router-core';
import StateViewsBuilder from './state_views_builder';

const {
  mnViewsBuilder,
  MnViewConfig
} = StateViewsBuilder;

import { hashLocationPlugin, servicesPlugin } from 'ui-router-core/lib/vanilla';
import Uiview from './uiview';

const {
  UIViewMarionette
} = Uiview;

import getStateHookBuilder from './hook_builder';

let routerInstance = null;

const viewConfigFactory = (node, config) => new MnViewConfig(node, config);


class UIRouterMarionette extends UIRouter {
  static getInstance() {
    return routerInstance || (routerInstance = new (this));
  }

  constructor() {
    super(...arguments);
    this._started = false;
    this.viewService._pluginapi._viewConfigFactory('backbone', viewConfigFactory);
    this.plugin(servicesPlugin);
    this.plugin(hashLocationPlugin);

    this.stateRegistry.decorator("views", mnViewsBuilder);
    this.stateRegistry.decorator("onExit", getStateHookBuilder("onExit"));
    this.stateRegistry.decorator("onRetain", getStateHookBuilder("onRetain"));
    this.stateRegistry.decorator("onEnter", getStateHookBuilder("onEnter"));
    routerInstance = this;
  }

  // shortcut for adding a new state definition
  addState(def) {
    this.stateRegistry.register(def);
    return this;
  }


  // start listening for router events. Takes a Marionette region to use as the
  // root container (and can even share this region with Marionette routes using
  // beforeBackboneRoute below!)
  start(rootRegion) {
    this.rootRegion = rootRegion;
    if (this._started) { throw new Error("Router was already started"); }

    this.rootRegion.uiView = new UIViewMarionette(this, null, this.rootRegion, "");
    this.rootRegion.uiView.register();

    this.urlMatcherFactory.$get();
    this.urlService.listen();
    this.urlService.sync();
    this._started = true;
    return this;
  }


  // Allows the application to run a synchronous or async callback before
  // processing a Backbone/Marionette route. Intended to provide a way to wait
  // for ui-router to enter an empty "inactive" state before the Backbone or
  // Marionette routers start inserting things into the DOM.
  // Replaces Backbone.Router.route, so could potentially conflict if used with
  // something like backbone.routefilter which also wraps the same function.
  // Should be fine in that specific case if called after routefilter has already
  // patched it.
  // Call order:
  // - load routefilter or other addons that modify Backbone.Router.prototype.route
  // - initialize marionette app and main content region
  // - register beforeBackboneRoute callback
  // - register backbone, marionette and ui-router routes
  // - tell your routers to start
  // Must be called before backbone/marionette routes are defined to have any
  // effect.
  // Example:
  //   uiRouter.beforeBackboneRoute(function(route, name, routeParams, $state){
  //     return $state.go("inactiveRouterState")
  //   })
  //   uiRouter.addState({name: "inactiveRouterState"})
  beforeBackboneRoute(beforeRouteCallback) {
    if (typeof beforeRouteCallback !== 'function') { return; }
    const originalRoute = Backbone.Router.prototype.route;
    const uiRouter = this;

    return Backbone.Router.prototype.route = function(route, name, originalCallback) {
      const bbRouter = this;
      const wrappedCallback = function(...routeParams) {
        const result = beforeRouteCallback.call(uiRouter, route, name, routeParams, uiRouter.stateService);
        if (_.isFunction(result != null ? result.then : undefined)) {
          // if it looks like a promise, wait for promise to resolve before
          // processing route
          return result.then(() => originalCallback.apply(bbRouter, routeParams));
        } else {
          // if it doesn't look like a promise, just run normally.
          return originalCallback.apply(bbRouter, routeParams);
        }
      };

      return originalRoute.call(bbRouter, route, name, wrappedCallback);
    };
  }
}


let defaultExport = {};
defaultExport.UIViewMarionette = UIViewMarionette;
defaultExport.Router = UIRouterMarionette;
export default defaultExport;
