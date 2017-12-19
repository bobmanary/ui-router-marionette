// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS101: Remove unnecessary use of Array.from
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
let getStateHookBuilder;
import { ResolveContext } from 'ui-router-core';

const getLocals = function(resolveContext) {
  // return a {k:v} map of the resolved objects for this state
  const tokens = _.filter(resolveContext.getTokens(), token => typeof token === 'string');
  const tuples = {};
  for (let key of Array.from(tokens)) {
    const resolvable = resolveContext.getResolvable(key);
    const waitPolicy = resolveContext.getPolicy(resolvable).async;
    tuples[key] = waitPolicy === 'NOWAIT' ? resolvable.promise : resolvable.data;
  }
  return tuples;
};

export default (getStateHookBuilder = hookName =>
  // hookName = "onEnter"|"onExit"|"onRetain"
  function(state, parentFn) {
    const hook = state[hookName];
    const pathname = hookName === 'onExit' ? 'from' : 'to';

    const decoratedHook = function(transition, state) {
      const resolveContext = new ResolveContext(transition.treeChanges(pathname));
      const locals = getLocals(resolveContext);
      return hook(transition, state, locals);
    };

    if (hook != null) { return decoratedHook; }
  }
);
