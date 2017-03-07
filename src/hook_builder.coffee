{ ResolveContext } = require('ui-router-core')

getLocals = (resolveContext) ->
  # return a {k:v} map of the resolved objects for this state
  tokens = _.filter resolveContext.getTokens(), (token) -> typeof token is 'string'
  tuples = {}
  for key in tokens
    resolvable = resolveContext.getResolvable(key)
    waitPolicy = resolveContext.getPolicy(resolvable).async
    tuples[key] = if waitPolicy is 'NOWAIT' then resolvable.promise else resolvable.data
  return tuples

module.exports = getStateHookBuilder = (hookName) ->
  # hookName = "onEnter"|"onExit"|"onRetain"
  return (state, parentFn) ->
    hook = state[hookName]
    pathname = if hookName is 'onExit' then 'from' else 'to'

    decoratedHook = (transition, state) ->
      resolveContext = new ResolveContext(transition.treeChanges(pathname))
      locals = getLocals(resolveContext)
      return hook(transition, state, locals)

    return decoratedHook if hook?
