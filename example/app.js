// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
import Marionette from 'backbone.marionette';
import { Router } from '../src';



const App = new Marionette.Application;
Marionette.Behaviors.behaviorsLookup = function() {
  // Import Marionette behaviors for UI-Router state links and active state
  const { UISref, UISrefActive } = require('../src/index');
  return { UISref, UISrefActive };
};

App.addRegions({
  rootRegion: '#root'});

App.on("before:start", function() {
  this.router = Router.getInstance();
  require('./routes');
  const { Visualizer } = require('ui-router-visualizer');
  this.router.plugin(Visualizer);
  this.router.trace.enable();
  return this.router.trace.enable("TRANSITION", "UIVIEW", "VIEWCONFIG");
});

App.on("start", function() {
  return this.router.start(App.rootRegion);
});

export default App;
