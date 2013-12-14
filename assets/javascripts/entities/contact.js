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
});