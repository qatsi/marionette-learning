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
});