/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS102: Remove unnecessary code created because of implicit returns
 * DS103: Rewrite code to no longer use __guard__
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
let UIViewMarionette;
let id = 0;
import Mn from 'backbone.marionette';
import { ResolveContext } from 'ui-router-core';



let defaultExport = {};
defaultExport.UIViewMarionette = (UIViewMarionette = class UIViewMarionette extends Mn.Object {
  // Side note:
  // If Marionette provided a way to use custom Region subclasses on a per-View
  // basis I could register ui-views directly in the Region constructor instead
  // of having this separate UIViewMarionette class and a custom
  // LayoutView subclass, but I don't want to do that globally and attempt to
  // register regions that aren't going to be managed by ui-router.

  initialize(router, mnLayout, mnRegion, mnRegionName) {
    // Leverage Marionette's view lifecycle to know when to unregister
    // the ui-view
    this.router = router;
    this.mnRegion = mnRegion;
    this.listenTo(mnLayout, "before:destroy", this.destroy);

    // Except for the top-level region passed to router.start(), a name should
    // always be provided (even if it is '$default')
    const name = mnRegionName || '$default';
    // TBH I'm not entirely sure what the context is for.
    const parentContext = __guard__(__guard__(__guard__(__guard__(mnLayout != null ? mnLayout.parent : undefined, x3 => x3.uiView), x2 => x2.activeUIView.config), x1 => x1.viewDecl), x => x.$context);
    // nested FQNs will end up as something like
    // '$default.$default.myNamedUIView.$default'
    const parentFqn = __guard__(__guard__(__guard__(mnLayout != null ? mnLayout.parent : undefined, x6 => x6.uiView), x5 => x5.activeUIView), x4 => x4.fqn);

    return this.activeUIView = {
      $type: 'backbone',
      id: id++,
      name,
      fqn: parentFqn ? `${parentFqn}.${name}` : name,
      creationContext: parentContext || this.router.stateRegistry.root(),
      configUpdated: config => this.onConfigUpdated(config),
      config: undefined
    };
  }

  register() {
    return this.deregister = this.router.viewService.registerUIView(this.activeUIView);
  }

  onConfigUpdated(newConfig) {
    // If no config was provided (which happens right after registering this view
    // or or when entering a state that has nothing to put in this slot), we want
    // to make sure that the ui-view element is empty.
    if (!newConfig) { return this.clearPreviousConfig(); }

    // We somehow got a config for a different framework's ui-router integration
    // (I imagine this is mainly an angular 1 to 2 migration thing?)
    if (newConfig.viewDecl.$type !== 'backbone') { return; }

    // Got the currently active view config again.
    if (this.activeUIView.config === newConfig) { return; }

    return this.updateView(newConfig);
  }

  updateView(newConfig) {
    this.activeUIView.config = newConfig;

    // Create view and controller instances if they were specified in the
    // state config.
    const resolved = this.getResolved(newConfig);
    const view = this.getView(newConfig, {resolved});
    const controller = this.getController(newConfig, {resolved, view});

    if (view != null) {
      this.mnRegion.show(view);
      if (controller != null) {
        controller.triggerMethod("ui:view:show");
        // this could be buggy if user specifies controller without view
        // (zombie controllers)
        this.listenToOnce(view, "destroy", () => controller.destroy());
      }
    }

    const state = newConfig.path[newConfig.path.length-1].state.self;
    return this.registerEventCallbacks(state, view, controller);
  }

  getResolved(config) {
    // Map all resolved objects (plus $stateParams and $transition$)
    // to a plain object to pass to the view and controller
    const context = new ResolveContext(config.path);
    const resolved = {};
    const keys = _.filter(context.getTokens(), token => typeof token === 'string');
    for (let key of Array.from(keys)) { resolved[key] = context.getResolvable(key).data; }

    return resolved;
  }

  getView(config, viewOptions) {
    if (__guard__(config != null ? config.viewDecl : undefined, x => x.view) != null) {
      let view;
      return view = new config.viewDecl.view(viewOptions);
    }
  }

  getController(config, controllerOptions) {
    if (__guard__(config != null ? config.viewDecl : undefined, x => x.controller) != null) {
      return new config.viewDecl.controller(controllerOptions);
    }
  }

  registerEventCallbacks(state, view, controller) {
    const criteria = {exiting: state.name};
    if (view != null) { this.registerExitCallback(view, criteria); }
    if (controller != null) { return this.registerExitCallback(controller, criteria); }
  }

  registerExitCallback(component, criteria) {
    // call the view or controller's uiCanExit method to determine if we should
    // leave the current state.
    if (typeof component.uiCanExit === 'function') {
      const deregisterFn = this.router.transitionService.onBefore(criteria, component.uiCanExit, {bind: component});
      return component.on("destroy", deregisterFn);
    }
  }

  clearPreviousConfig() {
    this.mnRegion.empty();
    (this.activeUIView.view != null) && (this.activeUIView.controller != null ? this.activeUIView.controller.triggerMethod('view:destroyed') : undefined);
    return this.activeUIView.config = undefined;
  }

  onBeforeDestroy() {
    return (typeof this.deregister === 'function' ? this.deregister() : undefined);
  }
});
export default defaultExport;

function __guard__(value, transform) {
  return (typeof value !== 'undefined' && value !== null) ? transform(value) : undefined;
}