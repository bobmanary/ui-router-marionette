import _ from 'underscore';
import { $q } from 'ui-router-core';

import { UIViewMarionette, Router } from './router';

import { UISref, UISrefActive } from './marionette/behaviors';

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
