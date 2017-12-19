// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS206: Consider reworking classes to avoid initClass
 * DS207: Consider shorter variations of null checks
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
let ClientCollection, ClientModel, PhoneNumberCollection, PhoneNumberModel;
const testData = [
  {id: 1, first_name: "Theodore", last_name: "Logan", location: "CA", member_since: '2005-01-23'},
  {id: 2, first_name: "William", last_name: "Preston", location: "CA", member_since: '2016-07-01'},
  {id: 3, first_name: "Louise", last_name: "Sawyer", location: "AZ", member_since: '2012-12-28'},
  {id: 4, first_name: "Thelma", last_name: "Dickinson", location: "AZ", member_since: '1999-11-17'}
];

const resolveDelay = 100;


let defaultExport = {};
defaultExport.ClientModel = (ClientModel = (function() {
  ClientModel = class ClientModel extends Backbone.Model {
    static initClass() {
      this.prototype.urlRoot = "/clients";
    }

    fetch() {
      // fake a server model request
      let clientData;
      const deferred = $.Deferred();
      if (((clientData = _.findWhere(testData, {id: parseInt(this.id, 10)})) == null)) {
        deferred.reject();
      }

      this.set(clientData);
      deferred.resolve(clientData, {});

      return deferred.promise();
    }

    getPhoneNumbers() {
      const collection = new PhoneNumberCollection([
        { number: '555 555 5555', ext: null, type: 'home' },
        { number: '555 555 5555', ext: '1234', type: 'work' }
      ]);
      const deferred = $.Deferred();
      deferred.resolve(collection);
      return deferred.promise();
    }
  };
  ClientModel.initClass();
  return ClientModel;
})());



defaultExport.ClientCollection = (ClientCollection = (function() {
  ClientCollection = class ClientCollection extends Backbone.Collection {
    static initClass() {
      this.prototype.model = ClientModel;
    }
    fetch() {
      const data = _.map(testData, client => _.pick(client, "id", "first_name", "last_name"));
      const deferred = $.Deferred();

      this.reset(data);
      deferred.resolve(this);
      const promise = deferred.promise();
      this.trigger('request', this, promise, {});
      return promise;
    }
  };
  ClientCollection.initClass();
  return ClientCollection;
})());





defaultExport.PhoneNumberModel = (PhoneNumberModel = class PhoneNumberModel extends Backbone.Model {});



defaultExport.PhoneNumberCollection = (PhoneNumberCollection = (function() {
  PhoneNumberCollection = class PhoneNumberCollection extends Backbone.Collection {
    static initClass() {
      this.prototype.model = PhoneNumberModel;
    }
    sync(method, model, options) {
      const deferred = $.Deferred();

      deferred.resolve([
        {id: 1, first_name: "Theodore", last_name: "Logan"},
        {id: 2, first_name: "William", last_name: "Preston"},
        {id: 3, first_name: "Louise", last_name: "Sawyer"},
        {id: 4, first_name: "Thelma", last_name: "Dickinson"}
      ]);
      const promise = deferred.promise();
      model.trigger('request', model, promise, options);
      return promise;
    }
  };
  PhoneNumberCollection.initClass();
  return PhoneNumberCollection;
})());
export default defaultExport;
