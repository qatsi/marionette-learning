ContactManager.module('Entities', function(
  Entities, ContactManager, Backbone, Marionette, $, _
){
  var alertPrivate = function(message){
    alert("Private alert: " + message);
  }
  Entities.alertPublic = function(message){
    alert("I will now call alertPublic");
    alertPrivate(message);
  }
  
  Entities.Contact = Backbone.Model.extend({});

  Entities.ContactCollection = Backbone.Collection.extend({
    model: Entities.Contact,
    selectedStrategy: "firstName",
    comparator: function(a){
      var full_name = a.get('firstName') + a.get('lastName');
      console.log(full_name);
      return full_name;
    }
  });

  var contacts;
  var initializeContacts = function(){
    contacts = new Entities.ContactCollection([
      { id: '1', firstName: 'Alice',   lastName: 'Tampen',   phoneNumber: '555-0001' },
      { id: '2', firstName: 'Bob',     lastName: 'Brigham',  phoneNumber: '555-0002' },
      { id: '3', firstName: 'Alice',   lastName: 'Artsy',    phoneNumber: '555-0003' },
      { id: '4', firstName: 'Alice',   lastName: 'Arten',    phoneNumber: '555-0004' },
      { id: '5', firstName: 'Charlie', lastName: 'Campbell', phoneNumber: '555-0005' },
      { id: '6', firstName: 'Alice',   lastName: 'Smith',    phoneNumber: '555-0006' }
    ]);
  }
  
  var API = {
    getContactsEntities: function () {
      if (contacts === undefined) {
        initializeContacts();
      }
      return  contacts;
    }
  }
  
  ContactManager.reqres.setHandler('contact:entities', function(){
    return API.getContactsEntities();
  })
});