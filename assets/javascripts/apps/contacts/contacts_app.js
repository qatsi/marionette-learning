ContactManager.module('ContactsApp', function(ContactsApp, ContactManager, Backbone, Marionette, $, _) {
  ContactsApp.Router = Marionette.AppRouter.extend({
    appRoutes: {
      "contacts": "listContacts"
    }
  });
  var API = {
    listContacts: function(){
      // console.log('Route #contacts triggered');
      ContactsApp.List.Controller.listContacts();
    }
  };
  ContactManager.addInitializer(function(){
    new ContactsApp.Router({
      controller: API
    });
  });
});