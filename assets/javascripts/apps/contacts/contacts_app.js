ContactManager.module('ContactsApp', function(ContactsApp, ContactManager, Backbone, Marionette, $, _) {
  ContactsApp.Router = Marionette.AppRouter.extend({
    appRoutes: {
      'contacts': 'listContacts',
      'contacts/:id': 'showContact'
    }
  });
  var API = {
    listContacts: function(){
      console.log('Route #' + Backbone.history.fragment + ' triggered.');
      ContactsApp.List.Controller.listContacts();
    },
    showContact: function(id){
      ContactsApp.Show.Controller.showContact(id);
    }
  };
  ContactManager.on('contacts:list', function(){
    ContactManager.navigate('#contacts');
    API.listContacts();
  })
  ContactManager.addInitializer(function(){
    new ContactsApp.Router({
      controller: API
    });
  });
});