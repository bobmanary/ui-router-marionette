# UI-Router Marionette

An attempt at writing a UI-Router integration for Backbone Marionette apps. Not yet functional.

## Running the example:
```
# npm install -g brunch
$ npm install
$ npm start
```
Accessible at `http://localhost:3332`.

Doesn't set up default routes or anything yet so currently you need to open the javascript console and run `App.router.stateService.go('app.client.contact', {id: 4})`

## Current issues:
- Everything!
- Duplicates the "Root component" view.



## Usage:
todo: write docs

### Adding states

### Registering Marionette.Regions as ui-views

### Linking to states
A Marionette Behavior class is provided for <a> building links to other states.

```javascript
Marionette.Behaviors.behaviorsLookup = function() {
  return {
    UISref: require('../router/marionette/behaviors').UISref
  }
}
var ClientContactView = Marionette.ItemView.extend({
  behaviors: {
    UISref: {}
  }
})
```
```html
<a ui-sref="app.client.contact" ui-sparams="{&quot;id: 1&quot;}">Contact Info</a>
```

It will find elements in the rendered view with a `ui-sref` attribute and
optional `ui-sparams` as an HTML-escaped JSON string. If your template engine
supports helper functions you may want to write a small a helper for making the
params object, for example:
```javascript
function params(p) {
  try {
    // escapeHtml not provided and not necessary if your template engine
    // escapes HTML automatically.
    return escapeHtml(JSON.stringify(p));
  } catch (err) {
    return '{}';
  }
}
```
Using in an embedded coffeescript template:
```erb
<a ui-sref="app.client.contact" ui-sparams="<%= @params({id: @id}) %>">Contact Info</a>
```
