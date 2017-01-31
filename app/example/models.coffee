testData = [
  {id: 1, first_name: "Theodore", last_name: "Logan", location: "CA"}
  {id: 2, first_name: "William", last_name: "Preston", location: "CA"}
  {id: 3, first_name: "Louise", last_name: "Sawyer", location: "AZ"}
  {id: 4, first_name: "Thelma", last_name: "Dickinson", location: "AZ"}
]

resolveDelay = 100


exports.ClientModel = class ClientModel extends Backbone.Model
  urlRoot: "/clients"

  fetch: ->
    # fake a server model request
    deferred = $.Deferred()
    if not (clientData = _.findWhere testData, id: parseInt(@id, 10))?
      deferred.reject()

    @set clientData
    deferred.resolve clientData, {}

    return deferred.promise()

  getPhoneNumbers: ->
    collection = new PhoneNumberCollection [
      { number: '555 555 5555', ext: null, type: 'home' }
      { number: '555 555 5555', ext: '1234', type: 'work' }
    ]
    deferred = $.Deferred()
    deferred.resolve(collection)
    return deferred.promise()



exports.ClientCollection = class ClientCollection extends Backbone.Collection
  model: ClientModel
  fetch: ->
    data = _.map testData, (client) -> _.pick client, "id", "first_name", "last_name"
    deferred = $.Deferred()

    @reset data
    deferred.resolve @
    promise = deferred.promise()
    @trigger 'request', @, promise, {}
    return promise





exports.PhoneNumberModel = class PhoneNumberModel extends Backbone.Model



exports.PhoneNumberCollection = class PhoneNumberCollection extends Backbone.Collection
  model: PhoneNumberModel
  sync: (method, model, options) ->
    deferred = $.Deferred()

    deferred.resolve [
      {id: 1, first_name: "Theodore", last_name: "Logan"}
      {id: 2, first_name: "William", last_name: "Preston"}
      {id: 3, first_name: "Louise", last_name: "Sawyer"}
      {id: 4, first_name: "Thelma", last_name: "Dickinson"}
    ]
    promise = deferred.promise()
    model.trigger 'request', model, promise, options
    return promise
