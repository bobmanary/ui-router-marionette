// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
import _ from 'underscore';
import { $q } from 'ui-router-core';

import Router1 from './router';

const {
  UIViewMarionette,
  Router
} = Router1;

import Behaviors from './marionette/behaviors';

const {
  UISref,
  UISrefActive
} = Behaviors;

import UILayoutMn2 from './ui_layout_mn2';


let defaultExport = {};
_.extend(defaultExport, {
  Router,
  UISref,
  UISrefActive,
  UILayoutMn2,
  UIViewMarionette,
  $q
});
export default defaultExport;
