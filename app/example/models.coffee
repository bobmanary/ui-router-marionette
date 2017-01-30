console.log 'wtf'


testData = [
  {id: 1, first_name: "Theodore", last_name: "Logan"}
  {id: 2, first_name: "William", last_name: "Preston"}
  {id: 3, first_name: "Louise", last_name: "Sawyer"}
  {id: 4, first_name: "Thelma", last_name: "Dickinson"}
]

resolveDelay = 333


exports.ClientModel = class ClientModel extends Backbone.Model
  urlRoot: "/clients"

  fetch: ->
    # fake a server model request
    deferred = $.Deferred()
    debugger
    if not (clientData = _.findWhere testData, id: parseInt(@id, 10))?
      deferred.reject()

    @set clientData
    setTimeout (=>
      console.log "Fetched a client model", @
      deferred.resolve clientData, {}
    ), resolveDelay

    return deferred.promise()

  getPhoneNumbers: ->
    collection = new PhoneNumberCollection [
      { phone: '555 555 5555', ext: null, type: 'home' }
      { phone: '555 555 5555', ext: '1234', type: 'work' }
    ]
    deferred = $.Deferred()
    deferred.resolve(collection)
    return deferred.promise()



exports.PhoneNumberModel = class PhoneNumberModel extends Backbone.Model



exports.PhoneNumberCollection = class PhoneNumberCollection extends Backbone.Collection
  model: PhoneNumberModel
  sync: (method, model, options) ->
    deferred = $.Deferred()

    debugger
    deferred.resolve [
      {id: 1, first_name: "Theodore", last_name: "Logan"}
      {id: 2, first_name: "William", last_name: "Preston"}
      {id: 3, first_name: "Louise", last_name: "Sawyer"}
      {id: 4, first_name: "Thelma", last_name: "Dickinson"}
    ]
    promise = deferred.promise()
    model.trigger 'request', model, promise, options
    return promise
