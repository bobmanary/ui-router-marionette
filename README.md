# UI-Router Marionette

A UI-Router integration for Backbone Marionette (2.x) apps. Minimally usable at the moment.

## Running the example:
Currently requires npm v3+ or yarn for the flat node_modules structure.
```
# npm install -g brunch
$ npm install
$ npm start
```
Accessible at `http://localhost:3332`.


## To do:

- Better documentation
- Missing state options
- Behavior for active state class toggling
- Better separation of core code and example app
- Improve example app
- Investigate Marionette 3 support
- ...everything.

## Usage:

### Adding states
todo

### Registering Marionette.Regions as ui-views
todo

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
