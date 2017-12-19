// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
// state->view logic specific to backbone (marionette)
// ref: ui-router-ng1/statebuilders/views.ts

// guess there's some missing magic here

let MnViewConfig;
import { services, ViewService, ResolveContext, Resolvable } from 'ui-router-core';
// AppLayout = require('javascripts/lib/views/layout')
let viewConfigId = 0;

const hasAnyKey = (keys, obj) =>
  // unused, copied from ui-router for ng1
  _.reduce(keys, ((memo, key) => memo || (obj[key] != null)), false)
;



let defaultExport = {};
defaultExport.mnViewsBuilder = function(state) {
  if (!state.parent) { return; }

  const keys = ['view', 'controller'];

  const views = {};
  const viewsObject = state.views || {$default: _.pick(state, keys)};

  _.each(viewsObject, function(config, name) {
    name = name || '$default';

    config.resolveAs = config.resolveAs || '$resolve';
    config.$type = 'backbone';
    config.$context = state;
    config.$name = name;

    const normalized = ViewService.normalizeUIViewTarget(config.$context, config.$name);
    config.$uiViewName = normalized.uiViewName;
    config.$uiViewContextAnchor = normalized.uiViewContextAnchor;
    return views[name] = config;
  });

  return views;
};



defaultExport.MnViewConfig = (MnViewConfig = class MnViewConfig {
  constructor(path, viewDecl) {
    this.path = path;
    this.viewDecl = viewDecl;
    this.loaded = true;
    this.$id = viewConfigId++;
  }

  load() {
    return services.$q.when(this);
  }
});
export default defaultExport;
