ContactManager.module('ContactsApp.Show', function(Show, ContactManager, Backbone, Marionette, $, _) {
  Show.Controller = {
    showContact: function(m){
      var contactView = new Show.Contact({
        model: m
      });
      ContactManager.mainRegion.show(contactView);
    }
  }
});