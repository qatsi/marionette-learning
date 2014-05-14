ContactManager.module('Entities', function(Entities, ContactManager, Backbone, Marionette, $, _){
  var alertPrivate = function(message){
    alert("Private alert: " + message);
  }
  Entities.alertPublic = function(message){
    alert("I will now call alertPublic");
    alertPrivate(message);
  }
  
  Entities.Contact = Backbone.Model.extend({
    urlRoot: 'contacts'
  });
  Entities.configureStorage(Entities.Contact);

  Entities.ContactCollection = Backbone.Collection.extend({
    url: 'contacts',
    model: Entities.Contact,
    selectedStrategy: "firstName",
    comparator: function(a){
      var full_name = a.get('firstName') + a.get('lastName');
      // console.log(full_name);
      return full_name;
    }
  });
  Entities.configureStorage(Entities.ContactCollection);

  var contacts;
  var initializeContacts = function(){
    contacts = new Entities.ContactCollection([
      { id: '1', firstName: 'Alice',   lastName: 'Tampen',   phoneNumber: '555-0001' },
      { id: '2', firstName: 'Bob',     lastName: 'Brigham',  phoneNumber: '555-0002' },
      { id: '3', firstName: 'Alice',   lastName: 'Artsy',    phoneNumber: '555-0003' },
      { id: '4', firstName: 'Alice',   lastName: 'Arten',    phoneNumber: '555-0004' },
      { id: '5', firstName: 'Charlie', lastName: 'Campbell', phoneNumber: '555-0005' },
      { id: '6', firstName: 'Alice',   lastName: 'Smith',    phoneNumber: '555-0006' },
      { id: '7', firstName: 'Alexander',lastName: 'Egorov',  phoneNumber: '555-0007' },
      { id: '8', firstName: 'Michael',lastName: 'Abramovich',phoneNumber: '555-0008' }
      ]);
      // Here we save each contacts
      contacts.forEach(function(contact){
        contact.save();
      });
    };

    var API = {
      getContactsEntities: function () {
        contacts = new Entities.ContactCollection();
        contacts.fetch();
        if (contacts.length === 0) {
          // Here we load out contacts
          initializeContacts();
        }
        return  contacts;
      },
      getContactsEntity: function(contactId){
        var contact = new Entities.Contact({id: contactId});
        var deferredFetch = new $.Deferred();
        var timeout = 250 + _.random(0, 1000);
        // Additional logging:
        console.log('About to fetch contact data in ' + timeout + 'ms.');
        _.delay(function(){
          contact.fetch({
            success: function(data){
              console.log('Fetching of contact id:' + contactId + ' is completed.');
              deferredFetch.resolve(data);
            }
          })
        }, timeout);
        // Here we send promise object
        return deferredFetch.promise();
      }
    };

    ContactManager.reqres.setHandler('contact:entities', function(){
      return API.getContactsEntities();
    });

    ContactManager.reqres.setHandler('contact:entity', function(id){
      return API.getContactsEntity(id);
    });

  });